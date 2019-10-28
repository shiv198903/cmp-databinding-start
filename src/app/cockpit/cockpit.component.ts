import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName = '';
  newServerContent = '';

  constructor() {
  }

  ngOnInit() {

  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
    this.newServerName = '';
    this.newServerContent = '';
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
    this.newServerName = '';
    this.newServerContent = '';
  }

}
