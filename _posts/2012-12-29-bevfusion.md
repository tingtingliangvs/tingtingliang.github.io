---
layout: distill
title: 'BEVFusion: A Simple and Robust LiDAR-Camera Fusion Framework'
description: NeurIPS 2022
giscus_comments: true
date: 2022-12-29

authors:
  - name: Tingting Liang
    url: ""
    affiliations:
      name: Peking University

bibliography: 2018-12-22-distill.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: Why multi-sensor for perception?
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: How to fuse information from multi-sensors?
  - name: Our method
  - name: Results
  - name: Concurrent works
  - name: Further Information

# Below is an example of injecting additional post-specific styles.
# If you use this post as a template, delete this _styles block.
_styles: >
  .fake-img {
    background: #bbb;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
  }
  .fake-img p {
    font-family: monospace;
    color: white;
    text-align: left;
    margin: 12px 0;
    text-align: center;
    font-size: 16px;
  }

---

## Why multi-sensor for perception?

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/bevfusion/lidarmiss.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An example of a black car resulting in lower Lidar reflectance, causing LiDAR-only 3D detection difficulties.
</div>

LiDAR and camera technology are essential for enabling self-driving cars to navigate their surroundings. However, these systems have their own limitations. Cameras provide detailed visual information, but can be affected by weather and do not offer reliable 3D data. LiDAR, on the other hand, provides 3D information but can struggle to accurately measure objects that are far away or are dark in color, as they absorb NIR （Near Infrared) radiation. As a result, relying solely on either LiDAR or camera data can lead to failures in complex scenarios.


## How to fuse information from multi-sensors?

In the early stage of perception systems, people design separate deep models for each sensor and fuse information via post-processing approaches. This method is limited by the loss of intermediate information. Recently, people have designed LiDAR-camera fusion deep networks to better leverage information from both modalities. Specifically, the majority of works can be summarized as follow: i) given one or a few points of the LiDAR point cloud, LiDAR to world transformation matrix and the essential matrix (camera to world); ii) people transform the LiDAR points or proposals into camera world and use them as queries, to select corresponding image features. 
This line of work constitutes the state-of-the-art methods of 3D perception.

However, one underlying assumption that people overlooked is, that as one needs to generate image queries from LiDAR points, the current LiDAR-camera fusion methods intrinsically depend on the raw point cloud of the LiDAR sensor. In the realistic world, people discover that if the LiDAR sensor input is missing, for example, LiDAR points reflection rate is low due to object texture, a system glitch of internal data transfer, or even the field of view of the LiDAR sensor cannot reach 360 degrees due to hardware limitations, an current fusion methods fail to produce meaningful results. This fundamentally hinders the applicability of this line of work in the realistic autonomous driving system. 

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/bevfusion/prefusionvis.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An example of a black car resulting in lower Lidar reflectance, causing 3D detection difficulties.
</div>

We argue the ideal framework for LiDAR-camera fusion should be, that each model for a single modality should not fail regardless of the existence of the other modality, yet having both modalities will further boost the perception accuracy. 

## Our method

To this end, we propose a surprisingly simple yet effective framework that disentangles the LiDAR-camera fusion dependency of the current methods, dubbed BEVFusion. Specifically,  our framework has two independent streams that encode the raw inputs from the camera and LiDAR sensors into features within the same BEV space (Why BEV? People have discovered that bird's eye view (BEV) has been an de-facto standard for autonomous driving scenarios as, generally speaking, car cannot fly). We then design a simple module to fuse these BEV-level features after these two streams, so that the final feature can be passed into modern task prediction head architecture.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/bevfusion/bevfusionvis.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An example of a black car resulting in lower Lidar reflectance, causing 3D detection difficulties.
</div>

As our framework is a general approach, we can incorporate current single modality BEV models for camera and LiDAR into our framework.  We moderately adopt Lift-Splat-Shoot as our camera stream, which projects multi-view image features to the 3D ego-car coordinate features to generate the camera BEV feature. Similarly, for the LiDAR stream,  we select three popular models, two voxel-based ones and a pillar-based one to encode the LiDAR feature into the BEV space. 

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication_preview/bevfusion.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An overview of BEVFusion framework. 
</div>

<!-- This theme supports rendering beautiful math in inline and display modes using [MathJax 3](https://www.mathjax.org/) engine.
You just need to surround your math expression with `$$`, like `$$ E = mc^2 $$`.
If you leave it inside a paragraph, it will produce an inline expression, just like $$ E = mc^2 $$.

To use display mode, again surround your expression with `$$` and place it as a separate paragraph.
Here is an example:

$$
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
$$

Note that MathJax 3 is [a major re-write of MathJax](https://docs.mathjax.org/en/latest/upgrading/whats-new-3.0.html) that brought a significant improvement to the loading and rendering speed, which is now [on par with KaTeX](http://www.intmath.com/cg5/katex-mathjax-comparison.php). -->



## Results

On the nuScenes dataset, our simple framework shows great generalization ability. Following the same training settings, BEVFusion improves PointPillars and CenterPoint by 18.4% and 7.1% in mean average precision (mAP) respectively, and achieves a superior performance of 69.2% mAP comparing to 68.9% mAP of TransFusion, which is considered as state-of-the-art. Under the robust setting by randomly dropping the LiDAR points inside object bounding boxes with a probability of 0.5, we propose a novel augmentation technique and show that our framework surpasses all baselines significantly by a margin of 15.7%~28.9%  mAP and demonstrate the robustness of our approach. 

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/bevfusion/bevvis.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    (a) We visualize the point clouds under the BEV perspective of two settings,  limited field-of-view (FOV) and LiDAR fails to receive object reflection points, where the orange box indicates the object points are dropped. 
	Blue boxes are bounding boxes and red-circled boxes are false-positive predictions. 
	(b) We show the predictions of the state-of-the-art method, TransFusion, and ours under three settings. Obviously, 
	the current fusion approaches fail inevitably when the LiDAR input is missing, while our framework can leverage the camera stream to recover these objects.
</div>

## Concurrent works
Some concurrent works also focus on fusing LiDAR-camera in 3D space:

BEVFusion: Multi-Task Multi-Sensor Fusion with Unified Bird's-Eye View Representation. [MIT](https://bevfusion.mit.edu/)


## Further Information

To learn more about work, watch our [video in NeurIPS2022](https://neurips.cc/virtual/2022/poster/55002).

For more detailed information, check out our [paper](https://arxiv.org/abs/2205.13790) and [code](https://github.com/ADLab-AutoDrive/BEVFusion). We are happy to receive your feedback!

```
@inproceedings{liang2022bevfusion,
  title = {BEVFusion: A Simple and Robust LiDAR-Camera Fusion Framework},
  author = {Liang, Tingting and Xie, Hongwei and Yu, Kaicheng and Xia, Zhongyu and Lin, Zhiwei and Wang, Yongtao and Tang, Tao and Wang, Bing and Tang, Zhi},
  booktitle = {Neural Information Processing Systems (NeurIPS)},
  year = {2022},
}
```

