import { test } from "node:test";
import assert from "node:assert/strict";
import { Buque } from "../src/Buque.ts";

test("el buque resiste dos disparos", () => {
  const buque = new Buque();

  buque.recibirDisparo();
  buque.recibirDisparo();

  assert.equal(buque.estaVivo(), true);
});

test("el buque muere al recibir tres disparos", () => {
  const buque = new Buque();

  buque.recibirDisparo();
  buque.recibirDisparo();
  buque.recibirDisparo();

  assert.equal(buque.estaVivo(), false);
});