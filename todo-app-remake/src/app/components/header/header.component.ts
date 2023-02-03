import { Component, OnInit } from '@angular/core';
import { HeaderserviceService } from 'src/app/services/headerservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  time: Date = new Date();
  constructor(private headerService: HeaderserviceService) {}
  ngOnInit(): void {}

  getDate() {
    setTimeout(() => {
      console.log("Hello")
    })
  }
}