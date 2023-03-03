
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { _reducer_ } from "./reducer_file";
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from "./app.component";
import { SubComponent } from "./sub/sub.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ strs: _reducer_ }),
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    SubComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { };