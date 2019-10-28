import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;

  constructor() {
  }

  ngOnInit() {

  }

  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(serverNameInput);
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      // notice the difference in the way we access the value
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      // notice the difference in the way we access the value
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
