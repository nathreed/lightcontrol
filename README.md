lightcontrol
============

The setup I use to control 8 outlets from my Raspberry Pi

Changes that need to be made in /etc/apache2/sites-enabled/000-default:

  - in the "<Directory>/var/www/</Directory>" section:
    - AllowOverride set to all
  

Make a "scripts" folder in /var/www
In "scripts" make a ".htaccess" file containing the following:
  Options +ExecCGI
  AddHandler cgi-script .py
  
  
Install wiringPi (http://wiringpi.com/download-and-install/)


The Python CGI scripts in the scripts folder of /var/www basically call the "gpio" command (the easiest way to access the gpio from a CGI without being root) to turn pins 0-7 (wiringPi numbers) on and off. These pins are connected to an 8-channel relay board (http://amzn.to/Xf90nW)
which is wired up to 4 duplex outlets that I split. The relays are switching the "hot" side and all the outlets share a common "neutral" and ground bus. A lot of ideas for this came from http://chivalrytimberz.wordpress.com/2012/12/03/pi-lights/ and 
https://www.youtube.com/user/zparticle .

I have 6 sets of christmas lights and 2 normal lights plugged into the outlets, which is why there are so many references to christmas lights in the web control panel code.

What each file in /var/www/scripts does:
  - lighton.py
    - Turns on the outlet called in the url (scripts/lighton.py?outlet=0 for outlet 0)
  - lightoff.py
    - Turns off the outlet called in the url (scripts/lightoff.py?outlet=0 for outlet 0)
  - allon.py
    - Turns all outlets on
  - alloff.py
    - Turns all outlets off
  - xmason.py
    - Turns all my christmas lights on (specific to my situation here)
  - xmasoff.py
    - Turns all my christmas lights off (specific to my situation here)
  - midilights.py
    - a sort of bonus script, not run from the web control panel, this will accept midi input (requires pygame) and turn lights on accordingly
  

What the other files not in the scripts folder do:
  - index.html
    - This is the main control page for the system, it is written using the jQuery Mobile styles and stuff
  - origcontrol.html
    - This was what I was using before I switched to the prettier and more useful jQuery Mobile stuff
  - outlets.js
    - This goes with origcontrol.html and is not used with the newer jQuery Mobile control page
  - outlets2.js
    - This goes with the current index.html and is responsible for all the logic 
  - outlets.css
    - This was some stylesheet stuff I was working on, it goes with origcontrol.html and is not used currently
