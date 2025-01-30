## EAAS - ENVIRONMENT AS A SERVICE

# Inputs
Higher environment to emulate. 
<pre>
curl https://eaas.work/build/install
eaas up https://cicd.server.com/path/application/env/build/ 
</pre>
<br>
# Output
Images and containers and configs reflecting that exact environment.
<pre>
 _______   ________  ________  ________      
|\  ___ \ |\   __  \|\   __  \|\   ____\     
\ \   __/|\ \  \|\  \ \  \|\  \ \  \___|_    
 \ \  \_|/_\ \   __  \ \   __  \ \_____  \   
  \ \  \_|\ \ \  \ \  \ \  \ \  \|____|\  \  
   \ \_______\ \__\ \__\ \__\ \__\____\_\  \ 
    \|_______|\|__|\|__|\|__|\|__|\_________\
                                 \|_________|

Environment as a Service                                             
                                             
Creating environment...

{ Pulling images..... }
{ Building containers...... }
{ Configuring containers..... }
{ Starting containers..... }

[ environment created ! ]
</pre>
----
Implementation	

Everything needed to build the local environment is in the build script console log, config files and docker files.

We must make code to:

1. Evaluate the environment muses to collect environment 
specifications: muses - build script console log, config files and docker files

2. Create a docker-compose file that.. can 
	a. Pull images of all required images in the build script
	b. Create containers with configs that match the environment as much as possible
	c. Where there are undefined discrepancies between prod and local... use a default setting
	d. Make certain all containers load correctly 
	e. Provide a log of what was created and any warnings
	f. Import default data into data sources
	

We must also do a complete evaluation to determine the security risks and the logistical concerns 

Also use your expertise to find angles to the service that I may not be considering at all. 

The only issues are:
There is there may be some scaling difference between local and prod.
Also we need to include local or dev versions of the upstream / downstream systems.

 

