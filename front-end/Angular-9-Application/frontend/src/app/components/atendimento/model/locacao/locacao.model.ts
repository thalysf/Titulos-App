import { Socio } from './../cliente/socio.model';
import { Cliente } from './../cliente/cliente.model';
import { Item } from './../../../locadora/model/item/item.model';
export interface Locacao{
    id_locacao?: number;
    data_locacao?: string;
    data_devolucao_prevista?: string;
    data_devolucao_efetiva?: string;
    valor_cobrado?: number;
    multa_cobrada?: number;
    item: Item;
    cliente: Cliente;
    socio: Socio
}