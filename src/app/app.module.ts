import { WarningService } from 'src/app/services/warning.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddWarningComponent } from './components/add-warning/add-warning.component';
import { WarningDetailsComponent } from './components/warning-details/warning-details.component';
import { WarningsListComponent } from './components/warnings-list/warnings-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddWarningComponent,
    WarningDetailsComponent,
    WarningsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WarningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
