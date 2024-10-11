# Phonebook API

Este proyecto es una API RESTful creada con [Express](https://expressjs.com/), que actúa como backend para una agenda telefónica. Permite realizar operaciones CRUD (Crear, Leer y Eliminar) sobre los contactos almacenados.

## Instalación

Para clonar este repositorio y ponerlo en funcionamiento, sigue los siguientes pasos:

1. **Clonar el repositorio:**

   ```bash
   git clone <URL del repositorio>
   cd <nombre-del-repositorio>
   ```

2. **Instalar dependencias:**

    Instala las dependencias del proyecto usando ``npm``:
    ```bash
    npm install
    ```
3. **Iniciar la aplicación:**

    Para iniciar el servidor de manera convencional, ejecuta:

    ```bash
    npm start
    ```

    Para un entorno de desarrollo con reinicio automático al guardar cambios:

    ```bash
    npm run dev
    ```

## Endpoints

### Obtener lista de contactos

**GET** ``/api/persons``

Devuelve una lista de todos los contactos guardados en la agenda telefónica en formato JSON.

**Ejemplo de respuesta:**

```json
[
  { "id": 1, "name": "Arto Hellas", "number": "040-123456" },
  { "id": 2, "name": "Ada Lovelace", "number": "39-44-5323523" },
  { "id": 3, "name": "Dan Abramov", "number": "12-43-234345" },
  { "id": 4, "name": "Mary Poppendieck", "number": "39-23-6423122" }
]
```

### Obtener información de la API

**GET** ``/info``

Muestra información sobre la cantidad de contactos almacenados en la agenda y la fecha en la que se procesó la solicitud.

**Ejemplo de respuesta:**

```html
<p>Phonebook has info for 4 people</p>
<p>Request received at Sun Oct 11 2024 12:45:17 GMT+0200</p>
```

### Obtener un contacto específico

**GET** ``/api/persons/:id``

Devuelve un solo contacto basado en el ``id`` proporcionado. Si el contacto no existe, se responde con el código de estado 404.

**Ejemplo de solicitud:**

```bash
GET http://localhost:4000/api/persons/2
```

**Ejemplo de respuesta:**

```json
{
  "id": 2,
  "name": "Ada Lovelace",
  "number": "39-44-5323523"
}
```

### Eliminar un contacto

**DELETE** ``/api/persons/:id``

Elimina el contacto correspondiente al ``id`` proporcionado.

**Ejemplo de solicitud:**

```bash
DELETE http://localhost:4000/api/persons/3
```

**Respuesta**: 204 No Content (si la eliminación fue exitosa).

### Añadir un nuevo contacto

**POST** ``/api/persons``

Permite añadir un nuevo contacto a la agenda telefónica. El cuerpo de la solicitud debe contener los campos ``name`` y ``number``. Si el nombre ya existe o algún campo está vacío, se responderá con un error.

**Ejemplo de solicitud:**

```bash
POST http://localhost:4000/api/persons
```

**Cuerpo:**

```json
{
  "name": "John Doe",
  "number": "123-456-7890"
}
```
**Ejemplo de respuesta:**

```json
{
  "id": 5,
  "name": "John Doe",
  "number": "123-456-7890"
}
```

### Errores comunes

- Si el nombre o el número están vacíos, se devuelve un error 400:

```json
{ "error": "name or number is missing" }
```

- Si el nombre ya existe en la agenda, se devuelve un error 400:

```json
{ "error": "name must be unique" }
```

## Middlewares utilizados

- **express.json()**: Para analizar solicitudes con datos en formato JSON.
- **morgan**: Para registrar solicitudes HTTP en la consola.

## Scripts disponibles

- ``npm start``: Inicia el servidor en modo de producción.
- ``npm run dev``: Inicia el servidor en modo de desarrollo, reiniciándolo automáticamente ante cambios.

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- [Express](https://www.npmjs.com/package/express): Framework para Node.js.
- [Morgan](https://www.npmjs.com/package/morgan): Middleware para registrar solicitudes HTTP.

## Contribuciones

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama para tu feature: ``git checkout -b feature/nueva-feature``.
3. Realiza tus cambios y confirma tus commits: ``git commit -m 'Añadida nueva-feature'``.
4. Envía tus cambios: ``git push origin feature/nueva-feature``.
5. Abre un Pull Request.

## Contacto

Para cualquier duda o sugerencia, no dudes en ponerte en contacto con los desarrolladores del proyecto.
