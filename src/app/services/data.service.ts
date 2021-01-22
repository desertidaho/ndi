import { Injectable } from '@angular/core';
import { Poems1 } from 'src/assets/poems/poems1.js'

export interface Message {
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public messages: Message[] = new Poems1().getPoems1Data();

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: string): Message {
    return this.search(id);
  }

  public search(id: string) {
    for (var i = 0; i < this.messages.length; i++) {
      if (this.messages[i].id === id) {
        return this.messages[i];
      }
    }
  }

}
