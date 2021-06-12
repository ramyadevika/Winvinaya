import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
message=messages;

}
 interface card{
  id:number;
  name:string;
  image:string;
  tag:number;
  stock:string;
  price:string;
}
var messages:card[] = [
    {
      id: 11214544,
      name: "Watch",
      image:"assets/Watch.jpg",
      stock:"yes",
      tag:31222,
      price:"$20"
    },
    {
      id: 11214545,
      name: "Mobile",
      image:"assets/Mobile.jpg",
      stock:"no",
      tag:31223,
      price:"$2000"
    },
    {
      id: 11214546,
      name: "School Bag",
      image:"assets/Bag.jpg",
      stock:"yes",
      tag:312221,
      price:"$2090"
    },
    {
      id: 11214547,
      name: "HandBag",
      image:"assets/handbag.jpg",
      stock:"yes",
      tag:3122,
      price:"$210"
    }

  ]
