# Typescript

[https://www.typescriptlang.org/](https://www.typescriptlang.org/)

TypeScript is Typed JavaScript. TypeScript adds types to JavaScript to help you speed up the development by catching errors before you even run the JavaScript code.

Here is best tutorial for beginners: [https://www.typescripttutorial.net/](https://www.typescripttutorial.net/)

## How to use?

`npm install -D typescript tslint`

- Create `tsconfig.json` in root directory

```
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"]
}
```

- Create `tslint.json` with initial data inside

```
{
  "defaultSeverity": "error",
  "extends": ["tslint:recommended"],
  "jsRules": {},
  "rules": {
    "no-console": false
  },
  "rulesDirectory": []
}
```

- Add compile command to package.json

```
"scripts": {
    "start": "tsc && node dist/app.js",
    ...
```

it will compile all the ts files in root directory to `dist` directory.

- Create some file with ts - like `src/app.ts` and write some typescript code inside

```
interface User {
  name: string;
  id: number;
}

const user: User = {
  username: "Ivan",
  id: 1,
};
console.log(user);

```

- Run `npm run start` :)

---

## Links

- repo: [https://github.com/IgorKurkov/typescript-examples](https://github.com/IgorKurkov/typescript-examples)

- [https://webformyself.com/urok-2-kurs-po-typescript-ts-tipy-dannyx-chast-1/](https://webformyself.com/urok-2-kurs-po-typescript-ts-tipy-dannyx-chast-1/)

- [https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript-ru](https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript-ru)

- [https://devhints.io/typescript](https://devhints.io/typescript)





