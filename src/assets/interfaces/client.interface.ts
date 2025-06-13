export interface Cliente {
    clienteId: number;
    nombre: string;
    correo_electronico: string;
    celular: string;
    regionId: number;
    comunaId: number;
    region?: string;
    comuna?: string;
  }
  