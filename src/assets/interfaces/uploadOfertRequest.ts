export interface UploadOfertRequest {
  orden: {
    orden_id: number;
    precio_ofertado: number;
    tiempo_entrega: string;
    costo_envio: number;
    cantidad: number;
    clasificacion_id?: number;
    rango_id?: number;
  };
  repuesto?: {
    repuesto_id: number;
  };
  proveedor?: {
    proveedor_id: number;
  };
  security?: {
    challenge: string;
  };
}