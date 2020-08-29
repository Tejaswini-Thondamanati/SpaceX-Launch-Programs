import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SpaceXService } from './spaceXService';

@Injectable()
export class SpaceXResolver implements Resolve<any> {
    constructor(private service: SpaceXService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.service.getSpaceXData();
    }
}
