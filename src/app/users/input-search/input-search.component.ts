import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
@Output() keyword = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getKeyword(event){
    const value = event.target.value.toLowerCase();
    // console.log(value);
    this.keyword.emit(value);
  }

}
