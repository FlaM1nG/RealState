import { Injectable } from '@angular/core';
import { Property } from './property..model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  formData : Property;
  list : Property[]; 
  readonly rootURL = "https://localhost:44378/api"

  constructor(private http : HttpClient) { }

  postProperty(formData : Property){
    return this.http.post(this.rootURL+'/Property/', formData);
  }
  refreshList(){
    this.http.get(this.rootURL+'/Property/')
    .toPromise().then(res => this.list = res as Property[])
  }
  putProperty(formData : Property){
    return this.http.put(this.rootURL+'/Property/'+formData.PropertyID, formData);
  }
  deleteProperty(id : number){
    return this.http.delete(this.rootURL+'/Property/'+id);
  }
}
