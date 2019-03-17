import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) {}

    // At Part 4 will replace with the service
  // heroes = HEROES;

  // Used in part 1
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // Part 4
  heroes: Hero[];

  selectedHero: Hero;
  // get the heroes from the service
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  // Part 4
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
