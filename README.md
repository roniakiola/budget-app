# Introduction

Learning React Components & Hooks with TypeScript.

In this assignment I build a rather simple but challenging budgeting app where user can add incomes and expenses to see their total account balance.
User can also transfer money to their savings account under a condition that balance never goes below zero.

This assignment was a great learning experience and I tried my best to use nested components with a focus on component re-usability. Improvements could of course still be made. 

Test it out: https://645186d878416322d8a141ba--shimmering-cendol-87adf2.netlify.app/

## Table of contents

- [Technologies](#technologies)
- [Project structure](#project-structure)
- [Getting started](#getting-started)

## Technologies

- TypeScript
- React

## Project structure
```bash
│   .gitignore
│   package.json
│   readme.md
│   tsconfig.json
│
├───public
│       index.html
│       manifest.json
│       robots.txt
│
└───src
    │   App.tsx
    │   index.tsx
    │   react-app-env.d.ts
    │
    ├───components
    │       form.tsx
    │       inputField.tsx
    │       transactionList.tsx
    │
    ├───hooks
    │       useCheckBalance.ts
    │
    ├───interfaces
    │       balanceprops.interface.ts
    │       formprops.interface.ts
    │       inputprops.interface.ts
    │       inputvalues.interface.ts
    │       listprops.interface.ts
    │
    └───views
            budgeting.tsx
```

## Getting started

1. Use <code>git clone</code> and <code>npm i</code> to install the project.
2. Refer to <code>package.json</code> for scripts to run. Use<code>npm run start</code> to run in dev mode.
