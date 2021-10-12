# KEVINS DAPP

Hello, it looks like you've stumbled upon my decentralized application. Let me show you around!

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

## Kevin Scan

The first portion of the application is a block viewer. You simply enter into the form fields the range of blocks you would like to fetch data from.

+ __Endpoint:__ Enter the endpoint url of the particular blockchain you would like to request data from. (*The dropdown list next to it will also pre-populate a url for you.*)
+ __Start Block__: Enter an integer greater or equal to "1". (*The value must be lower than the value entered into "End Block"*)
+ __End Block__: Enter an integer greater or equal to "2". (*The value must be greater than the value entered into "Start Block"*)

### TODO List

+ Dynamic filters instead of hard coding the filter to use "system.ExtrinsicSuccess".
+ Dynamic colum creation instead of hard coding.
+ Pagination on block results. (*Is this still needed?*)
+ __MAYBE__ Add "Subscribe" state to the BlockScanner page and there was 1 more Non-Redux state I wanted to add...?

### ISSUES

+ Handle use cases for error showing (*red icon & text*) on input fields. (__*Example - When end block is lower than start block and showing error, and then increasing start block the error does not clear on end block field. This is the same vice-versa. Once the field in an error stage is change it then recalculates and fixes.*__)

## Loy Swap

This page utilizes the Moralis Web3 SDK to connect to liquidity on the 1INCH decentralized exchange. (__*DO NOT TRY TO UTILIZE THIS FEATURE AT THIS TIME BECAUSE IT IS NOT FULLY FUNCTIONAL OR FULLY TESTED!!!*__)

### TODO List

+ Fix overflow styling on the token selection fields.
+ Determine if the setting & clock buttons are needed on the swap page. (*Check pancake swap*)
+ Program the dynamic changing of decimal place stepping on the input fields based on selected tokens.
+ Get rid of "Exchange" & "Liquidity" buttons above the swapping interface.
+ ...and style :D

## Non Fungible Kevin

This page is meant to be a NFT viewer. You can enter a wallet address into the input field on the top of the page and then all the NFTs within that wallet can be viewed.

### TODO List

+ WORK IN PROGRESS

## Kev's Contracts

This page will be used as a testing utility. You will be able to enter a smart contract into the input field on the top of the page, and then have the ability to run functions via the form fields on this page.

### TODO List

+ WORK IN PROGRESS

## TODO - PHASE 1

1. Rigorously test scanner page.
2. Figure out the proper flow & functionalities for the "Header" / "User" components.
3. Get Swapping page finished.
4. Write test cases for Swap page.
5. Create error messaging system.
6. Clean up code:
    + Remove unnecessary code & comments.
    + Determine which components need state and which can just utilize props from Redux.
    + Fix type declarations (*Would like to get to a place without the usage of "any" types.*)
    + Add helpful comments where applicable.
7. Go through application and create some documentation above.
8. Fix everything in the "issues" queue.

## TODO - PHASE 2

1. Get the blockchain switcher dropdown working properly & implement functionality for fetching data from other chains.
2. Redo the table columns so that there is only 1 header row. (*This will allow for more efficient sorting / filtering.*)

## ISSUES

1. Filters do not show any values besides "__system.ExtrinsicSuccess__".These same fields are missing "Extra Data" values (*or do the extra data values even exist?*).
