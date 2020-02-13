import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';


import { ListUsersComponent } from '../../list-users/list-users.component';
import { InfosConnectionsComponent } from '../../infos-connections/infos-connections.component';
import { DeliveryComponent } from '../../delivery/delivery.component';
import { ActivitiesComponent } from '../../activities/activities.component';
import { DeliverySettingsComponent } from '../../delivery-settings/delivery-settings.component';
import { AddActivityComponent } from '../../add-components/add-activity/add-activity.component';
import { AddMilestoneComponent } from '../../add-components/add-milestone/add-milestone.component';
import { ListActivitiesComponent } from '../../list-components/list-activities/list-activities.component';
import { AddDeliveryComponent } from '../../add-components/add-delivery/add-delivery.component';
import { ListMilestonesComponent } from '../../list-components/list-milestones/list-milestones.component';
import { AddEnvironementComponent } from '../../add-components/add-environement/add-environement.component';
import { ListEnvironementsComponent } from '../../list-components/list-environements/list-environements.component';
import { ListDeliveriesComponent } from '../../list-components/list-deliveries/list-deliveries.component';
import { ListVersionsComponent } from '../../list-components/list-versions/list-versions.component';
import { ListProjectsComponent } from '../../list-components/list-projects/list-projects.component';
import { AddProjectComponent } from '../../add-components/add-project/add-project.component';
import { AddVersionComponent } from '../../add-components/add-version/add-version.component';
import { EditActivityComponent } from '../../edit-components/edit-activity/edit-activity.component';
import { EditMilestoneComponent } from '../../edit-components/edit-milestone/edit-milestone.component';
import { EditDeliveryComponent } from '../../edit-components/edit-delivery/edit-delivery.component';
import { EditEnvironementComponent } from '../../edit-components/edit-environement/edit-environement.component';
import { EditProjectComponent } from '../../edit-components/edit-project/edit-project.component';
import { EditVersionComponent } from '../../edit-components/edit-version/edit-version.component';
import { AddInfoscnxComponent } from '../../add-components/add-infoscnx/add-infoscnx.component';
import { AddAppuxComponent } from '../../add-components/add-appux/add-appux.component';
import { AddUnixComponent } from '../../add-components/add-unix/add-unix.component';
import { AddAppcsComponent } from '../../add-components/add-appcs/add-appcs.component';
import { AddWebComponent } from '../../add-components/add-web/add-web.component';
import { AddBaseComponent } from '../../add-components/add-base/add-base.component';
import { EditWebComponent } from '../../edit-infoscnx/edit-web/edit-web.component';
import { EditBaseComponent } from '../../edit-infoscnx/edit-base/edit-base.component';
import { EditAppcsComponent } from '../../edit-infoscnx/edit-appcs/edit-appcs.component';
import { EditAppuxComponent } from '../../edit-infoscnx/edit-appux/edit-appux.component';
import { EditUnixComponent } from '../../edit-infoscnx/edit-unix/edit-unix.component';





export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent},
    { path: 'user-profile',   component: UserProfileComponent  },
    { path: 'infos-connections',          component: InfosConnectionsComponent },
    {path : 'list-users', component: ListUsersComponent},
    {path : 'delivery', component: DeliveryComponent},
    {path : 'activities',component : ActivitiesComponent},
{path : 'delivery-settings',component : DeliverySettingsComponent},

{path: 'add-milestone',component:AddMilestoneComponent},
{path: 'add-activity',component:AddActivityComponent},
{path: 'add-delivery',component:AddDeliveryComponent},
{path: 'add-environement',component:AddEnvironementComponent},
{path: 'add-project',component:AddProjectComponent},
{path: 'add-version',component:AddVersionComponent},
{path: 'add-web',component:AddWebComponent},
{path: 'add-base',component:AddBaseComponent},
{path: 'add-appcs',component:AddAppcsComponent},
{path: 'add-appux',component:AddAppuxComponent},
{path: 'add-unix',component:AddUnixComponent},
{path: 'add-infoscnx',component:AddInfoscnxComponent},

{path: 'list-activities',component:ListActivitiesComponent},
{path: 'list-milestones',component:ListMilestonesComponent},
{path: 'list-environements',component:ListEnvironementsComponent},
{path: 'list-deliveries',component:ListDeliveriesComponent},
{path: 'list-versions',component:ListVersionsComponent},
{path: 'list-projects',component:ListProjectsComponent},

{path: 'edit-activity',component:EditActivityComponent},
{path: 'edit-milestone',component:EditMilestoneComponent}, 
{path: 'edit-delivery',component:EditDeliveryComponent},
{path: 'edit-environement',component:EditEnvironementComponent},
{path: 'edit-project',component:EditProjectComponent},
{path: 'edit-version',component:EditVersionComponent},

{path: 'edit-web',component:EditWebComponent},
{path: 'edit-base',component:EditBaseComponent},
{path: 'edit-appcs',component:EditAppcsComponent},
{path: 'edit-appux',component:EditAppuxComponent},
{path: 'edit-unix',component:EditUnixComponent},


];
