import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private static num_loadings = 0;
  constructor() { }

  ngOnInit(): void {
  }

  firstLoad(){
    console.log("firstLoad: " + !MainComponent.num_loadings);
    return MainComponent.num_loadings <2;
  }
}
