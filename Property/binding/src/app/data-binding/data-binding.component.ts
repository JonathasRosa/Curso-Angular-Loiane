import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit{
onKeyUp() {
throw new Error('Method not implemented.');
}

  url: string = "https://jonathasrosa.github.io/CV-Online/";
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!')
  }
  
  onKeyUp(evento){
  
  }

  constructor() {};

  ngOnInit() {

  };
}
