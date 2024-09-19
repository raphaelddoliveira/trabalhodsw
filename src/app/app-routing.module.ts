import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { SuccessPageComponent } from './page2/page2.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'page2', component: SuccessPageComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
