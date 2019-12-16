import { Injectable } from '@angular/core';
import { Owner } from './owner.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  formData : Owner;
  list : Owner[]; 
  readonly rootURL = "https://localhost:44378/api"

  constructor(private http : HttpClient) { }

  postOwner(formData : Owner){
    return this.http.post(this.rootURL+'/Owner/', formData);
  }
  refreshList(){
    this.http.get(this.rootURL+'/Owner/')
    .toPromise().then(res => this.list = res as Owner[])
  }
  putOwner(formData : Owner){
    return this.http.put(this.rootURL+'/Owner/'+formData.OwnerID, formData);
  }
  deleteOwner(id : number){
    return this.http.delete(this.rootURL+'/Owner/'+id);
  }
}
