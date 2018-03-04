import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navItems: any[] = [
    {
      name: 'Home',
      route: '/'
    }, {
      name: 'About',
      route: '/about'
    },
    {
      name: 'Menu',
      route: '/menu'
    }, {
      name: 'Gallery',
      route: '/gallery'
    },
    {
      name: 'Events',
      route: '/events'
    }, {
      name: 'Contact',
      route: '/contact'
    }];
  socialIcons: string[] = ['fa-facebook', 'fa-twitter', 'fa-instagram', 'fa-yelp'];
}
