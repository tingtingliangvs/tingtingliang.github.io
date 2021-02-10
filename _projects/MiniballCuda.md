---
layout: page
title: Miniball Cuda
description: Find the smallest sphere that encloses a set of points.
img:
importance: 10
---

<a href="https://github.com/hschwane/MiniballCuda"><i class="fab fa-github"></i> view on github</a>

While working with spatial data structures to accelerate n-body GPU simulation, I experimented with bounding spheres. 
To generate the smallest sphere enclosing all child nodes, I ported Bernd Gaertner's Miniball algorithm to CUDA. 
The original code is available on the [ETHZ Website](https://people.inf.ethz.ch/gaertner/subdir/software/miniball.html) website. The algorithm is explained in 
this [Paper](http://www.inf.ethz.ch/personal/gaertner/texts/own_work/esa99_final.pdf).

The CUDA port does not parallelize Miniball itself. Instead it implements Miniball as a device function. 
This way, every cuda thread can compute it's own enclosing sphere. The code is available on [github](https://github.com/hschwane/MiniballCuda). 
