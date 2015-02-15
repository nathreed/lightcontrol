screen -dmS NodeLights
screen -p 0 -S NodeLights -X eval 'stuff "node /path/to/server.js"\015'
