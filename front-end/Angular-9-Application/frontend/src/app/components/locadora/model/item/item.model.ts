import { Titulo } from './../titulo/titulo.model';
export interface Item{
    id?: number;
    numeroSerie: number;
    titulo: Titulo;
    dataAquisicao: string;
    tipo: string
}