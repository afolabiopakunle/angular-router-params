import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(data => {
      console.log(data.id)
    })

    this.route.queryParams.subscribe(data => {
      console.log(data)
    })
  }
      
  ngOnInit() {

  }

}