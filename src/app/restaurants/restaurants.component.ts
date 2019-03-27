import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  title="Foodz-In"
  public restname;

  drestaurants=[
    {"id":1,"name":"Frozen Bottle",
    "imageUrl":"/assets/frozen.jpg"},
    {"id":2,"name":"Cake Dior",
    "imageUrl":"/assets/cake.jpg"},
    {"id":3,"name":"Ice Cream Factory",
    "imageUrl":"/assets/factory.jpg"},
    {"id":4,"name":"Cream Stone",
    "imageUrl":"/assets/cream.jpg"},
    {"id":5,"name":"Oh Freak!",
    "imageUrl":"/assets/freak.jpg"},
    {"id":6,"name":"Bubble Bee",
    "imageUrl":"/assets/bubble.jpg"},
    {"id":7,"name":"Wafflin' Around",
    "imageUrl":"/assets/wafflin.jpg"},
    {"id":8,"name":"Sweet Truth",
    "imageUrl":"/assets/sweet.jpg"}
  ]


  constructor(private arouter :ActivatedRoute,private router : Router) { }

  ngOnInit() {

   let name= this.arouter.snapshot.paramMap.get('name');
   this.restname=name
  }

  goToRestDetails(drest){

    this.router.navigate(['/restdetails',drest.name]);

  }

  login(){
   
    this.router.navigate(['/loginpage']);

  }
  about(){
   
    this.router.navigate(['/aboutus']);

  }
}
