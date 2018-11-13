import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBus } from '../interfaces/bus';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class BusService {
  private _id: number;
  constructor(private http: HttpClient) { }

  getBuses(): Observable<IBus[]> {
    return this.http.get<IBus[]>(API_URL + '/bus');
  }
  
  deleteBus(id: number): Observable<IBus> {
    return this.http.delete<IBus>(API_URL + '/bus'+"/"+id);
  }

  //returns a user searched by an id. this is used when you try to edit a user
  getByIDBus(id): Observable<IBus> {
    return this.http.get<IBus>(API_URL + '/bus'+"/"+id);
  }
 

  addBus(numBus,availability): Observable<IBus>{
    let obj = {
      numBus: numBus,
      availability: availability
    }
    return this.http.post<IBus>(API_URL + '/bus/add', obj);
  }

  updateBus(numBus,availability, id): Observable<IBus> {
    let obj = {
      numBus: numBus,
      availability: availability
    };
    return this.http.put<IBus>(API_URL + '/bus/edit/'+id, obj);
  }



}

