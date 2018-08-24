import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wedding-title',
  templateUrl: './wedding-title.component.html',
  styleUrls: ['./wedding-title.component.css']
})
export class WeddingTitleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickWeddingTitle() {
    // router.
  }

}
