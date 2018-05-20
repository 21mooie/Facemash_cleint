import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import {MatButtonModule, MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { MessagesComponent } from './messages.component'
import { RegisterComponent } from './register.component';

const routes = [
  {path: 'register', component: RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent, MessagesComponent , RegisterComponent
  ],
  imports: [
    BrowserModule, HttpModule, MatButtonModule, MatCardModule, 
    MatToolbarModule, RouterModule.forRoot(routes),
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
