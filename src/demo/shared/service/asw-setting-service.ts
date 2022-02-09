/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AswSettingsService {
    previewData: any[] = [];
    constructor(private http: HttpClient) { }

    public getJSON(): Observable<any> {
        return this.http.get('assets/data/basic-control.json');
    }
}
