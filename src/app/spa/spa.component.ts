import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { MovieInterface } from '../core/models/moviesModel';
import { MovieService } from '../core/services/movie.service';

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.css'],
})
export class SpaComponent implements OnInit, AfterViewInit  {
  moviesList: MovieInterface[] = [];

  myForm: FormGroup = this.fb.group({
    position: [0, [Validators.required, Validators.min(0)]],
    title: ['', [Validators.required, Validators.minLength(3)]],
    year: [null, [Validators.required, Validators.min(1990)]],
    genres: ['', [Validators.required, Validators.minLength(3)]],
  });

  displayedColumns: string[] = ['position', 'title', 'year', 'genres', 'action'];
  dataSource!: MatTableDataSource<MovieInterface>;

  @ViewChild(MatSort, { static: true }) sort!: MatSort;


  constructor(private fb: FormBuilder, private movieService: MovieService) {
    this.moviesList =  this.movieService.moviesList;
    this.dataSource = new MatTableDataSource(this.moviesList);
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  addMovie() {
    console.log(`this.myForm.value`, this.myForm.value);

    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    
    console.log(`newMovie`, this.myForm.value);
    this.movieService.addMovie(this.myForm.value);
    this.updateTable();

  }

  deleteMovie(index: number) {
    console.log('Deleting Movie: ', index);
    this.movieService.deleteMovie(index);
    this.updateTable();
  }

  isInvalidField(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  updateTable() {
    this.moviesList =  this.movieService.moviesList;
    this.dataSource = new MatTableDataSource(this.moviesList);
  }


}
