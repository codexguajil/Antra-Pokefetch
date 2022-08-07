import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SelectedcardComponent } from './selectedcard/selectedcard.component';

const routes: Routes = [
  {
    path: 'home-component', 
    component: HomeComponent
  },
  {
    path: '', 
    redirectTo: 'home-component', 
    pathMatch: 'full'
  },
  {
    path: 'card/:id', 
    component: SelectedcardComponent,
  },
  {
    path: '**', 
    component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
