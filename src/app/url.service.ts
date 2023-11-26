import { Injectable } from '@angular/core';
import { Observable,Subject,BehaviorSubject } from 'rxjs';
import { Movie } from './interfaces.model';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  myListData : Movie[] = [];
  private dataSubject = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable();
  databaseUrl = 'https://api.themoviedb.org';
  authenticationKey = 'e5dbaa297f8dcb779f14cff134224ea6';
  constructor() {
   }

  storedMylistData(movie:any){
    if(this.myListData.find(val=> val.id == movie.id)){
      alert('Movie Alredy exist in the list')
      return
    }
    else{
    this.myListData.push(movie);
    window.localStorage.setItem('movieData',JSON.stringify(this.myListData));
    this.dataSubject.next(this.myListData);
    console.log(this.myListData,'data')
    }
  }
}
