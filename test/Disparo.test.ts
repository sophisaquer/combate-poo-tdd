import { test } from "node:test";
import assert from "node:assert/strict";
import { Soldado } from "../src/Soldado.ts";
import { Tanque } from "../src/Tanque.ts";
import { Buque } from "../src/Buque.ts";

test("el soldado puede disparar", () => {
  const atacante = new Soldado();
  const objetivo = new Soldado();

  atacante.dispararA(objetivo);

  assert.equal(objetivo.estaVivo(), false);
});

test("el tanque puede disparar", () => {
  const atacante = new Tanque();
  const objetivo = new Soldado();

  atacante.dispararA(objetivo);

  assert.equal(objetivo.estaVivo(), false);
});

test("el buque puede disparar", () => {
  const atacante = new Buque();
  const objetivo = new Soldado();

  atacante.dispararA(objetivo);

  assert.equal(objetivo.estaVivo(), false);
});