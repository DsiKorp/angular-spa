import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

import { MovieInterface } from '../models/moviesModel';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _moviesList: MovieInterface[] = [
    {
      position: 1,
      title: 'Star Wars',
      year: 1975,
      genres: 'Sci-Fi',
    },
    {
      position: 2,
      title: 'Back to the Future',
      year: 1989,
      genres: 'Sci-Fi',
    },
    {
      position: 3,
      title: 'Rambo - First Blood',
      year: 1986,
      genres: 'Action',
    },
  ];

  get moviesList(): MovieInterface[] {
    return [...this._moviesList];
  }

  constructor() {}

  addMovie(movie: MovieInterface) {
    // Look by repeating name
    let index = this._moviesList.findIndex(
      (item) => item.title === movie.title
    );
    console.log(`index found by name: `, index);

    if (index >= 0) {
      Swal.fire({
        title: 'Alert!!',
        text: `This movie already exists!`,
        icon: 'error'
      });

      return;
    };

    movie.position = this.findUpperPosition() + 1;
    this._moviesList.push(movie);
  }

  deleteMovie(position: number) {
    const index = this._moviesList.findIndex(
      (item) => item.position === position
    );
    if (index > -1) this._moviesList.splice(index, 1);

    console.log(`List after Delete: this._moviesList: `, this._moviesList);
  }

  findUpperPosition() {
    let mayor = 0;

    this._moviesList.forEach( element => {
      if (element.position > mayor) {
        mayor = element.position;
      }
    });

    return mayor;
  }
}
