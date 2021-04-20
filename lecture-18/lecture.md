# Lecture 18

### AWS S3

```js
const AWS = require('aws-sdk');
const config = require('config');

const options = {
  accessKeyId: config.get('aws').accessKeyId,
  secretAccessKey: config.get('aws').secretAccessKey,
};

AWS.config.update(options);

module.exports = AWS;

```

```js
const config = require('config');
const fs = require('fs');
const path = require('path');
const AWS = require('../libs/aws');

const s3 = new AWS.S3();

module.exports = (folder, file) => new Promise((resolve, reject) => {
  const timestamp = +new Date();
  const filename = `${folder}/${timestamp}${path.extname(file.name)}`;

  s3.upload(
    {
      Bucket: config.get('aws').bucketName,
      Key: filename,
      Body: fs.createReadStream(file.path),
    },
    (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data.Location);
    },
  );
});
```

```js
exports.updateUserPhoto = async (ctx) => {
  await uploadS3(config.get('aws').userFolder, ctx.request.files.photo);
  ctx.body = {
    success: true,
  };
};
```

### Swagger

```yaml
get:
  summary: Profie
  description: Sign in user and return user object with JWT tokens
  tags:
    - Users
  security:
    - ApiKeyAuth: []
  responses:
    "200":
      content:
        application/json:
          description: User object
          schema:
            type: object
            properties:
              user:
                type: object
                properties:
                  email:
                    type: string
                    description: Email of user
                  photo:
                    type: string
                    description: User photo
                  fname:
                    type: string
                    description: First name of user
                  lname:
                    type: string
                    description: Last name of user
                  isActive:
                    type: boolean
                    description: User activity flag
                  categoryId:
                    type: number
                    description: User category id
    404 :
      $ref: "../../errors/404.error.yml"
    default:
      $ref: "../../errors/error.yml"

```

```yaml
post:
  summary: Sign In
  description: Sign in user and return user object with JWT tokens
  tags:
    - Users
  security:
  requestBody:
    content:
      application/json:
        schema:
          type: object
          properties:
            email:
              type: string
              description: user email
            password:
              type: string
              description: user password
  responses:
    "200":
      content:
        application/json:
          description: User object with JWT tokens
          schema:
            type: object
            properties:
              user:
                type: object
                properties:
                  email:
                    type: string
                    description: Email of user
                  fname:
                    type: string
                    description: First name of user
                  lname:
                    type: string
                    description: Last name of user
                  isActive:
                    type: boolean
                    description: User activity flag
                  categoryId:
                    type: number
                    description: User category id
                  tokens:
                    type: object
                    properties:
                      accessToken:
                        type: string
                        description: User access token
                      accessTokenExpirationDate:
                        type: number
                        description: User access token expiration timestamp
                      refreshToken:
                        type: string
                        description: User refresh token
                      refreshTokenExpirationDate:
                        type: number
                        description: User refresh token expiration timestamp
    404 :
      $ref: "../../errors/404.error.yml"
    default:
      $ref: "../../errors/error.yml"
```

```yaml
openapi: 3.0.0
info:
  title: My Koa Test project
  description: Made with love❤️️️️
  version: 0.0.1
  host: 
tags:
  - name: Users
paths:
  /users/sign-in:
    $ref: methods/users/signIn.yml
  /users/profile:
    $ref: methods/users/profile.yml
servers:
  - url: /
components:
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: Authorization
```

```js
app.use(serve('docs'));
app.use(koaSwagger({
  routePrefix: '/docs',
  hideTopbar: true,
  swaggerOptions: {
    url: 'http://localhost:3000/docs.yml',
  },
}));
```