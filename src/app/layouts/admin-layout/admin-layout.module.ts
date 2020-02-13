import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,

} from '@angular/material';

import { ListUsersComponent } from '../../list-users/list-users.component';

import { InfosConnectionsComponent } from '../../infos-connections/infos-connections.component';
import {MatSelectModule} from '@angular/material/select';
import { DeliveryComponent } from '../../delivery/delivery.component';

import { ActivitiesComponent } from '../../activities/activities.component';
import { DeliverySettingsComponent } from '../../delivery-settings/delivery-settings.component';
import { AddActivityComponent } from '../../add-components/add-activity/add-activity.component';
import { AddMilestoneComponent } from '../../add-components/add-milestone/add-milestone.component';
import { ListActivitiesComponent } from '../../list-components/list-activities/list-activities.component';
import { AddDeliveryComponent } from '../../add-components/add-delivery/add-delivery.component';
import { ListMilestonesComponent } from '../../list-components/list-milestones/list-milestones.component';
import {ChartsModule} from '@progress/kendo-angular-charts';
import { AddEnvironementComponent } from '../../add-components/add-environement/add-environement.component';
import { ListEnvironementsComponent } from '../../list-components/list-environements/list-environements.component';
import { ListDeliveriesComponent } from '../../list-components/list-deliveries/list-deliveries.component';
import { ListProjectsComponent } from '../../list-components/list-projects/list-projects.component';
import { ListVersionsComponent } from '../../list-components/list-versions/list-versions.component';
import { AddProjectComponent } from '../../add-components/add-project/add-project.component';
import { AddVersionComponent } from '../../add-components/add-version/add-version.component';
import { EditActivityComponent } from '../../edit-components/edit-activity/edit-activity.component';
import { EditMilestoneComponent } from '../../edit-components/edit-milestone/edit-milestone.component';
import { EditDeliveryComponent } from '../../edit-components/edit-delivery/edit-delivery.component';
import { EditEnvironementComponent } from '../../edit-components/edit-environement/edit-environement.component';
import { EditVersionComponent } from '../../edit-components/edit-version/edit-version.component';
import { EditProjectComponent } from '../../edit-components/edit-project/edit-project.component';
import { AddInfoscnxComponent } from '../../add-components/add-infoscnx/add-infoscnx.component';
import { AddWebComponent } from '../../add-components/add-web/add-web.component';
import { AddBaseComponent } from '../../add-components/add-base/add-base.component';
import { AddAppcsComponent } from '../../add-components/add-appcs/add-appcs.component';
import { AddAppuxComponent } from '../../add-components/add-appux/add-appux.component';
import { AddUnixComponent } from '../../add-components/add-unix/add-unix.component';
import { EditWebComponent } from '../../edit-infoscnx/edit-web/edit-web.component';
import { EditBaseComponent } from '../../edit-infoscnx/edit-base/edit-base.component';
import { EditAppcsComponent } from '../../edit-infoscnx/edit-appcs/edit-appcs.component';
import { EditAppuxComponent } from '../../edit-infoscnx/edit-appux/edit-appux.component';
import { EditUnixComponent } from '../../edit-infoscnx/edit-unix/edit-unix.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
@NgModule({
  imports: [
    MatFileUploadModule,
    MatDatepickerModule,
    CommonModule,
    HttpClientModule,
    ChartsModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,MatCardModule,MatIconModule,MatFormFieldModule,
   
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
InfosConnectionsComponent,
    ListUsersComponent,
    DeliveryComponent,
ActivitiesComponent,
DeliverySettingsComponent,
AddActivityComponent,
AddMilestoneComponent,
ListActivitiesComponent,
AddDeliveryComponent,
ListMilestonesComponent,
AddEnvironementComponent,
ListEnvironementsComponent,
ListDeliveriesComponent,
ListProjectsComponent,
ListVersionsComponent,
AddProjectComponent,
AddVersionComponent,
EditActivityComponent,
EditMilestoneComponent,
EditDeliveryComponent,
EditEnvironementComponent,
EditVersionComponent,
EditProjectComponent,
AddInfoscnxComponent,
AddWebComponent,
AddBaseComponent,
AddAppcsComponent,
AddAppuxComponent,
AddUnixComponent,
EditWebComponent,
EditBaseComponent,
EditAppcsComponent,
EditAppuxComponent,
EditUnixComponent,

  ],

})

export class AdminLayoutModule {}
