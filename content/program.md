---
title: "Program"
layout: "program"
type: "page"
menu: program
paperURL: "https://diglib.eg.org/collections/3f237102-ab23-4c97-9f95-b1e4275acc0c"


events:
- category: keynote
  timestamp: 2026-07-02T09:30:00+02:00
  duration: "60m"
  location_id: aula
  title: "Computational Optimal Transport: From Low to High Dimension and Back"
  shortTitle: "Computational Optimal Transport"
  speakers:
    - name: Justin Solomon
      url: https://people.csail.mit.edu/jsolomon/
      affiliation: MIT CSAIL
  portrait: /images/keynotes/justin_solomon.jpg
  abstract: |
      The *optimal transport* problem asks a simple geometric question:  What is the most efficient way to transform one probability distribution into another along a piece of geometry?  Beyond its mathematical interest, optimal transport underlies a variety of applications, from supply chains to mesh processing, statistics, and even generative AI.  Over the past two decades, research in geometry processing has played a central role in shaping algorithms for optimal transport, with foundational advances emerging from the SGP community.  At the same time, popular problems in applied optimal transport have shifted from low-dimensional settings in graphics and imaging to high-dimensional settings in machine learning.

      In this retrospective keynote, I will trace how my team's work in computational optimal transport was shaped by studying its applications to geometry processing---even as the landscape of research in this area shifted in dimensionality and application.  Ultimately, this journey illustrates the broader value of "Geometric Data Processing" as a discipline: identifying shared geometric and variational principles across domains that differ dramatically in dimension, scale, and data fidelity.
  bio: |
      Justin Solomon is an associate professor of Electrical Engineering and Computer Science in MIT's Computer Science and Artificial Intelligence Laboratory (CSAIL).  He leads the CSAIL Geometric Data Processing group, which studies problems at the intersection of geometry, large-scale optimization, and applications.

- category: keynote
  timestamp: 2026-07-01T09:30:00+02:00
  duration: "60m"
  location_id: aula
  title: "Geometric not-so-deep learning"
  speakers:
    - name: Julie Digne
      affiliation: "LIRIS - CNRS - Université Claude Bernard Lyon 1"
      url: "https://perso.liris.cnrs.fr/julie.digne/"
  portrait: /images/keynotes/julie_digne.jpg
  abstract: |
      Over the past decade, deep learning for geometric data processing has advanced significantly, with numerous methods proposed to handle irregular, non-Euclidean data. However, 3D objects databases are scarce and only partially cover the variety of shapes practitioners want to analyze. As a consequence many shapes fall out-of-distribution. 
      However, many tasks, such as compression, denoising or resampling, can already benefit from leveraging statistical geometric features, without requiring shape space priors.
      In this talk, I will focus on lightweight methods that are computationally efficient, run on standard hardware by operating directly on individual shapes. Through a series of projects, I will show how modern optimization techniques, with or without neural networks, can address geometric challenges effectively, without relying on large datasets or heavy computational resources.
  bio: |
      Julie Digne is a Senior Researcher at CNRS, affiliated with the LIRIS laboratory in Lyon (Origami team). She earned her PhD in Applied Mathematics from École normale supérieure de Cachan in 2010. Following a postdoctoral position at INRIA, she joined LIRIS in 2012, where her research focuses on geometry processing and machine learning for geometric data.

- category: keynote
  timestamp: 2026-07-03T09:30:00+02:00
  duration: "60m"
  location_id: aula
  title: "Resource-Efficient Visual Computing – Frontiers and Applications of Real-Time Visual AI"
  shortTitle: "Resource-Efficient Visual Computing"
  speakers:
    - name: "Bernhard Kerbl"
      affiliation: "University of Copenhagen / Vienna University of Technology (TU Wien)"
      url: "https://snosixtyboo.github.io/"
  portrait: /images/keynotes/bernhard_kerbl.jpg
  abstract: |
      Modern visual computing is transforming the means and ways by which we map, understand and interact with the physical world. 3D and 4D reconstructions of real artefacts are now viable from just a handful of casual camera observations; object recognition and classification can be done with unprecedented accuracy and reliability. However, a key requirement for the overall usefulness of these methods is their efficiency: Efficiency dictates whether a solution can run in real-time; it governs the hardware requirements for execution, and wether it can be used without requiring massive, industry-grade infrastructure. Real-time performance enables crucial emerging trends, such as robots interacting with the real world, or visual AI providing on-line assistance in medical treatments on patients. Resource-efficiency, on the other hand, ensures that these breakthrough technologies can be employed by almost anyone. In this talk, Dr. Kerbl will discuss key challenges and opportunities of real-time, resource-efficient visual computing and AI, focusing on open tasks in fundamental research and applied fields, including biomedicine and robotics.
  bio: |
      Dr. Kerbl is a Tenure-track Assistant Professor at the University of Copenhagen and a Principal Project Investigator associated with the Vienna University of Technology (TU Wien). Before that, he was a Visiting Researcher at the Robotics Institute, Carnegie Mellon University, in the Human Sensing Lab under Fernando de La Torre. He obtained his PhD at Graz University of Technology in 2018. In 2019 he pursued a postdoc at TU Wien in 2019, followed by another in 2022 with INRIA in George Drettakis’ GraphDeco group. His research focuses on real-time graphics, parallel processing, point-based rendering, image-based rendering, radiance fields and novel-view synthesis. Through collaboration with mentors, colleagues and students, Dr. Kerbl's research has been honored with Best Paper awards at major graphics conferences, including SIGGRAPH, High-Performance Graphics, Pacific Graphics, EGPGV, and GRAPP. He has lectured on the topics of GPU programming, real-time rendering, physically-based rendering, game physics and scientific working at TU Wien, Graz University of Technology and FH Salzburg.

- title: "Directional Fields"
  category: course
  timestamp: 2026-06-30T09:00:00+02:00
  location_id: room-201
  duration: "90m"
  teaser: /images/gradschool/dir-fields.png
  speakers:
    - name: Amir Vaxman
      url: https://avaxman.github.io/
      affiliation: The University of Edinburgh
  abstract: |
    I will discuss classic and state-of-the-art methods to design directional fields on discrete surfaces, with applications to meshing, solving PDEs, and visualization.

  links:
    - name: "Directional - A Directional-Field Processing Library"
      url: "https://avaxman.github.io/Directional/"

- title: "Differentiable Geometry Processing in Python"
  category: course
  timestamp: 2026-06-30T11:00:00+02:00
  location_id: room-201
  duration: "90m"
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

  links:
   - name: "iskra ✨ Modern Geometry Processing"
     url: "https://github.com/anadodik/iskra"



- title: "Geometry Processing from 2D Image Priors"
  category: course
  timestamp: 2026-06-29T16:00:00+02:00
  location_id: room-201
  duration: "90m"
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
  category: course
  timestamp: 2026-06-29T09:00:00+02:00
  location_id: room-201
  duration: "90m"
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
  category: course
  timestamp: 2026-06-29T14:00:00+02:00
  location_id: room-201
  duration: "90m"
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

  links:
   - name: C-Tubes project page
     url: "https://go.epfl.ch/c-tubes"
   - name: Python Code
     url: "https://github.com/EPFL-LGG/C-tubes"
   - name: Rhino/Grasshopper plugins
     url: "https://klaramundilova.com/software/"




- title: "Spatial acceleration structures: Bounding Volume Hierarchies"
  category: course
  timestamp: 2026-06-30T16:00:00+02:00
  location_id: room-201
  duration: "90m"
  teaser: /images/gradschool/bvh.png
  speakers:
    - name: Markus Billeter
      url: "https://vcg.leeds.ac.uk/profiles/billeter/"
      affiliation: "University of Leeds"
  abstract: |
    Spatial acceleration structures play an important role in many high-performance graphics applications. They enable logarithmic time spatial queries (intersections, in-range, ...), which is crucial for performance with ever larger data sets. A prominent example is ray tracing, where they are used to find intersections between view rays and geometry. However, to get the benefits from a spatial data structure, one must first obtain such, an O(N log(N)) process.

    This course provides a practical introduction to spatial acceleration structures. It first introduces different types of spatial data structures, but then specifically focuses on bounding volume hierarchies (BVHs), which are a very common choice. It covers their use -performing spatial queries- and their construction. We will discuss different challenges, including dynamic data. We will then focus on the practical implementation, including considerations for GPUs. At the end of the course, we will have covered the full pipeline: from construction of a BVH to performing spatial queries.


- title: "Closest Point Geometry Processing"
  category: course
  timestamp: 2026-06-30T14:00:00+02:00
  location_id: room-201
  duration: "90m"
  teaser: /images/gradschool/closest-point.png
  speakers:
    - name: "Nathan King"
      url: "https://nathandking.github.io/"
      affiliation: "Shapr3D"
  abstract: |
    Objects can be represented in various forms, including meshes, point clouds, level sets, and neural implicits. Traditionally, many algorithms are limited to a single specific representation. This course focuses on geometry processing techniques designed for any representation supporting closest-point queries.

    By requiring only closest points, these methods become universally applicable across the above representations and more. Furthermore, objects can be manifold or nonmanifold, open or closed, orientable or not, and of any codimension or even mixed codimension. We provide an introduction to the closest point method (CPM) for solving PDEs and discuss extensions for applications commonly encountered in geometry processing.

  links:
   - name: "Nathan King's website"
     url: "https://nathandking.github.io/"
   - name: "Presentation slides"
     url: "https://tmp.cgg.unibe.ch/SGP26/SGP26_gradschool_CPGP.pdf"


- title: "Computational Geometric Fluid Mechanics"
  category: course
  timestamp: 2026-06-29T11:00:00+02:00
  location_id: room-201
  duration: "90m"
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

  links:
   - name: "Presentation slides"
     url: "https://tmp.cgg.unibe.ch/SGP26/SGP26_gradschool_Geometric_Fluid_Mechanics.pdf"


- title: "Registration"
  category: welcome
  timestamp: 2026-06-29T08:30:00+02:00
  duration: "30m"
  location_id: foyer
- title: "Registration"
  category: welcome
  timestamp: 2026-06-30T08:30:00+02:00
  duration: "30m"
  location_id: foyer

- title: "Coffee break"
  category: coffee
  timestamp: 2026-06-29T10:30:00+02:00
  duration: "30m"
  location_id: foyer
- title: "Coffee break"
  category: coffee
  timestamp: 2026-06-29T15:30:00+02:00
  duration: "30m"
  location_id: foyer

- title: "Coffee break"
  category: coffee
  timestamp: 2026-06-30T10:30:00+02:00
  duration: "30m"
  location_id: foyer
- title: "Coffee break"
  category: coffee
  timestamp: 2026-06-30T15:30:00+02:00
  duration: "30m"
  location_id: foyer

- title: "Coffee break"
  category: coffee
  timestamp: 2026-07-01T10:30:00+02:00
  duration: "30m"
  location_id: foyer
- title: "Coffee break"
  category: coffee
  timestamp: 2026-07-01T15:30:00+02:00
  duration: "30m"
  location_id: foyer

- title: "Coffee break"
  category: coffee
  timestamp: 2026-07-02T10:30:00+02:00
  duration: "30m"
  location_id: foyer
- title: "Coffee break"
  category: coffee
  timestamp: 2026-07-02T15:30:00+02:00
  duration: "30m"
  location_id: foyer

- title: "Coffee break"
  category: coffee
  timestamp: 2026-07-03T10:30:00+02:00
  duration: "30m"
  location_id: foyer

- title: 'Lunch'
  category: outside
  timestamp: 2026-06-29T12:30:00+02:00
  duration: "90m"
  location_id: gs
- title: 'Lunch'
  category: outside
  timestamp: 2026-06-30T12:30:00+02:00
  duration: "90m"
  location_id: gs
- title: 'Lunch'
  category: outside
  timestamp: 2026-07-01T12:30:00+02:00
  duration: "90m"
  location_id: gs

- title: 'Group Photo'
  category: welcome
  timestamp: 2026-07-02T12:30:00+02:00
  duration: "10m"
  location_id: tba

- title: 'Lunch'
  category: outside
  timestamp: 2026-07-02T12:40:00+02:00
  duration: "80m"
  location_id: gs

- title: 'Lunch'
  category: outside
  timestamp: 2026-07-03T12:30:00+02:00
  duration: "90m"
  location_id: gs



# Wednesday:
- title: "Welcome Coffee & Registration"
  category: coffee
  timestamp: 2026-07-01T08:30:00+02:00
  duration: "45m"
  location_id: foyer

- title: "Opening Session"
  category: welcome
  timestamp: 2026-07-01T09:15:00+02:00
  duration: "15m"
  location_id: aula

- title: "Welcome Coffee & Registration"
  category: coffee
  timestamp: 2026-07-02T08:30:00+02:00
  duration: "60m"
  location_id: foyer

- title: "Welcome Coffee & Registration"
  category: coffee
  timestamp: 2026-07-03T08:30:00+02:00
  duration: "60m"
  location_id: foyer

- title: "Geometric Solvers"
  category: session
  timestamp: 2026-07-01T11:00:00+02:00
  duration: "90m"
  location_id: aula
  chair: "Mark Gillespie"
  papers:
    - id: CGF_3
      title: "Single Line Drawing Generation via Semantics-Driven Optimization"
      authors: "T. Magne, A. Binninger, R. Wiersma, O. Sorkine-Hornung"
      doi: "https://doi.org/10.1111/cgf.70502"
      project_url: "https://igl.ethz.ch/projects/sldgen/"
      pdf_url: "https://onlinelibrary.wiley.com/doi/pdfdirect/10.1111/cgf.70502?download=true&ext=.pdf"
    - id: 1_1013
      title_old: "Wildfire Simulation with Differentiable Randers-Finsler Eikonal Solvers"
      title: "Differentiable Randers-Finsler Eikonal Solvers"
      authors: "B. Gahtan, J. Shpund, A. M. Bronstein"
      digilib_url: "https://diglib.eg.org/handle/10.1111/cgf.70489"
      doi: "https://doi.org/10.1111/cgf.70489"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70489/cgf70489.pdf" # not working as of Jun 30
    - id: 1_1001
      title: "Surface Multigrid via Global Parametric Domain Simplification"
      authors: "Anyu Zhao, Qing Fang, Ligang Liu"
      digilib_url: "https://diglib.eg.org/handle/10.1111/cgf.70491"
      doi: "https://doi.org/10.1111/cgf.70491"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70491/cgf70491.pdf" # not working as of Jun 30
    - id: 2_1036
      title: "Circles of Confidence for Multi-Label Geometry Completion"
      authors: "Z. Wei, C. Hafner, A. Kalinov, P. Heiss Synak, C. Wojtan"
      digilib_url: "https://diglib.eg.org/handle/10.2312/cgf70516"
      doi: "https://doi.org/10.1111/cgf.70516"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70516/cgf70516.pdf"

- title: "Deformation and Registration"
  category: session
  timestamp: 2026-07-01T14:00:00+02:00
  duration: "90m"
  location_id: aula
  chair: "Pierre Alliez"
  papers:
    - id: 2_1070
      title: "As-Rigid-As-Possible Regularization for Implicit Surfaces"
      authors: "T. Djuren, M. Worchel, U. Finnendahl, M. Alexa"
      digilib_url: "https://diglib.eg.org/items/de832211-9ab2-431d-bb2b-cde770a5b5ca"
      doi: "https://doi.org/10.1111/cgf.70519"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70519/cgf70519.pdf"
      code_url: "https://gitlab.com/tobidju/arap-regularization-for-implicit-surfaces"
    - id: 2_1071
      title: "On Bending in the As-Rigid-As-Possible Deformation Energy"
      authors: "U. Finnendahl, M. Alexa"
      digilib_url: "https://diglib.eg.org/items/c95e8641-d91e-48f5-a38a-784ed9c3ce4c"
      doi: "https://doi.org/10.1111/cgf.70520"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70520/cgf70520.pdf"
    - id: 2_1030
      title: "Spatial Eigenanalysis of 2D Deformation Energies"
      authors: "H. Wu, K. Wu, T. Kim"
      digilib_url: "https://diglib.eg.org/items/3796fd1e-c8d2-42c8-bd41-5edcfd637e43"
      doi: "https://doi.org/10.1111/cgf.70514"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70514/cgf70514.pdf"
    - id: 2_1105
      title: "Attention Based Optimization for 3D Shape Registration"
      authors: "A. Riva, L. Olearo, S. Melzi"
      digilib_url: "https://diglib.eg.org/items/4f607b66-3c08-4ed6-b7e8-0b12cf1acc2d"
      doi: "https://doi.org/10.1111/cgf.70525"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70525/cgf70525.pdf"
      code_url: "https://github.com/ariva00/Attention4ShapeRegistration"

- title: "Industry Session"
  category: industrial
  timestamp: 2026-07-01T16:00:00+02:00
  duration: "60m"
  location_id: aula

- title: "Poster fast forward"
  category: poster
  id: posters
  timestamp: 2026-07-01T17:00:00+02:00
  duration: "20m"
  location_id: aula
  papers:
    - id: P1
      title: "TiGL 3.5 – An Open Source Parametric Geometry Library for Virtual Aircraft Design"
      authors: "O. Albers, S. Goldberg, J. Kleinert, A. Reiswich"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.2312/sgpp20261008/sgpp20261008.pdf"
      doi: "https://doi.org/10.2312/sgpp.20261008"
      digilib_url: "https://diglib.eg.org/handle/10.2312/sgpp20261008"
    - id: P2
      title: "Exact 3D Elastica for Interactive Geometry Processing and Fabrication-Aware Design"
      authors: "M. Isern"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.2312/sgpp20261001/sgpp20261001.pdf"
      doi: "https://doi.org/10.2312/sgpp.20261001"
      digilib_url: "https://diglib.eg.org/handle/10.2312/sgpp20261001"
    - id: P3
      title: "Topology and Combinatorics: Generalization in Deep Learning"
      authors: "J.S. Schmidt, M. Carrasco, E. Röell, G. Wolf, N. Blaser, B. Rieck"
      url: "https://diglib.eg.org/bitstream/handle/10.2312/sgpp20261010/sgpp20261010.pdf"
      poster_url: "https://diglib.eg.org/bitstream/handle/10.2312/sgpp20261010/sgpp20261010mm.pdf"
      doi: "https://doi.org/10.2312/sgpp.20261010"
      digilib_url: "https://diglib.eg.org/handle/10.2312/sgpp20261010"
    - id: P4
      title: "Learning to Build Shapes by Extrusions"
      authors: "T. Christiansen, K. Pandey, A. Reinders, K. Singh, M. Hannemose, J. A. Bærentzen"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.2312/sgpp20261004/sgpp20261004.pdf"
      poster_url: "https://diglib.eg.org/bitstream/handle/10.2312/sgpp20261004/sgpp20261004mm.pdf"
      doi: "https://doi.org/10.2312/sgpp.20261004"
      digilib_url: "https://diglib.eg.org/handle/10.2312/sgpp20261004"
    - id: P5
      title: "Neural Field-Based Sequence Planning for Additive-Subtractive Hybrid Manufacturing"
      authors: "S. Guo, F. Zhong, L. Wang, H. Zhao"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.2312/sgpp20261003/sgpp20261003.pdf"
      doi: "https://doi.org/10.2312/sgpp.20261003"
      digilib_url: "https://diglib.eg.org/handle/10.2312/sgpp20261003"
    - id: P6
      title: "A Bayesian Approach to Ill-posed Geometric Primitive Fitting from Point Clouds Using Prior Knowledge"
      authors: "P. Schiller, P. Raumonen, J. Peltonen, S. Ali-Löytyy"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.2312/sgpp20261000/sgpp20261000.pdf"
      doi: "https://doi.org/10.2312/sgpp.20261000"
      digilib_url: "https://diglib.eg.org/handle/10.2312/sgpp20261000"
    - id: P7
      title: "Geometry-Aware Edge Pooling for Graph Neural Networks"
      authors: "K. Limbeck, L. Mezrag, G. Wolf, B. Rieck"
      url: "https://diglib.eg.org/bitstream/handle/10.2312/sgpp20261002/sgpp20261002.pdf"
      poster_url: "https://diglib.eg.org/bitstream/handle/10.2312/sgpp20261002/sgpp20261002mm.png"
      doi: "https://doi.org/10.2312/sgpp.20261002"
      digilib_url: "https://diglib.eg.org/handle/10.2312/sgpp20261002"
    - id: P8
      title: "Boundary-Aware Mesh Deformations"
      authors: "F. Protais, G. Cherchi, M. Livesu"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.2312/sgpp20261006/sgpp20261006.pdf"
      doi: "https://doi.org/10.2312/sgpp.20261006"
      digilib_url: "https://diglib.eg.org/handle/10.2312/sgpp20261006"
      code_url: "https://github.com/fprotais/Mesh_optimization"
    - id: P9
      title: "Stackability of architectural freeform surfaces"
      authors: "A. Chocarro , K. Gavriil"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.2312/sgpp20261007/sgpp20261007mm.pdf"
      doi: "https://doi.org/10.2312/sgpp.20261007"
      digilib_url: "https://diglib.eg.org/handle/10.2312/sgpp20261007"
    - id: P10
      title: "Generalizable Dynamics Models for Deformable Objects: Tool-Agnostic Model for Tool Geometry Design"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.2312/sgpp20261009/sgpp20261009.pdf"
      authors: "N. Cugito, K. Allen"
      doi: "https://doi.org/10.2312/sgpp.20261009"
      digilib_url: "https://diglib.eg.org/handle/10.2312/sgpp20261009"

- title: "Poster Apéro – Wine & Cheese (Foyer)"
  category: apero
  id: posters
  timestamp: 2026-07-01T17:20:00+02:00
  duration: "100m"
  location_id: foyer

- title: "Meshing and Vector Field Processing"
  category: session
  timestamp: 2026-07-02T11:00:00+02:00
  duration: "90m"
  location_id: aula
  chair: "Guillaume Coiffier"
  papers:
    - id: 1_1012
      title: "Surface Quadrilateral Meshing from Integrable Odeco Fields"
      authors: "M. Couplet , A. Chemin, D. Bommes , E. Chien"
      doi: "https://doi.org/10.1111/cgf.70492"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70492/cgf70492.pdf"  # Not yet working as of Jun 30
      digilib_url: "https://diglib.eg.org/handle/10.1111/cgf.70492"

    - id: 2_1103
      title: "Meshing Unsigned Distance Fields with Regular Triangulations"
      authors: "M. Kohlbrenner, M. Alexa"
      digilib_url: "https://diglib.eg.org/items/484ab232-99c0-47bd-8e7f-5d7e027142e2"
      doi: "https://doi.org/10.1111/cgf.70524"
      digilib_url_future: "https://diglib.eg.org/handle/10.1111/cgf.70524"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70524/cgf70524.pdf"

    - id: 2_1031
      title: "Phong-Rodrigues Extrinsic Vector-Field Processing"
      authors: "H. Liu, O. Stein, A. Vaxman, M. Ben-Chen, M. Kazhdan"
      digilib_url: "https://diglib.eg.org/items/3cd715de-b067-4ee1-be06-bf1aca8947d8"
      doi: "https://doi.org/10.1111/cgf.70515"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70515/cgf70515.pdf"

    - id: 2_1107
      title: "Tangent Blow-Ups for Processing Non-Manifold Geometry"
      authors: "A. Petrov, M. Nabizadeh, A. Dodik, J. Solomon"
      digilib_url: "https://diglib.eg.org/items/7ab9fd2a-ce77-4a96-b04a-44ce8c672edc"
      doi: "https://doi.org/10.1111/cgf.70527"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70527/cgf70527.pdf"

- title: "Distance Fields"
  category: session
  timestamp: 2026-07-02T14:00:00+02:00
  duration: "90m"
  location_id: aula
  chair: "Amir Vaxman"
  papers:
    - id: 2_1006
      title: "Strictly Conservative Neural Distance Fields"
      authors: "I. Ludwig, M. Campen"
      doi: "https://doi.org/10.1111/cgf.70528"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70528/cgf70528.pdf" # Not yet working as of Jun 30
      digilib_url: "https://diglib.eg.org/handle/10.1111/cgf.70528"
      code_url: "https://github.com/IngmarLudwig/ConservativeNeuralDistanceFields"

    - id: CGF_1
      title: "SDFs from Unoriented Point Clouds using Neural Variational Heat Distances"
      authors: "S. Weidemaier, F. Hartwig, J. Sassen, S. Conti, M. Ben-Chen, M. Rumpf"
      doi: "https://doi.org/10.1111/cgf.70296"
      code_url: "https://github.com/sweidemaier/HeatSDF"
      pdf_url: "https://onlinelibrary.wiley.com/doi/pdfdirect/10.1111/cgf.70296?download=true&format=.pdf"

    - id: 2_1050
      title: "Medial Axis Aware Learning of Signed Distance Functions"
      authors: "S. Weidemaier, C. Norden-Smoch, M. Rumpf"
      digilib_url: "https://diglib.eg.org/items/29587948-7a25-4566-b40c-63cf7122d1c1"
      doi: "https://doi.org/10.1111/cgf.70517"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70517/cgf70517.pdf"
      code_url: "https://github.com/sweidemaier/Neat_SDF"

    - id: 2_1106
      title: "Compactly supported detail field for high quality neural implicit surfaces"
      authors: "G. Coiffier, J. Basselin"
      digilib_url: "https://diglib.eg.org/items/e8c106cd-12fe-429c-ab1a-d73d0426933b"
      doi: "https://doi.org/10.1111/cgf.70526"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70526/cgf70526.pdf"
      code_url: "https://github.com/GCoiffier/neural-sdf-detail-field"
      project_url: "https://gcoiffier.github.io/publications/neural_detail_field/"

- title: "Hulls"
  category: session
  timestamp: 2026-07-02T16:00:00+02:00
  duration: "45m"
  location_id: aula
  chair: "Stephanie Wang"
  papers:
    - id: 2_1052
      title: "Progressive Convex Hull Simplification"
      authors: "A. Jacobson"
      digilib_url: "https://diglib.eg.org/items/088ad63c-6e5d-4a90-98f9-5526212faecd"
      doi: "https://doi.org/10.1111/cgf.70518"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70518/cgf70518.pdf"
    - id: 2_1092
      title: "A practical algorithm for weighted k-hulls"
      authors: "N. Look, H. Meyer, M. Alexa"
      digilib_url: "https://diglib.eg.org/items/f396debc-ffa9-4d9c-a9f6-671cb9fd614a"
      doi: "https://doi.org/10.1111/cgf.70529"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70529/cgf70529.pdf"

- title: "City Tour (meet on lawn)"
  category: outside
  timestamp: 2026-07-02T17:00:00+02:00
  duration: "60m"
  location_id: city-tour

- title: "Conference Dinner"
  category: outside
  timestamp: 2026-07-02T19:00:00+02:00
  duration: "240m"
  location_id: social-dinner
  digilib_url: "/venue/#social_events"


- title: "Fabrication and Verification"
  category: session
  timestamp: 2026-07-03T11:00:00+02:00
  duration: "90m"
  location_id: aula
  chair: "Mirela Ben-Chen"
  papers:
    - id: 1_1008
      title: "Design and analysis of smooth conformal lattice microstructure via General Bézier patches"
      authors: "J. C. Pareja-Corcho , T. Hirschler , R. Bouclier , G. Elber , M. Barton"
      doi: "https://doi.org/10.1111/cgf.70490"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70490/cgf70490.pdf"
      digilib_url: "https://diglib.eg.org/handle/10.1111/cgf.70490"

    - id: 2_1008
      title: "Wave-Guided Field-Aligned Volume-Filling Curves"
      authors: "G. Cocco, X. Chermain"
      doi: "https://doi.org/10.1111/cgf.70512"
      digilib_url: "https://diglib.eg.org/items/662913b7-a699-46c1-ba5f-d3a9fb5193be"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70512/cgf70512.pdf"

    - id: 2_1023
      title: "Taking a Moment to Characterize the Bending Response of Thin Sheet Materials"
      authors: "P. Xie, J. Montes, B. Thomaszewski, S. Coros"
      digilib_url: "https://diglib.eg.org/items/6a652695-9faf-45d8-b5de-14d55128e5c0"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70513/cgf70513.pdf"
      doi: "https://doi.org/10.1111/cgf.70513"

    - id: 2_1093
      title: "UniGRe-3D: Unified Geometric Reconstruction for Multi-category 3D Anomaly Detection"
      authors: "D. Han, Z. Zhang, Y. Gao, J. Li, M. Li, M. Zhou"
      doi: "https://doi.org/10.1111/cgf.70522"
      digilib_url: "https://diglib.eg.org/handle/10.1111/cgf.70522"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70522/cgf70522.pdf"

- title: "Datasets and Analysis"
  category: session
  timestamp: 2026-07-03T14:00:00+02:00
  duration: "45m"
  location_id: aula
  chair: "Alec Jacobson"
  papers:
    - id: 2_1076
      title: "Arti4D: Statistical Analysis and Modelling of the Spatio-temporal Variability in Articulated 4D Shapes"
      authors: "Z. Li, A. Amrani, S. Rai, H. Laga"
      digilib_url: "https://diglib.eg.org/items/9e778b4f-f12e-44e9-b811-1d140634d527"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70521/cgf70521.pdf"
      doi: "https://doi.org/10.1111/cgf.70521"

    - id: 2_1096
      title: "MM-CAD: A Multi-Modal CAD Dataset and Benchmark for Cross-Modal Geometric Learning"
      authors: "A. Bharathi, A. Aravindakshan, R. Muthuganapathy"
      digilib_url: "https://diglib.eg.org/items/61d4455b-21f4-42aa-b64c-e691c117e5d9"
      doi: "https://doi.org/10.1111/cgf.70523"
      pdf_url: "https://diglib.eg.org/bitstream/handle/10.1111/cgf70523/cgf70523.pdf"

- title: "Town Hall Meeting"
  category: welcome
  timestamp: 2026-07-03T14:45:00+02:00
  duration: "45m"
  location_id: aula

- title: "Awards & Closing"
  category: welcome
  timestamp: 2026-07-03T15:30:00+02:00
  duration: "30m"
  location_id: aula


---
