import { Component,OnInit } from '@angular/core';
import { UrlService } from 'src/app/url.service';
import { Movie } from 'src/app/interfaces.model';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent {
  
  myListData : Movie[] = [];
  localMovieData :any
  public constructor(private urlservice : UrlService ){    
    const localData = window.localStorage.getItem('movieData');
    if(localData){
      this.localMovieData = JSON.parse(localData)
    }

  }
  ngOnInit(){
    this.getData();
  }


  getData(){
    if(this.localMovieData){
      this.myListData = this.localMovieData;
    }
    else{
      this.urlservice.data$.subscribe((res)=>{
        this.myListData = res;
        console.log(this.myListData,'data')
      })
    }
  }

}
