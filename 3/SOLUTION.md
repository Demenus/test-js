# Solución propuesta

Dado que se necesita una solución cross-browser podemos acudir a diferentes soluciones

## Solución 1:

Posiblemente esta sea la más developer-friendly, consiste en utilizar algún tipo de polyfill para soportar las promises, en nuestro caso se ha decidido añadir dentro del fichero `web.html` un sencillo polyfill alojado en una CDN, sin embargo hay otras formas de conseguir esto como sería por ejemplo utilizar herramientas como `babel + webpack` o algún otro bundler.

## Solución 2:

Otra forma sería reconvertir este código a un formato de callbacks con los que podríamos obterner la misma funcionalidad esperada aunque de una forma más cross-browser. Sin embargo perdemos la facilidad de uso que nos proporcionan las `Promise`.