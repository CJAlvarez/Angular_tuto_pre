import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable({
	providedIn: 'root'
})
export class PresupuestosService {
	presURL = 'https://comprasapp-8fd49.firebaseio.com/presupuestos.json';
	
	constructor(private http: Http) {}
	
	postPresupuesto( presupuesto: any) {
		console.log("asdasdasdasdasdasd");
		const newpres = JSON.stringify(presupuesto);
		const headers = new Headers({ 
			'Content-Type': 'application/json'
		});
		return this.http.post( this.presURL, newpres, {headers})
		.map( res => {
			console.log(res.json());
			return res.json();
		})
	}
}
