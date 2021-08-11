import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatComponentsModule } from './mat-components.module'; // angular materlias

import { DialogResultComponent } from './dialog-result/dialog-result.component'
import { TransformerComponent } from './transformer/transformer.component';

@NgModule({
  declarations: [
    AppComponent,
    TransformerComponent,
    DialogResultComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogResultComponent]
})
export class AppModule { }
