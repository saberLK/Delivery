import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { MatFileUploadModule } from 'angular-material-fileupload';


import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import {

  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { AuthService } from './services/auth.service';
import { UrlPermission } from './services/url.permission';
import { UserService } from './services/user.service';
import {InfosCnxService } from './services/infoscnx.service';
import { DeliveryService } from './services/delivery.service';
import { ActivityService } from './services/activity.service';
import { MilestoneService } from './services/milestone.service';
import {ChartsModule} from '@progress/kendo-angular-charts';

import 'hammerjs';
import { EnvironementService } from './services/environement.service';
import { ProjectService } from './services/project.service';
import { VersionService } from './services/version.service';

// import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { UploadService } from './services/upload.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatNativeDateModule} from '@angular/material';
import { RoleService } from './services/role.service';
















@NgModule({
  imports: [
//  Ng4LoadingSpinnerModule.forRoot(),
 HttpClientModule,
 MatNativeDateModule,
    BrowserAnimationsModule,
    FormsModule,BrowserModule,
    HttpModule,
    ChartsModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,  MatAutocompleteModule,
    MatFileUploadModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
 
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,



  

   
   
  
   

  
    
  
  



  


 

 

    

  ],
  providers: [AuthService,UrlPermission,UserService,
    InfosCnxService,DeliveryService,ActivityService
  ,ActivityService,MilestoneService,EnvironementService,ProjectService,VersionService,UploadService,RoleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
