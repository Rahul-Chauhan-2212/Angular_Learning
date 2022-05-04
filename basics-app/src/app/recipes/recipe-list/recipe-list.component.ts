import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOu3y8mMz_myEB90OA-9m7a0WoNTN1_TUvzw&usqp=CAU'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOu3y8mMz_myEB90OA-9m7a0WoNTN1_TUvzw&usqp=CAU'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
