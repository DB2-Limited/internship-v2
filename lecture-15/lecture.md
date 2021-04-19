# Lecture 16

- https://nodejs.org/api/crypto.html#crypto_crypto_pbkdf2sync_password_salt_iterations_keylen_digest

down

```sql
START TRANSACTION;
  ALTER TABLE "user" DROP COLUMN "password";
  ALTER TABLE "user" DROP CONSTRAINT user_email;
  ALTER TABLE "user" DROP COLUMN email;
COMMIT;
```

up

```sql
START TRANSACTION;
  ALTER TABLE "user" ADD "password" CHARACTER VARYING NOT NULL;
  ALTER TABLE "user" ADD "email" CHARACTER VARYING NOT NULL;
  ALTER TABLE "user" ADD CONSTRAINT user_email UNIQUE (email);
COMMIT;
```

```js
const { body } = ctx.request;

await validator.schema.validateAsync(body);

body.password = crypto.pbkdf2Sync(body.password, 'salt', 100000, 64, 'sha256').toString('hex');

const createUserResponse = await db.query(`INSERT INTO "user" (fname, lname, isActive, password, email)
    VALUES ('${body.fname}', '${body.lname}', ${body.active}, '${body.password}', '${body.email}') RETURNING *`);

const user = { ...createUserResponse.rows[0] };

ctx.status = 201;
ctx.body = {
  id: user.id,
  fname: user.fname,
  lname: user.lname,
  email: user.email,
};
```

# Check password

```js
const userResponse = await db.query(`SELECT * FROM "user" WHERE email = '${email}'`);

if (!userResponse.rowCount) {
  return { flag: false, message: `User with email: ${email} does not exist` };
}

const user = { ...userResponse.rows[0] };

const passwordHash = crypto.pbkdf2Sync(password, 'salt', 100000, 64, 'sha256').toString('hex');

if (user.password === passwordHash) {
  return { user, flag: true };
}

return { flag: false, message: 'Incorrect password' };
```

- http://www.passportjs.org/
- https://github.com/rkusa/koa-passport
- https://www.npmjs.com/package/passport-local
- https://www.npmjs.com/package/passport-jwt

```js
const passport = require('koa-passport');

passport.use(require('./jwtStrategy'));
passport.use(require('./localStrategy'));

module.exports = passport;
```

```js
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

const { UserDB } = require('../../models/user/UserDB');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: 'super_secret',
};

module.exports = new JwtStrategy(opts, (jwtPayload, done) => {
  if (jwtPayload.expiresIn <= new Date().getTime()) {
    done({ isPassport: true, message: 'Expired access token.' }, false);
  }

  UserDB.getUserById(jwtPayload.id)
    .then((user) => done(null, user))
    .catch((err) => done({ isPassport: true, message: err.message }, false));
});
```

```js
const LocalStrategy = require('passport-local');
const jwt = require('jwt-simple');

const { UserDB } = require('../../models/user/UserDB');

const opts = {
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
  session: false,
};

module.exports = new LocalStrategy(opts, async (req, email, password, done) => {
  UserDB.checkPassword(email, password)
    .then((checkPasswordResponse) => {
      if (!checkPasswordResponse.flag) {
        return done({ message: checkPasswordResponse.message }, false);
      }

      const { user } = checkPasswordResponse;

      const accessTokenPayload = {
        id: user.id,
        expiresIn: new Date().setTime(new Date().getTime() + 200000),
      };

      const refreshTokenPayload = {
        email: user.email,
        expiresIn: new Date().setTime(new Date().getTime() + 1000000),
      };

      const accessToken = jwt.encode(accessTokenPayload, 'super_secret');
      const refreshToken = jwt.encode(refreshTokenPayload, 'super_secret_refresh');

      user.tokens = { accessToken, refreshToken };

      return done(null, user);
    })
    .catch((err) => done({ message: err.message }, false));
});
```

In app.js:

```js
const passport = require('../libs/passport');

module.exports = passport.initialize();
```

Sign-in router

```js
exports.auth = async (ctx, next) => {
  await passport.authenticate('local', (err, user) => {
    if (user) {
      ctx.body = user.getAuthData();
    } else {
      ctx.status = 400;
      if (err) {
        ctx.body = { error: err };
      }
    }
  })(ctx, next);
};
```
