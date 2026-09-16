import { Escudo } from "./Escudo.ts";

export abstract class Combatiente {
  private vida: number;
  private escudo: Escudo | null = null;

  constructor(vidaInicial: number) {
    this.vida = vidaInicial;
  }

  recibirDisparo(danio: number = 100): void {
    const danioRecibido = this.escudo
      ? this.escudo.reducirDanio(danio)
      : danio;

    this.vida = Math.max(0, this.vida - danioRecibido);
  }

  dispararA(objetivo: Combatiente): void {
    objetivo.recibirDisparo();
  }

  equiparEscudo(escudo: Escudo): void {
    this.escudo = escudo;
  }

  estaVivo(): boolean {
    return this.vida > 0;
  }
}