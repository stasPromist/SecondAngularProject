import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  // @Input("myimage") myimage!:ElementRef;
   imagesArray:any[] = [];
  ngOnInit(): void {
  }
  addImage( url:HTMLInputElement) {
    let imageUrl = url.value;
    // let imageName = name.value;
    // console.log(name.value);
    // console.log(url.value);
    this.imagesArray.push(imageUrl);
    // name.value = '';
    url.value = '';
  }
}
