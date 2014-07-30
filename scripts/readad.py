#!/usr/bin/python

import subprocess

print "Content-Type:text/plain\n"

o = subprocess.check_output(['gpio', 'read', '11'])
o = int(o)

print o
