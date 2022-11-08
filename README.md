# ACTIVIDAD 8. Diseño de una API con base de datos MongoDB

Esta actividad consiste en la creación de una aplicación que permite realizar una serie de acciones sobre una base de datos de MongoDB que incluye información sobre inmuebles de una finca.

## Peticiones disponibles

- **GET http://localhost:3000/api/inmuebles**: Devuelve una lista con todos los inmuebles.
- **GET http://localhost:3000/api/inmuebles/INMUEBLEID**: Devuelve un único inmueble a partir de su ID (INMUEBLEID).
- **POST http://localhost:3000/api/inmuebles**: Permite añadir un nuevo inmueble. Ejemplo con REST Client (VSCode):

        POST http://localhost:3000/api/inmuebles
        Content-Type: application/json

        {
            "piso": 3,
            "letra": "A",
            "extension": 86,
            "num_habitaciones": 3,
            "alquilado": false,
            "nombre_propietario": "María",
            "email_contacto": "maria@gmail.com"
        }

- **PUT http://localhost:3000/api/inmuebles/INMUEBLEID**: Permite modificar la información de un determinado inmueble. Ejemplo con REST Client (VSCode):

        PUT http://localhost:3000/api/inmuebles/636642deb1d989401208e725
        Content-Type: application/json

        {
            "alquilado": true
        }

- **DELETE http://localhost:3000/api/inmuebles/INMUEBLEID**: Borra un determinado inmueble.

## Ejemplo de fichero .env
*(Crear en directorio raíz del proyecto)*

    PORT=3000

    MONGO_URL="mongodb://<host>:<puerto>/<nombre_DB>"