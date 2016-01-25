MEAN Typescript Angular2 Skeleton
=================

A simple MEAN stack skeleton written in Typescript.

### Features
* MongoDB
* Express
* Angular 2
* Node.js
* Websockets
* Mongoose

### Dependencies

* Node
* MongoDB
* Typescript

## Running

Note: All commands entered need to be performed from within *this directory*.

1. Ensure you have a clean directory to dedicate as to a database (e.g. `C:\database` or `~/database/`).

2. From *this repository's directory*, run the following command to launch the MongoDB process.
    ```shell
    <MONGO_INSTALL_DIRECTORY>/bin/mongod --dbpath <PATH_TO_DB_DIRECTORY>
    ```

3. From this directory, install the app's node dependencies, tsd, and typings with the following commands:
    ```shell
    npm install
    npm install -g tsd
    tsd install
    ```

4. Before compiling the app you may have to change permissions (default is 744 after tsd install) to the typings directory.
    ```shell
    chmod -R 774 typings
    ```

5. Compile the app with the following command:
    ```shell
    tsc
    cd public
    tsc
    ```

7. Launch the Node process to serve the app using the following command from the root folder:
    ```shell
    node server.js
    ```

7. Open your favorite browser and navigating to `http://localhost:3000/` to access the app.
