import { Titulo } from './../titulo/titulo.model';
export interface Item{
    id_item?: number;
    numero_serie?: number;
    titulo: Titulo;
    data_aquisicao?: string;
    tipo?: string
}