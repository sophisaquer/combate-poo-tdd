export abstract class Combatiente {
  private vida: number;

  constructor(vidaInicial: number) {
    this.vida = vidaInicial;
  }

  recibirDisparo(danio: number = 100): void {
    this.vida = Math.max(0, this.vida - danio);
  }

  estaVivo(): boolean {
    return this.vida > 0;
  }
}