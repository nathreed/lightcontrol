#!/usr/bin/python
from subprocess import call
import cgi

#CGI headers
print "Content-Type: text/plain\n"

#get outlet to turn off
arguments = cgi.FieldStorage()
outlet = str(arguments.getvalue('outlet'))

#turn it off
call(["gpio", "mode", outlet, "in"])
