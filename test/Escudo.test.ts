import { test } from "node:test";
import assert from "node:assert/strict";
import { Escudo } from "../src/Escudo.ts";
import { Soldado } from "../src/Soldado.ts";
import { Tanque } from "../src/Tanque.ts";
import { Buque } from "../src/Buque.ts";

test("un escudo del 50 por ciento reduce el daño a la mitad", () => {
  const escudo = new Escudo(50);

  assert.equal(escudo.reducirDanio(100), 50);
});

test("el soldado puede usar un escudo", () => {
  const soldado = new Soldado();
  soldado.equiparEscudo(new Escudo(50));

  soldado.recibirDisparo();
  assert.equal(soldado.estaVivo(), true);

  soldado.recibirDisparo();
  assert.equal(soldado.estaVivo(), false);
});

test("el tanque puede usar un escudo", () => {
  const tanque = new Tanque();
  tanque.equiparEscudo(new Escudo(50));

  tanque.recibirDisparo();
  tanque.recibirDisparo();
  tanque.recibirDisparo();
  assert.equal(tanque.estaVivo(), true);

  tanque.recibirDisparo();
  assert.equal(tanque.estaVivo(), false);
});

test("el buque puede usar un escudo", () => {
  const buque = new Buque();
  buque.equiparEscudo(new Escudo(50));

  for (let disparo = 0; disparo < 5; disparo++) {
    buque.recibirDisparo();
  }

  assert.equal(buque.estaVivo(), true);

  buque.recibirDisparo();
  assert.equal(buque.estaVivo(), false);
});

test("no permite un porcentaje de escudo negativo", () => {
  assert.throws(
    () => new Escudo(-1),
    /El porcentaje debe estar entre 0 y 100/
  );
});

test("no permite un porcentaje de escudo mayor a 100", () => {
  assert.throws(
    () => new Escudo(101),
    /El porcentaje debe estar entre 0 y 100/
  );
});