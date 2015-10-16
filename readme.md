# The nibble-do list

[![Gitter Chat](https://badges.gitter.im/vogelino/nibble-do-list.svg)](https://gitter.im/vogelino/nibble-do-list)  

This project was made in October 2015 at the [Fachhochschule Potsdam](http://www.fh-potsdam.de) as part of the course ["Johnny Five is Alive"](https://fhp.incom.org/workspace/6174/5) supervised by [Fabian Morón Zifras](https://fhp.incom.org/profil/270). The idea of the course was to create an [IoT](https://en.wikipedia.org/wiki/Internet_of_Things) service, communicating from one or many physical machines to a website.

The nibble-do list is a website connected with a candy dispenser. The candy dispenser can be placed on a desk next to a user computer. On the website, the user can define tasks on a todo list. When a task is completed, the candy dispenser is automatically made aware of this completion and rewards the user with some candies.

_As extension to this basic concept, the user could define an effort score for each task and become more or less sweets depending on this score._

The candy dispenser contains an [Arduino Uno Board](https://www.arduino.cc/en/Main/ArduinoBoardUno) which is connected to a servo motor. This servo motor rotates a cylinder that has an open quarter where the sweets fall down. When the cylinder rotates, the sweets that fell down in the empty quarter are released in an open recipient where the user can grab them. All this is wrapped in a box made of cardboard or wooden.

The [Arduino Uno Board](https://www.arduino.cc/en/Main/ArduinoBoardUno) is controlled with the javascript library [Johnny Five](http://johnny-five.io) which allows to control input and outputs of the Arduino Pins. The code is run from a node server, that is the bridge between the dispenser and the website. The communication between the server and the website works through socket.io. That makes the response between the user action and the distribution of candies fast.
Using Johnny Five, a node server and a website using socket.io allowed me to realize every step of the project in the Javascript language.

### First sketches
I first roughly imagined how the prototype could be build and generally how the mechanics would work. Here's how it looks like.

|<img src="http://demo.vogelino.com/nibble-do-list/sketch-3d-view.jpg" alt="Rough sketch of dispenser's look"/>|<img src="http://demo.vogelino.com/nibble-do-list/sketch-front-view.jpg" alt="Rough sketch of front's look"/>|<img src="http://demo.vogelino.com/nibble-do-list/sketch-side-view.jpg" alt="Rough sketch of side's look"/>|<img src="http://demo.vogelino.com/nibble-do-list/sketch-list-view.jpg"  alt="Rough sketch of side's look"/>|
|---|---|---|---|

### Realistic simulation
This simulation was made with Adobe Photoshop in order to visualize how the final product could look like in a real environment. Here, the nibble-do dispenser is a nice wooden object placed next to your work desk. That way, you can always rewards yourself with your favorite sweets or nuts!

<img src="http://demo.vogelino.com/nibble-do-list/realistic-simulation.jpg" alt="Rough sketch of dispenser's look"/>

### Prototype 1
The first prototype has been made of wooden. I sawn it myself with material I had at home. Unfortunately, the wood used was really hard to saw by hand. It produced really imprecise results. When all parts were combined together it looked ugly and more importantly, it didn't work well.

On the upper part of the box, I introduced a perforated coffee filter into the reservoir and filled it up with peanuts. The rotating cylinder supposed to charge itself with peanuts and to deliver them was too distant from the hole connecting the upper part from the bottom. Because of this space, many peanuts did escape from the reservoir from the sides of the cylinder and that went worse when it rotated.

I must admit that the first prototype has been made too quick and dirty. Above all, the imprecision of the cuts and the general weaknesses turned this first prototype into a Fail. Nevertheless, I went able to draw lessons of my failures and could make the second prototype better.

|<img src="http://demo.vogelino.com/nibble-do-list/prototype-v1-overview.jpg" alt="First prototype overall view"/>|<img src="http://demo.vogelino.com/nibble-do-list/prototype-v1-servo.jpg" alt="First prototype's servo"/>|<img src="http://demo.vogelino.com/nibble-do-list/prototype-v1-hole.jpg" alt="First prototype's hole"/>|
|---|---|---|

### Prototype 2

<img src="http://demo.vogelino.com/nibble-do-list/prototype-v2-plans.jpg" height="80" style="float: right; margin-left: 30px;" alt="Plans of the second prototype"/>

The second prototype has been made with a bigger focus on precision. I build it with thick cardboard which is easier to cut precisely and to correct when imprecisions occur. First I draw the plans in Illustrator in order to avoid surprises. This helped a lot.

I started to assemble the pieces together and everything was working according to plan. Indeed, I'm quite happy with the result as I'm not used to build mechanical complex systems :stuck_out_tongue_winking_eye:!


|<img src="http://demo.vogelino.com/nibble-do-list/prototype-v2-cutting-work.jpg" alt="Rough sketch of dispenser's look"/>|<img src="http://demo.vogelino.com/nibble-do-list/prototype-v2-box-structure.jpg" alt="Rough sketch of front's look"/>|<img src="http://demo.vogelino.com/nibble-do-list/prototype-v2-first-pieces.jpg" alt="Rough sketch of front's look"/>|<img src="http://demo.vogelino.com/nibble-do-list/prototype-v2-cylinder-unmounted.jpg" alt="Rough sketch of side's look"/>|<img src="http://demo.vogelino.com/nibble-do-list/prototype-v2-cylinder-mounted.jpg"  alt="Rough sketch of side's look"/>|
|---|---|---|---|---|
|<img src="http://demo.vogelino.com/nibble-do-list/prototype-v2-bones-view.jpg"  alt="Rough sketch of side's look"/>|<img src="http://demo.vogelino.com/nibble-do-list/prototype-v2-overview.jpg" alt="Rough sketch of dispenser's look"/>|<img src="http://demo.vogelino.com/nibble-do-list/prototype-v2-bird-view.jpg" alt="Rough sketch of front's look"/>|<img src="http://demo.vogelino.com/nibble-do-list/prototype-v2-entrance-open.jpg" alt="Rough sketch of side's look"/>|<img src="http://demo.vogelino.com/nibble-do-list/prototype-v2-entrance-closed.jpg"  alt="Rough sketch of side's look"/>|


The rotation of the cylinder was quite smooth and worked even better than excepted. The first problem occurred when filling the prototype with peanuts. I suppose that the weight of the cylinder shifted the helices of the servo from their original position. This twisted the axis of the cylinder and blocked the its rotation. Fortunately I could fix the problem by putting the cylinder a bit lower!

```
// Images and videos coming
```

The second issue happened when the recipient was filled with peanuts until the top. The cylinder's rotation blocked because peanuts were half in the cylinder's hole and half in the recipient. To be sure that this caused the blocking, I inserted red lentils (way smaller) into the recipient. At this size the rotation worked well, even when marking tasks as "done" one after the other.

I spoke about this issue to Fabian and he recommended me to try with _smarties_. I tried and it still blocked some times. I found out that the helices fixed to the cylinder where sometimes moving without the cylinder itself. The helices were not fixed with glue anymore but with masking tape. So, I replaced it with adhesive tape which held much better.

After these many fixes, the prototype was finally working as excepted. Optically, the object itself became no masterpiece and honestly, it looks even quite ugly. However, I'm not product designer and I really don't pretend to it. If this would have been a real project, I think it would have been enough self-explanatory to communicate the idea and the purpose of the product.

```
// Images and videos coming
```

### Conclusion
Within two weeks, I could conceptualize, code and build a product in the amazing Internet of Things and make my first step in the world of physical Computing! I was impressed how easy it has been to achieve basic things, particularly if you come from the javascript world. Johnny Five allowed me to code an Arduino board without been forced to learn another language, which made me feel really comfortable.

I'm highly positive about realizing this project and about following this course. I really enjoyed doing it and learned a lot of stuff. It enlarged my vision on what's possible nowadays with limited means and on new potential fields of professional activity in the future.

If you're interested about knowing more concerning the nibble-do list or if you just want to get in touch, go ahead! I'm open for suggestions and curious about your own experiences!

With <3

Lucas

---

Write your thoughts here ––>
[![Gitter Chat](https://badges.gitter.im/vogelino/nibble-do-list.svg)](https://gitter.im/vogelino/nibble-do-list)

---

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
