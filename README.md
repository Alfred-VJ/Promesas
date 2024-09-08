# Promesas en JavaScript
## ¿Qué es una promesa?

Una **promesa** en JavaScript es un objeto que representa el resultado eventual de una operación asíncrona. Las promesas pueden estar en uno de los siguientes tres estados:

1. **Pending (pendiente):** La operación aún no se ha completado.
2. **Fulfilled (resuelta):** La operación se ha completado con éxito y ha devuelto un valor.
3. **Rejected (rechazada):** La operación ha fallado y ha devuelto un error.

## Creación de una promesa

Para crear una promesa, se utiliza el constructor `Promise`. Este constructor toma una función que tiene dos parámetros: `resolve` y `reject`. Estos son métodos que se deben llamar para cambiar el estado de la promesa a **fulfilled** o **rejected**.

```javascript
const promesa = new Promise((resolve, reject) => {
  const exito = true;

  if (exito) {
    resolve("Operación exitosa");
  } else {
    reject("Ocurrió un error");
  }
});
```

## Uso de promesas: `.then()` y `.catch()`

- El método `.then()` se utiliza para manejar el resultado de una promesa resuelta.
- El método `.catch()` se utiliza para manejar errores si la promesa es rechazada.

```javascript
promesa
  .then((resultado) => {
    console.log(resultado); // "Operación exitosa"
  })
  .catch((error) => {
    console.error(error); // "Ocurrió un error"
  });
```

## Ejemplo de operación asíncrona con `setTimeout`

Aquí un ejemplo que simula una operación asíncrona utilizando `setTimeout`:

```javascript
const promesaConTiempo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Se resolvió después de 2 segundos");
  }, 2000);
});

promesaConTiempo
  .then((resultado) => {
    console.log(resultado); // "Se resolvió después de 2 segundos"
  })
  .catch((error) => {
    console.error(error);
  });
```

## Encadenamiento de promesas

Las promesas permiten encadenar operaciones asíncronas. Puedes devolver una nueva promesa dentro de `.then()` para ejecutar varias promesas secuencialmente.

```javascript
const primeraPromesa = new Promise((resolve, reject) => {
  resolve("Primera promesa resuelta");
});

primeraPromesa
  .then((resultado) => {
    console.log(resultado); // "Primera promesa resuelta"
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Segunda promesa resuelta después de 2 segundos");
      }, 2000);
    });
  })
  .then((resultado) => {
    console.log(resultado); // "Segunda promesa resuelta después de 2 segundos"
  })
  .catch((error) => {
    console.error(error);
  });
```

## Métodos útiles para trabajar con promesas

### `Promise.all()`

`Promise.all()` permite ejecutar múltiples promesas en paralelo y esperar a que todas se resuelvan o a que alguna se rechace. Devuelve un array con los resultados de todas las promesas resueltas.

```javascript
const promesa1 = Promise.resolve("Promesa 1 resuelta");
const promesa2 = Promise.resolve("Promesa 2 resuelta");

Promise.all([promesa1, promesa2])
  .then((resultados) => {
    console.log(resultados); // ["Promesa 1 resuelta", "Promesa 2 resuelta"]
  })
  .catch((error) => {
    console.error(error);
  });
```

### `Promise.race()`

`Promise.race()` devuelve el resultado de la primera promesa que se resuelva o rechace, sin esperar a que todas terminen.

```javascript
const promesaRapida = new Promise((resolve) => setTimeout(resolve, 100, "Promesa rápida"));
const promesaLenta = new Promise((resolve) => setTimeout(resolve, 200, "Promesa lenta"));

Promise.race([promesaRapida, promesaLenta])
  .then((resultado) => {
    console.log(resultado); // "Promesa rápida"
  });
```

## Convertir funciones con callbacks a promesas

Si trabajas con funciones que usan callbacks, puedes convertirlas a promesas fácilmente con el constructor `Promise`.

### Ejemplo con `setTimeout` y callbacks

Función tradicional con callback:

```javascript
function esperaConCallback(callback) {
  setTimeout(() => {
    callback("Operación completada");
  }, 1000);
}
```

Reescribiendo la función usando promesas:

```javascript
function esperaConPromesa() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Operación completada");
    }, 1000);
  });
}

esperaConPromesa().then((resultado) => {
  console.log(resultado); // "Operación completada"
});
```

## Resumen

- **Promesas** son una manera de manejar operaciones asíncronas de manera más clara y manejable.
- Tienen tres estados: **pending**, **fulfilled**, y **rejected**.
- Los métodos `.then()` y `.catch()` se utilizan para manejar el resultado exitoso o el error de una promesa.
- Herramientas como `Promise.all()` y `Promise.race()` facilitan el manejo de múltiples promesas.
- Es posible convertir funciones con callbacks a promesas para un código más legible.

---

Las promesas en JavaScript son esenciales para escribir código asíncrono moderno, facilitando el manejo de tareas como solicitudes HTTP, operaciones con archivos y más.
