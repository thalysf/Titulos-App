import { Cliente } from './../cliente/cliente.model';
import { Item } from './../../../locadora/model/item/item.model';
export interface Locacao{
    id?: number;
    dataLocacao: string;
    dataDevolucaoPrevista: string;
    dataDevolucaoEfetiva: string;
    valorCobrado: number;
    multaCobrada: number;
    item: Item;
    cliente: Cliente
}