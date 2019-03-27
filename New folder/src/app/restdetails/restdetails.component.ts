import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-restdetails',
  templateUrl: './restdetails.component.html',
  styleUrls: ['./restdetails.component.css']
})
export class RestdetailsComponent implements OnInit {

  title="Foodz-In"
  
  public restname
  public rimg
  public username
  public unumber
  public dnt
  
  constructor(private arouter :ActivatedRoute,private router : Router) { }

  ngOnInit() {
    let name= this.arouter.snapshot.paramMap.get('name');
    this.restname=name

    let imageUrl= this.arouter.snapshot.paramMap.get('imageUrl');
    this.rimg=imageUrl
    
  }

  about(){
   
    this.router.navigate(['/aboutus']);

  }
  
  booked = false;

  onSubmit() { 
    
    if(this.username.isEmpty && this.unumber.isEmpty && this.dnt.isEmpty){

      alert("Please enter valid details!")
  }
  else
       {
         
      this.booked = true;
      alert("Your table is booked")
      this.router.navigate(['/']);
       }

}

  newuser(){
    this.username=''
    this.unumber=''
  }

}
