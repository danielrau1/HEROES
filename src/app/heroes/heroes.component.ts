import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  // Used in part 1
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  selectedHero: Hero;

  constructor() {}
  ngOnInit() {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
