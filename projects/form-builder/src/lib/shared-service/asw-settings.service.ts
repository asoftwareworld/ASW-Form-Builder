import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ASWSettingsService {
    previewData: any[]=[];
    constructor(private http: HttpClient) {}

    public getJSON(): Observable<any> {
        return this.http.get('projects/from-builder/src/assets/data/basic-control.json');
    }


}