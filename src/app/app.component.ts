import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app';

  user = null;

  ngOnInit() {
    if (sessionStorage.getItem('user'))
      this.user = JSON.parse(sessionStorage.getItem('user'));
  }
}
