import { Component } from '@angular/core';
import { PcBuildDataService } from '../pc-build-data.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pc-builds-new',
  standalone: false,
  templateUrl: './pc-builds-new.component.html',
  styleUrl: './pc-builds-new.component.css'
})
export class PcBuildsNewComponent {
  myForm: FormGroup;
  errorMessage: string = '';
  constructor(private pcBuildService: PcBuildDataService, private router: Router,  private formBuilder: FormBuilder) { 
    this.myForm = new FormGroup({
    });

}
ngOnInit() {
  this.myForm = this.formBuilder.group({
    name: [null],
    type: [null],
    price: [null],
    image: [null]
  });
}
onFileSelect(event: any) {
  const file: File = event.target.files[0];
  this.myForm.get('imatge')?.setValue(file);
}

onSubmit(build: any) {
 const formData = new FormData();
 formData.append('name', build.nom);
 formData.append('cognoms', build.cognoms);
 formData.append('price', build.cognoms);
 formData.append('image', this.myForm.get('image')?.value);
  this.pcBuildService.createBuild(formData).subscribe({
    next: (data: any) => {
     return this.router.navigate(['build-list']);
    
    },
    error: (error: HttpErrorResponse) => {
      this.errorMessage = error.message;
      console.error('Error:', error);
      return this.errorMessage;
    }
  });
}
}
