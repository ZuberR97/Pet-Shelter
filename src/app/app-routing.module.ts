import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: 'pets',component: HomeComponent },
  {path: 'pets/new',component: CreateComponent },
  {path: 'pets/:id/edit',component: EditComponent },
  {path: 'pets/:id',component: ViewComponent },
  {path: "**", redirectTo: '/pets'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
