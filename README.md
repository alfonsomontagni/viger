git clone ...
git flow init
ng new viger --create-application=false 
ng g application withreact  --style=scss --routing=true 
ng g application withreact001 --style=scss --routing=true 
ng s --project=withreact --o
ng s --project=withreact001 --o
  "jsx" : "react"
    "strict": false,

    ng s --project=withreact --o  ok

    ng g application withreact002 --style=scss --routing=true 
    ng g c components/view-with-r01 --project=withreact002 

   //other dir:  create react with vite npm create vite@latest

    ng g c components/view-lezione-c1s11  --project=withreact002 
     ng g c components/view-lezione-c1s12  --project=withreact002 

npm i axios

npm install --save-dev @types/react @types/react-dom
withreact002 scss in css
npx tailwindcss init -p

in vscode nei setting mettere unkown rule a ignore invece che warning

npm i react-router-dom@6 history@5
npm i history

npm i @heartexlabs/label-studio@1.4.0
npm i label-studio
npm i --save-dev @types/label-studio

ng g application orso --style=css --routing=true 
//ng add @ng-bootstrap/ng-bootstrap --project myProject
npm i @ng-bootstrap/ng-bootstrap@11.0.0
ng g c components/carousel  --project=orso 
npm install @angular/localize --save
npm i core-js
npm i angular-responsive-carousel //no non c'è ivy

npm install @scullyio/init @scullyio/ng-lib @scullyio/scully @scullyio/scully-plugin-puppeteer --force
ng g application scully --style=scss --routing=true 
npm install bootstrap   --prefix bootstrap5
// no lascio la 4bootstrap@5.3.1 requires a peer of @popperjs/core@^2.11.8 but none is installed. You must install peer dependencies yourself
//*no npm i @popperjs/core

ng generate module core --project=scully --dry-run
ng generate component core/header --project=scully --module=core --export   --dry-run

ng generate module shared --project=scully
ng generate component shared/footer --project=scully --module=shared --export

ng s --project=scully --o 

ng generate module contact --project=scully
ng generate component contact/contact --project=scully --module=contact --export --flat --dry-run

import { RouterModule } from '@angular/router';
 in core module

 ng generate module articles --route=articles --module=app-routing --project=scully --dry-run (genera anche il comp)


 ng generate @scullyio/init:markdown --project=scully my-blog --dry-run

 ng g application trak --style=css --routing=true 
 npm install @cds/core @clr/angular @clr/ui --save
ng generate service services/issues --project=trak --dry-run
ng generate interface models/issue --project=trak --dry-run
ng generate component components/issue-list --project=trak

 git log --graph --decorate --abbrev-commit --all --pretty=oneline

Angular Material schematics
 ng generate @angular/material:table table-prova --project=trak --dry-run 
  ng s --project=trak --o 

  ng g application materia --style=css --routing=true 

  abilitato menu npm scripts di VScode (in explorer i ...)
    ng g application materiascss --style=scss --routing=true 
    "materias": "ng serve  --project=materiascss --port=5000 --o"
estensione angular evergreen --> on modifico per ora !
[====================] 81/81 100%

 @angular-devkit/build-angular        ^15.1.4  →    ^16.1.8
 @angular/animations                  ^15.1.0  →    ^16.1.8
 @angular/cdk                         ^15.2.2  →    ^16.1.7
 @angular/cli                         ~15.1.4  →    ~16.1.8
 @angular/common                      ^15.1.0  →    ^16.1.8
 @angular/compiler                    ^15.1.0  →    ^16.1.8
 @angular/compiler-cli                ^15.1.0  →    ^16.1.8
 @angular/core                        ^15.1.0  →    ^16.1.8
 @angular/forms                       ^15.1.0  →    ^16.1.8
 @angular/localize                    ^16.1.7  →    ^16.1.8
 @angular/material                    ^15.2.2  →    ^16.1.7
 @angular/platform-browser            ^15.1.0  →    ^16.1.8
 @angular/platform-browser-dynamic    ^15.1.0  →    ^16.1.8
 @angular/router                      ^15.1.0  →    ^16.1.8
 @cds/core                             ^6.4.6  →     ^6.5.0
 @clr/angular                         ^15.7.0  →    ^15.9.0
 @clr/ui                              ^15.7.0  →    ^15.9.0
 @fortawesome/fontawesome-free         ^6.3.0  →     ^6.4.2
 @handsontable/angular                ^12.3.1  →    ^13.0.0
 @heartexlabs/label-studio             ^1.4.0  →     ^1.8.0
 @ng-bootstrap/ng-bootstrap           ^11.0.0  →    ^15.1.1
 @ngrx/effects                        ^15.4.0  →    ^16.2.0
 @ngrx/router-store                   ^15.4.0  →    ^16.2.0
 @ngrx/store                          ^15.4.0  →    ^16.2.0
 @ngrx/store-devtools                 ^15.4.0  →    ^16.2.0
 @types/jasmine                        ^4.3.1  →     ^4.3.5
 @types/lodash                      ^4.14.191  →  ^4.14.196
 @types/node                         ^18.15.5  →    ^20.4.9
 @types/react                        ^18.2.15  →   ^18.2.19
 @types/uuid                           ^9.0.1  →     ^9.0.2
 @typescript-eslint/eslint-plugin     ^5.55.0  →     ^6.3.0
 @typescript-eslint/parser            ^5.55.0  →     ^6.3.0
 bootstrap                             ^4.6.2  →     ^5.3.1
 concurrently                          ^7.6.0  →     ^8.2.0
 d3                                    ^7.8.4  →     ^7.8.5
 eslint                               ^8.36.0  →    ^8.46.0
 handsontable                         ^12.3.1  →    ^13.0.0
 jasmine-core                          ^4.5.0  →     ^5.1.0
 json-server                          ^0.17.2  →    ^0.17.3
 karma                                 ^6.4.1  →     ^6.4.2
 karma-chrome-launcher                 ^3.1.1  →     ^3.2.0
 karma-coverage                        ^2.2.0  →     ^2.2.1
 karma-jasmine-html-reporter           ^2.0.0  →     ^2.1.0
 keycloak-angular                     ^13.0.0  →    ^14.0.0
 keycloak-js                          ^21.1.1  →    ^22.0.1
 moment-timezone                      ^0.5.41  →    ^0.5.43
 postcss                              ^8.4.21  →    ^8.4.27
 rxjs                                  ~7.8.0  →     ~7.8.1
 tailwindcss                           ^3.2.7  →     ^3.3.3
 tslib                                 ^2.3.0  →     ^2.6.1
 typescript                            ~4.9.4  →     ~5.1.6
 zone.js                              ~0.12.0  →    ~0.13.1

Run ncu -u to upgrade package.json
nessun cambiamento per ora

 "node_modules/@angular/material/prebuilt-themes/indigo-pink.css",

 
html, body { height: 100%; }
body { margin: 0; font-family: Roboto, "Helvetica Neue", sans-serif; }

BrowserAnimationsModule
cdk permette
npm run materias

ng g module shared/material --flat --project=materiascss --dry-run
(exports-->)
npm run materias

media query

https://blog.angular.io/modern-css-in-angular-layouts-4a259dca9127

ng g application flash01 --style=css --routing=true 
add bulma
Add Font awesome icons
// nong add @fortawesome/angular-fontawesome
$ npm install @fortawesome/fontawesome-svg-core
$ npm install @fortawesome/free-solid-svg-icons
# See Compatibility table below to choose a correct version
$ npm install @fortawesome/angular-fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 ng s --project=flash01 --o   
 ng s --project=flash01 --o

 ng g application flash02 --style=css --routing=true 

ng g s services/flash --project=flash02 --dry-run
 ng generate module table-manager --route=table --module=app-routing --project=flash02 --dry-run (genera anche il comp)
ng g c table-manager/handsontable --project=flash02 --dry-run
npm install handsontable prob con la 12.3 version
https://forum.handsontable.com/t/gh-1292-hottablemodule-does-not-appear-to-be-an-ngmodule-class/6911

When you use a dependency that is packaged with CommonJS, it can result in larger slower applications

Starting with version 10, Angular now warns you when your build pulls in one of these bundles. If you’ve started seeing these warnings for your dependencies, let your dependency know that you’d prefer an ECMAScript module (ESM) bundle.

Here is an official documentation - Configuring CommonJS dependencies

In your angular.json file look for the build object and add

allowedCommonJsDependencies

as shown below -

"build": {
  "builder": "@angular-devkit/build-angular:browser",
  "options": {
     "allowedCommonJsDependencies": [
        "rxjs-compat",
         ... few more commonjs dependencies ... 
     ]
     ...
   }
   ...
},

@import '~handsontable/dist/handsontable.full.css';

multicurs
smart multi-cursor
multi cursor
ctrl alt down


locale
node -v
nvm ls
nvm

npm install -g @angular/cli
npm install -g npm@9.8.1
C:\Program Files\nodejs\npm.ps1

ng version
Angular CLI: 15.1.6
Node: 16.20.1
Package Manager: npm 9.8.1
OS: win32 x64

Angular: 15.2.9
... animations, cdk, common, compiler, compiler-cli, core, forms
... material, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1502.9
@angular-devkit/build-angular   15.2.9
@angular-devkit/core            15.2.9
@angular-devkit/schematics      15.1.6
@angular/cli                    15.1.6
@angular/localize               16.1.7
@schematics/angular             15.1.6
rxjs                            7.8.1
typescript                      4.9.5

JavaScript Booster

ng g c core/nav-bar --project=flash02 --dry-run

ng g application ahiero --style=css --routing=true 

angular.json 
  hiero  options  styles
              "node_modules/bulma/css/bulma.min.css",
              "node_modules/@fortawesome/fontawesome-free/css/all.css",

style.css
      /* You can add global styles to this file, and also import other style files */
    @import '~handsontable/dist/handsontable.full.css';

    .handsontable thead th{
        text-align: center;
    }

    ng g application powerbi --style=css --routing=true 
   Run `npm audit` for details.
PS D:\github_v\viger> nvm current
v16.20.1
PS D:\github_v\viger> nvm list   

    18.17.0
  * 16.20.1 (Currently using 64-bit executable)
    14.21.3
    12.22.12
PS D:\github_v\viger> nvm use 14.21.3
Now using node v14.21.3 (64-bit)
PS D:\github_v\viger> nvm list       

    18.17.0
    16.20.1
  * 14.21.3 (Currently using 64-bit executable)
    12.22.12