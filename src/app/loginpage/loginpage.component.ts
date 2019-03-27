import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { Hero } from '../hero';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  title="Foodz-In"
  citys=['Pune','Mumbai','Delhi','Kolkata','Chenai','Banglore'] 
  
  constructor(private arouter :ActivatedRoute,private router: Router) { }

  ngOnInit() {
  }
 

  home()
  {
   this.router.navigate(['/']);

  }
  about(){
   
    this.router.navigate(['/aboutus']);

  }
  
  model = new Hero('', '', '', '', '', '','');
  amodel = new Hero('', '', '', '', '', '','');

  submitted = false;

  onSubmit() { 
    
    if(this.model.uname == 'admin' && this.model.pass=='admin'){

        this.submitted = true;
        alert("Login Successful")
        this.router.navigate(['/']);
    }
    else
         alert("Username & password you entered is incorrect!")
  
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newlogin() {
    this.model = new Hero('', '', '', '', '', '','');
  }

  newacc() {
    this.amodel = new Hero('', '', '', '', '', '','');
  }

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }


}
