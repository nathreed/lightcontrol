#!/usr/bin/python
from pygame import midi as midi
from subprocess import call
from time import sleep as sleep 
midi.init()
i = midi.Input(3)
print "Content-Type: text/html\n\n"

while True:
        if i.poll():
		output = i.read(1)
		note = output[0][0][1]
		if output[0][0][2] == 0:
			#we are handling a note off event
			print "note off: ", note
			if note == 60: #it is middle C
				call(['gpio', 'mode', '0', 'in'])
			elif note == 62: #it is middle D
				call(['gpio', 'mode', '1', 'in'])
			elif note == 64: #it is middle E
				call(['gpio', 'mode', '2', 'in'])
			elif note == 65: #it is middle F
				call(['gpio', 'mode', '3', 'in'])
			elif note == 67: #it is middle G
				call(['gpio', 'mode', '4', 'in'])
			elif note == 69: #it is middle A
				call(['gpio', 'mode', '5', 'in'])
			elif note == 71: # it is middle B
				call(['gpio', 'mode', '6', 'in'])
			elif note == 72: #it is middle C +1octave
				call(['gpio', 'mode', '7', 'in'])
		else:
			#we are handling a note on event
			print "note on: ", note		
			if note == 60: #it is middle C
				call(['gpio', 'mode', '0', 'out'])
			elif note == 62: #it is middle D
				call(['gpio', 'mode', '1', 'out'])
			elif note == 64: #it is middle E
				call(['gpio', 'mode', '2', 'out'])
			elif note == 65: #it is middle F
				call(['gpio', 'mode', '3', 'out'])
			elif note == 67: #it is middle G
				call(['gpio', 'mode', '4', 'out'])
			elif note == 69: #it is middle A
				call(['gpio', 'mode', '5', 'out'])
			elif note == 71: # it is middle B
				call(['gpio', 'mode', '6', 'out'])
			elif note == 72: #it is middle C +1octave
				call(['gpio', 'mode', '7', 'out'])				
