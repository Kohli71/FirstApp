import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 1, name: 'Kohli' },
      { id: 2, name: 'Dhoni' },
      { id: 3, name: 'Gill' },
      { id: 4, name: 'Pant' },
      { id: 5, name: 'Kranthi' },
      { id: 6, name: 'Rohit' },
      { id: 7, name: 'Ishan' },
      { id: 8, name: 'Jadeja'},
      { id: 9, name: 'Faf'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (1).
  // If the heroes array is not empty, the method below returns the highest hero id+1.
  
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
