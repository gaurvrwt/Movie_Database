import { Component,Output,EventEmitter,TemplateRef,ViewChild } from '@angular/core';
import { HomePageService } from './home-page.service';
import { UrlService } from '../url.service';
import { Movie } from '../interfaces.model';
// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
// import { BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})

export class HomePageComponent {

   homePageData : Movie[] = [];
   imageBaseUrl = 'https://image.tmdb.org/t/p/original/';
   backdropImage :any = {};
   movieCardId :number = 0;
   selectedDatabaseType :string = 'movie';
   myListData : Movie[] = [];
   @Output() sendtoParent : EventEmitter<any> = new EventEmitter();
  //  modalRef!: BsModalRef;
  //  @ViewChild('logInTemplate', { static: true }) logInTemplate: TemplateRef<any>;


  constructor(
    public homePageService: HomePageService,
    public urlService: UrlService,
    // public modalService: BsModalService
  ) {
  }
  ngOnInit(): void{
    // this.createAccountModal();
    this.getHomepageData();
  }

  getHomepageData():void{
    let id = 3;
   let  type = this.selectedDatabaseType;
    this.homePageService.getHomePageData(id,this.selectedDatabaseType).subscribe((response)=>{
      
      this.homePageData = response.results;
      this.homePageData.map((obj)=>{
        this.backdropImage[obj.id] = false;
      })
        console.log(response.results,'resp')
    })
  }

  mouseOverFunction(movie:any) : void{
    Object.keys(this.backdropImage).forEach((key,value) =>{ return this.backdropImage[key] = false});
    this.backdropImage[movie] = true;
  }
  mouseOutFunction(movie:any) :void{
   this.backdropImage[movie] = false;
  }

  addtoMylist(movie:any){
    this.urlService.storedMylistData(movie);
  }

  // createAccoutModal(){
  //   this.modalRef = this.modalService.show(this.logInTemplate,{class:'modal-lg'})
  // }


}
