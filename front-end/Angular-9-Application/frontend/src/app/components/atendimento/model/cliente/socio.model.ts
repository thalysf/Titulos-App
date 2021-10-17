import { Dependente } from './dependente.model';
import { Cliente } from './cliente.model';
export interface Socio extends Cliente{
    cpf: string;
    endereco: string;
    tel: string;
    dependentes: Array<Dependente>
}