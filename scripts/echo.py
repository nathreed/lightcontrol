#!/usr/bin/python

import cgi

print "Content-Type: text/plain\n"

arguments = cgi.FieldStorage()

print arguments
