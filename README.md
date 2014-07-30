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
https://www.youtube.com/user/zparticle . The script "readad.py" figures out if the external power supply for the relays is on and functioning. The power supply for the relays provides 5V power. I bring that onto a breadboard to give to to the relays, to an LED that serves as a visual indicator of the status, and also to a voltage divider to bring the 5v down to 2.5v, which the Pi's 3.3v inputs read as high. The script then reports this data to the web control panel.

I have 6 sets of christmas lights and 2 normal lights plugged into the outlets, which is why there are so many references to christmas lights in the web control panel code.
