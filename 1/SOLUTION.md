# Solución propuesta:

## Parte 1:

Al finalizar la ejecución tendremos los siguientes valores almacenados:

```
rgb = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
    white: "#FFFFFF",
    black: "#000000"
};

wb = {
    white: "#FFFFFF",
    black: "#000000"
};

colors === rgb; // true
```

En el caso de la variable `colors` esta es una referencia a la variable `rgb`, así que tienen el mismo contenido

## Parte 2:

Añadiendo un objeto vacío como target de la llamada del `Object.assign` podemos conservar los valores originales de las variables.

## Parte 3:

Para hacer este código compatible con navegadores antiguos debemos de hacer uso 
de algún polyfill, en la solución propuesta presente en los ficheros `object-assign-polyfill.js` obtenido de la [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill) (aunque hay muchísimos otros polyfills accesibles en la web) y que se puede comprobar su correcto funcionamiento cargando el fichero `web.html`