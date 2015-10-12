TO : Mark A. Yoder

From: Team 11 Pushpendra Kumar (B13132) Ankur Sardar (B13108)

Date: 

Sub : Report on lab 05

The goals of this lab are

1.Interface multiple types of sensors to the Bone.
2.Compare the sensors for range and accuracy.

For this purpose we used Ultrasonic Range Finder ­ XL­MaxSonar­EZ1 sensor.

The sensors work on the 
principle of reflection of waves sent from the sensors, which on reflection from the surface of the 
obstacle returns to the reciever in the sensor. Based on the time delay, the distance of the obstacle 
from the source is calculated Ultrasonic sensor Reading.
	           
			           5.4							6.0
			           6.2							7.1
			           6.6							7.2
			           7.5							8.5
			           8.5							9.7
			           10							11.3
			           13							14.7
			           15							17.1
			           20							24.6
			       
	           
	      
	From the readings we can see that there is always some error in the measurement of the distance. We can see that the error increases with increase in distance, but the percentage of error decreases.
	
	The ultrasonic sensor has two cylinder like objects attached to them. One sends the wave while the other recieves the reflected wave. When Input is given to the trigger pin, a wave is sent and when the wave is recieved back, the echo pin is given logic 1 and input is given to the Beaglebone.Based on time difference, hte distance is calculated.
	
	This lab gave a broad overview of range sensors and their applications and working.
