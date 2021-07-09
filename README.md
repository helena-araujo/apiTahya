# <img src="./public/images/apitahya.png">

API que facilita a pesquisa e catalogação de alimentos consumidos e calcula as calorias consumidas de acordo com os objetivos da usuária. Veganas, vegetarianas, pessoas com intolerâncias, alergias e diabetes podem identificar o que vão consumir e o que consumiram.

## Clonando e rodando este projeto

``` bash
git clone https://github.com/helena-araujo/apiTahya.git
cd apiTahya
npm install
npm start
```

## Rotas

### GET /

Rota que retorna a apresentação da API.
HTTP 200 OK

### POST /users/signup
Rota que cria novo usuário.
HTTP 201 CREATED

### POST /users/signin
Rota que autoriza usuário cadastrado.
HTTP 200 OK

### GET /users/myaccount
Rota que retorna os detalhes sobre o usuário autenticado.
HTTP 200 OK 

### PUT /users/myaccount
Rota que atualiza os detalhes da conta do usuário autenticado.
HTTP 200 OK

### PUT /users/signinoptions/password
Rota que atualiza a senha da conta do usuário autenticado.
HTTP 200 OK

### DELETE /users/deleteaccount
Rota que deleta a conta do usuário autenticado.
HTTP 204 NO CONTENT

### POST /products/myconsume
Rota que registra um produto privado para o usuário autenticado.
HTTP 200 OK

### GET /products/myconsume
Rota que retorna todos os produtos cadastrados do usuário autenticado.
HTTP 200 OK

### POST /products/public
Rota que registra um produto público.
HTTP 200 OK

### GET /products/public
Rota que retorna lista de todos os produtos cadastrados como público.
HTTP 200 OK

### PATCH /products/:id
Rota que atualiza as propriedades de um produto pelo seu id, requerendo a autorização do usuário dono.
HTTP 200 OK

### DELETE /products/:id
Rota que remove um produto pelo seu id, requerendo a autorização do usuário dono.
HTTP 200 OK

# Autora

Helena de Araújo <helenadearaujo98@gmail.com>  
License GNU 3.0