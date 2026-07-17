---
title: "Awards"
layout: "simple-static"
type: "page"
---

## Awards

Following its tradition, SGP 2026 presented three Best Paper Awards as well as a Software Award recognising the authors of an open-source software project that has greatly influenced the field.

<!--
Please send nominations to <awardnominations@geometryprocessing.org>.
-->


Previous awardees are listed at <https://awards.geometryprocessing.org/>.


## Software Award

This recognition is awarded to the authors who follow open source code principles and share their source code. The Software Award Committee 2026 consisted of Marco Livesu, Amir Vaxman, Pierre Alliez, and Daniele Panozzo.

The SGP Software Award 2026 comes with a prize sponsored by [GeometryFactory](https://geometryfactory.com/).

### Winner
{{<rawhtml>}}
    <div class="text_img_right_container">
        <div class="image-part" style="flex: 0.3; align-items: normal">
            <figure style="width: auto">
                <img src="/images/awardees/rx.png" alt="RXMesh logo" style="max-width: 10em">
            </figure>
        </div>
        <div class="text-part">
            <p>
{{</rawhtml>}}
[**RXMesh**](https://github.com/owensgroup/RXMesh) by
**Ahmed H. Mahmoud**, **Serban D. Porumbescu**, and **John D. Owens**

> A library for processing triangle mesh entirely on the GPU.
> It lets you write geometry processing applications (e.g., smoothing, remeshing, parameterization, simulation, and more) that run entirely on the GPU, without manually managing connectivity data structures, memory layouts, or kernel launch configurations.
{{<rawhtml>}}
            </p>
        </div>
    </div>
{{</rawhtml>}}



## Best Paper Awards

The SGP 2026 Best Paper awards consist of one _Best Paper Award_, and two runner-up _Honorable Mentions_. Both the scores from the review cycle and the quality of the presentation were evaluated.

The Best Paper Award Committee 2026 consisted of the conference co-chairs, technical program co-chairs, and the graduate school co-chairs.

### Winner

[_Phong-Rodrigues Extrinsic Vector-Field Processing_](https://diglib.eg.org/bitstream/handle/10.1111/cgf70515/cgf70515.pdf)

_Authors_: **Hongyi Liu**, **Oded Stein**, **Amir Vaxman**, **Mirela Ben-Chen**, and **Misha Kazhdan** 

[[Presentation video]](https://www.youtube.com/watch?v=OQS0wOqVcpQ&list=PLczjMYjix1EM)

{{<rawhtml>}}
    <div class="text_img_right_container" style="gap: 20px">
        <div class="image-part" style="align-items: normal">
            <figure>
                <img src="/images/awardees/misha.jpg" alt="Misha Kazhdan receiving the award certificate from Marco Livesu" style="max-width: 30em">
            </figure>
        </div>
        <div class="text-part" style="padding-right: 0px;">
We introduce a new extrinsic discretization of tangent vector fields on triangle meshes that is continuous, with bounded derivatives that are continuous almost everywhere, supporting pointwise evaluation and integration of differential operators. We achieve this by building a continuous normal field over the mesh via Phong interpolation and using minimal Rodrigues rotations to transport vertex-based tangent vectors into triangle interiors. Unlike most existing discretizations, which typically sacrifice either continuity or the ability to evaluate derivatives pointwise, our approach supports both. Because it is pointwise evaluatable, and using the fact that the covariant derivative can be decomposed into its symmetric, antisymmetric, and scalar components, our discretization supports the construction of standard vector-field processing operators including the connection and Hodge Laplacians, Killing energy, divergence, curl, and the Lie bracket. This framework provides a simple and practical finite-element formulation for vector-field processing on meshes, supporting both integration-based operators and pointwise queries. To our knowledge, ours is the first discretization that jointly enables extrinsic continuous vector fields, bounded derivatives, and pointwise evaluation of this collection of operators.
        </div>
    </div>
{{</rawhtml>}}


### Honorable Mention

[_Strictly Conservative Neural Distance Fields_](https://diglib.eg.org/bitstream/handle/10.1111/cgf70528/cgf70528.pdf)

_Authors_: **Ingmar Ludwig** and **Marcel Campen**

[[Presentation video]](https://www.youtube.com/watch?v=cPVUpl4Cjww&list=PLczjMYjix1EM)

{{<rawhtml>}}
    <div class="text_img_right_container" style="gap: 20px">
        <div class="image-part" style="align-items: normal">
            <figure>
                <img src="/images/awardees/ingmar.jpg" alt="Ingmar Ludwig receiving the award certificate from Marco Livesu" style="max-width: 30em">
            </figure>
        </div>
        <div class="text-part" style="padding-right: 0px;">
We propose a first method to generate neural unsigned or signed distance fields (SDFs) that are guaranteed to be conservative with respect to a given 3D shape. This means the true distance is never overestimated and the zero-level set is a bounding volume for the shape. The method makes use of neural network architectures that ensure Lipschitz continuity by design in combination with a novel tailored training data selection scheme and constrained training strategy. We demonstrate that this yields both theoretical and empirical benefits over previous approaches to conservativeness (for non-distance neural implicits), allowing for tighter approximation and additionally providing the valuable distance information.
            </p>
        </div>
    </div>
{{</rawhtml>}}

### Honorable Mention

[_Tangent Blow-Ups for Processing Non-Manifold Geometry_](https://diglib.eg.org/bitstream/handle/10.1111/cgf70527/cgf70527.pdf)

Authors: **Alice Petrov**, **Mohammad Sina Nabizadeh**, **Ana Dodik**, and **Justin Solomon**

[[Presentation video]](https://www.youtube.com/watch?v=6G1aSS4EKGw&list=PLczjMYjix1EM)


{{<rawhtml>}}
    <div class="text_img_right_container" style="gap: 20px">
        <div class="image-part" style="align-items: normal">
            <figure>
                <img src="/images/awardees/alice.jpg" alt="Alice Petrov receiving the award certificate from Marco Livesu" style="max-width: 30em">
            </figure>
        </div>
        <div class="text-part" style="padding-right: 0px;">
Many geometry processing pipelines implicitly assume their input data is a manifold, or is sampled from one, with a unique tangent plane at every point. Geometric data, however, routinely contains sharp features like edges, corners, self-intersections, branching junctions, and other singularities, rendering standard methods ill-defined at these points. To bring geometry processing to these and other singular spaces, we introduce the “tangent blow-up,” a representation inspired by algebraic geometry that restores structure at singularities by lifting to the product of the ambient space and the Grassmannian of tangent planes. After iterating this construction, points that coincide in position but differ in tangent direction, curvature, or higher-order contact become well-separated. We equip the tangent blow-up with a product metric and define discretized differential operators, such as the gradient, divergence, and Laplacian, directly in the lifted domain. We demonstrate our framework across geodesic computation, segmentation, surface parameterization, and curvature estimation.
        </div>
    </div>
{{</rawhtml>}}


## Test-of-time Award

Starting in 2021, a Test-of-time Award is given each year to a paper that was published at least 10 years prior and has generated the most impact. The Test-of-time Award is based on a vote by all technical papers committee members. The Test of Time Award Chair 2026 was Marc Alexa.

### Winner
[_Laplace-Beltrami Eigenfunctions for Deformation Invariant Shape Representation_ (SGP 2007)](/images/awardees/rustamovSGP2007.pdf) by **Raif M. Rustamov**

[ACM Digital Library](https://dl.acm.org/doi/10.5555/1281991.1282022)



{{<rawhtml>}}
    <div class="text_img_right_container" style="gap: 20px">
        <div class="image-part" style="align-items: normal">
            <figure>
                <img src="/images/awardees/lbe-disrep.png" alt="A rendering of three differently deformed Armadillo models with very similar segmentations into 6 parts" title="Figure 1: The k-means clustering on the GPS coordinates results in a pose invariant segmentation." style="max-width: 30em">
            </figure>
        </div>
        <div class="text-part" style="padding-right: 0px;">
A deformation invariant representation of surfaces, the GPS embedding, is introduced using the eigenvalues and eigenfunctions of the Laplace-Beltrami differential operator. Notably, since the definition of the GPS embedding completely avoids the use of geodesic distances, and is based on objects of global character, the obtained representation is robust to local topology changes. The GPS embedding captures enough information to handle various shape processing tasks as shape classification, segmentation, and correspondence. To demonstrate the practical relevance of the GPS embedding, we introduce a deformation invariant shape descriptor called G2-distributions, and demonstrate their discriminative power, invariance under natural deformations, and robustness.
        </div>
    </div>
{{</rawhtml>}}



