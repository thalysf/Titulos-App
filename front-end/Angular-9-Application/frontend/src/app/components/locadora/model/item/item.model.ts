import { Titulo } from './../titulo/titulo.model';
export interface Item{
    id_item?: number;
    numeroSerie: number;
    titulo: Titulo;
    dataAquisicao: string;
    tipo: string
}