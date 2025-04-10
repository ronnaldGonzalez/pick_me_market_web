export interface Region {
    regionId: number
    NombreRegion: string;
    comunas: Comuna[];
}

export interface Comuna { 
    comunaId: number; 
    nombreComuna: string; 
}

export interface RegionesData {
    regiones: Region[];
}