import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() length: number = 0
  @Input() pageSize: number = 10
  @Output() pageEvent: EventEmitter<PageEvent>= new EventEmitter<PageEvent>()

  constructor() { }

  ngOnInit(): void {
  }

  OnPageChange(event: PageEvent){
    this.pageEvent.emit(event)
  }
}
