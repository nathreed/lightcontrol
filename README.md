lightcontrol
============

The setup I use to control 8 outlets from my Raspberry Pi.

Rewritten from the ground up: Instead of using Python CGI scripts, I now use a node.js server and websockets to communicate with the webpage. This has an added bonus of being easily state-aware and having all devices viewing the webpage show the same thing.

#Description of files  

### index.html
This is the page that is displayed on the client devices. It goes in the web server folder.  

### outlets.js  
This is the script that handles communication with the node server and updating the page with new information.  

### server.js
This is the server that communicates with the script over a websocket connection and controls the raspberry pi GPIOs.  

### lights.sh
This is an optional script that can start the node server at startup if you set it up.  
  
#General Setup Directions

1. Place `index.html` and `outlets.js` in a folder in a web server directory.  
1. Edit the `wsUri` variable in `outlets.js` to point to the machine the node.js server will be running on.  
1. If you would like to be able to access this page from the global internet, make sure to forward port 9213 to the machine the server is running on.  
1. Place `server.js` in a folder anywhere on your filesystem.  
1. (Optional) Edit `lights.sh` to point to server.js.  
1. Start `server.js` (`./lights.sh`).  
1. (Optional) Make `lights.sh` run on startup.  
1. Connect your light relays (or whatever you are controlling) to wiringPi pins 0-7 on the raspberry pi.
