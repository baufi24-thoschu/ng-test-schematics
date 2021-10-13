# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build

npm start

npm publish
```

In extern project:

```bash
npm link ../my-simple-component

ng g ng-test-schematics:ng-test-schematics --fileName=test.js
```

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "schematics-test": {
      "root": "",
      "sourceRoot": "src",
      "projectType": "application",
      "prefix": "app",
      "schematics": {
        "my-simple-component:my-simple-component": {
          "fileName": "test.js"
        }
      },
      "architect": {
        // ...
      }
    },
    "schematics-test-e2e": {
    
    }
  },
  "defaultProject": "schematics-test"
}
```

That's it!
