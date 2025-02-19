import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { PcBuildDataService } from '../pc-build-data.service';
import { IpcComponent } from '../interfaces/ipc-component';

@Component({
  selector: 'app-pc-builds-new',
  templateUrl: './pc-builds-new.component.html',
  standalone: false,
  styleUrls: ['./pc-builds-new.component.css']
})
export class PcBuildsNewComponent implements OnInit {
  myForm: FormGroup;
  errorMessage: string = '';
  components: any[] = [];
  gpus: IpcComponent[] = [];
  cpus: IpcComponent[] = [];
  motherboards: IpcComponent[] = [];
  memories: IpcComponent[] = [];
  storages: IpcComponent[] = [];
  cases: IpcComponent[] = [];
  psus: IpcComponent[] = [];
  selectedImage: File | null = null;

  constructor(
    private ruta: ActivatedRoute,
    private pcBuildService: PcBuildDataService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.myForm = new FormGroup({});
  }

  ngOnInit() {
    
    this.myForm = this.formBuilder.group({
      name: [null],
      cpu: [null],
      gpu: [null],
      motherboard: [null],
      memory: [null],
      storage: [null],
      case: [null],
      psu: [null],
    });
    this.getAllComponents();
    console.log(this.gpus);
  }

  onImageSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
    }
  }

  onSubmit(build: any) {
    this.components = [];
    
    if (build.cpu) this.components.push(build.cpu);
    if (build.gpu) this.components.push(build.gpu);
    if (build.motherboard) this.components.push(build.motherboard);
    if (build.memory) this.components.push(build.memory);
    if (build.storage) this.components.push(build.storage);


    const formData = new FormData();
    formData.append('name', build.name);
    formData.append('components', JSON.stringify(this.components));
    
    if (this.selectedImage) {
      formData.append('image', this.selectedImage);
    }

    this.pcBuildService.createBuild(formData).subscribe({
      next: () => this.router.navigate(['builds-list']),
      error: (error: HttpErrorResponse) => {
        this.errorMessage = error.error.message;
        console.error('Error:', error);
      }
    });
  }

  getAllComponents() {
    this.pcBuildService.getAllComponents().subscribe({
      next: (data: any) => {
       this.components = data.body;
       this.gpus = this.components.filter((component: IpcComponent) => component.type === 'GPU');
        this.cpus = this.components.filter((component: IpcComponent) => component.type === 'CPU');
        this.motherboards = this.components.filter((component: IpcComponent) => component.type === 'Motherboard');
        this.memories = this.components.filter((component: IpcComponent) => component.type === 'RAM');
        this.storages = this.components.filter((component: IpcComponent) => component.type === 'Storage');
        this.cases = this.components.filter((component: IpcComponent) => component.type === 'Case');
        this.psus = this.components.filter((component: IpcComponent) => component.type === 'PSU');
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = error.message;
        console.error('Error:', error);
      }
    });
  }
}
