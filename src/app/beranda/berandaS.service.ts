import { Injectable, EventEmitter } from '@angular/core';
import { Beranda } from '../beranda/beranda.model';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class BerandaSService {
  berandasChanged = new Subject<Beranda[]>();
berandaSelected=new EventEmitter<Beranda>();
private berandas:Beranda[]=[
  new Beranda('Pecel Madiun',
'Pecel adalah makanan yang menggunakan bumbu sambal kacang sebagai bahan utamanya yang dicampur dengan aneka jenis sayuran. Nasi Pecel menjadi icon salah satu kota di Jawa Timur yaitu Kota Madiun, yang dipandang dari setiap sudut kota.',
'../src/app/img/pecel.jpg')
];

getBerandas(){
  return this.berandas.slice();
}
addBeranda (beranda:Beranda){
  this.berandas.push(beranda);
  this.berandasChanged.next(this.berandas.slice());
}
constructor() { }

}
