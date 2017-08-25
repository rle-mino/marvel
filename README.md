Seps:
- fork
- git clone your fork fork
- `yarn`
- `yarn build:dev`

you MUST use:
```
- React
- Redux
- Redux-thunk
- React-redux
- Styled-Component
- Fetch
```

THE API:

In the file `src/client/constants.js`, you can find the URL to the API and the route to get all the characters.
To make a request to the API, you must send a token inside the URL, in the file `src/clients/helpers.js` you can find a function that generates a string that will look like this
`?ts=82098329482930484&apikey=awjjn4jk234nj2k3n4jk2n4jn2k3j4&hash=2k3ln4k23n4jk2njn`.
This string should be in the query of each request.
Example:
`http://gateway.marvel.com:80/v1/public/characters?ts=82098329482930484&apikey=awjjn4jk234nj2k3n4jk2n4jn2k3j4&hash=2k3ln4k23n4jk2njn`

Goal:
Display the list of all the available characters, with a name and the image.
If the use clicks on a charaters, all the details about the character will appear on the screen. A simple cross wil close this detailed view by going back to the list view.
