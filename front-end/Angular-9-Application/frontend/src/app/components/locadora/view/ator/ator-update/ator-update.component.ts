import { Ator } from './../../../model/ator/ator.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ator-update',
  templateUrl: './ator-update.component.html',
  styleUrls: ['./ator-update.component.css']
})
export class AtorUpdateComponent implements OnInit {
  // ator!: Ator; -> usar esse após ter implementado o backend
  ator: Ator = {
    id: 0,
    nome: ""
  }
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  updateAtor(): void {
    const id = this.route.snapshot.paramMap.get('id') || "";
    alert("Ator ainda não pode ser atualizado, id: "+ id + "! Ajustar backend!");
    //this.ProductService.update(this.product).subscribe(() => this.ProductService.showMsg("Produto alterado com sucesso! Recarregue a página para atualizar!"));
    //this.router.navigate(['/ator']);
  }
  cancel(): void {
    this.router.navigate(['/ator']);
  }
}
