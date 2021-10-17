import { Diretor } from './../../../model/diretor/diretor.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretor-update',
  templateUrl: './diretor-update.component.html',
  styleUrls: ['./diretor-update.component.css']
})
export class DiretorUpdateComponent implements OnInit {
  //diretor!: Diretor; -> usar esse após o backend estar implementado
  diretor: Diretor = {
    id: 0,
    nome: ""
  }
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  updateDiretor(): void {
    const id = this.route.snapshot.paramMap.get('id') || "";
    alert("Diretor ainda não pode ser atualizado, id: "+ id + "! Ajustar backend!");
    //this.ProductService.update(this.product).subscribe(() => this.ProductService.showMsg("Produto alterado com sucesso! Recarregue a página para atualizar!"));
    //this.router.navigate(['/diretor']);
  }
  cancel(): void {
    this.router.navigate(['/diretor']);
  }
}
