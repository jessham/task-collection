import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app';

  // user = {
  //   id: '0f9fc55f5ebdadf05439d4fa5034c1a9',
  //   imgURL: '../assets/profile_photo.jpg',
  //   fullname: 'Jessica Miyuki Ham Kawazoe'
  // };

  user = null;
}
