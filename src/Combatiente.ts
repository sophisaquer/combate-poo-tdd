import { Arma } from "./Arma.ts";
import { Escudo } from "./Escudo.ts";

export abstract class Combatiente {
  private vida: number;
  private escudo: Escudo | null = null;
  private arma: Arma | null = null;

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
    const danio = this.arma ? this.arma.disparar() : 100;
    objetivo.recibirDisparo(danio);
  }

  equiparEscudo(escudo: Escudo): void {
    this.escudo = escudo;
  }

  equiparArma(arma: Arma): void {
    this.arma = arma;
  }

  estaVivo(): boolean {
    return this.vida > 0;
  }
}