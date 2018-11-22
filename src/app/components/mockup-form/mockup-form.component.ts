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



  constructor(private myData:DataService) { }

  ngOnInit() {
    this.myData.getMyData().subscribe((data) => {
      this.data_Info=data["People"];
     
     
      this.name=this.data_Info[0].name;
      this.rating=this.data_Info[0].rating;
      this.P_Img=this.data_Info[0].img;
      this.desc=this.data_Info[0].Description;
      this.like=this.data_Info[0].Likes;
      this.dislike=this.data_Info[0].Dislikes;
      // console.log(this.like[1]);

      
      document.getElementById("like1").innerText=this.like[0];
      document.getElementById("like2").innerText=this.like[1];
      document.getElementById("like3").innerText=this.like[2];
      document.getElementById("like4").innerText=this.like[3];

      document.getElementById("dislike1").innerText=this.dislike[0];
      document.getElementById("dislike2").innerText=this.dislike[1];
      document.getElementById("dislike3").innerText=this.dislike[2];
      document.getElementById("dislike4").innerText=this.dislike[3];

    })
 
  }

  LoadMyInfo(Item)
  {



    // this.rating=Item.rating;
    this.P_Img=Item.img;
    this.desc=Item.Description;
    document.getElementById("like1").innerText=Item.Likes[0];
    document.getElementById("like2").innerText=Item.Likes[1];
    document.getElementById("like3").innerText=Item.Likes[2];
    document.getElementById("like4").innerText=Item.Likes[3];

    document.getElementById("dislike1").innerText=Item.Dislikes[0];
    document.getElementById("dislike2").innerText=Item.Dislikes[1];
    document.getElementById("dislike3").innerText=Item.Dislikes[2];
    document.getElementById("dislike4").innerText=Item.Dislikes[3];
  }
}
