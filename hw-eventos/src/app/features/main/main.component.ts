import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  slides = [
    {
      url: 'https://source.unsplash.com/1600x900/?nature,water'
    },
    {
      url: 'https://source.unsplash.com/1600x1600/?nature,forest'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
