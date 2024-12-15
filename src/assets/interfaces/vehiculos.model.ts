export interface Modelo {
    id: number;
    nombre: string;
}

export interface Marca {
    id: number;
    nombre: string;
    modelos: string[];
}

export interface MarcasResponse {
    marcas: Marca[];
}