import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'pages',
  template: `
    <div class="additional-bg"></div>
    <router-outlet></router-outlet>
  `
})
export class Pages {

  constructor() {
  }

}
