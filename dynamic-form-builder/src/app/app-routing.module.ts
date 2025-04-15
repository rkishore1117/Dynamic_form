import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';

const routes: Routes = [

  { path: '', redirectTo: 'dynamic-form', pathMatch: 'full' },
  {path:'dynamic-form',component:FormBuilderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
