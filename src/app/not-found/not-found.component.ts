import { Component, Input, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit{
@Input() visable:boolean=false;
@Input() notFoundMessage:string = "Nothing found!";
@Input() resetLinkText:string = "Reset";
@Input() resetLinkRoute:string = "/";

constructor(){}
  ngOnInit(): void {

  }
}
