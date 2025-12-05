# Proyecto Final Node 2025-02

Descripción breve del proyecto.

## Instalación


npm install


## Lanzar la aplicación


npm start o npm run dev


## Uso

para ver los productos http://localhost:3002/products

pare ver un producto http://localhost:3002/products/:id , el id es un string que lo pone firebase.

usamos JWT para generarar el token que dura 1 hora, hay que hacer http://localhost:3002/users/login y pasarle en un POST el usuario
y nos devuelve el token. { "email": "ricardo@mail.com" , "password": "gus123" }

para consultar los usuarios, solo pued el admin, con http://localhost:3002/users/TOKEN deben verse todos lo usuarios haciendo
un POST  y poniendo en Auth --> Bearer el TOKEN

para crear un producto http://localhost:3002/products/crear  hacer un POST y pasarle un producto en formato JSON en el body