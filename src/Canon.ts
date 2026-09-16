import { Arma } from "./Arma.ts";

export class Canon extends Arma {
  constructor(municiones: number) {
    super(200, municiones);
  }
}