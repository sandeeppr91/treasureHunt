import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SrcCodeComponent } from './src-code/src-code.component';
import { CryptComponent } from './crypt/crypt.component';
import { WebdingComponent } from './webding/webding.component';

const routes: Routes = [
     { path: 'clue1', component: SrcCodeComponent },
     { path: 'clue2', component: CryptComponent },
     { path: 'clue3', component: WebdingComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
