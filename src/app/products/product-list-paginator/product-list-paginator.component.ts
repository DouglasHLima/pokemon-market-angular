import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'product-list-paginator',
  templateUrl: './product-list-paginator.component.html',
  styleUrls: ['./product-list-paginator.component.css']
})
export class ProductListPaginatorComponent implements OnInit {

  pageSizeOptions:number[] = [10,20,50,100,500]

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
