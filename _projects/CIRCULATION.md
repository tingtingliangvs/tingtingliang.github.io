---
layout: page
title: CIRCULATION
description: An attempt at interactive climate simulation.
img: /assets/img/circulation/circ_title.png
importance: 8
---

<a href="https://github.com/hschwane/CIRCULATION"><i class="fab fa-github"></i> view on github</a><br>
<a href="/assets/pdf/schwanekamp2020interactiveMeteorology.pdf"><i class="fas fa-book"></i> pdf documentation</a>

Many people only showcase the projects they consider sucessfull. 
Not only does this create unrealistic expectations of how the research process looks like, 
it also disregards how much can be learned, even the goals set at the start of a project are not met.

`CIRCULATION` stands for Cuda InteRactive Climate simULATION. The idea was to build a prototype for a new climate simulation code to run on GPUs.
It should have featured an user interface for changeing initial conditions and simulation settings, 
as well as an interactive 3D visualization that is updated while the simulation is runniong. 
The simulation of compressible fluids in spherical coordinates proved to be quite hard and multiple difficulties were encountered along the way. 
In the end of the allocated timeframe of the project (one day per week for one semester), 
the projects code resembles a collection of experiments more than a finished prototype.

I still belive that building such a code is possible given more time and and the support of experienced meteorologists. It could also be extended to run on 
modern supercomputers which feature more and more GPU nodes. 
The lessons learned from those experiments are now used by [scientists at ETHZ](https://iac.ethz.ch/group/atmospheric-predictability.html) to advance their research.  

The project [documentation](/assets/pdf/schwanekamp2020interactiveMeteorology.pdf) describes all explored methods and documents the lessons learned. 
While it might be formatted like a research paper it was not peer reviewed and published in the traditional way. 
It is merly a project documentation and should be treated as such.

<div class="row">
    <div class="col-sm mt-3">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/circulation/circulation_full.png' | relative_url }}" alt="" title="circulation ui and visualization"/>
    </div>
</div>
<div class="caption">
    Screenshot shows the ui and visualization during a running simulation.
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm mt-2">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/circulation/arrows_small.png' | relative_url }}" alt="" title="vector field arrows"/>
    </div>
    <div class="col-sm mt-2">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/circulation/streamlines.png' | relative_url }}" alt="" title="streamlines"/>
    </div>
</div>
<div class="caption">
    Vector fields can be visualized as arrows or streamlines.
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm mt-2">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/circulation/poleadvection.png' | relative_url }}" alt="" title="advection over the pole"/>
    </div>
    <div class="col-sm mt-2">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/circulation/polereflection.png ' | relative_url }}" alt="" title="reflection at the pole"/>
    </div>
</div>
<div class="caption">
    Singularities at the poles are a major difficulty when simulating in spherical coordinates. Ideally the structure should be able to move over the pole without changing form (left image) or beeing reflected (right image).
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm mt-2">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/circulation/lolagrid.png' | relative_url }}" alt="" title="longitude latitude grid"/>
    </div>
    <div class="col-sm mt-2">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/circulation/icogrid.png' | relative_url }}" alt="" title="icosahedral grid"/>
    </div>
    <div class="col-sm mt-2">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/circulation/rectgrid.png' | relative_url }}" alt="" title="cartesian grid"/>
    </div>
</div>
<div class="caption">
    Experiemtents were performed with different kinds of grids and coordinate systems. All have advantages and disadvantages as described in the pdf documentation.
</div>
