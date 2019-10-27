import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];

  onServerAdd(serverCreated:{serverName: string, serverContent: string}) {
   this.serverElements.push({
    type:'server',
    name: serverCreated.serverName,
    content: serverCreated.serverContent
   })
  }

  onBlueprintAdd(blueprintCreated:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type:'blueprint',
      name: blueprintCreated.serverName,
      content: blueprintCreated.serverContent
     })
  }
}
