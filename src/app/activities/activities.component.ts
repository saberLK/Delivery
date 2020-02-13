import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Http} from '../../../node_modules/@angular/http';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
activity:any[];
  id_activity :any;

  constructor(private http:Http,private activityService : ActivityService,private router:Router, private route: ActivatedRoute) { 

    this.route.queryParams.subscribe(params => {
      this.id_activity = params["id_activity"]; 

  });
console.log(this.id_activity);

  }

  ngOnInit() {

  }

}

