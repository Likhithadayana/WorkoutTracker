import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoriesService } from '../categories.service';

@Component({
    selector: 'app-list-catagory',
    templateUrl: './list-catagory.component.html',
    styleUrls: ['./list-catagory.component.css']
})
/** ListCatagory component*/
export class ListCatagoryComponent implements OnInit{
  searchterm: string = '';
  catagory: Category[];
  constructor(private service: CategoriesService) {}

  ngOnInit() {
    this.service.getAll().subscribe(
      (data) => this.catagory=data,
      (error)=>alert('error')
    )
  }

  Savecategory($event) {
    console.log($event);
     this.service.save(new Category(0, $event)).subscribe(
        (data) => alert('added'),
        (error) => alert('Failed to add')
      );
     
  }


  EditCategory($event) {
    this.service.update($event).subscribe(
      (data) => alert('updated'),
      (error) => alert('failed to update')
    );
  }
}
