export interface Modelo {
    id: number;
    nombre: string;
  }
  
  export interface Marca {
    id: number;
    nombre: string;
    modelos: string[]; // Cambiar a `Modelo[]` si es necesario
  }
  
  export interface MarcasResponse {
    marcas: Marca[];
  }
  