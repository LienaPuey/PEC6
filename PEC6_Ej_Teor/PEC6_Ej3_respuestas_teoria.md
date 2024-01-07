# Ejercicio 3 – Preguntas teóricas sobre interceptores
## 1. ¿Qué son los interceptores?
Son clases que permiten preprocesar y manipular las solicitudes HTTP. Sirven para agregar o eliminar encabezados, para modificar el cuerpo de las solicitudes, para manejar errores antes de que lleguen a la aplicación o para manipular eventos.

## 2. Analiza la siguiente cadena de operadores de RxJS, explica cada uno de los pasos que se están desarrollando y explica en qué caso usarías este código:
`this.wines$ = this.searchSubject`: se asigna el observable.

`.startWith(this.searchTerm)`: emite el valor de `searchTerm` antes de que se emitan otros valores del observable.

`.debounceTime(300)`: espera 3 segundos antes de que se emita el valor.

`.distinctUntilChanged()`:  garantiza que solo se emitan valores si son diferentes al último valor emitido.

`.merge(this.reloadProductsList)`: combina los dos observables en uno solo.

`.switchMap((query) => this.wineService.getWine(this.searchTerm));`: `switchMap` cambia de observable y se llama al servicio para recuperar el vino.