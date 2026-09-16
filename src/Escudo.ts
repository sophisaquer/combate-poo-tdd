export class Escudo {
  private porcentajeReduccion: number;

  constructor(porcentajeReduccion: number) {
    if (porcentajeReduccion < 0 || porcentajeReduccion > 100) {
      throw new Error("El porcentaje debe estar entre 0 y 100");
    }

    this.porcentajeReduccion = porcentajeReduccion;
  }

  reducirDanio(danio: number): number {
    return danio * (1 - this.porcentajeReduccion / 100);
  }
}