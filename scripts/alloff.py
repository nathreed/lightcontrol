#!/usr/bin/python

print "Content-Type: text/plain\n"

from subprocess import call

outlets = [0,1,2,3,4,5,6,7]
for i in outlets:
	call(["gpio", "mode", str(i), "in"])

	
