# Lecture 13

## Vue Router

```js
import { createRouter, createWebHistory } from 'vue-router';

import Profile from '../views/Profile.vue';

const routes = [
  {
    path: '/',
    name: 'prifile',
    component: Profile,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```

```html
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
```

```js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');

```

## HTTP
### HTTP Interaction Design

* `GET` and POST must not be used to tunnel other request `methods`
* `GET` must be used to retrieve a representation of a resource
* `HEAD` should be used to retrieve response headers
* `PUT` must be used to both insert and update a stored resource
* `POST` must be used to create a new resource in a collection
* `DELETE` must be used to remove a resource from its parent
* `OPTIONS` should be used to retrieve metadata that describes a resource’s available interactions

### Response Status Codes

* `200 ("OK")` should be used to indicate nonspecific success
* `200 ("OK")` must not be used to communicate errors in the response body
* `201 ("Created")` must be used to indicate successful resource creation
* `202 ("Accepted")` must be used to indicate successful start of an asynchronous action
* `204 ("No Content")` should be used when the response body is intentionally empty
* `301 ("Moved Permanently")` should be used to relocate resources
* `302 ("Found")` should not be used
* `303 ("See Other")` should be used to refer the client to a different URI
* `304 ("Not Modified")` should be used to preserve bandwidth
* `307 ("Temporary Redirect")` should be used to tell clients to resubmit the request to another URI
* `400 ("Bad Request")` may be used to indicate nonspecific failure
* `401 ("Unauthorized")` must be used when there is a problem with the client’s credentials
* `403 ("Forbidden")` should be used to forbid access regardless of authorization state
* `404 ("Not Found")` must be used when a client’s URI cannot be mapped to a resource
* `405 ("Method Not Allowed")` must be used when the HTTP method is not supported
* `406 ("Not Acceptable")` must be used when the requested media type cannot be served
* `409 ("Conflict")` should be used to indicate a violation of resource state
* `412 ("Precondition Failed")` should be used to support conditional operations
* `415 ("Unsupported Media Type")` must be used when the media type of a request’s payload cannot be processed
* `500 ("Internal Server Error")` should be used to indicate API malfunction

## Project structure review
* https://vuejs.org/v2/style-guide/

* https://vuejs.org/v2/style-guide/#Component-instance-options-order-recommended


## API service

* https://medium.com/@zitko/structuring-a-vue-project-authentication-87032e5bfe16

```js
import axios from 'axios';

class ApiService {
  constructor() {
    this.http = axios;
    this.http.defaults.baseURL = 'http://localhost:3005';
  }

  get(url) {
    return this.http.get(url);
  }

  post(url, body) {
    return this.http.post(url, body);
  }
}

export default new ApiService();

```

## CORS
CORS is a security mechanism that allows a web page from one domain or Origin to access a resource with a different domain (a cross-domain request). CORS is a relaxation of the same-origin policy implemented in modern browsers. Without features like CORS, websites are restricted to accessing resources from the same origin through what is known as same-origin policy.

* koa-cors


