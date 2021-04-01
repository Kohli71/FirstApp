import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  private heroesUrl = 'api/heroes'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'contentType': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    // GET Heroes from the Server
    getHeroes(): Observable<Hero[]>{
      return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      )
    }

    // GET hero by id. Return 'undefined' when id not found
}

/*
//GET hero by id. Return `undefined` when id not found
getHeroNo404<Data>(id: number): Observable<Hero> {
  const url = `${this.heroesUrl}/?id=${id}`;
  return this.http.get<Hero[]>(url)
    .pipe(
      map(heroes => heroes[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} hero id=${id}`);
      }),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
}
*/