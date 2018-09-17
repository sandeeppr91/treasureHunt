import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SrcCodeComponent } from './src-code/src-code.component';
import { CryptComponent } from './crypt/crypt.component';
import { WebdingComponent } from './webding/webding.component';

@NgModule({
  declarations: [
    AppComponent,
    SrcCodeComponent,
    CryptComponent,
    WebdingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
