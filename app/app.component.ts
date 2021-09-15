import { Component, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import {MatMenuTrigger} from '@angular/material/menu';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  radioTitle: string;
  radioItems: Array<string>;
  model = { option: 'option' };
  sanitizer: DomSanitizer;
  image_path: String;
  image_paths ='D:\New folder\j&k tour\Snapchat';

  constructor(private domSanitizer:DomSanitizer) {
    this.radioTitle = 'Radio Button in Angular';
    this.radioItems = ['photos', 'videos', 'Document'];
  }

  open(menu) {
    menu.openMenu();
  }
}
