import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../services/spaceXService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit{

  public data: any = [];

  constructor(private service: SpaceXService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((res) => {
      this.data = res.data;
    })
  }

  public buttonList: any[] =
    [
      {
        'name': 2006
      },
      {
        'name': 2008
      },
      {
        'name': 2010
      },
      {
        'name': 2012
      },
      {
        'name': 2014
      },
      {
        'name': 2016
      },
      {
        'name': 2018
      },
      {
        'name': 2020
      },
    ];

  public buttonList1: any[] =
    [
      {
        'name': 2007
      },
      {
        'name': 2009
      },
      {
        'name': 2011
      },
      {
        'name': 2013
      },
      {
        'name': 2015
      },
      {
        'name': 2017
      },
      {
        'name': 2019
      },
    ];

  launchyearFilter(year: any) {
    this.service.getSpaceXLaunchData(year).subscribe((res) => {
      this.data = res;
    });
  }

  launchSucessFilter(value:any) {
    this.service.getSpaceXSuccessData(value).subscribe((res) => {
      this.data = res;
    });
  }

  landFilter(value: any) {
    this.service.getSpaceXLandData(value).subscribe((res) => {
      this.data = res;
    });
  }
}
 
