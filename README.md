# API_test

## Sommaire

- [Description](#description)
- [Structure](#structure)
- [Fonctionnement](#fonctionnement)
- [Evolution](#evolution)

### Description

Elle se base sur [TP-Framework](https://github.com/TravelPlanetNDF/tp-framework).  
Cette API sert de test pour explorer les différentes possibilités.  
Pour le moment sa fonctionnalité est de stocker les données entrantes dans un fichier **.json**.  
Elle peut égélament trouver et mofifier des entrées déjà existantes.

### Structure

```text
┌── config
├── i18n
├── node_modules
├── src/
│   ├── controllers
│       ├── Message.js
│       ├── Storage.js
│   ├── helpers
│       ├── Message.js
│       ├── storage_backup.json
│       ├── Storage.js
│       ├── storage.json
│   ├── hooks/
│   ├── mocks/
│   ├── swagger/
│       ├── routes
│           ├── message.yaml
│           ├── storage.yaml
│           ├── swagger.yaml
├── test/
├── .eslintrc.json
├── .gitignore
├── app.js
├── Dockerfile
├── infos.log
├── package-lock.json
├── package.json
├── README.md
└── traces.log
```

### Bonne Pratiques

Certaines conventions doivent être appliquées _(dans la mesure du possible)_ :

1. Un fichier YAML par controller qui doivent être placé dans le dossier **routes** du dossier **swagger**.
1. Les noms de fichiers en **snake_case**.
1. `exempleFonction` = nom exact de la méthode côté controller.

### Fonctionnement

Chaques fonctionnalitées devra être introduite par une **route**, cette route devra être implémenter et configurer dans un fichier créé spévielement pour cette fonctionnalité dans le dossier **swagger/routes**. Ce fichier devra porter le nom de la fonctionalité pour faciliter la recherche.  
Un controller devra être créé dans le dossier **src/controllers** avec également le même nom.  
Un helper devra être créé dans le dossier **src/helpers** avec toujours le même nom.

### Evolution

Si l'on veut rajouter une fonctionnalité se référé a l'article sur le [Fonctionnement](#fonctionnement).
