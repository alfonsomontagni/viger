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