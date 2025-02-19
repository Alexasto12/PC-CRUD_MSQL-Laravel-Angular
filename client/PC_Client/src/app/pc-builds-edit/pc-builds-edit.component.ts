import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IpcComponent } from '../interfaces/ipc-component';
import { PcBuildDataService } from '../pc-build-data.service';

@Component({
  selector: 'app-pc-builds-edit',
  standalone: false,
  templateUrl: './pc-builds-edit.component.html',
  styleUrl: './pc-builds-edit.component.css'
})
export class PcBuildsEditComponent {
  id: string |null | undefined;
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

  constructor(
    private ruta : ActivatedRoute, 
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
      motherboard:[null],
      memory: [null],
      storage: [null],
      case: [null],
      psu: [null],
    });
   this.id = this.ruta.snapshot.paramMap.get('id');

   this.pcBuildService.getDadesById(this.id).subscribe({
    next: (data: any) => {
      this.myForm.patchValue({
        name: data.body.name,
        cpu: data.body.components.find((component: IpcComponent) => component.type === 'CPU')?.id,
        gpu: data.body.components.find((component: IpcComponent) => component.type === 'GPU')?.id,
        motherboard: data.body.components.find((component: IpcComponent) => component.type === 'Motherboard')?.id,
        memory: data.body.components.find((component: IpcComponent) => component.type === 'RAM')?.id,
        storage: data.body.components.find((component: IpcComponent) => component.type === 'Storage')?.id,
        case: data.body.components.find((component: IpcComponent) => component.type === 'Case')?.id,
        psu: data.body.components.find((component: IpcComponent) => component.type === 'PSU')?.id 
      });
    },
    error: (error: HttpErrorResponse) => {
      this.errorMessage = error.message;
      console.error('Error:', error);
    }
  });  
    this.getAllComponents();
    console.log(this.gpus);
    console.log(this.id);
  }


  

  onSubmit(build: any) {
    this.components = [];
    
    if (build.cpu) this.components.push(build.cpu);
    if (build.gpu) this.components.push(build.gpu);
    if (build.motherboard) this.components.push(build.motherboard);
    if (build.memory) this.components.push(build.memory);
    if (build.storage) this.components.push(build.storage);
    if (build.case) this.components.push(build.case);
    if (build.psu) this.components.push(build.psu);


    const buildData = {
      name: build.name,
      components: this.components
    };

    this.pcBuildService.editBuild(buildData, this.id).subscribe({
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
