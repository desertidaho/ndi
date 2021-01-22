import { Injectable } from '@angular/core';
import { Poems } from 'src/assets/poems/poems.js'

export interface Message {
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public messages: Message[] = new Poems().getPoemsData();

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: string): Message {
    return this.search(id);
  }

  public search(id: string) {
    console.log(id)
    for (var i = 0; i < this.messages.length; i++) {
      if (this.messages[i].id === id) {
        return this.messages[i];
      }
    }
  }

}
