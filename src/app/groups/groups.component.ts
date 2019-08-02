import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  public currentPath: any;
  public isGroupTab: any;
  constructor(private router: Router) {}
  ngOnInit() {
    if (this.router.url === '/groups' || this.router.url === '/groups/group_active') {
      document.getElementById('group-active-tab').classList.add('active');
    } else if (this.router.url === '/groups/user_groups') {
      document.getElementById('user-group-tab').classList.add('active');
    }
    this.currentPath = this.router.url;
    if (this.currentPath === '/groups/user_groups') {
      this.isGroupTab = true;
    } else {
      this.isGroupTab = false;
    }
  }
  search() {
    // Declare variables
    const input = document.getElementById(
      'groupSearchInput'
    ) as HTMLInputElement;
    const filter = input.value.toUpperCase();
    const table = document.getElementById('GroupTable');
    const tr = table.getElementsByTagName('tr');

    // Loop through all table rows, and hide those who don't match the search query
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < tr.length; i++) {
      const td = tr[i].getElementsByTagName('td')[0];
      if (td) {
        const txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }
}
