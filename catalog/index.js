import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Bem Vinda!",
    content: pageLoader(() => import("./WELCOME.md"))
  },
  {
    title: 'SOBRE',
    pages: [
      {
        path: "pages/resume.md",
        title: 'Introdução',
        content: pageLoader(() => import('./pages/resume.md'))    
      },
      {
        path: "pages/requirement.md",
        title: 'Requisitos',
        content: pageLoader(() => import('./pages/requirement.md'))    
      },
      {
        path: "pages/dead-line.md",
        title: 'Entrega',
        content: pageLoader(() => import('./pages/dead-line.md'))    
      },
      {
        path: "pages/final.md",
        title: 'Considerações',
        content: pageLoader(() => import('./pages/final.md'))    
      }
    ]
  }
];

ReactDOM.render(
  <Catalog title="Teste técnico - Data Scientist" pages={pages} />,
  document.getElementById("catalog")
);
