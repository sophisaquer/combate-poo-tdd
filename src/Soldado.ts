export class Soldado {
  private vida = 100;

  recibirDisparo(danio: number = 100): void {
    this.vida = Math.max(0, this.vida - danio);
  }

  estaVivo(): boolean {
    return this.vida > 0;
  }
}