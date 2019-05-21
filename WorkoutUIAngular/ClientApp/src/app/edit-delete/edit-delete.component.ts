import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { CategoriesService } from '../categories.service';
import { Category } from '../category';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-edit-delete',
    templateUrl: './edit-delete.component.html',
    styleUrls: ['./edit-delete.component.css']
})

export class EditDeleteComponent implements OnInit{


  public onclick: boolean = false;
  fg: FormGroup;

  @Input() AddName: Category;
  @Output() EditAdded = new EventEmitter<Category>();
  @Output() Deleted = new EventEmitter<Category>();
  constructor(private fb: FormBuilder, private service: CategoriesService, private currentRoute:ActivatedRoute) {

  }

  ngOnInit() {
    this.fg = this.fb.group({
      catagoryname: new FormControl(this.AddName.categoryname, [Validators.required, Validators.minLength(3)])
    });
    let id = this.currentRoute.snapshot.paramMap.get('categoryid');
             }

  get f() {
    return this.fg.controls;
  }

  save(frm: NgForm) {
    if (frm.valid) {
      let cat: Category = new Category(frm.value.categoryid, frm.value.categoryname);
      this.service.update(cat).subscribe(
        (data) => alert("updated"),
        (error) => console.log(error)
      );

    }
                   }

  public enable(): void {
    this.f.catagoryname.enable();
    this.onclick = true;
                      }

  public disable(): void {
    this.f.catagoryname.disable();
    this.onclick = false;
                         }

  
}
