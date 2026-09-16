Combate POO con TDD

Funcionalidades

- Soldados, tanques y buques.
- Todos los combatientes pueden disparar y recibir daño.
- El soldado muere con un disparo.
- El tanque muere con dos disparos.
- El buque muere con tres disparos.
- Todos pueden consultar si continúan vivos.
- Escudos con porcentaje de reducción de daño.
- Pistola y cañón con municiones limitadas.
- Las armas sin municiones no causan daño.
- Validación de porcentajes y municiones.

Instalación
npm install

Ejecutar los tests
npm test

Verificar TypeScript
npm run typecheck

Consultar la cobertura
npm run coverage


Diseño

Combatiente contiene el comportamiento compartido por Soldado, Tanque y Buque.

Los escudos reducen el daño recibido según su porcentaje. Las armas administran su propio daño y cantidad de municiones. Se implementaron dos armas: Pistola y Canon.