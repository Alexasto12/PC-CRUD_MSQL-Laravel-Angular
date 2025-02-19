import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IpcComponent } from '../interfaces/ipc-component';
import { PcComponentDataService } from '../pc-component-data.service';

@Component({
  selector: 'app-pc-components-edit',
  standalone: false,
  templateUrl: './pc-components-edit.component.html',
  styleUrls: ['./pc-components-edit.component.css']
})
export class PcComponentsEditComponent {
  id: string | null;
  myForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private pcComponentService: PcComponentDataService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.myForm = new FormGroup({});
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: [''],
      price: [''],
      type: ['']
    });

    if(this.id) {
      this.pcComponentService.getDataById(this.id).subscribe({
        next: (data: IpcComponent) => {
          this.myForm.patchValue({
            name: data.name,
            price: data.price,
            type: data.type
          });
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage = error.message;
          console.error('Error:', error);
        }
      });
    }
  }

  onSubmit(component: any) {
    const updatedComponent: IpcComponent = {
      id: this.id? this.id : '',
      name: component.name,
      price: component.price,
      type: component.type
    };

    this.pcComponentService.putData(updatedComponent,this.id).subscribe({
      next: () => this.router.navigate(['components-list']),
      error: (error: HttpErrorResponse) => {
        this.errorMessage = error.error.message;
        console.error('Error:', error);
      }
    });
  }
}
