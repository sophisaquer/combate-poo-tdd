import { test } from "node:test";
import assert from "node:assert/strict";
import { Pistola } from "../src/Pistola.ts";
import { Canon } from "../src/Canon.ts";
import { Soldado } from "../src/Soldado.ts";
import { Tanque } from "../src/Tanque.ts";

test("la pistola consume una munición al disparar", () => {
  const pistola = new Pistola(2);

  assert.equal(pistola.disparar(), 100);
  assert.equal(pistola.municionesRestantes(), 1);
});

test("un arma sin municiones no hace daño", () => {
  const pistola = new Pistola(1);

  pistola.disparar();

  assert.equal(pistola.disparar(), 0);
  assert.equal(pistola.municionesRestantes(), 0);
});

test("el cañón realiza más daño que la pistola", () => {
  const canon = new Canon(1);

  assert.equal(canon.disparar(), 200);
});

test("un combatiente puede equipar y usar un cañón", () => {
  const atacante = new Soldado();
  const objetivo = new Tanque();

  atacante.equiparArma(new Canon(1));
  atacante.dispararA(objetivo);

  assert.equal(objetivo.estaVivo(), false);
});

test("un combatiente no hace daño cuando su arma queda sin municiones", () => {
  const atacante = new Soldado();
  const primerObjetivo = new Soldado();
  const segundoObjetivo = new Soldado();

  atacante.equiparArma(new Pistola(1));
  atacante.dispararA(primerObjetivo);
  atacante.dispararA(segundoObjetivo);

  assert.equal(primerObjetivo.estaVivo(), false);
  assert.equal(segundoObjetivo.estaVivo(), true);
});

test("no permite municiones negativas", () => {
  assert.throws(
    () => new Pistola(-1),
    /Las municiones deben ser un número entero no negativo/
  );
});

test("no permite municiones decimales", () => {
  assert.throws(
    () => new Pistola(1.5),
    /Las municiones deben ser un número entero no negativo/
  );
});