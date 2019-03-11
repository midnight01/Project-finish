import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatCardModule,
  MatSelectModule,
  MatGridListModule,
  MatIconModule,
  MatRadioModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/home/header/header.component';
import { SideberComponent } from './components/home/sideber/sideber.component';
import { InputComponent } from './components/home/input/input.component';
import { TableComponent } from './components/home/table/table.component';
import { Input2Component } from './components/home/input2/input2.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { Table2Component } from './components/home/table2/table2.component';
import { FollowComponent } from './components/home/follow/follow.component';
import { Follow2Component } from './components/home/follow2/follow2.component';
import { ShowComponent } from './components/home/show/show.component';
import { Table3Component } from './components/home/table3/table3.component';
import { Table4Component } from './components/home/table4/table4.component';
import { Follow3Component } from './components/home/follow3/follow3.component';
import { Input3Component } from './components/home/input3/input3.component';
import { Input4Component } from './components/home/input4/input4.component';



const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'input2', component: Input2Component},
  {path: 'input', component: InputComponent},
  {path: 'table/:date', component: TableComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Table2', component: Table2Component},
  {path: 'Follow', component: FollowComponent},
  {path: 'Follow2/:id', component: Follow2Component},
  {path: 'Follow3', component: Follow3Component},
  {path: 'Show', component: ShowComponent},
  {path: 'Table3/:uid', component: Table3Component},
  {path: 'Table4/:id2/:date', component: Table4Component},
  {path: 'input3', component: Input3Component},
  {path: 'input4', component: Input4Component}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SideberComponent,
    InputComponent,
    TableComponent,
    Input2Component,
    ContactComponent,
    Table2Component,
    FollowComponent,
    Follow2Component,
    ShowComponent,
    Table3Component,
    Table4Component,
    Follow3Component,
    Input3Component,
    Input4Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatTableModule,
    MatSelectModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
