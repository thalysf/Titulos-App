import { Cliente } from './../../../model/cliente/cliente.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Socio } from './../../../model/cliente/socio.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socio-update',
  templateUrl: './socio-update.component.html',
  styleUrls: ['./socio-update.component.css']
})
export class SocioUpdateComponent implements OnInit {
  socio: Socio = {
    id_socio: undefined,
    num_inscricao: undefined,
    nome: undefined,
    data_nascimento: undefined,
    sexo: undefined,
    ativo: true,
    cpf: undefined,
    endereco: undefined,
    tel: undefined,
    dependentes: []
  }
  dependentes: Cliente[] = new Array();
  dependentesSelecionados: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }
  updateSocio(): void{
    const id = this.route.snapshot.paramMap.get('id') || "";
    alert("Sócio ainda não pode ser atualizado, id: "+ id + "! Ajustar backend!");
    //this.ProductService.update(this.product).subscribe(() => this.ProductService.showMsg("Produto alterado com sucesso! Recarregue a página para atualizar!"));
    //this.router.navigate(['/socio']);
  }

  cancel(): void{
    this.router.navigate(['/socio']);
  }
}
