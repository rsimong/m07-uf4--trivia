# M07-UF4-PR01
## Guía para el alumno
El alumno debe de entregar la práctica enunciada en este documento antes del cierre programado en el calendario.

Los entregables son:

- Carpeta de la práctica
> M07-UF4-PR01-“username”<br/>
> “username” = nombre de usuario del alumno en la plataforma<br/>
> Ejemplo: M07-UF4-PR01-garciafloresraul
- La carpeta del ejercicio contendrá los ficheros necesarios del ejercicio.

Se debe realizar la práctica por parejas. Cada pareja tendrá asignada unas tareas, por lo tanto, cada pareja tendrá una nota individual, y a parte, también habrá tareas comunes.

Si no se obtiene un mínimo de un 4 sobre 10 en esta entrega, no se podrá hacer media con el examen y se deberá recuperar la práctica en extraordinaria.

_Es necesario superar una entrevista de práctica mostrando el correcto funcionamiento de la aplicación, para poder tener una nota._

## Ejercicio #1 Questions DB
Crea una aplicación que podrá obtener preguntas de un servicio web externo. Si el usuario está logueado, el resultado de la búsqueda de las preguntas se guardará en la BBDD (MongoDB). Se podrá consultar todas las búsquedasy las preguntas de varias formas. Si el usuario no está logueado, se podrán obtener preguntas del servicio externo, pero no se guardarán en la BBDD.

El servicio externo usados será la API: https://opentdb.com/api_config.php

### BBDD
Tendremos 3 colecciones:

- **Usuarios** - Cada usuario tendrá los campos: username, password (se tiene que encriptar).
- **Búsquedas** - Cada búsqueda tendrá los campos: fecha y hora de la búsqueda, el id del usuario que realizó la búsqueda.
- **Preguntas** - Cada pregunta tendrá los campos: todos los campos que recibimos del servicio externo, más el id de la búsqueda.

### Requisitos técnicos
_Cuando hablamos de CRUD, recordad que se definen las acciones: crear, actualizar, eliminar, obtener una lista y obtener un elemento._

Un desarrollador deberá crear el CRUD de preguntas, la búsqueda avanzada de preguntas por categoría, tipo y por dificultad, el registro, el login de un usuario (con el middleware de comprobación del token).

Otro desarrollador deberá crear el CRUD y la creación de búsquedas y sus preguntas a través del servicio externo, y la búsqueda avanzada de búsquedas por rango de fechas.

Tened en cuenta que ningún CRUD u obtención de la BBDD se podrá hacer sin estar logueado, solo se podrá obtener preguntas del servicio externo(pero estas no deberán guardarse).

### Puntuación
La puntuación se dividirá de la siguiente forma:

- Puntuación compartida:
  - (``0,5p``) BBDD correcta.
  - (``0,5p``) \*Uso de Git.
  - (``0,5p``) \*Uso de Postman (crear colecciones de URLs y crear documentación de la API).
- Puntuación del desarrollador 1:
  - (``2p``) CRUD preguntas.
  - (``2p``) Registro, login y middleware
  - (``2p``) Búsqueda avanzada de preguntas.
  - (``1,5p``) Seguimiento semanal (0,5 cada seguimientodías: 22 o 23, 29 o 30, y 6 o 7).
  - (``1p``) \*Calidad del códigoy separación en servicios, controladores, etc.
- Puntuación del desarrollador 2:
  - (``2p``) CRUD de búsquedas.
  - (``2p``) Creación de búsquedas y sus preguntas usando el servicio externo.
  - (``2p``) Búsqueda avanzada de búsquedas.
  - (``1,5p``) Seguimiento semanal (0,5 cada seguimientodías: 22 o 23, 29 o 30, y 6 o 7).
  - (``1p``) \*Calidad del código y separación en servicios, controladores, etc.
  
Los apartados marcados con un \* no se contarán a menos que se obtenga un mínimo de 5 en los demás puntos.
