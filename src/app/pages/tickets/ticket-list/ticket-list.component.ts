import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlocksStyleDirective } from 'src/app/derective/blocks-style.directive';
import { ITour } from 'src/app/modals/tours';
import { TicketService } from 'src/app/services/tickets/ticket.service';
import { TiсketsStorageService } from 'src/app/services/tiсkets-storage/tiсkets-storage.service';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  tickets: ITour[];
  ticketsCopy: ITour[];
  value:string;

  @ViewChild('tourWrap', {read: BlocksStyleDirective}) blockDerective: BlocksStyleDirective;
  @ViewChild('tourWrap') tourWrap: ElementRef;

  constructor(private ticketService: TicketService,
    private router: Router,
    private route: ActivatedRoute,
    private ticketStorage: TiсketsStorageService
  ) { }

  ngOnInit(): void {
      this.ticketService.getTickets().subscribe(
        (data:ITour[])=>{
            this.tickets = data;
            this.ticketStorage.setStorage(data);
            this.ticketsCopy = data;
        }
      )
  }

  findTours(ev: Event):void{
    const searchValue = (<HTMLInputElement>ev.target).value;
    if (searchValue){
      this.tickets = this.ticketsCopy.filter((el)=> el.name.includes(searchValue));
    }else{
      this.tickets = [...this.ticketsCopy];
    }
  }

  goToTicketInfoPage(item: ITour){
    this.router.navigate([`/tickets/ticket/${item.id}`])
  }
}
