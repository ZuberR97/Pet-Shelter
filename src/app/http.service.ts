import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPets();
  }
  getPets(){
    return this._http.get('/api/pets');
  }
  createNew(pet){
    return this._http.post('/api/create', pet);
  }
  update(pet, id){
    console.log(id);
    return this._http.put('/api/pets/' + id, pet);
  }
  delete(id){
    return this._http.delete('/api/pets/' + id);
  }
  getOnePet(id){
    return this._http.get('/api/pets/' + id);
  }
}