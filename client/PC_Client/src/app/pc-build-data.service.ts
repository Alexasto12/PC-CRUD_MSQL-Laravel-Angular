import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IpcBuild } from './interfaces/ipc-build';
import { Observable } from 'rxjs';
import { IpcComponent } from './interfaces/ipc-component';

@Injectable({
  providedIn: 'root'
})
export class PcBuildDataService {

  constructor(private _http:HttpClient) { }

  public getData(): Observable<HttpResponse<IpcBuild[]>> {
    return this._http.get<IpcBuild[]>('api/builds',    { observe: 'response' });
  }
  public getDadesById(id: any): Observable<HttpResponse<IpcBuild>> {
    return this._http.get<IpcBuild>('api/builds/' + id, { observe: 'response' });
  }
  public deleteBuild(id: string): Observable<any> {
    return this._http.delete('api/builds/' + id);
  }
  public createBuild(formData: FormData): Observable<any> {
    return this._http.post('api/builds', formData);
  }
  public editBuild(formData: FormData, id: any): Observable<any> {
    return this._http.post(`api/builds/${id}`, formData);
  }

public getAllComponents(): Observable<HttpResponse<IpcComponent[]>>  {
  return this._http.get<IpcComponent[]>('api/components',    { observe: 'response' });
  }
 
}
