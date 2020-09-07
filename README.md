### Prerequisites

You must have a compatible version of node and preferably\* yarn installed in your machine.

\* npm will most likely work just as good, but this project was not developed or tested using npm.

### Running in your local machine

To put it to work:

1. install all project dependencies with `yarn install`
2. start the development server with `yarn dev`

### Building to production

Follow the steps bellow to produce a production ready bundle:

1. install all project dependencies with `yarn install`
2. generate the production ready bundle with `yarn build`
3. serve the bundle with `yarn run start:local`

### Heroku support

This project can be easily deployed to heroku. All you need to do to deploy it to heroku is:

1. clone the git repository to your machine `git clone https://github.com/IgorCRD/tliquality.git`
2. change from current directory to repository directory `cd tliquality`
3. create a heroku app where your app is going to live `heroku create [appName]`
4. push the current version to heroku which will start the deploy pipeline `git push heroku master`
5. go to `http://[appName].herokuapp.com`
6. "It's alive!"

PS.: The above steps assume you have the Heroku CLI installed and logged on your machine

### Available now on

https://liquality-rates.herokuapp.com

The project is available now on a free tier of heroku, so the first access can take a few seconds more than expected,
and after 30 min of inactive heroku will deativate its hosting VM and it will only put it back up when accessed.

Please, keep in mind that the first access is not a good representation of the app load time or performance. After the
first access you can clear the cache and reload the page for load/perfomance tests.
