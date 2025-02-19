import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { PcComponentDataService } from '../pc-component-data.service';

@Component({
  selector: 'app-pc-components-new',
  templateUrl: './pc-components-new.component.html',
  standalone: false,
  styleUrls: ['./pc-components-new.component.css']
})
export class PcComponentsNewComponent {
  myForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private pcComponentService: PcComponentDataService, 
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.myForm = new FormGroup({});
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: [null],
      price: [null],
      type: [null]
    });
  }

  onSubmit(component: any) {
    const formData = new FormData();
    formData.append('name', component.name);
    formData.append('price', component.price);
    formData.append('type', component.type);

    this.pcComponentService.createPcComponent(formData).subscribe({
      next: (data: any) => {
        return this.router.navigate(['components-list']);
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = error.error.message;
        console.error('Error:', error);
        return this.errorMessage;
      }
    });
  }
}
