import { test } from "node:test";
import assert from "node:assert/strict";
import { Tanque } from "../src/Tanque.ts";

test("el tanque resiste un disparo", () => {
  const tanque = new Tanque();

  tanque.recibirDisparo();

  assert.equal(tanque.estaVivo(), true);
});

test("el tanque muere al recibir dos disparos", () => {
  const tanque = new Tanque();

  tanque.recibirDisparo();
  tanque.recibirDisparo();

  assert.equal(tanque.estaVivo(), false);
});