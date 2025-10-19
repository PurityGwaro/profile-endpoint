### Stage 0 Backend Task — Profile API

This is my Stage 0 backend task built using **Node.js** and **Express**.  
It exposes a `/me` endpoint that returns my profile information and a random cat fact fetched from the [Cat Facts API](https://catfact.ninja/fact).

---

## Endpoint

### `GET /me`

#### Example Response

```json
{
  "status": "success",
  "user": {
    "email": "puritygwaro99@gmail.com",
    "name": "Purity Gwaro",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-19T12:00:00.000Z",
  "fact": "Cats can rotate their ears 180 degrees."
}
```
### Starting the app locally
npm install

list of dependencies : 
- dotenv
- express
- cors

Start app with `node index.js`
### Hosted link
Hosted at:
