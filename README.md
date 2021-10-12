# Nutshell

![Project Image](src/images/Nutshell-home-page.png)

> Everything you need to keep up with your friends in a Nutshell!

---

### Table of Contents

- [Desctiption](#description)
- [Technololgies](#technologies)
- [How To Use](#how-to-use)
- [License](#license)
- [Author Info](#author-info)

---

## Description

Nutshell is a React App built for users to have the capability to post and view news articles, local events, and message posts/private messages with their added friends. It focuses on a sleek, simple, and mellow design that makes it easy for the user to digest the content of the webpage. We achieved this by selecting a pastel-like color scheme and structuring the layout of the page in a spacious, yet condensed way. We focused on creating an elegant design while also having strong user functionality.

---

#### Technologies

- React.js
- CSS
- Dbdiagram
- Figma
- Canva
- Git/Github
- Postman

---

## How To Use

### Installations

Run commands inside of Nutshell Directory.

```
npm install npm@latest -g
```

```
npm install
```

```
npm install react-icons --save
```

---

### Starting the webpage

1. Get a free API Key at https://openweathermap.org/api

1. Clone the repo

   ```
   git clone git@github.com:nss-day-cohort-51/nutshell-ghoul-diggers.git
   ```

1. Run this command inside of the Nutshell API directory.

   ```
   json-server -p 8088 -w database.json
   ```

   ```
   npm start
   ```

---

### API Reference

Create database.json file inside of the src directory and paste the following JSON.

```JSON
   "users": [
      {
         "email": "admin@test.com",
         "name": "Admin User",
         "id": 1
      }
   ],
   "articles": [
      {
         "id": 1,
         "userId": 1,
         "url": "http://www.google.com",
         "title": "Google",
         "synopsis": "See Google Homepage",
         "timestamp": 1633634268923
      }
   ],
     "messages": [
      {
         "post": "Example",
         "userId": 1,
         "timestamp": 1633694268923,
         "id": 1
      }
   ],
   "events": [
      {
         "id": 1,
         "userId": 1,
         "name": "Example",
         "city": "Nashville, TN",
         "zipcode": "37066",
         "date": "2021-02-14"
      }
   ],
   "tasks": [
      {
         "userId": 1,
         "taskName": "Example",
         "completeDate": "2021-11-11",
         "isCompleted": false,
         "id": 1
      },
```

![ERD Image](src/images/erd.png)

[Back To The Top](#nutshell)

---

## License

MIT License

Copyright (c) 2021 Nashville Software School

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[Back To The Top](#nutshell)

---

## Author Info

### Colby Ryan

- LinkedIn - [Colby Ryan](https://www.linkedin.com/in/colbyrryan/)
- GitHub - [@colbyryan](https://github.com/colbyryan)

### Susie Stanley

- LinkedIn - [Susie Stanley](https://www.linkedin.com/in/susie-stanley/)
- GitHub - [@SusieCodes](https://github.com/SusieCodes)

### Gerson Makungu Diketama

- LinkedIn - [Gerson M. Diketama](https://www.linkedin.com/in/gerson-m-diketama-ab00a41a2/)
- GitHub - [@GersonDiketama](https://github.com/GersonDiketama)

### Brady Williams

- LinkedIn - [Brady Williams](https://www.linkedin.com/in/brady-c-williams/)
- GitHub - [@Slyydz](https://github.com/Slyydz)

[Back To The Top](#nutshell)

---
