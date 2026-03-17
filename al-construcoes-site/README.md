# A.L. Construções LTDA — Site Institucional

Site institucional desenvolvido para a empresa **A.L. Construções LTDA**.

## Páginas

| Arquivo | Descrição |
|---|---|
| `index.html` | Página Home |
| `sobre.html` | Página Sobre |
| `contato.html` | Página Contato |

## Estrutura

```
al-construcoes-site/
├── index.html
├── sobre.html
├── contato.html
├── assets/
│   ├── css/
│   │   └── style.css       ← Estilos globais
│   ├── js/
│   │   └── main.js         ← Navbar, footer e sistema de idiomas
│   └── images/
│       ├── logo.png
│       ├── hero-home.jpg
│       ├── hero-sobre.jpg
│       ├── hero-contato.jpg
│       └── obras/
│           ├── obra-01.jpg
│           └── ...
└── README.md
```

## Como adicionar uma nova página

1. Copie qualquer `.html` existente como base
2. Altere o atributo `data-page` no `<body>`:
   - `data-page="home"` → marca "Home" como ativo na navbar
   - `data-page="sobre"` → marca "Sobre" como ativo
   - `data-page="contato"` → marca "Contato" como ativo
3. Adicione o conteúdo específico da página
4. O link na navbar e o footer são injetados automaticamente pelo `main.js`

## Como adicionar um novo idioma

1. Abra `assets/js/main.js`
2. Copie o bloco `pt: { ... }` e adicione um novo bloco com a sigla do idioma
3. No HTML das páginas, adicione o botão da bandeirinha no `injectNavbar()`

## Tecnologias

- HTML5 / CSS3 / JavaScript (Vanilla)
- Google Fonts: Barlow + Barlow Condensed
- Sem frameworks ou dependências externas
- Hospedagem recomendada: Netlify
