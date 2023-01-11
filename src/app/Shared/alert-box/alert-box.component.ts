import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent implements OnInit {
  @Output() backdropClosed : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() message: string;
  @Input() showShortly: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  closeBackdrop(){
    this.backdropClosed.emit(true);
  }
}
