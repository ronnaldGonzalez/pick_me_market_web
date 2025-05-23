export interface Marca {
  id: number;
  nombre: string;
  modelos: string[];
}

export interface MarcasResponse {
  marcas: Marca[];
}