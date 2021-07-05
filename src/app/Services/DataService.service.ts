import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
// import breed from '../form/form.component'
@Injectable({
  providedIn: 'root'
})
export class DataService {
data;
breed_name;
photoLink=new Subject();
  constructor(private http: HttpClient) { }
 
  getDogByBreed(breed):Observable<any>
  {
    this.breed_name=breed;
 
    return this.http.get(`https://dog.ceo/api/breed/${breed}/images/random`)
  }

  getPhotoLink(){
    return this.photoLink;
  }
  setBreedName() {
    this.breed_name = null;
  }

  authFunction()
{
  if(this.breed_name)
  
    return true;
    else
    return false;
}
}
