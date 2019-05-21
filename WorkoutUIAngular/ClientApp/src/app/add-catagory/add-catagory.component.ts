import { Component, Output, OnInit,EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { CategoriesService } from '../categories.service';
import { Category } from '../category';


@Component({
    selector: 'app-add-catagory',
  templateUrl: './add-catagory.component.html',

    styleUrls: ['./add-catagory.component.css']
})

export class AddCatagoryComponent implements OnInit{
  fg: FormGroup;

  @Output() CatagoryAdded = new EventEmitter<string>();
  constructor(private fb: FormBuilder, private service: CategoriesService) {

  }

  ngOnInit() {
    this.fg = this.fb.group({
      catagoryname: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  get f() {
    return this.fg.controls;
  }

  saveForm(fg: NgForm) {
    if (fg.valid) {
      let cat: Category = new Category(fg.value.catagoryid, fg.value.catagoryname);
      this.service.save(cat).subscribe(
        (data)=>alert('added'),
        (error)=>console.log(error)

      );
   
    }
  }
}
