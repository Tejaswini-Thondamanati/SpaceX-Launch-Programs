import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class SpaceXService {
  constructor(private http: HttpClient) { }

  public getSpaceXData(): Observable<any> {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100');
  }

  public getSpaceXLaunchData(year: any): Observable<any> {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=' + year);
  }

  public getSpaceXLandData(land: any): Observable<any> {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=' + land)
  }

  public getSpaceXSuccessData(launch: any): Observable<any> {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true' + launch)
  }
}
