import { Cliente } from './cliente.model';
export interface Socio extends Cliente{
    id?: number;
    cpf: string;
    endereco: string;
    tel: string;
    dependentes: Array<Cliente>
}