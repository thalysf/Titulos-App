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
  // socio!: Socio; -> utilizar desta forma quando o backend estiver finalizado
  socio: Socio = {
    id_socio: 0,
    numInscricao: 0,
    nome: "",
    dataNascimento: "",
    sexo: "",
    ativo: true,
    cpf: "",
    endereco: "",
    tel: "",
    dependentes: []
  }
  dependentes: Cliente[] = new Array();
  dependentesSelecionados: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dependentes = [
      {id_cliente: 1, nome: "Carol", numInscricao: 9445561, dataNascimento: "10/05/2007", sexo: "feminino", ativo: true},
      {id_cliente: 2, nome: "Igor", numInscricao: 1789561, dataNascimento: "30/01/2009", sexo: "masculino", ativo: true},
      {id_cliente: 3, nome: "Ana", numInscricao: 5445561, dataNascimento: "10/05/2009", sexo: "feminino", ativo: true},
      {id_cliente: 4, nome: "Julio", numInscricao: 3689561, dataNascimento: "30/01/2006", sexo: "masculino", ativo: true}
    ];
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
