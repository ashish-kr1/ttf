# In ttf ( frontend in Angular7)
Having App component. Display component is (app.component.html) and its .ts file is (app.component.ts) where I call the service.ts file to send data to backend.
No library is used in frontend.
Following are the screenshots link of test case :-
1. http://prntscr.com/nv0o50 when number is 1.
2. http://prntscr.com/nv0oci when number is 6.
3. http://prntscr.com/nv0onf when number is 200.
4. http://prntscr.com/nv0tcp when number is in -ve. It won't send request to backend and it shows error
5. http://prntscr.com/nv0vjv when number is 0 . And it will ask to enter number geater than 0.
6. http://prntscr.com/nv0xy6 when number exceeds then the length of words it will show error.

# In ttb (backend in Node.js)
One packet manager used i.e. node-fetch npm to fetch the .txt file. Which is implemented in controller.js. It takes number(thorugh params) from routes file through post method and perform action in controller.
* main.js is the main file from where server start.


# Ttf

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
