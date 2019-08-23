import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { products } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  total:number
  constructor(private cartService: CartService) {
    this.items = this.cartService.getList(); 
  }

  ngOnInit() {
    
  }
  remove(){
    this.cartService.RemoveAll();
    console.log("dada")
    this.items = this.cartService.getList()
  }
}
