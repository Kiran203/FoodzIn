import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodzIn'

  constructor(private router: Router) { }

  ngOnInit() {}

  login(){
   
    this.router.navigate(['/loginpage']);

  }

  // goToRestaurants(rest){

  //   this.router.navigate(['/restaurants',rest.name]);

  // }

  about(){
   
    this.router.navigate(['/aboutus']);

  }

}
