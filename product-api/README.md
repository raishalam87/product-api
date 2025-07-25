# Product API

### Tech Stack
Node.js, Express.js

### How to Run
```bash
npm install
npm start
```

### Endpoints
- GET `/products`
- GET `/products/:id`
- GET `/products?category=Apparel`
- POST `/products`

### Sample curl
```bash
curl http://localhost:3000/products
curl http://localhost:3000/products/1
curl -X POST -H "Content-Type: application/json" -d '{"id":4,"name":"Cap","price":12.99,"category":"Apparel"}' http://localhost:3000/products
```
