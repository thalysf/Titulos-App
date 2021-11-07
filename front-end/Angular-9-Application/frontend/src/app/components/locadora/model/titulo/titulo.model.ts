import { Ator } from './../ator/ator.model';
export interface Titulo{
    id_titulo?: number;
    nome?: string;
    ano?: string;
    sinopse?: string;
    categoria?: string;
    diretor?: string;
    classe?: string;
    atores: Array<Ator>;
}