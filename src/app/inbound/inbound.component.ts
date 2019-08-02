import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbound',
  templateUrl: './inbound.component.html',
  styleUrls: ['./inbound.component.scss']
})
export class InboundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  search() {
    // Declare variables
    const input = document.getElementById('inboundSearchInput') as HTMLInputElement;
    const filter = input.value.toUpperCase();
    const table = document.getElementById('inboundTable');
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
