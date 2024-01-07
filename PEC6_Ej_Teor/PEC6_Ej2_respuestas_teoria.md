# Ejercicio 2
## 1. ¿Cuál es la diferencia entre definir un servicio usando el decorador @Injectable o @NgModule?
`@Injectable` se utiliza para definir una clase como un servicio, se pueden crear instancias de esa clase y proporcionarlas a componentes u otros servicios mediante la inyección de dependencias, en cambio, `@NgModule` se utiliza para definir un módulo, dentro del módulo se pueden proporcionar servicios dentro del array `providers`, el servicio estará disponible para los componentes y servicios de ese mismo módulo.

## 2. ¿Qué otras opciones admiten el decorador @Injectable para la propiedad ProvidedIn? ¿Para qué sirven las otras configuraciones?
* **root**: El servicio está disponible en toda la aplicación.
* **any**: El servicio se proporciona en cualquier módulo que lo solicite explícitamente.
* **platform**: El servicio estará disponible en toda la plataforma.