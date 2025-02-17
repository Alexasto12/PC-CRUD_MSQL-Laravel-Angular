import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IpcBuild } from './interfaces/ipc-build';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PcBuildDataService {

  constructor(private _http:HttpClient) { }

  public getData(): Observable<HttpResponse<IpcBuild[]>> {
    return this._http.get<IpcBuild[]>('api/builds',    { observe: 'response' });
  }
  public getDadesById(id: number): Observable<IpcBuild> {
    return this._http.get<IpcBuild>('api/builds/' + id);
  }
  public deleteDades(id: number): Observable<any> {
    return this._http.delete('api/builds/' + id);
  }
  public createBuild(pcBuild: IpcBuild | FormData): Observable<IpcBuild> {
    return this._http.post<IpcBuild>('api/builds', pcBuild);
  }
  public putDades(pcBuild: IpcBuild): Observable<IpcBuild> {
    return this._http.put<IpcBuild>('api/builds/' + pcBuild.id, pcBuild);
  }
}
