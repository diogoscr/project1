import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddWarningComponent } from './components/add-warning/add-warning.component';
import { WarningDetailsComponent } from './components/warning-details/warning-details.component';
import { WarningsListComponent } from './components/warnings-list/warnings-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'warnings', pathMatch: 'full'},
  {path: 'warnings', component: WarningsListComponent},
  {path: 'warnings/:id', component: WarningDetailsComponent},
  {path: 'add', component: AddWarningComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
