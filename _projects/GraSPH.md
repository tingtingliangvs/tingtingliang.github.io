---
layout: page
title: GraSPH
description: Interactive Star Formation simulation.
img: /assets/img/GraSPH/preview.png
importance: 9
---

<a href="https://github.com/hschwane/GraSPH"><i class="fab fa-github"></i> view on github</a><br>
<a href="https://kola.opus.hbz-nrw.de/frontdoor/index/index/docId/1638"><i class="fas fa-book"></i> thesis (german)</a>

For my bachelor thesis, I developed a code to simulate star formation interactively. 
It simulates a gas cloud using [Smoothed Particle Hydrodynamics](https://en.wikipedia.org/wiki/Smoothed-particle_hydrodynamics). 
All particles attract each other by gravity. To reach interactive speeds with a simulation model form astrophysics, most calculations are performed on the GPU.
I used OpenGL compute shader for the simulation and the OpenGL rendering pipeline for visualization. In addition many parameters exist to tune accuracy against speed. Since the simulation is rendered in 3D while it is running, the user can fly around the gas cloud using the W,A,S,D-keys, similar to a video game. 

You can download my thesis [here](https://kola.opus.hbz-nrw.de/frontdoor/index/index/docId/1638), and dive into the deatail. It is however written in german.

If you want to try the full experience, I recommend you to download the code from the [github repository](https://github.com/hschwane/GraSPH) 
and compile it for your machine. Alternatively, check out this youtube video, which was screen-captured on a consumer grade laptop:

<div>
<div id="yt-wrap" style="position:relative; padding-top:56.25%; background-color: lightgray;">
<div style="text-align:center; position:absolute;top:0;left:0;width:100%;height:100%; display:flex; justify-content:center; align-items:center;">
<p style="color:black;">Please enable functional cookies in the cookie preferences (botom of the page),<br> to view the video. Or view on <a href="https://youtu.be/PUyE3j0aoMw">youtube</a>.</p>
</div>
</div>
</div>
<script type="text/plain" cookie-consent="functionality"> 
var obj = {"video": {"value": "<iframe style='position:absolute;top:0;left:0;width:100%;height:100%;' src='https://www.youtube-nocookie.com/embed/PUyE3j0aoMw' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"}};
$("#yt-wrap").html(obj.video.value);
</script>

<br>
<br>
After finishing my thesis, I continued working on the code as part of my job as a research assistant at the [Max Planck Institute for Astronomy](http://www.mpia.de/en). It was extended to simulate planet formation and became [GraSPH2](/projects/GraSPH2). 

While it could never rival supercomputer simulations desgined for pyhsics simulation in resolution or accuracy, it was still very useful to our research group. It was quick to change settings or implement a new feature and then run a simulation with immedite feedback. The quick turn-around time allows what I call rapid prototyping for scientific simulations. It resulted in the testing of many different settings over the course of a creative and very late evening. Probably best described as the physics equivalent to a hackathon. Something not possible at all with a simulation code, that needs a few houres or days to run in a remote supercomputing center 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/GraSPH/06.png' | relative_url }}" alt="" title="star formation simulation"/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/GraSPH/07.png' | relative_url }}" alt="" title="star formation simulation"/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/GraSPH/08.png' | relative_url }}" alt="" title="star formation simulation"/>
    </div>
</div>
<div class="caption">
    When the simulation runs, the gas cloud compresses under the the force of it's own gravity. Because sub-clouds also collapse, it fragments and multiple structures form.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/GraSPH/01.png' | relative_url }}" alt="" title="different zoom levels"/>
    </div>
</div>
<div class="caption">
    Multiple zoom levels of the simulation composited on top of each other. This shows the wide range of different scales SPH can handle in one simulation. Since it is based on particles, variable resulotion is almost 'build in'.
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/GraSPH/02.png' | relative_url }}" alt="" title="two protostars merging"/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/GraSPH/03.png' | relative_url }}" alt="" title="two protostars merging"/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/GraSPH/04.png' | relative_url }}" alt="" title="two protostars merging"/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/GraSPH/05.png' | relative_url }}" alt="" title="two protostars merging"/>
    </div>
</div>
<div class="caption">
    Here two protostars move very close to each other. They form a binary system, orbiting each other. The system is not stable and the stars move closer until they finally merge.
</div>
