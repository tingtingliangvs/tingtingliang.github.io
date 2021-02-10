---
layout: page
title: GraSPH2
description: GPU based particle simulation for planet formation.
img: /assets/img/GraSPH2/graSPH2_main.png
importance: 5
---

<a href="https://github.com/hschwane/GraSPH2"><i class="fab fa-github"></i> view on github</a><br>
<a href="/assets/pdf/schwanekampAndKraft2020PlanetFormation.pdf"><i class="fas fa-book"></i> pdf documentation</a>

GraSPH2 is the successor of my interactive star formation simulation [GraSPH](/projects/GraSPH). It uses CUDA instead of OpenGL compute shader, which allows it to run on HPC systems. The physical model was extended to handle solid bodies and is now designed much more flexible to allow for future changes. In addition, the user can easily switch between different math precision settings to balance performance and accuracy. GraSPH2 can be used for all kinds of particle simulations that require a n-body component. 

The interactive visualization has been reworked and can now display particles as 3D spheres as well as points. It shows particle properties using different color maps and features a build in UI to customize the visualization settings. In addition to the real time visualization, data can now be stored in files to analyze, view or continue the simulation at a later time.  

The projects pdf documentation, which explains the physical model, implementation on the GPU and results of first tests, can be downloaded [here](/assets/pdf/schwanekampAndKraft2020PlanetFormation.pdf). While it might be formatted like a research paper, it was not peer reviewed and published in the traditional way. It is merly a project documentation and should be treated as such.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/GraSPH2/graSPH2_main.png' | relative_url }}" alt="" title="Simulation of planet formation"/>
    </div>
</div>
<div class="caption">
    Multiple planetesimals form from a pebble and dust cloud. Different color shows the different movement speeds of the particles.
</div>
