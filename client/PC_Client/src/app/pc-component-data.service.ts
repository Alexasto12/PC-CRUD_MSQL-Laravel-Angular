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
}
