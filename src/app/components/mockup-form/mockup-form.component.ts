import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { $ } from 'protractor';
import { url } from 'inspector';

@Component({
  selector: 'app-mockup-form',
  templateUrl: './mockup-form.component.html',
  styleUrls: ['./mockup-form.component.css']
})
export class MockupFormComponent implements OnInit {
data_Info;
 name:string;
 rating:number;
P_Img:string;
desc:string;
like:any;
dislike:any;
newRating:any = [];



  constructor(private myData:DataService) { }

  ngOnInit() {
    this.myData.getMyData().subscribe((data) => {
      this.data_Info=data["People"];
      this.rating=this.data_Info[0].rating;
      this.P_Img=this.data_Info[0].img;
      this.desc=this.data_Info[0].Description;
      this.like=this.data_Info[0].Likes;
      this.dislike=this.data_Info[0].Dislikes;

      this.newRating=[];
      for (var i=0; i<this.rating;i++)
      {
        this.newRating.push(i.toString()); 
      }
      this.rating=this.newRating;
      })
 
  }

  LoadMyInfo(rating,desc,p_img,like,dislike)
  {
  
    console.log(desc);
    this.rating=rating;
    this.P_Img=p_img;
    this.desc=desc;
    this.like=like;
    this.dislike=dislike;

    this.newRating=[];
    for (var i=0; i<rating;i++)
    {
      this.newRating.push(i.toString()); 
    }
     this.rating=this.newRating;
  }

  
}
function convRating(myRate)
  {
    this.newRating=[];
    for (var i=0; i<myRate;i++)
    {
      this.newRating.push(i.toString()); 
       console.log(this.newRating);
    }
 
  }
