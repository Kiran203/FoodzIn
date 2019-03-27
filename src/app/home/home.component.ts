import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title="Foodz-In"

  restaurants=[
    {"id":1,"name":"Desserts & Bakes",
    "imageUrl":"/assets/desserts.jpg"},
    {"id":2,"name":"Cafes",
    "imageUrl":"/assets/cafe.jpg"},
    {"id":3,"name":"Drinks &  Night Life",
    "imageUrl":"/assets/drinks.jpg"},
    {"id":4,"name":"Dinner",
    "imageUrl":"/assets/dinner.jpg"},
    {"id":5,"name":"Breakfast",
    "imageUrl":"/assets/breakfast.jpg"},
    {"id":6,"name":"Lunch",
    "imageUrl":"/assets/lunch.jpg"},
    {"id":7,"name":"Pocket-Friendly",
    "imageUrl":"/assets/pocket.jpg"},
    {"id":8,"name":"Delivery",
    "imageUrl":"/assets/delivery.jpg"}
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // login(){
   
  //   this.router.navigate(['/loginpage']);

  // }
  
  // likecolor = 'gray' ;

  // like(event){
  //   // alert("Added To Favourites!")
  //   this.likecolor= 'red'
  // }

  goToRestaurants(rest){

    this.router.navigate(['/restaurants',rest.name]);

  }

  about(){
   
    this.router.navigate(['/aboutus']);

  }



}
