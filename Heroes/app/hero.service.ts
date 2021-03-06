import {Injectable} from 'angular2/core'
import {Heroes} from './mock-heroes';

@Injectable()
export class HeroService{
	getHeroes(){
		return Promise.resolve(Heroes);
	};

	getHero(id:number){
		return Promise.resolve(Heroes).then(
			heroes => heroes.filter(hero=>hero.id === id)[0]
		);
	}
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/