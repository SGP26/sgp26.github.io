---
title: "Program"
layout: "program"
type: "page"
menu: program


keynotes:
  - name: Justin Solomon
    url: https://people.csail.mit.edu/jsolomon/
    affiliation: MIT CSAIL
    title: "Computational Optimal Transport: From Low to High Dimension and Back"
    abstract: |
        The *optimal transport* problem asks a simple geometric question:  What is the most efficient way to transform one probability distribution into another along a piece of geometry?  Beyond its mathematical interest, optimal transport underlies a variety of applications, from supply chains to mesh processing, statistics, and even generative AI.  Over the past two decades, research in geometry processing has played a central role in shaping algorithms for optimal transport, with foundational advances emerging from the SGP community.  At the same time, popular problems in applied optimal transport have shifted from low-dimensional settings in graphics and imaging to high-dimensional settings in machine learning.

        In this retrospective keynote, I will trace how my team's work in computational optimal transport was shaped by studying its applications to geometry processing---even as the landscape of research in this area shifted in dimensionality and application.  Ultimately, this journey illustrates the broader value of "Geometric Data Processing" as a discipline: identifying shared geometric and variational principles across domains that differ dramatically in dimension, scale, and data fidelity.
    bio: |
        Justin Solomon is an associate professor of Electrical Engineering and Computer Science in MIT's Computer Science and Artificial Intelligence Laboratory (CSAIL).  He leads the CSAIL Geometric Data Processing group, which studies problems at the intersection of geometry, large-scale optimization, and applications.
    portrait: /images/keynotes/justin_solomon.jpg

  - name: Julie Digne
    affiliation: "LIRIS - CNRS - Université Claude Bernard Lyon 1"
    url: "https://perso.liris.cnrs.fr/julie.digne/"
    title: "Geometric not-so-deep learning"
    portrait: /images/keynotes/julie_digne.jpg
    abstract: |
        Over the past decade, deep learning for geometric data processing has advanced significantly, with numerous methods proposed to handle irregular, non-Euclidean data. However, 3D objects databases are scarce and only partially cover the variety of shapes practitioners want to analyze. As a consequence many shapes fall out-of-distribution. 
        However, many tasks, such as compression, denoising or resampling, can already benefit from leveraging statistical geometric features, without requiring shape space priors.
        In this talk, I will focus on lightweight methods that are computationally efficient, run on standard hardware by operating directly on individual shapes. Through a series of projects, I will show how modern optimization techniques, with or without neural networks, can address geometric challenges effectively, without relying on large datasets or heavy computational resources.
    bio: |
        Julie Digne is a Senior Researcher at CNRS, affiliated with the LIRIS laboratory in Lyon (Origami team). She earned her PhD in Applied Mathematics from École normale supérieure de Cachan in 2010. Following a postdoctoral position at INRIA, she joined LIRIS in 2012, where her research focuses on geometry processing and machine learning for geometric data.

  - name: "Bernhard Kerbl"
    affiliation: "University of Copenhagen / Vienna University of Technology (TU Wien)"
    url: "https://snosixtyboo.github.io/"
    title: "Resource-Efficient Visual Computing – Frontiers and Applications of Real-Time Visual AI"
    portrait: /images/keynotes/bernhard_kerbl.jpg
    abstract: |
        Modern visual computing is transforming the means and ways by which we map, understand and interact with the physical world. 3D and 4D reconstructions of real artefacts are now viable from just a handful of casual camera observations; object recognition and classification can be done with unprecedented accuracy and reliability. However, a key requirement for the overall usefulness of these methods is their efficiency: Efficiency dictates whether a solution can run in real-time; it governs the hardware requirements for execution, and wether it can be used without requiring massive, industry-grade infrastructure. Real-time performance enables crucial emerging trends, such as robots interacting with the real world, or visual AI providing on-line assistance in medical treatments on patients. Resource-efficiency, on the other hand, ensures that these breakthrough technologies can be employed by almost anyone. In this talk, Dr. Kerbl will discuss key challenges and opportunities of real-time, resource-efficient visual computing and AI, focusing on open tasks in fundamental research and applied fields, including biomedicine and robotics.
    bio: |
        Dr. Kerbl is a Tenure-track Assistant Professor at the University of Copenhagen and a Principal Project Investigator associated with the Vienna University of Technology (TU Wien). Before that, he was a Visiting Researcher at the Robotics Institute, Carnegie Mellon University, in the Human Sensing Lab under Fernando de La Torre. He obtained his PhD at Graz University of Technology in 2018. In 2019 he pursued a postdoc at TU Wien in 2019, followed by another in 2022 with INRIA in George Drettakis’ GraphDeco group. His research focuses on real-time graphics, parallel processing, point-based rendering, image-based rendering, radiance fields and novel-view synthesis. Through collaboration with mentors, colleagues and students, Dr. Kerbl's research has been honored with Best Paper awards at major graphics conferences, including SIGGRAPH, High-Performance Graphics, Pacific Graphics, EGPGV, and GRAPP. He has lectured on the topics of GPU programming, real-time rendering, physically-based rendering, game physics and scientific working at TU Wien, Graz University of Technology and FH Salzburg.

graduateSchoolCourses:
- title: "Directional Fields"
  date: 2026-06-30
  time: "09:00"
  teaser: /images/gradschool/dir-fields.png
  speakers:
    - name: Amir Vaxman
      url: https://avaxman.github.io/
      affiliation: The University of Edinburgh
  abstract: |
    I will discuss classic and state-of-the-art methods to design directional fields on discrete surfaces, with applications to meshing, solving PDEs, and visualization.

- title: "Differentiable Geometry Processing in Python"
  date: 2026-06-30
  time: "11:00"
  teaser: /images/gradschool/diff-geom.png
  speakers:
    - name: "Ana Dodik"
      url: "https://anadodik.github.io/"
      affiliation: "MIT"
    - name: "Ahmed Mahmoud"
      url: "https://ahdhn.github.io/"
      affiliation: "MIT"
  abstract: |
    Inverse problems have a long history in computer graphics with applications ranging from fabrication to computer vision. While existing software packages such as Taichi, Mitsuba, Warp, and PyTorch3D focus primarily on differentiating through simulations of physical systems such as elasticity or light transport, differentiating through geometry processing algorithms is relatively underexplored. Existing geometry-processing-focused libraries for gradient computation (e.g., TinyAD) have poor operability with machine learning frameworks and no GPU support, limiting their practicality. This course explores how PyTorch, with its automatic differentiation and GPU acceleration capabilities, can be leveraged for differentiable geometry processing. We begin with the fundamentals of PyTorch, covering its computational model and automatic differentiation mechanisms, before introducing key optimization techniques for geometric data, focusing on meshes and other common representations. The course will include real-world applications of these concepts such as mesh smoothing and parameterization, meta-optimization, as well as machine-learning workflows. By the end of the session, attendees will have a practical understanding of how to integrate PyTorch into their own differentiable geometry processing workflows.



- title: "Geometry Processing from 2D Image Priors"
  date: 2026-06-29
  time: "16:30"
  teaser: /images/gradschool/image-priors.png
  speakers:
    - name: "Dale Decatur"
      url: "https://ddecatur.github.io/"
      affiliation: "University of Chicago"
    - name: "Richard Liu"
      url: "https://rgliu.com/"
      affiliation: "University of Chicago"
    - name: "Nam Anh Dinh"
      url: "https://people.cs.uchicago.edu/~namanh/"
      affiliation: "University of Chicago"
  abstract: |
    2D foundation models have exploded in popularity and capability in recent years. While text-to-image generative models, image feature encoders, and VLMs (vision-language models) are widely used in 2D contexts such as image processing and chatbots, they also facilitate numerous applications to traditionally 3D domains such as robotics, self-driving, and 3D generation. This course explores how 3D understanding can emerge from 2D priors, and how we can leverage these priors towards tasks in geometry processing. We summarize the literature on 3D awareness in 2D models and dive into the details on different approaches for lifting information from 2D to 3D. In doing so, we address common challenges in this field and conclude with three specific applications: mesh stylization, cross field generation, and mesh deformation.

- title: "Shape Spaces"
  date: 2026-06-29
  time: "09:00"
  teaser: /images/gradschool/shape-spaces.png
  speakers:
    - name: "Josua Sassen"
      url: "https://josuasassen.com"
      affiliation: "ENS Paris-Saclay"
    - name: "Florine Hartwig"
      url: "https://ins.uni-bonn.de/staff/hartwig"
      affiliation: "Universität Bonn"
  abstract: |
    In applications such as animation or shape analysis, we are interested in processing multiple shapes at once and, hence, in a mathematical model for collections of shapes yielding flexible numerical tools.
    [1] proposed to consider Riemannian shape spaces in this context, i.e. possibly infinite-dimensional Riemannian manifolds where points are geometric objects such as surfaces. These (Riemannian) shape spaces have found usage in a lot of areas of applied mathematical research such as computational anatomy, computer graphics, shape optimization, and image processing.
    In this course, we will give an overview of different types of shape spaces interesting for geometry processing and will discuss concrete algorithms resulting from their theory.

    [1] Kendall, David G. "Shape manifolds, procrustean metrics, and complex projective spaces." Bulletin of the London mathematical society 16.2 (1984): 81-121.


- title: "Cone-Nets: Theory and Interactive Design"
  date: 2026-06-29
  time: "14:30"
  teaser: /images/gradschool/cone-nets.jpg
  speakers:
    - name: "Klara Mundilova"
      url: "https://klaramundilova.com/"
      affiliation: "EPFL"
    - name: "Michele Vidulis"
      affiliation: "EPFL"
      url: "https://michelevidulis.github.io/"
  abstract: |
    Sheet-material structures provide practical and aesthetic advantages and play an important role across architecture, design, and engineering. Consequently, the development of geometric methods and computational tools for their design remains an active research direction.

    This lecture focuses on cone-nets as a class of surface parameterizations and on their semi-discrete and discrete counterparts, which form special classes of structures composed of developable strips and regular planar quad meshes, respectively. We discuss the theoretical framework underlying these structures and present a novel construction method implemented as interactive design tools for Grasshopper / Rhinoceros 3D, the CNets and C-tubes plugins. These tools enable real-time exploration of the design space with intuitive controls and support form-finding optimization to meet user-specified objectives. 

    By the end of the lecture, attendees will understand the theoretical foundations of cone-nets and be equipped to explore their design space using the presented tools.




- title: "Spatial acceleration structures: Bounding Volume Hierarchies"
  date: 2026-06-30
  time: "16:30"
  teaser: /images/gradschool/bvh.png
  speakers:
    - name: Markus Billeter
      url: "https://vcg.leeds.ac.uk/profiles/billeter/"
      affiliation: "University of Leeds"
  abstract: |
    Spatial acceleration structures play an important role in many high-performance graphics applications. They enable logarithmic time spatial queries (intersections, in-range, ...), which is crucial for performance with ever larger data sets. A prominent example is ray tracing, where they are used to find intersections between view rays and geometry. However, to get the benefits from a spatial data structure, one must first obtain such, an O(N log(N)) process.

    This course provides a practical introduction to spatial acceleration structures. It first introduces different types of spatial data structures, but then specifically focuses on bounding volume hierarchies (BVHs), which are a very common choice. It covers their use -performing spatial queries- and their construction. We will discuss different challenges, including dynamic data. We will then focus on the practical implementation, including considerations for GPUs. At the end of the course, we will have covered the full pipeline: from construction of a BVH to performing spatial queries.


- title: "Closest Point Geometry Processing"
  date: 2026-06-30
  time: "14:30"
  teaser: /images/gradschool/closest-point.png
  speakers:
    - name: "Nathan King"
      url: "https://nathandking.github.io/"
      affiliation: "Shapr3D"
  abstract: |
    Objects can be represented in various forms, including meshes, point clouds, level sets, and neural implicits. Traditionally, many algorithms are limited to a single specific representation. This course focuses on geometry processing techniques designed for any representation supporting closest-point queries.

    By requiring only closest points, these methods become universally applicable across the above representations and more. Furthermore, objects can be manifold or nonmanifold, open or closed, orientable or not, and of any codimension or even mixed codimension. We provide an introduction to the closest point method (CPM) for solving PDEs and discuss extensions for applications commonly encountered in geometry processing.


- title: "Computational Geometric Fluid Mechanics"
  date: 2026-06-29
  time: "11:00"
  teaser: /images/gradschool/fluids.jpg
  speakers:
    - name: "Sina Nabizadeh"
      url: "https://sinabiz.github.io/"
      affiliation: "MIT"
    - name: "Hesper Yin"
      url: "https://yhesper.github.io/"
      affiliation: "UC San Diego"
  abstract: |
    Modern fluid simulation increasingly relies on geometric formulations. Prominent examples include Lie-advection-based methods that preserve energy and geometric invariants more faithfully than approaches that directly approximate the governing PDEs, showcasing geometric fluid mechanics as an impactful framework for fluid simulation.
    This course develops geometric fluid mechanics from first principles. We first introduce the geometric formulation following Arnold’s interpretation of the Euler equations, in which fluid motion is described as geodesic flow on the infinite-dimensional Riemannian manifold of volume-preserving diffeomorphisms. We present the necessary background, ranging from Lie groups and variational principles to Lagrangian and Hamiltonian mechanics, and elucidate the invariant structures that arise from this geometric perspective.
    We then discuss how smooth geometric structures can be translated into discrete settings, where fluid motion becomes a constrained geodesic flow on a sub-Riemannian manifold induced by discretization. Finally, we will analyze modern methods grounded in these principles from computer graphics and computational fluid mechanics.



paperSessions: 
- name: Distances (Monday, June 24, 10:30 am - 12:00 pm)
  chair: Marc Alexa
  papers:
      - title: "1-Lipschitz Neural Distance Fields"
        authors:
          - name: Guillaume Coiffier
          - name: Louis Bethune   
      - title: "Triangle influence supersets for fast distance computation"
        authors:
          - name: Eduard Pujol          
          - name: Antonio Chica                   
      - title: "Cascading upper bounds for triangle soup Pompeiu-Hausdorff distance"
        authors:
          - name: Leonardo Sacht
          - name: Alec Jacobson         



---
