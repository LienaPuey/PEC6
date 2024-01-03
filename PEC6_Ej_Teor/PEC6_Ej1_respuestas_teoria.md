# Ejercicio 1 – Preguntas teóricas sobre servicios Angular 
## 1. ¿Cuál es la función de los componentes y servicios? (i.e. cuándo se debe utilizar cada uno de ellos)
* Los **componentes** son la unidad básica de construcción. Cada componente encapsula una parte específica de la interfaz y su lógica asociada. Se utilizan para dividir la interfaz de usuario en partes reutilizables y manejables.

* Los **servicios** encapsulan la lógica de negocio y la manipulación de datos. Se utilizan para compartir datos y funcionalidades entre componentes. 

## 2.¿Qué es la <<inyección de dependencias>>? ¿Para qué sirve el decorador @Injectable?
Es el proceso de suministrar instancias de clases o servicios a los componentes, directivas, servicios u otros objetos, en lugar de que estos objetos creen sus propias dependencias. 
El decorador `@Injectable` se utiliza para establecer una clase como un servicio que puede inyectarse en otros componentes, servicios, o cualquier otra clase que lo requiera.

## 3. Explica los siguientes conceptos de la programación reactiva que se usan en RxJS:
* **Observable**: Representa una secuencia de eventos a lo largo del tiempo. Emite estos eventos y permite que otros observadores reaccionen a ellos.
* **Subscription**: Establece una conexión entre un Observable y un observador, permitiendo que el observador reciba notificaciones de eventos emitidos por el Observable.
* **Operators**: Son funciones que se utilizan para manipular los datos que fluyen a través de un Observable.
* **Subject**: Es una implementación de Observable que permite tanto emitir eventos como suscribirse a ellos. Son útiles para la comunicación entre componentes.
* **Schedulers**: Permiten especificar cuándo y en qué hilo de ejecución deben ocurrir las operaciones de un Observable.

## 4. ¿Cuál es la diferencia entre promesas y observables?
Las promesas manejan una única operación asíncrona y resuelven o rechazan con un solo valor. Los observables pueden manejar múltiples valores a lo largo del tiempo. Pueden emitir una secuencia continua de eventos.

## 5. ¿Cuál es la función de la tubería (pipe) async?
Se utiliza en plantillas para trabajar con Observables directamente. Sirve para suscribirse automáticamente a un Observable desde una plantilla y manejar la actualización de la interfaz de usuario cuando el valor del Observable cambia.
