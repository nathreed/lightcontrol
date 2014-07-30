#!/usr/bin/python

from subprocess import call 
print "Content-Type: text/plain\n"
outlets = [0,1,2,3,4,5]
for i in outlets:
        call(["gpio", "mode", str(i), "in"])

