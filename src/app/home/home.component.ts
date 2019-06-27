import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private currentPage: string;

  constructor(private routeInfor: ActivatedRoute) {}

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.currentPage = this.routeInfor.snapshot.params['id'];
  }
}
