import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted: boolean = false;
  constructor(private movieservice: MovieService) { }
  movies: any[];

  onSubmit(userId: any) {
    this.submitted = true;
    let newArray=[];
    this.movieservice.onSubmit(userId.name).subscribe(
      (response) => {

        //(response => response.json());
        let catalog: any[] = response["catalogItems"];
        
        // console.log(catalog[0]);
        // console.log(catalog[1]);
        
        for (let i in catalog) {
          console.log(catalog[i]["movie"]);
          newArray.push(catalog[i]["movie"]);
        }
        this.movies=newArray;
   
      
        // console.log(catalog[0]["movie"].movieId);
        // let movieList : any=catalog[1];
        // // this.movies=movieList;
        // console.log(movieList);
        // console.log("************************* array list **********************" + this.movies[0]['movieId']);
        // this.movies = response;
         console.log(this.movies);
      },
      (error) => {
        console.log(error);
      });
  }
}