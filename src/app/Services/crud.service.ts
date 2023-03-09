import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {


  //after json-watch-->  generated url (fake api)
  api_url:string='http://localhost:3000/Employee';

  
  //http client object
  constructor(public http:HttpClient) { }

  //read
  list(){
    return this.http.get(`${this.api_url}`);
  }

  //create
  create(data:any):Observable<any>{
    return this.http.post(`${this.api_url}`,data).pipe(
      catchError(this.handleError)
    )
  }

  //delete
  delete(id:any):Observable<any>{
    return this.http.delete(`${this.api_url}/${id}`).pipe(
      catchError(this.handleError)
    )
  }
  //update
  update(id:any,data:any):Observable<any>{
    return this.http.put(`${this.api_url}/${id}`,data).pipe(
      catchError(this.handleError)
    )
  }

  handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Please correct the error:',error.error.message);
    }else{
      console.error(`Backend returned code ${error.status}`+
      `body was : ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
    
  };
 

}
