import { Cliente } from './../../../model/cliente/cliente.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {
  // cliente!: Cliente; -> utiliza desta forma quando o backend estiver finalizado
  cliente: Cliente = {
    id_cliente: 0,
    nome: "",
    numInscricao: 0,
    dataNascimento: "",
    sexo: "",
    ativo: true
  };
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  updateCliente(): void{
    const id = this.route.snapshot.paramMap.get('id') || "";
    alert("Cliente ainda não pode ser atualizado, id: "+ id + "! Ajustar backend!");
    //this.ProductService.update(this.product).subscribe(() => this.ProductService.showMsg("Produto alterado com sucesso! Recarregue a página para atualizar!"));
    //this.router.navigate(['/cliente']);
  }
  cancel(): void{
    this.router.navigate(['/cliente']);
  }
}
