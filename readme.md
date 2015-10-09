# The nibble-do list
This is project made in october 2015 at the Fachhochschule Potsdam as part of the course ["Johnny Five is Alive"](https://fhp.incom.org/workspace/6174/5) supervised by [Fabian Morón Zifras](https://fhp.incom.org/profil/270). The idea of the course was to create an [IoT](https://en.wikipedia.org/wiki/Internet_of_Things) service, communicating from one or many physical machines to a website.

The nibble-do list is a website connected with a candy dispenser. The candy dispenser can be placed on a desk next to a user computer. On the website, the user can define tasks on a todo list. When a task is completed, the candy dispenser is automatically made aware of this completion and rewards the user with some candies. 

_As extension to this basic concept, the user could define an effort score for each task and become more or less sweets depending on this score._

The candy dispenser contains an [Arduino Uno Board](https://www.arduino.cc/en/Main/ArduinoBoardUno) which is connectet to a servo motor. This servo motor rotates a cylinder that has an open quarter where the sweets fall down. When the cylinder rotates, the sweets that fell down in the empty quarter are released in an open recipient where the user can grab them. All this is wrapped in a box made of cardboard or wooden.

The [Arduino Uno Board](https://www.arduino.cc/en/Main/ArduinoBoardUno) is controlled with the javascript library [Johnny Five](http://johnny-five.io) which allows to controll input and outputs of the Arduino Pins. The code is runned from a node server, that is the bridge between the dispenser and the website. The communication between the server and the website works throught socket.io. That makes the response between the user action and the distribution of candies fast. 
Using Johnny Five, a node server and a website using soket.io allowed me to realize every step of the project in the Javascript language.

### First sketches
<img src="http://demo.vogelino.com/nibble-do-list/sketch-3d-view.jpg" alt="Rough sketch of dispenser's look" style="float: left; width: 25%;"/>
<img src="http://demo.vogelino.com/nibble-do-list/sketch-front-view.jpg" style="float: left; width: 25%;" alt="Rough sketch of front's look"/>
<img src="http://demo.vogelino.com/nibble-do-list/sketch-side-view.jpg" style="float: left; width: 25%;" alt="Rough sketch of side's look"/>
<img src="http://demo.vogelino.com/nibble-do-list/sketch-list-view.jpg" style="float: left; width: 25%;" alt="Rough sketch of side's look"/>


--

<sub><sup>Copyright (c) 2015, Lucas Vogel (Vogelino)</sub></sup>

<sub><sup>Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.</sub></sup>

<sub><sup>THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.</sub></sup>
