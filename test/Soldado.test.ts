import { test } from "node:test";
import assert from "node:assert/strict";
import { Soldado } from "../src/Soldado.ts";

test("el soldado comienza vivo", () => {
  const soldado = new Soldado();

  assert.equal(soldado.estaVivo(), true);
});

test("el soldado muere al recibir un disparo", () => {
  const soldado = new Soldado();

  soldado.recibirDisparo();

  assert.equal(soldado.estaVivo(), false);
});