Seps:
- Tu fork
- Tu git ton fork
- Tu yarn
- Tu lance un yarn `build:dev`

tu DOIS utiliser:
```
- React
- Redux
- Redux-thunk
- React-redux
- Styled-Component
- Fetch
```

L’API:

Dans le fichier `src/client/constants.js` tu trouveras l’URL de l’API, ainsi que la route vers les characters
Pour faire une requete vers l’API, tu dois envoyer un token dans l'URL, dans le fichier `src/client/helpers.js`, tu trouveras un fonction qui te retourne une string qui ressemblera a ca
`?ts=82098329482930484&apikey=awjjn4jk234nj2k3n4jk2n4jn2k3j4&hash=2k3ln4k23n4jk2njn`,
cette chaine doit apparaitre a la fin de chaque requete sur l’API, exemple `http://gateway.marvel.com:80/v1/public/characters?ts=82098329482930484&apikey=awjjn4jk234nj2k3n4jk2n4jn2k3j4&hash=2k3ln4k23n4jk2njn`

Objectif: Afficher la liste des personages marvel avec un nom, ainsi qu’une l’image du personage. Si l’utilisateur clique sur un personage, les details sur le personage apparaissent, une petite croix permet de retourner a la liste des personages.
