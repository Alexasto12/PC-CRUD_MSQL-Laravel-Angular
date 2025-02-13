import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IpcBuild } from './interfaces/ipc-build';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PcBuildDataService {

  constructor(private _http:HttpClient) { }

  public getDades(): Observable<HttpResponse<IpcBuild[]>> {
    return this._http.get<IpcBuild[]>('api/builds',    { observe: 'response' });
  }
}
