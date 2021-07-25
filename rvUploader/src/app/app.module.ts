import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortDirective } from './directive/sort.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SortDirective,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
