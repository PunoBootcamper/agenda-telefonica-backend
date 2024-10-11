# clonar el repositorio
# ejecutar npm install
# ejecutar npm start para iniciar o
# ejecutar npm run dev

# Pruebas
GET  http://localhost:4000/api/persons
devuelve la lista de contactos

------------------
delete contact

DELETE http://localhost:4000/api/persons/id
Buscar por Id y elimina

------------------
post contact
POST  http://localhost:4000/api/persons

body:

{
  "name": "John dsoe",
  "number": "123-4s56-7890" 
}

-------------------
get info
GET http://localhost:4000/info