import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LetModule, PushModule } from '@ngrx/component';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    LetModule,
    PushModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
