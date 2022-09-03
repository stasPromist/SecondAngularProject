import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-images',
  templateUrl: './display-images.component.html',
  styleUrls: ['./display-images.component.css']
})
export class DisplayImagesComponent implements OnInit {

  constructor() { }
@Input() displayImages!:string ;
  ngOnInit(): void {
  }

}
