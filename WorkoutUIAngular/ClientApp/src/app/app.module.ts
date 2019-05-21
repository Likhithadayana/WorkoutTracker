import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { CategoriesService } from './categories.service';
import { ListCatagoryComponent } from './list-catagory/list-catagory.component';
import { EditDeleteComponent } from './edit-delete/edit-delete.component';
import { AddCatagoryComponent } from './add-catagory/add-catagory.component';
import { FilterPipe } from './SearchCustomPipe'
import { AddWorkoutComponent } from '../../add-workout/add-workout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ListCatagoryComponent,
    EditDeleteComponent,
    AddCatagoryComponent,
    FilterPipe,
    AddWorkoutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'List-catagory', component: ListCatagoryComponent },
      { path: 'edit-delete component', component: EditDeleteComponent }
     
    ])
  ],
  providers: [CategoriesService],
  bootstrap: [AddWorkoutComponent]
})
export class AppModule { }
