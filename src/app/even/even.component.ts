/*import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() gamecontrolCreated = new EventEmitter<{gamecontrol: string, odd: string, even: string}>();
  @Output('oddCreated') oddCreated = new EventEmitter<{gamecontrol: string, odd: string, even: string}>();
  @Output('evenCreated') evenCreated = new EventEmitter<{gamecontrol: string, odd: string, even: string}>();
  @ViewChild('gamecontrolNameInput') gamecontrolNameInput: ElementRef;
  @ViewChild('oddInput') oddInput: ElementRef;
  @ViewChild('evenInput') evenInput: ElementRef;

  constructor() { }

  ngOnInit() {
    this.startgameInit();
    ref = setInterval(() =>
    {
      this.startgameInit();
    }, 1000);
  }

  onStartGamecontrol(gamecontrolInput: HTMLInputElement) {
    this.gamecontrolCreated.emit({
      gamecontrol: gamecontrolInput.value,
      odd: gamecontrolInput.value,
      even: this.gamecontrolNameInput.nativeElement.value
    });
  }

  onAddOdd(oddInput: HTMLInputElement) {
    this.oddCreated.emit({
      gamecontrol: oddInput.value,
      odd: this.oddInput.nativeElement.value,
      even: oddInput.value
    });
  }

  onAddEven(evenInput: HTMLInputElement) {
    this.evenCreated.emit({
      gamecontrol: evenInput.value,
      odd: evenInput.value,
      even: this.evenInput.nativeElement.value
    });
  }

  ngOnDestroy() {
    if (ref) {
      clearInterval(ref);
    }
  }
}*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() even: number;
  constructor() { }

  ngOnInit() {
  }


}