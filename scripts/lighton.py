#!/usr/bin/python
from subprocess import call
import cgi

arguments = cgi.FieldStorage()
print "Content-Type: text/plain\n"


outlet = str(arguments.getvalue('outlet'))
call(["gpio", "mode", outlet, "out"])
