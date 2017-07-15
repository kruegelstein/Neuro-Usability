# DCAIT-Project
Master Module

This is the setup guide to run the project on your maschine. Please note that the
setup guide is for MacOS. If you run a different system the commands may be different
but the procedure will be the same. It was tested under macOS Sierra.   

------------------------------------------------
Run:
In order to run the project you will need three services running:
1. Webpack dev server
2. NodeJS server
3. Mongo database

Webpack dev server:
1st tab in the terminal
- navigate into 'ReactApp'
- npm start

NodeJS server:
2nd tab in the terminal
- navigate into 'server'
- npm run dev

Mongo database:
3rd tab in the terminal
- mongod

------------------------------
Requirements to run:
0. npm und brew or alternatives to both
1. Webpack dev server
2. NodeJS server
3. Mongo Database

------------------------------
Setup:
1. Get the lastest version and install dependencies
In the terminal:
 - create and navigate into a working directory
 - git clone https://github.com/kruegelstein/DCAIT-Project.git
 - navigate into 'ReactApp' --> npm install
 - navigate into 'server' --> npm install
2. Get Mongo Database and set it up
 - choose your system on https://docs.mongodb.com/getting-started/shell/installation/
 In the terminal:
 - brew update
 - brew install mongodb
 Create data directory and set permissions:
 - sudo mkdir -p /data/db
 - sudo chown -R $USER /data/db
3. Fill the mongo db with the relevant data:
  - get Robo 3T at http://blog.robomongo.org/robomongo-is-robo-3t/#Download
  - Install and open Robo 3T
  - Create a new connection with name 'localhost' (all other settings are fine)
  - Connect and with right-click create a new database within called 'cars'
  - unzip 'cars.bson.zip' in the 'mongoDump' folder within the project
  In the Terminal:
  - mongorestore -d cars -c cars fullpath/to/cars.bson
  - in Robo 3T in db cars and Collections 'cars' the should be the data now
