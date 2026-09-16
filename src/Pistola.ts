import { Arma } from "./Arma.ts";

export class Pistola extends Arma {
  constructor(municiones: number) {
    super(100, municiones);
  }
}