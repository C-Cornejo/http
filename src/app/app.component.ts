import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Frase } from './model/Frase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
   url = 'https://quotes15.p.rapidapi.com/quotes/random/';

   data: Object;
   loading:boolean;
constructor(private http: HttpClient){
  this.data = [];
  this.loading = false;
}



 llamadaAPI()
{
  let encabezados = 
  {
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com', //HEADERS
        'X-RapidAPI-Key': '638ecbdb6amshd98d2f58ca28e7cp1bbf1fjsn87e3e7517081'      
  }


   this.http.get<Frase>(this.url,{
    headers: new HttpHeaders(encabezados),
    responseType: 'json'
   }).subscribe(datos => this.data=datos);
   
}

    
}


