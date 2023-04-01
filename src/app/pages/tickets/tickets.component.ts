import { Component, OnInit } from '@angular/core';
import { IMenuType } from 'src/app/modals/menuType';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  selectedType: IMenuType
  constructor() { }
  updateSelectedType(ev: IMenuType): void {
    this.selectedType = ev;
  }
  ngOnInit(): void {
  }

}
