import { Component, OnInit } from '@angular/core';

import { DealLink } from '../../models/dealLink';

@Component({
  selector: 'app-home-deal-create',
  templateUrl: './home-deal-create.component.html',
  styleUrls: ['./home-deal-create.component.scss']
})
export class HomeDealCreateComponent implements OnInit {

  public link = new DealLink('', '');
  public links: DealLink[] = [];
  private title: string;

  constructor() { }

  ngOnInit() {
    // this.links.push(new DealLink())
    this.links.push(new DealLink('', ''));
    this.links.push(new DealLink('', ''));
  }

  linkAdd() {
    // this.links.push(new DealLink('', ''));
    console.log(this.link.link);
    this.links.push(new DealLink('', ''));
  }
}
