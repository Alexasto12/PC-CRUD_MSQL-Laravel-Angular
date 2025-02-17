import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IpcComponent } from './interfaces/ipc-component';

@Injectable({
  providedIn: 'root'
})
export class PcComponentDataService {
  
  constructor(private _http:HttpClient) { }

  public getData(): Observable<HttpResponse<IpcComponent[]>>  {
  return this._http.get<IpcComponent[]>('api/components',    { observe: 'response' });
  }
  public getDataById(id: number): Observable<IpcComponent> {
    return this._http.get<IpcComponent>('api/components/' + id);
  }
  public deleteData(id: number): Observable<any> {
    return this._http.delete('api/components/' + id);
  }
  public createPcComponent(pcComponent: IpcComponent | FormData): Observable<IpcComponent> {
    return this._http.post<IpcComponent>('api/components', pcComponent);
  }
  public putData(pcComponent: IpcComponent): Observable<IpcComponent> {
    return this._http.put<IpcComponent>('api/components/' + pcComponent.id, pcComponent);
  }

}
