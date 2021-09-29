# KEVIN SCAN

Hello, it looks like you've stumbled upon my blockchain utility application. Let me show you around!

To run this application you should follow these steps:

1. Clone this repository. (*git clone git@github.com:flippinroo2/kevin_scan.git*)
2. Run the following command: "__yarn install__" or "__npm install__". (*Depending on the package manager you use.*)
3. Once all of the dependencies are installed, run the following command: "__yarn build__" or "__npm run build__". (*This will invoke the TypeScript compiler and then build a production version of the React app.*)
4. Now that all of the dependencies and the source files are built, we can start up our backend server. You can start the server with the following command: "__yarn serve__" or "__npm run serve__". (*The data for this application comes from the blockchain, but the server is included here as an example.*)

You should now be able to view this application at the following url: <http://localhost:5000>

As a side note, you can also view this application on my IPFS website: <https://flippinroo2.on.fleek.co>

## BACKEND SERVER

There is a backend server included in this repository that can be started with the "__yarn serve__" or "__npm run serve__" commands. This will start up an express server running on port __5000__.

When you navigate to this url you will be prompted for a username & password. (*You can find these in the ".env" file. I know it's not convention to have environment variables public, however, this is strictly used as an example.*)

## BLOCK VIEWER

The first portion of the application is a block viewer. You simply enter into the form fields the range of blocks you would like to fetch data from.

+ __Endpoint:__ Enter the endpoint url of the particular blockchain you would like to request data from. (*The dropdown list next to it will also pre-populate a url for you.*)
+ __Start Block__: Enter an integer greater or equal to "1". (*The value must be lower than the value entered into "End Block"*)
+ __End Block__: Enter an integer greater or equal to "2". (*The value must be greater than the value entered into "Start Block"*)

## TODO - PHASE 1

1. Finish up full test suite. (*First priority because it'll save time with development later.*)
2. Fix type declarations. Would like to get to a place without the usage of "any" types. (*Start with finishing up the Redux props / state declarations.*)
3. Comment TypeScript files and document different parts of the application.
4. Fix everything in the "issues" queue.
5. Redo the table columns so that there is only 1 header row. (*This will allow for more efficient sorting / filtering.*)
6. Setup SASS for styles. (*Is going down the WebPack rabbit hole worth it, or is there a way around this? Look into CSS modules and the native TypeScript "<u>tsc</u>" compiler.*)

# TODO - PHASE 2

1. Integrate Web3 wallet provider.
2. Get the blockchain switcher dropdown working properly & implement functionality for fetching data from other chains.
3. Create more pages:
    1. NFT Viewer
    2. Token Swapper

# ISSUES

1. Filters do not show any values besides "__system.ExtrinsicSuccess__".These same fields are missing "Extra Data" values (*or do the extra data values even exist?*).
