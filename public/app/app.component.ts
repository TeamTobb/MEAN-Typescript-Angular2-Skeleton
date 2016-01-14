import {Component, ViewChild, Input, Output, Renderer} from 'angular2/core';
import {Http, Headers, Response, RequestOptions} from 'angular2/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Injectable, bind} from 'angular2/core';
import 'rxjs/Rx';

class Data {
    public hei;
}

@Component({
  selector: 'my-app',
  inputs: ['texten'],
  template:`
    <h1>{{title}}</h1>
    <div>
      <label>name: </label>
      <div><input (keyup)="testMessage($event)" [(ngModel)]="texten2" placeholder="name"></div>
      <div>Current text: {{document}}</div>
    </div>
    `
})
@Injectable()
export class AppComponent{
    public socket = new WebSocket('ws://localhost:3001');
    public title = 'BachelorTest';
    public texten = "safari";
    public document = "";

    constructor(public http: Http) {}

    public testMessage = function() {
        this.socket.send(JSON.stringify({name: "Bob", message: this.texten2}));
    }

    ngAfterViewInit() {
        this.getDocument();
        this.testPost();
        this.socket.onmessage = message => {
            this.document = JSON.parse(message.data).data.message
        }
    }

    getDocument(){
        this.http.get('./document').map((res: Response) => res.json()).subscribe(res => {
            this.document = res.text
        });
    }

    testPost(){
        var headers = new Headers();
        var data = new Data();
        data.hei = "tekst";
        headers.append('Content-Type', 'application/json');

        this.http.post('./document', JSON.stringify(data), {headers: headers}).subscribe(res => {
            console.log(res);
        });
    }
}
