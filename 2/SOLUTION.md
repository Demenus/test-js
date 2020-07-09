# Solución propuesta:

## Parte 1:

El valor impreso por consola sería un `5` repetido cinco veces.

Esto se debe a que en la versión original del código el scope de la variable `i`  no es el mismo que en los callback asociados a los diferentes `setTimeout`, por eso cuando dicho callback se ejecuta va a tomar el valor de `i` asociada al contexto global que tras 5 iteraciones dentro del `for` tendrá por valor `5`