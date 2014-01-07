Hitchwiki hosts
===============

Hitchwiki hospitality network

Brainstorming: http://lite3.framapad.org/p/mLPcirGh5h




## Piratepad backup

Hitchwiki hospitality network brainstorming 
------------------------------------------------------------------------------------------------------
aka keep it simple hospex for Hitchers

https://github.com/Hitchwiki/hosts


https://github.com/Hitchwiki/hitchwiki/issues/30

Name :
-------------------------------------------

Hitchcouch(ing)
Couchhike(ing)
Hitchsleeping
Sleephiking
Hitch a couch +Mikael (for slogan) +1 (slogan)
Instead of a tent
Forgot Tent
Don't sleep outside
Warm Thumb  :-D
Thumb and Thumber :-D
Hitch a bed
Thumbers
HitchStops
Hitchwiki Helps
Hitchwiki Hosts
Hitchwiki Homes
Just in Time
Eleventh Hour :-D
Capricious Couches (well actually capricious guests)
HitchBase (there already is a project with this name..) (ok !) http://hitchbase.com/
HitchNetwork
HitcherNetwork
ThumbNetwork
ThumbBase
Host a Thumb
Thumb a Host :-D
hitch a carpet
magic carpets network :D
CarpetSurfing
Stuck bases
Random hosts
Carcouching
Hitch a Roof
RoofHikers
Thumb a Roof
A Shelter for Hitcher
Thumb Shelter


something from "floor" / "space on floor"

I think names are of later concern right? could just start with something with the name hitchwiki for now, hitchwiki.org/hosts seems fine
Yes but it's fun to think of name when you're drinking wine in Lisbon !


Features
-------------------------------------------
Last minute is encouraged
A simple map based catalog only
Simple map where you see people on your route
Hitchwiki Helps
Hitchwiki Hosts
Hitchwiki Homes
Just in Time
Eleventh Hour :-D
Add your self to the map
Your profile is simply a link to the CS/BW/WS/email/FB/hackercouch/whatnot
public  /  login-only(+1 login only, good to put more accurate addresses)? 
available / not available option ? = profile/availability/communication is at other hospex
on top of MediaWiki? or on top of WordPress? or independent? welen!?


How does it work?
Pop up / banner on Hitchwiki?
Signup:
Where
can host: any time, some time, rarely
last minute: of course / possibly / no (why are you signing up?)
can be contacted what time of the day? 24/7 : only when it's light out
contact: phone number(s) / chat / email / what is best way to contact
can easily host several nights / can host 1 night, more optional / can host long term
How many people can I host.
Couch busy/avalaible/not avaible ?

Just big free text field where people can add anything they want ---> could be the minimal viable product, and then we could add features

Mobile friendly / offline friendly
PhoneGAP/Cordova (http://github.com/guaka/meteor-phonegap could be nice for prototyping if we go with meteor)
Static front
Export data of couch location and info for use in mobile application (or other), like hitchwiki map


Implementation options:
-------------------------------------------

Old meteor maps code bits? (good for realtime)
Semantic MediaWiki? API can easily throw out json but MW is too public, hard to lock down
can you easily write to mediawiki user page some meta? check https://www.mediawiki.org/wiki/Extension:SemanticSignup (but all public data)
and can we then produce one big geo-json out of that meta? yes
something that produces json? = API
 WP/buddypress has json plugin(s), super fast to configure (=API up in half an hour)


Stack
Leaflet for map
Angulaaar


Todo order:
1 backend
adding content via X (semantic MW?)
hitchwiki user ID
location
1 freetext field
get stuff out as a json (per user / all coordinates)
frontend
basic map layer reads coordinates files
see all the people on map at once - when we'll get too much dots / too slow, we'll do better. for now quick'n'dirty is good.
that's how we did with hitchwiki maps
hidden behind login(?)
click marker open and get user's json and show the data.
mobile first

Time:
    Do this weekend? :-) Hackathon inception ?


Other
-------------------------------------------
features that could become nomadbase-ish? (=bewelcome) ;-) huh?
what do we need hospex at nomadwiki for?
+linking, same DB?
e.g. grouping people / accounts without a main owner


Extend to hackercouch in future. ;-)
