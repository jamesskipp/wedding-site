import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../app.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  settings: {
    showMenu: boolean;
  };

  images: {
    FLOWER_IMAGE: string;
  }

  constructor() {

  }

  ngOnInit() {
    this.settings = {
      showMenu: false,
    };
    
    this.images = {
      FLOWER_IMAGE: AppConstants.FLOWER_IMAGE,
    }

    console.log(AppConstants.FLOWER_IMAGE);
  }

  onClickHam() {
    this.settings.showMenu = !this.settings.showMenu;
  }

}
