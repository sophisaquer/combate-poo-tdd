export abstract class Arma {
  private municiones: number;
  private readonly danio: number;

  protected constructor(danio: number, municiones: number) {
    if (!Number.isInteger(municiones) || municiones < 0) {
      throw new Error("Las municiones deben ser un número entero no negativo");
    }

    this.danio = danio;
    this.municiones = municiones;
  }

  disparar(): number {
    if (this.municiones === 0) {
      return 0;
    }

    this.municiones -= 1;
    return this.danio;
  }

  municionesRestantes(): number {
    return this.municiones;
  }
}