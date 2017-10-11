import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="additional-bg"></div>
    <router-outlet></router-outlet>
  `
})
export class App{

  constructor() { }

}
