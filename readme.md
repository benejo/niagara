### Requirements
-  Nodejs. Best way to install nodejs is [nvm](https://github.com/creationix/nvm)

### Installation
Add the following lines to `~/.bashrc`
```
source ~/.nvm/nvm.sh
nvm use v4
```

### Run the following commands
```
nvm install v4.3
```

### Install dependencies

```
npm install -g nodemon
npm install
```

### Config
To override default config in `cfg/index.js` add the relevant part to `cfg/development.js`

### Start servers
- `npm start`

- `npm run start:dev` - Watch for file changes and restart server. It's a pain in the ass to not do so.

### Logs
Logs are created by `bootstrap/logger.js`
