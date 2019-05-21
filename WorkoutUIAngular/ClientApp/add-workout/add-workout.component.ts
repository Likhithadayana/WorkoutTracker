import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { CategoriesService } from '../src/app/categories.service';
import { Category } from '../src/app/category';



@Component({
    selector: 'app-add-workout',
    templateUrl: './add-workout.component.html',
    styleUrls: ['./add-workout.component.css']
})

export class AddWorkoutComponent {

  count: number = 0;
  fg: FormGroup;
  catagory: Category[];
  constructor(private fb: FormBuilder, private service: CategoriesService) {
    this.fg = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z\s]{3,20}')]),
      note: new FormControl('',[ Validators.required, Validators.pattern('[a-zA-Z\s]{3,20}')]),
      calory: new FormControl('', [Validators.required]),
      catagory: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.service.getAll().subscribe(
    (data) => this.catagory = data,
    (error) => alert('Error')
  );
  }



  increment() {
    this.count = this.count + 0.1;
  }

  decrement() {
    if (this.count > 0) {
      this.count = this.count - 0.1;
    }
    else {
      this.count = 0;
    }
  } 



  get f() {
    return this.fg.controls;
  }

  saveData(frm: NgForm) {
   
    console.log(frm.value);
  }
}




