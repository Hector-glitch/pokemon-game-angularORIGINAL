import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-isessiovinas',
  templateUrl: './isessiovinas.component.html',
  styleUrls: ['./isessiovinas.component.css']
})
export class IsessiovinasComponent implements OnInit {

  NomJugador: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  startGame() {
    this.router.navigate(['./pages/home/home.component', { NomJugador: this.NomJugador }]);
  }
}
