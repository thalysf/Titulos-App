import { Classe } from './../../../model/classe/classe.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classe-update',
  templateUrl: './classe-update.component.html',
  styleUrls: ['./classe-update.component.css']
})
export class ClasseUpdateComponent implements OnInit {
  //classe!: Classe; -> usar esse após ter implementado o backend
  classe: Classe = {
    id: 0,
    nome: "",
    valor: 0,
    prazoDevolucao: 0
  }
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  updateClasse(): void {
    const id = this.route.snapshot.paramMap.get('id') || "";
    alert("Classe ainda não pode ser atualizada, id: "+ id + "! Ajustar backend!");
    //this.ProductService.update(this.product).subscribe(() => this.ProductService.showMsg("Produto alterado com sucesso! Recarregue a página para atualizar!"));
    //this.router.navigate(['/classe']);
  }
  cancel(): void {
    this.router.navigate(['/classe']);
  }
}
