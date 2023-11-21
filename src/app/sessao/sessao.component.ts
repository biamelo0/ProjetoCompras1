import { Component } from '@angular/core';
import Swal from 'sweetalert2' ;
import { OnInit } from '@angular/core';
import { SessaoService } from './Service/sessao.service';
import { Isessao } from './Service/isessao';


@Component({
  selector: 'app-sessao',
  templateUrl: './sessao.component.html',
  styleUrls: ['./sessao.component.scss']
})
export class SessaoComponent implements OnInit{

  ngOnInit(): void {this.listar()}
  produto: Isessao [] = [];
  constructor(private service:SessaoService){}
  listar(){
    this.service.listar().subscribe(dados => this.produto = dados)
  }

  Comprar(){
    Swal.fire({
      title: "Você deseja comprar esse produto?",
      showDenyButton: true,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Cancelar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Produto adicionado ao carrinho", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Erro ao adicionar ao carrinho", "", "error");
      }
    });
  }

}
