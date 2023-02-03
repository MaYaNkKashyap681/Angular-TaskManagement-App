import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  devImage: string = "https://res.cloudinary.com/dib5nqqso/image/upload/v1675283932/IMG_20220130_090840_ek0udl.jpg"
  devName: string = "Mayank Kashyap"
  title: string = "Task Management App"
  text: string = "A Task Managent App made using Angular and Css, The backend of the app is written using Express Js."

  ngOnInit(): void {}

}
