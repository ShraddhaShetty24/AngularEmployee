import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Models/Employee';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-crudform',
  templateUrl: './crudform.component.html',
  styleUrls: ['./crudform.component.css']
})
export class CrudformComponent implements OnInit {

  //gettig  details from frontend and storing in this list and through interpolation displaying in html
  EmployeeList:any=[];

  //creating service object in the constructor(dependency injection)
  constructor(public crudservice:CrudService) { }

  updateData:any;
  

  //when I click update-this method is triggered (to get the id for update which is passed in the update method)
  getData(data:any){
    this.updateData=data;
  }

  //empployee object
  employee:Employee={
    id: 0,
    name: '',
    address: '',
    phone: 0,
    country: ''
  }

  //read
  listEmployees(){
    try{
    this.crudservice.list().subscribe((response)=>{
      this.EmployeeList=response;
    },(error=>{

    }));}
    catch(Exception){
      console.log("No elements found");
    }
  }
  
  //on initialization of the page
  ngOnInit(): void {
    this.listEmployees();
  }

  //create
  createEmployee(){
    this.crudservice.create(this.employee).subscribe((response)=>{
      this.listEmployees();
    },(error=>{

    }));
  }

  //delete
  deleteEmployee(id:any){
    this.crudservice.delete(id).subscribe((response)=>{
      this.listEmployees();
    },(error=>{

    }));
  }

  //update
  updateEmployee(){
    this.crudservice.update(this.updateData.id,this.employee).subscribe((response)=>{
      this.listEmployees();
    },(error=>{

    }));
  }

}
