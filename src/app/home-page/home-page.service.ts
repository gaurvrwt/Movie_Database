import { Injectable } from '@angular/core';
import { UrlService } from '../url.service';
import {HttpBackend, HttpClient, HttpClientModule, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  // url = 'https://api.themoviedb.org/3/movie/550?api_key=e5dbaa297f8dcb779f14cff134224ea6';

  constructor(
    private urlService: UrlService,
    private http: HttpClient
  ) { }
  getHomePageData(id: number,type: string): Observable<any>  {
    let params = new HttpParams().append('api_key','e5dbaa297f8dcb779f14cff134224ea6');
    return this.http.get(`${this.urlService.databaseUrl}/${id}/discover/${type}`,{params})
    // return this.http.get(this.url);
  }
}
