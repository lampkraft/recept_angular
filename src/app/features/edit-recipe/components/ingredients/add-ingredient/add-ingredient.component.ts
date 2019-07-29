import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'recept-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.less']
})
export class AddIngredientComponent implements OnInit {
  @Output() addIngredient: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient () {
    this.addIngredient.emit();
  }

}
