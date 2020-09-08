import {Component, Input, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() note = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
