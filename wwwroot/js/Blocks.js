﻿editor.BlockManager.add('h1-block', {
    label: 'Title',
    content: '<h1>Put your title here</h1>',
    category: 'Basic',
    attributes: {
        title: 'Insert h1 block',
        class: 'gjs-fonts gjs-f-b1'
    }
});
editor.BlockManager.add('testBlock', {
    label: 'Block',
    category: 'Basic',
    attributes: { class: 'gjs-fonts gjs-f-b1' },
    content: `<div style="padding-top:50px; padding-bottom:50px; text-align:center">Test block</div>`
});
editor.BlockManager.add('text', {
    label: 'Text',
    category: 'Basic',
    attributes: { class: 'gjs-fonts gjs-f-b1' },
    content: '<div data-gjs-type="text">Insert your text here</div>'
});
//Hero
editor.BlockManager.add('Hero2',
    {
        label: '<b>Temp2</b>',
        category: 'Hero',
        content: `<div id="wrapper" class="clearfix"><section id="slider"
                                                                        class="slider-element dark block-hero-6" style="background-image:
                                                                        repeating-linear-gradient(112.5deg, rgb(var(--color)) 0px, rgb(var(--color)) 20px,
                                                                        transparent 20px, transparent 22px),repeating-linear-gradient(22.5deg, rgb(var(--color)) 0px,
                                                                        rgb(var(--color)) 20px,transparent 20px, transparent 22px),
                                                                        linear-gradient(90deg, hsl(168deg 19% 32%),hsl(168deg 19% 32%));">
                                                                        <div class="bg-overlay z-1 d-md-block d-none"
                                                                        style="background: linear-gradient(to right, #FFF 0%, #FFF 25%, transparent 25%, transparent 100%)">
                                                                        </div><div class="container z-2"><div class="row min-vh-100 align-items-center
                                                                        justify-content-sm-around py-5"><div class="col-md-6 order-md-last text-center">
                                                                        <i class="icon-food icon-5x"></i><h2 class="display-1 text-white font-secondary">We Deliver your Taste.</h2>
                                                                        <p class="lead text-white-50">Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Iure repellat animi praesentium sunt magni quia consectetur.</p>
                                                                        <a href="#" class="btn btn-light py-4 px-5 mt-3 rounded-0 text-uppercase fw-bold ls2">Know More</a></div><div class="col-md-4 mt-5 mt-md-0">
                                                                        <img src="../External/blocks/preview/hero-6.jpg" alt="image" class="hero-img"></div></div></div></section></div>
                                                                                    <style>
                                                                            .block-hero-6 .font-secondary {
                                                                                font-family: 'Grand Hotel', cursive;
                                                                            }

                                                                            .block-hero-6 {
                                                                                --color: 34,46,43;
                                                                            }

                                                                            .block-hero-6 .hero-img {
                                                                                border: 16px solid #FFF;
                                                                            }

                                                                                                                            </style>`,
        media: '<img width="100%" height="100%" src="../External/blocks/intro/hero-6.jpg">',
    });
editor.BlockManager.add('Hero3',
    {
        label: '<b>Temp 3</b>',
        category: 'Hero',
        content: `<div id="wrapper" class="clearfix"><section id="content">
                                                                        <div class="content-wrap py-0"><div class="block-hero-21" style="padding: 130px 0">
                                                                        <div class="container"><div class="row flex-row-reverse justify-content-between align-items-center">
                                                                        <div class="col-lg-6 mt-5 mt-lg-0"><img src="../External/blocks/preview/hero-21/1.svg"
                                                                        alt="Image" class="z-1 position-relative" style="margin-bottom: -60px;">
                                                                        </div><div class="col-lg-6"><h5 class="ls3 fw-normal text-black op-05 color mb-3 text-uppercase">
                                                                        How We Care</h5>
                                                                        <h1 class="display-4 nott ls0 font-primary color">The Threat is the Virus, not the people. We will get through this, Together.</h1>
                                                                        <p class="mw-xs fw-normal mb-5 text-larger">Energistically syndicate team building synergy after efficient human capital. Assertively underwhelm sticky solutions. Energistically syndicate team building synergy.</p>
                                                                        </div></div><div class="line border-width-2 mt-0">
                                                                        </div><div class="row justify-content-between col-mb-50"><div class="col-6 col-lg-auto"><div class="counter color font-primary ls1"><span data-from="100" data-to="4465" data-refresh-interval="100" data-speed="2000">
                                                                        </span>+</div><h5 class="mb-0 text-smaller text-black-50">Happy Customers</h5></div>
                                                                        <div class="col-6 col-lg-auto"><div class="counter color font-primary ls1"><span data-from="100" data-to="6841" data-refresh-interval="200" data-speed="2500"></span>+</div><h5 class="mb-0 text-smaller text-black-50">Projects Done</h5>
                                                                        </div><div class="col-6 col-lg-auto"><div class="counter color font-primary ls1">
                                                                        <span data-from="1" data-to="10" data-refresh-interval="2" data-speed="1000"></span>+</div><h5 class="mb-0 text-smaller text-black-50">Years of Experience</h5></div><div class="col-6 col-lg-auto">
                                                                        <div class="counter color font-primary ls1"><span data-from="100" data-to="874" data-refresh-interval="150" data-speed="2700"></span>+
                                                                        </div><h5 class="mb-0 text-smaller text-black-50">Got Reviews</h5></div></div></div></div></div>
                                                                        </section></div><div id="gotoTop" class="icon-angle-up"></div>
                                                                                                                                        <style>

                                                                                                                                .block-hero-21 {
                                                                                                                                    --color: #326148;
                                                                                                                                    --color-secondary: 50,97,72;
                                                                                                                                    font-family: 'Roboto', sans-serif;
                                                                                                                                    background-image: radial-gradient(circle at top left, #53906f15 0%, #53906f15 15%, #fff 15%);
                                                                                                                                }

                                                                                                                                .block-hero-21 .font-primary {
                                                                                                                                    font-family: 'Lobster Two', cursive;
                                                                                                                                }
                                                                                                                                .block-hero-21 .color {
                                                                                                                                    color: var(--color) !important;
                                                                                                                                }

                                                                                                                                .block-hero-21 .bg-color {
                                                                                                                                    background-color: var(--color) !important;
                                                                                                                                }

                                                                                                                                .block-hero-21 .fbox-icon i {
                                                                                                                                    background-color: #EEE5CF;
                                                                                                                                    color: var(--color);
                                                                                                                                }

                                                                                                                            </style>`,
        media: '<img width="100%" height="100%" src="../External/blocks/intro/hero-21.jpg">',
    });
editor.BlockManager.add('Hero4',
    {
        label: '<b>Temp4</b>',
        category: 'Hero',
        content: `<div id="wrapper" class="clearfix"><section id="slider" class="slider-element block-hero-10"><div class="container"><div class="row min-vh-100 align-items-center g-0"><div class="col-md-6 order-md-last">

                                                                        <img src="../External/blocks/preview/hero-10/main.jpg" alt="Image"
                                                                        class="mask-image"></div><div class="col-md-6"><div class="col-padding">
                                                                        <p class="mb-2 ls1 text-uppercase fw-normal color text-smaller op-05">
                                                                        Summer Holiday</p><h1 class="display-3 fw-bolder color font-primary">Best Holiday
                                                                        <br>in Bali</h1><p class="mt-4 color op-07">Rapidiously conceptualize inexpensive value through functionalized markets. Enthusiastically integrate distinctive web services.</p><div class="row mb-4 gutter-10" data-lightbox="gallery"><div class="col-2">
                                                                        <a href="../External/blocks/preview/hero-10/1.jpg" data-lightbox="gallery-item">
                                                                        <img src="../External/blocks/preview/hero-10/1-thumb.jpg" alt="Image" class="rounded-5 h-op-09"></a>
                                                                        </div><div class="col-2"><a href="../External/blocks/preview/hero-10/2.jpg" data-lightbox="gallery-item">
                                                                        <img src="../External/blocks/preview/hero-10/2-thumb.jpg" alt="Image" class="rounded-5 h-op-09"></a></div>
                                                                        <div class="col-2"><a href="../External/blocks/preview/hero-10/3.jpg" data-lightbox="gallery-item">
                                                                        <img src="../External/blocks/preview/hero-10/3-thumb.jpg" alt="Image" class="rounded-5 h-op-09"></a>
                                                                        </div><div class="col-2"><a href="../External/blocks/preview/hero-10/4.jpg" data-lightbox="gallery-item">
                                                                        <img src="../External/blocks/preview/hero-10/4-thumb.jpg" alt="Image" class="rounded-5 h-op-09"></a></div>
                                                                        <div class="col-2"><a href="../External/blocks/preview/hero-10/5.jpg" data-lightbox="gallery-item">
                                                                        <img src="../External/blocks/preview/hero-10/5-thumb.jpg" alt="Image" class="rounded-5 h-op-09"></a>
                                                                        </div></div><div class="d-inline-block">
                                                                        <a href="#" class="button button-xlarge rounded text-capitalize ls0 m-0 px-4 button-dark bg-color
                                                                        d-flex justify-content-between align-items-center" style="min-width: 250px;"><span>Explore Now</span>
                                                                        <i class="icon-line-arrow-right"></i></a></div></div></div></div></div></section><
                                                                        section id="content"><div class="content-wrap py-0"></div></section></div><div id="gotoTop"
                                                                        class="icon-angle-up"></div>
                                                                                                                                        <style>
                                                                                                                                .block-hero-10 .mask-image {
                                                                                                                                    -webkit-mask: url("../External/blocks/preview/mask-blob.svg");
                                                                                                                                    mask: url("../External/blocks/preview/mask-blob.svg");
                                                                                                                                    -webkit-mask-position: center center;
                                                                                                                                    mask-position: center center;
                                                                                                                                    -webkit-mask-repeat: no-repeat;
                                                                                                                                    mask-repeat: no-repeat;
                                                                                                                                    -webkit-mask-size: 100% 100%;
                                                                                                                                }

                                                                                                                                .block-hero-10 .color { color: #385244 !important; }

                                                                                                                                .block-hero-10 .bg-color { background-color: #385244 !important; }

                                                                                                                                .block-hero-10 h1,
                                                                                                                                .block-hero-10 h2,
                                                                                                                                .block-hero-10 h3,
                                                                                                                                .block-hero-10 h4,
                                                                                                                                .block-hero-10 h5,
                                                                                                                                .block-hero-10 h6 { font-family: Playfair Display, serif !important; }

                                                                                                                            </style>`,
        media: '<img width="100%" height="100%" src="../External/blocks/intro/hero-10.jpg">',
    });
//Blog
editor.BlockManager.add('Blog1',
    {
        label: '<b>Layout1</b>',
        category: 'Blog',
        content: `

                                                                                                                <div id="wrapper" class="clearfix">

                                                                                                                <section id="content">
                                                                                                                <div class="content-wrap">
                                                                                                                <div class="container clearfix">

                                                                                                                <div id="posts" class="post-grid grid-container row" data-layout="fitRows">
                                                                                                                <div class="entry col-lg-4 col-md-6 col-12">
                                                                                                                <div class="grid-inner rounded-1 p-4">
                                                                                                                <div class="entry-title">
                                                                                                                <h2><a href="blog-single.html">This is an Embedded SoundCloud Post</a></h2>
                                                                                                                </div>
                                                                                                                <div class="entry-meta">
                                                                                                                <ul>
                                                                                                                <li><i class="icon-calendar3"></i> 28th Apr 2021</li>
                                                                                                                <li><a href="blog-single.html#comments"><i class="icon-comments"></i> 16</a></li>
                                                                                                                <li><a href="#"><i class="icon-music2"></i></a></li>
                                                                                                                </ul>
                                                                                                                </div>
                                                                                                                <div class="entry-content">
                                                                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptatem, dolorem animi nisi autem blanditiis enim culpa reiciendis et explicabo tenetur!</p>
                                                                                                                <a href="blog-single.html" class="more-link">Read More</a>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                <div class="entry col-lg-4 col-md-6 col-12">
                                                                                                                <div class="grid-inner bg-light rounded-1">
                                                                                                                <div class="bg-overlay position-relative">
                                                                                                                <div class="bg-overlay-content flex-wrap justify-content-start position-relative p-5" data-hover-animate="fadeIn dark" data-hover-speed="0" style="opacity: 1 !important">
                                                                                                                <div class="entry-title">
                                                                                                                <h2><a href="blog-single.html">This is a Standard post with a Preview Image</a></h2>
                                                                                                                </div>
                                                                                                                <div class="entry-meta">
                                                                                                                <ul>
                                                                                                                <li><i class="icon-calendar3"></i> 10th Feb 2021</li>
                                                                                                                <li><a href="blog-single.html#comments"><i class="icon-comments"></i> 13</a></li>
                                                                                                                <li><a href="#"><i class="icon-camera-retro"></i></a></li>
                                                                                                                </ul>
                                                                                                                </div>
                                                                                                                <div class="entry-content">
                                                                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptatem, dolorem animi nisi autem blanditiis enim culpa reiciendis et explicabo tenetur!</p>
                                                                                                                <a href="blog-single.html" class="more-link">Read More</a>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                <div class="bg-overlay-bg" data-hover-animate="fadeIn" data-hover-parent=".entry" style="background: radial-gradient(rgba(0,0,0,.3), rgba(0,0,0,.6)), url('images/blog/grid/17.jpg') no-repeat center center / cover;"></div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                <div class="entry col-lg-4 col-md-6 col-12">
                                                                                                                <div class="grid-inner bg-light rounded-1">
                                                                                                                <div class="bg-overlay position-relative">
                                                                                                                <div class="bg-overlay-content flex-wrap justify-content-start position-relative p-5" data-hover-animate="fadeIn" data-hover-speed="0" style="opacity: 1 !important">
                                                                                                                <div class="entry-title">
                                                                                                                <h2><a href="blog-single-full.html">This is a Standard post with a Vimeo Video</a></h2>
                                                                                                                </div>
                                                                                                                <div class="entry-meta">
                                                                                                                <ul>
                                                                                                                <li><i class="icon-calendar3"></i> 16th Feb 2021</li>
                                                                                                                <li><a href="blog-single-full.html#comments"><i class="icon-comments"></i> 19</a></li>
                                                                                                                <li><a href="#"><i class="icon-film"></i></a></li>
                                                                                                                </ul>
                                                                                                                </div>
                                                                                                                <div class="entry-content">
                                                                                                                <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem consectetur pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt!</p>
                                                                                                                <a href="blog-single-full.html" class="more-link">Read More</a>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                <div class="bg-overlay-bg" data-hover-animate="fadeIn" data-hover-parent=".entry" style="background: linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)), url('images/blog/grid/2.jpg') no-repeat center center / cover;"></div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                <div class="entry col-lg-4 col-md-6 col-12">
                                                                                                                <div class="grid-inner bg-dark rounded-1">
                                                                                                                <div class="bg-overlay position-relative">
                                                                                                                <div class="bg-overlay-content flex-wrap justify-content-start position-relative p-5 dark" data-hover-animate="fadeIn" data-hover-speed="0" style="opacity: 1 !important">
                                                                                                                <div class="entry-title">
                                                                                                                <h2><a href="blog-single-small.html">This is a Standard post with a Slider Gallery</a></h2>
                                                                                                                </div>
                                                                                                                <div class="entry-meta">
                                                                                                                <ul>
                                                                                                                <li><i class="icon-calendar3"></i> 24th Feb 2021</li>
                                                                                                                <li><a href="blog-single-small.html#comments"><i class="icon-comments"></i> 21</a></li>
                                                                                                                <li><a href="#"><i class="icon-picture"></i></a></li>
                                                                                                                </ul>
                                                                                                                </div>
                                                                                                                <div class="entry-content">
                                                                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptatem, dolorem animi nisi autem blanditiis enim culpa reiciendis et explicabo tenetur!</p>
                                                                                                                <a href="blog-single-small.html" class="more-link">Read More</a>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                <div class="bg-overlay-bg" data-hover-animate="fadeIn" data-hover-parent=".entry" style="background: radial-gradient(rgba(0,0,0,.5), rgba(0,0,0,.8)), url('images/blog/grid/20.jpg') no-repeat center center / cover;"></div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                <div class="entry col-lg-4 col-md-6 col-12">
                                                                                                                <div class="grid-inner gradient-grey-orange rounded-1">
                                                                                                                <div class="bg-overlay position-relative">
                                                                                                                <div class="bg-overlay-content flex-wrap justify-content-start position-relative p-5 dark" data-hover-animate="fadeIn" data-hover-speed="0" style="opacity: 1 !important">
                                                                                                                <div class="entry-title">
                                                                                                                <h2><a href="blog-single-full.html">This is a Standard post with a Youtube Video</a></h2>
                                                                                                                </div>
                                                                                                                <div class="entry-meta">
                                                                                                                <ul>
                                                                                                                <li><i class="icon-calendar3"></i> 30th Apr 2021</li>
                                                                                                                <li><a href="blog-single-full.html#comments"><i class="icon-comments"></i> 34</a></li>
                                                                                                                <li><a href="#"><i class="icon-film"></i></a></li>
                                                                                                                </ul>
                                                                                                                </div>
                                                                                                                <div class="entry-content">
                                                                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptatem, dolorem animi nisi autem blanditiis enim culpa reiciendis et explicabo tenetur!</p>
                                                                                                                <a href="blog-single-full.html" class="more-link">Read More</a>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                <div class="bg-overlay-bg" data-hover-animate="fadeIn" data-hover-parent=".entry" style="background: radial-gradient(rgba(0,0,0,.5), rgba(0,0,0,.9)), url('images/blog/grid/3.jpg') no-repeat center center / cover;"></div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                <div class="entry col-lg-4 col-md-6 col-12">
                                                                                                                <div class="grid-inner rounded-1" style="background: radial-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('images/blog/grid/12.jpg') no-repeat center center / cover;">
                                                                                                                <div class="bg-overlay position-relative">
                                                                                                                <div class="bg-overlay-content flex-wrap justify-content-start position-relative p-5 dark" data-hover-animate="fadeIn" data-hover-speed="0" data-hover-animate-out="dark" style="opacity: 1 !important">
                                                                                                                <div class="entry-title">
                                                                                                                <h2><a href="blog-single-thumbs.html">This is a Standard post with Fade Gallery</a></h2>
                                                                                                                </div>
                                                                                                                <div class="entry-meta">
                                                                                                                <ul>
                                                                                                                <li><i class="icon-calendar3"></i> 3rd Mar 2021</li>
                                                                                                                <li><a href="blog-single-thumbs.html#comments"><i class="icon-comments"></i> 21</a></li>
                                                                                                                <li><a href="#"><i class="icon-picture"></i></a></li>
                                                                                                                </ul>
                                                                                                                </div>
                                                                                                                <div class="entry-content">
                                                                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptatem, dolorem animi nisi autem blanditiis enim culpa reiciendis et explicabo tenetur!</p>
                                                                                                                <a href="blog-single-thumbs.html" class="more-link text-dark border-dark" data-hover-animate="fadeInUp" data-hover-animate-out="fadeOutDown">Read More</a>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                <div class="bg-overlay-bg" data-hover-animate="fadeIn" data-hover-parent=".entry" style="background: radial-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)), url('images/blog/grid/10.jpg') no-repeat center center / cover;"></div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>

                                                                                                                <ul class="pagination mt-5 pagination-circle justify-content-center">
                                                                                                                <li class="page-item disabled"><a class="page-link" href="#"><i class="icon-angle-left"></i></a></li>
                                                                                                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                                                                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                                                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                                                                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                                                                                                <li class="page-item"><a class="page-link" href="#">5</a></li>
                                                                                                                <li class="page-item"><a class="page-link" href="#"><i class="icon-angle-right"></i></a></li>
                                                                                                                </ul>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </section>
                                                                                                                </div>

                                                                                                                <div id="gotoTop" class="icon-angle-up"></div>

                                                                                                                                    `,
        media: '<img width="100%" height="100%" src="../External/blocks/intro/Cards-2.jpg">',
    });
//Forms
editor.BlockManager.add('F1',
    {
        label: '<b>Form1</b>',
        category: 'Forms',
        content:
            `
                                                                                                                        <div id="wrapper" class="clearfix">
                                                                                                                        <section id="slider" class="slider-element">
                                                                                                                        <img src="../External/blocks/preview/hero-16.svg" class="svg-bg d-none d-lg-block" alt="">
                                                                                                                        <div class="vertical-middle min-vh-lg-100">
                                                                                                                        <div class="container py-5 py-lg-0">
                                                                                                                        <div class="row align-items-center justify-content-between">
                                                                                                                        <div class="col-lg-5">
                                                                                                                        <h6 class="text-uppercase ls4 fw-normal op-05">Before Headings</h6>
                                                                                                                        <h1 class="display-4 fw-bold">Grow Your Online Business with Us.</h1>
                                                                                                                        <p class="lead mb-5 op-06">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum assumenda magni obcaecati quo ratione deleniti aut sunt voluptatum, ab nulla.</p>
                                                                                                                        <a href="#" class="btn btn-lg btn-dark">Learn More</a>
                                                                                                                        </div>
                                                                                                                        <div class="col-lg-5 mt-5 mt-lg-0">
                                                                                                                        <div class="card border-0 p-4 rounded-4 shadow-lg">
                                                                                                                        <div class="card-body">
                                                                                                                        <h2 class="mb-1">Sign up to Canvas</h2>
                                                                                                                        <p class="mb-0">Already have an Account? <a href="#">Log In</a></p>
                                                                                                                        <hr class="my-4">
                                                                                                                        <div class="d-flex">
                                                                                                                        <a href="#" class="btn btn-dark h-op-09 flex-fill border px-3 si-colored si-google"><i class="icon-google"></i></a>
                                                                                                                        <a href="#" class="btn btn-dark h-op-09 mx-2 flex-fill border px-3 si-colored si-appstore"><i class="icon-apple"></i></a>
                                                                                                                        <a href="#" class="btn btn-dark h-op-09 flex-fill border px-3 si-colored si-facebook"><i class="icon-facebook"></i></a>
                                                                                                                        </div>
                                                                                                                        <form id="login-form" name="login-form" class="row mb-0 mt-4" action="#" method="post">
                                                                                                                        <div class="col-12 form-group">
                                                                                                                        <input type="text" id="register-form-name" name="register-form-name" autocomplete="off" value="" class="form-control" placeholder="Full Name" />
                                                                                                                        </div>
                                                                                                                        <div class="col-12 form-group">
                                                                                                                        <input type="email" id="register-form-email" name="register-form-email" autocomplete="off" value="" class="required email form-control" placeholder="Email Address" />
                                                                                                                        </div>
                                                                                                                        <div class="col-12 form-group">
                                                                                                                        <input type="password" id="register-form-password" name="register-form-password" autocomplete="new-password" value="" class="form-control" placeholder="Password" />
                                                                                                                        </div>
                                                                                                                        <div class="col-12 form-group">
                                                                                                                        <div class="form-check">
                                                                                                                        <input class="form-check-input" type="checkbox" value="" id="register-form-check" name="register-form-check">
                                                                                                                        <label class="form-check-label nott fw-normal font-body ls0 text-black-50" for="register-form-check">
                                                                                                                        By creating account, you agree to accept our <a href="#">Privacy Policy</a>, <a href="#">Terms &amp; Condition</a> and <a href="#">Notfication Settings</a>.
                                                                                                                        </label>
                                                                                                                        </div>

                                                                                                                        </div>
                                                                                                                        <div class="col-12 mt-2">
                                                                                                                        <button class="button button-dark bg-dark m-0 w-100 rounded" id="register-form-submit" name="register-form-submit" value="register">Register Now</button>
                                                                                                                        </div>
                                                                                                                        </form>
                                                                                                                        </div>
                                                                                                                        </div>
                                                                                                                        </div>
                                                                                                                        </div>
                                                                                                                        </div>
                                                                                                                        </div>
                                                                                                                        </section>

                                                                                                                        <section id="content">
                                                                                                                        <div class="content-wrap py-0">
                                                                                                                        </div>
                                                                                                                        </section>
                                                                                                                        </div>

                                                                                                                        <div id="gotoTop" class="icon-angle-up"></div>
                                                                                                                        <style>
                                                                                                                                .svg-bg {
                                                                                                                                    position: absolute;
                                                                                                                                    top: 0;
                                                                                                                                    right: 0;
                                                                                                                                    z-index: 0;
                                                                                                                                }
                                                                                                                            </style>
                                                                                                                        `,
        media: '<img width="100%" height="100%" src="../External/blocks/intro/hero-16.jpg">',

    });
editor.BlockManager.add('F2',
    {
        label: '<b>Form2</b>',
        content: `
                                                                                                                                <div id="wrapper" class="clearfix">

                                                                                                                <section id="slider" class="slider-element" style="background-image: -webkit-linear-gradient(to bottom, #315653, #182927 ); background-image: linear-gradient(to bottom, #315653, #182927);">
                                                                                                                <div class="dotted-bg"></div>
                                                                                                                <div class="vertical-middle min-vh-lg-100">
                                                                                                                <div class="container py-5 py-lg-0">
                                                                                                                <div class="row align-items-center">
                                                                                                                <div class="col-lg-7 dark py-5">
                                                                                                                <h6 class="text-uppercase ls4 fw-normal op-05">Before Headings</h6>
                                                                                                                <h1 class="display-4 fw-bold">Grow Your Online Business with Us.</h1>
                                                                                                                <p class="lead mb-5 op-06">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum assumenda magni obcaecati quo ratione deleniti aut sunt voluptatum, ab nulla.</p>
                                                                                                                <a href="#" class="btn btn-lg btn-outline-light">Learn More</a>
                                                                                                                </div>
                                                                                                                <div class="col-lg-5 mt-5 mt-lg-0">
                                                                                                                <div class="card bg-white">
                                                                                                                <div class="card-header p-4">
                                                                                                                <h2 class="mb-1">Sign up to Canvas</h2>
                                                                                                                <p class="mb-0">Already have an Account? <a href="#">Log In</a></p>
                                                                                                                </div>
                                                                                                                <div class="card-body p-4">
                                                                                                                <div class="d-flex">
                                                                                                                <a href="#" class="btn btn-dark me-1 flex-fill border px-3 si-colored si-google"><i class="icon-google me-2"></i> Sign Up with Google</a>
                                                                                                                <a href="#" class="btn btn-dark ms-1 flex-fill border px-3 si-colored si-appstore"><i class="icon-apple me-2"></i> Sign Up with Facebook</a>
                                                                                                                </div>
                                                                                                                <hr>
                                                                                                                <form id="login-form" name="login-form" class="row mb-0" action="#" method="post">
                                                                                                                <div class="col-12 form-group">
                                                                                                                <input type="text" id="register-form-name" name="register-form-name" autocomplete="off" value="" class="form-control" placeholder="Full Name" />
                                                                                                                </div>
                                                                                                                <div class="col-12 form-group">
                                                                                                                <input type="email" id="register-form-email" name="register-form-email" autocomplete="off" value="" class="required email form-control" placeholder="Email Address" />
                                                                                                                </div>
                                                                                                                <div class="col-12 form-group">
                                                                                                                <input type="password" id="register-form-password" name="register-form-password" autocomplete="new-password" value="" class="form-control" placeholder="Password" />
                                                                                                                </div>
                                                                                                                <div class="col-12">
                                                                                                                <button class="button m-0 w-100 rounded" id="register-form-submit" name="register-form-submit" value="register">Register Now</button>
                                                                                                                </div>
                                                                                                                </form>
                                                                                                                </div>
                                                                                                                 <div class="card-footer p-4">
                                                                                                                <p class="text-black-50 mb-0">By creating account, you agree to accept our <a href="#">Privacy Policy</a>, <a href="#">Terms &amp; Condition</a> and <a href="#">Notfication Settings</a>.</p>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </section>

                                                                                                                <section id="content">
                                                                                                                <div class="content-wrap py-0">
                                                                                                                </div>
                                                                                                                </section>
                                                                                                                </div>

                                                                                                                <div id="gotoTop" class="icon-angle-up"></div>
                                                                                                                <style>
                                                                                                                        .dotted-bg {
                                                                                                                            position: absolute;
                                                                                                                            top: 0;
                                                                                                                            right: 0;
                                                                                                                            width: 30%;
                                                                                                                            height: 100%;
                                                                                                                            background: url('../External/blocks/preview/dot-grid-light.svg');
                                                                                                                            z-index: 0;
                                                                                                                        }
                                                                                                                    </style>
                                                                                                                                `,
        category: 'Forms',
        media: '<img width="100%" height="100%" src="../External/blocks/intro/hero-15.jpg">',
        attributes: {}
    });
editor.BlockManager.add('F3',
    {
        label: '<b>Contact Form</b>',
        content: `
                                                                                                                                <div id="wrapper" class="clearfix">

                                                                                                                <section id="slider" class="slider-element" style="background-image: -webkit-linear-gradient(to bottom, #315653, #182927 ); background-image: linear-gradient(to bottom, #315653, #182927);">
                                                                                                                <div class="dotted-bg"></div>
                                                                                                                <div class="vertical-middle min-vh-lg-100">
                                                                                                                <div class="container py-5 py-lg-0">
                                                                                                                <div class="row align-items-center">
                                                                                                                <div class="col-lg-7 dark py-5">
                                                                                                                <h6 class="text-uppercase ls4 fw-normal op-05">Before Headings</h6>
                                                                                                                <h1 class="display-4 fw-bold">Grow Your Online Business with Us.</h1>
                                                                                                                <p class="lead mb-5 op-06">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum assumenda magni obcaecati quo ratione deleniti aut sunt voluptatum, ab nulla.</p>
                                                                                                                <a href="#" class="btn btn-lg btn-outline-light">Learn More</a>
                                                                                                                </div>
                                                                                                                <div class="col-lg-5 mt-5 mt-lg-0">
                                                                                                                <div class="card bg-white">
                                                                                                                <div class="card-header p-4">
                                                                                                                <h2 class="mb-1">Contact Form</h2>

                                                                                                                </div>
                                                                                                                <div class="card-body p-4">

                                                                                                                <hr>
                                                                                                                    <form id="custom-form" class="row mb-0">
                                                                                                                <div class="col-12 form-group">
                                                                                                                <input type="text"  id="name" autocomplete="off" class="form-control" placeholder="Full Name" />
                                                                                                                </div>
                                                                                                                <div class="col-12 form-group">
                                                                                                                <input type="email" id="email" autocomplete="off" class="required email form-control" placeholder="Email Address" />
                                                                                                                </div>
                                                                                                                <input type="hidden" value="@Model.SiteId" id="siteId" autocomplete="off" class="required  form-control" />
                                                                                                                <div class="col-12 form-group">
                                                                                                                <textarea id="message"  class="form-control" placeholder="Message" cols="2"></textarea>

                                                                                                                </div>
                                                                                                                <div class="col-12">
                                                                                                                <button type="button" id="submit-btn" class="button m-0 w-100 rounded" >Send</button>
                                                                                                                </div>
                                                                                                                </form>

                                                                                                                </div>
                                                                                                                 <div class="card-footer p-4">
                                                                                                                <p class="text-black-50 mb-0">By creating account, you agree to accept our <a href="#">Privacy Policy</a>, <a href="#">Terms &amp; Condition</a> and <a href="#">Notfication Settings</a>.</p>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </section>

                                                                                                                <section id="content">
                                                                                                                <div class="content-wrap py-0">
                                                                                                                </div>
                                                                                                                </section>
                                                                                                                </div>

                                                                                                                <div id="gotoTop" class="icon-angle-up"></div>
                                                                                                                <style>
                                                                                                                        .dotted-bg {
                                                                                                                            position: absolute;
                                                                                                                            top: 0;
                                                                                                                            right: 0;
                                                                                                                            width: 30%;
                                                                                                                            height: 100%;
                                                                                                                            background: url('../External/blocks/preview/dot-grid-light.svg');
                                                                                                                            z-index: 0;
                                                                                                                        }
                                                                                                                    </style>
                                                                                                                                `,
        category: 'Forms',
        media: '<img width="100%" height="100%" src="../External/blocks/intro/hero-15.jpg">',
        attributes: {}
    });

//Navigation
editor.BlockManager.add('Nav1',
    {
        label: '<b>Navbar1</b>',
        category: 'Navbars',
        content: `
                                                                                                                                <div id="wrapper" class="clearfix">
                                                                                                                <header id="header" class="">
                                                                                                                <div id="header-wrap">
                                                                                                                <div class="container">
                                                                                                                <div class="header-row">

                                                                                                                <div id="logo">
                                                                                                                <a href="index.html" class="standard-logo" data-dark-logo="../images/logo-dark.png"><img src="../images/logo.png" alt="Canvas Logo"></a>
                                                                                                                <a href="index.html" class="retina-logo" data-dark-logo="../images/logo-dark@2x.png"><img src="../images/logo@2x.png" alt="Canvas Logo"></a>
                                                                                                                </div>
                                                                                                                <div class="header-misc">

                                                                                                                <div id="top-search" class="header-misc-icon top-search-2">
                                                                                                                <a href="#" id="top-search-trigger"><i class="icon-line-search"></i><i class="icon-line-cross"></i></a>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                <div id="primary-menu-trigger">
                                                                                                                <svg class="svg-trigger" viewBox="0 0 100 100">
                                                                                                                <path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20">
                                                                                                                </path>
                                                                                                                <path d="m 30,50 h 40"></path>
                                                                                                                <path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20">
                                                                                                                </path>
                                                                                                                </svg>
                                                                                                                </div>

                                                                                                                <nav class="primary-menu with-arrows">
                                                                                                                <ul class="menu-container">
                                                                                                                <li class="menu-item">
                                                                                                                <a class="menu-link" href="demo-seo.html">
                                                                                                                <div>Home</div>
                                                                                                                </a>
                                                                                                                </li>
                                                                                                                <li class="menu-item">
                                                                                                                <a href="#" class="menu-link">
                                                                                                                <div>About</div>
                                                                                                                </a>
                                                                                                                </li>
                                                                                                                <li class="menu-item">
                                                                                                                <a class="menu-link" href="demo-seo-faqs.html">
                                                                                                                <div>FAQs</div>
                                                                                                                </a>
                                                                                                                </li>
                                                                                                                <li class="menu-item">
                                                                                                                <a class="menu-link" href="demo-seo-contact.html">
                                                                                                                <div>Contact</div>
                                                                                                                </a>
                                                                                                                </li>
                                                                                                                </ul>
                                                                                                                </nav>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                <form class="top-search-form top-search-form-2 bg-color dark" action="search.html" method="get">
                                                                                                                <input type="search" name="q" class="form-control container p-3 text-white ls0 fw-semibold" value="" placeholder="Type &amp; Hit Enter.." autocomplete="off">
                                                                                                                </form>
                                                                                                                </div>
                                                                                                                <div class="header-wrap-clone"></div>
                                                                                                                </header>

                                                                                                                <section id="content">
                                                                                                                <div class="content-wrap">
                                                                                                                </div>
                                                                                                                </section>
                                                                                                                </div>

                                                                                                                <div id="gotoTop" class="icon-angle-up"></div>
                                                                                                                <style>

                                                                                                                        .block-misc-search .top-search-form-2 {
                                                                                                                            opacity: 1;
                                                                                                                            background-color: #EEE;
                                                                                                                            top: 100%;
                                                                                                                            height: 0%;
                                                                                                                            transform: scaleY(0);
                                                                                                                            transform-origin: top center;
                                                                                                                            transition: transform .3s ease-in-out,height .3s ease-in-out;
                                                                                                                        }

                                                                                                                        .block-misc-search.top-search-open .top-search-form {
                                                                                                                            transform: scaleY(1);
                                                                                                                            height: 100%;
                                                                                                                        }

                                                                                                                        .block-misc-search .top-search-form-2 input::-moz-placeholder {
                                                                                                                            letter-spacing: 0;
                                                                                                                            font-weight: 400;
                                                                                                                            font-size: 1.5rem;
                                                                                                                            text-transform: none;
                                                                                                                        }
                                                                                                                        .block-misc-search .top-search-form-2 input:-ms-input-placeholder {
                                                                                                                            letter-spacing: 0;
                                                                                                                            font-weight: 400;
                                                                                                                            font-size: 1.5rem;
                                                                                                                            text-transform: none;
                                                                                                                        }
                                                                                                                        .block-misc-search .top-search-form-2 input::-webkit-input-placeholder {
                                                                                                                            letter-spacing: 0;
                                                                                                                            font-weight: 400;
                                                                                                                            font-size: 1.5rem;
                                                                                                                            text-transform: none;
                                                                                                                        }

                                                                                                                        .block-misc-search .dark.top-search-form-2 input::-moz-placeholder {
                                                                                                                            color: rgba(255,255,255,0.8) !important;
                                                                                                                        }
                                                                                                                        .block-misc-search .dark.top-search-form-2 input:-ms-input-placeholder {
                                                                                                                            color: rgba(255,255,255,0.8) !important;
                                                                                                                        }
                                                                                                                        .block-misc-search .dark.top-search-form-2 input::-webkit-input-placeholder {
                                                                                                                            color: rgba(255,255,255,0.8) !important;
                                                                                                                        }

                                                                                                                    </style>
                                                                                                                                `,
        media: '<img width="100%" height="100%" src="../External/blocks/intro/misc-search.jpg">',
    });
/*===SHOPS ===*/
//not Working properly
editor.BlockManager.add('ShopSlider', {

    label: `<b>ShopSlider1<b>`,
    category: `Shops`,
    content: `<div id="wrapper" class="clearfix">

                                                                                                                                    <header id="header" class="transparent-header block-slider-1" data-sticky-class="not-dark">
                                                                                                                                    <div id="header-wrap">
                                                                                                                                    <div class="container">
                                                                                                                                    <div class="header-row">

                                                                                                                                    <div id="logo" class="me-lg-5">
                                                                                                                                    <a href="index.html" class="standard-logo" data-dark-logo="images/logo-dark.png"><img src="../images/logo.png" alt="Canvas Logo"></a>
                                                                                                                                    <a href="index.html" class="retina-logo" data-dark-logo="images/logo-dark@2x.png"><img src="../images/logo@2x.png" alt="Canvas Logo"></a>
                                                                                                                                    </div>
                                                                                                                                    <div class="header-misc ms-lg-auto">

                                                                                                                                    <form class="input-group m-0 border-bottom me-4 search-form">
                                                                                                                                    <input class="form-control border-0 bg-transparent ps-0" type="search" placeholder="Search.." aria-label="Search">
                                                                                                                                    <a href="#" class="input-group-text border-0 bg-transparent pe-0"><i class="icon-line-search"></i></a>
                                                                                                                                    </form>

                                                                                                                                    <div id="top-cart" class="header-misc-icon">
                                                                                                                                    <a href="#" id="top-cart-trigger"><i class="icon-line-bag"></i><span class="top-cart-number">5</span></a>
                                                                                                                                    <div class="top-cart-content">
                                                                                                                                    <div class="top-cart-title">
                                                                                                                                    <h4>Shopping Cart</h4>
                                                                                                                                    </div>
                                                                                                                                    <div class="top-cart-items">
                                                                                                                                    <div class="top-cart-item">
                                                                                                                                    <div class="top-cart-item-image">
                                                                                                                                    <a href="#"><img src="../images/shop/small/1.jpg" alt="Blue Round-Neck Tshirt" /></a>
                                                                                                                                    </div>
                                                                                                                                    <div class="top-cart-item-desc">
                                                                                                                                    <div class="top-cart-item-desc-title">
                                                                                                                                    <a href="#">Blue Round-Neck Tshirt with a Button</a>
                                                                                                                                    <span class="top-cart-item-price d-block">$19.99</span>
                                                                                                                                    </div>
                                                                                                                                    <div class="top-cart-item-quantity">x 2</div>
                                                                                                                                    </div>
                                                                                                                                    </div>
                                                                                                                                    <div class="top-cart-item">
                                                                                                                                    <div class="top-cart-item-image">
                                                                                                                                    <a href="#"><img src="../images/shop/small/6.jpg" alt="Light Blue Denim Dress" /></a>
                                                                                                                                    </div>
                                                                                                                                    <div class="top-cart-item-desc">
                                                                                                                                    <div class="top-cart-item-desc-title">
                                                                                                                                    <a href="#">Light Blue Denim Dress</a>
                                                                                                                                    <span class="top-cart-item-price d-block">$24.99</span>
                                                                                                                                    </div>
                                                                                                                                    <div class="top-cart-item-quantity">x 3</div>
                                                                                                                                    </div>
                                                                                                                                    </div>
                                                                                                                                    </div>
                                                                                                                                    <div class="top-cart-action">
                                                                                                                                    <span class="top-checkout-price">$114.95</span>
                                                                                                                                    <a href="#" class="button button-3d button-small m-0">View Cart</a>
                                                                                                                                    </div>
                                                                                                                                    </div>
                                                                                                                                    </div>
                                                                                                                                    </div>
                                                                                                                                    <div id="primary-menu-trigger">
                                                                                                                                    <svg class="svg-trigger" viewBox="0 0 100 100">
                                                                                                                                    <path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40">
                                                                                                                                    </path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
                                                                                                                                    </div>

                                                                                                                                    <nav class="primary-menu">
                                                                                                                                    <ul class="menu-container">
                                                                                                                                    <li class="menu-item">
                                                                                                                                    <a class="menu-link" href="index.html"><div>Home</div></a>
                                                                                                                                    </li>
                                                                                                                                    <li class="menu-item">
                                                                                                                                    <a class="menu-link" href="index.html"><div>Men</div></a>
                                                                                                                                    </li>
                                                                                                                                    <li class="menu-item">
                                                                                                                                    <a class="menu-link" href="index.html"><div>Women</div></a>
                                                                                                                                    </li>
                                                                                                                                    <li class="menu-item">
                                                                                                                                    <a class="menu-link" href="index.html"><div>Kids</div></a>
                                                                                                                                    </li>
                                                                                                                                    </ul>
                                                                                                                                    </nav>
                                                                                                                                    </div>
                                                                                                                                    </div>
                                                                                                                                    </div>
                                                                                                                                    <div class="header-wrap-clone"></div>
                                                                                                                                    </header>

                                                                                                                                    <section id="slider" class="slider-element include-header block-slider-1">
                                                                                                                                    <div class="swiper_wrapper overflow-visible min-vh-100" data-loop="true">
                                                                                                                                    <div class="swiper-container swiper-parent">
                                                                                                                                    <div class="swiper-wrapper">
                                                                                                                                    <div class="swiper-slide dark">
                                                                                                                                     <div class="container">
                                                                                                                                    <div class="slider-caption">
                                                                                                                                    <p class="mb-4 text-white-50 text-smaller" data-animate="fadeInUpSmall">Shop for Men</p>
                                                                                                                                    <h2 data-animate="fadeInUpSmall" data-delay="200">Your feet will never look the same again.</h2>
                                                                                                                                    <div>
                                                                                                                                    <a href="#" class="button button-border button-light button-rounded button-large ms-0 topmargin-sm" data-animate="fadeInUpSmall" data-delay="400">Shop Now</a>
                                                                                                                                    </div>
                                                                                                                                    </div>
                                                                                                                                    </div>
                                                                                                                                    <div class="swiper-slide-bg" style="background-image: url('../External/blocks/preview/slider-1/1.jpg');"></div>
                                                                                                                                    </div>

                                                                                                                                    <div class="swiper-slide dark">
                                                                                                                                    <div class="container">
                                                                                                                                    <div class="slider-caption slider-caption-right" style="max-width: 650px;">
                                                                                                                                    <p class="mb-4 text-white-50 text-smaller" data-animate="fadeInUpSmall">Shop for Women</p>
                                                                                                                                    <h2 data-animate="fadeInUpSmall" data-delay="200">You will be able to go anywhere.</h2>
                                                                                                                                    <div>
                                                                                                                                    <a href="#" class="button button-border button-light button-rounded button-large ms-0 topmargin-sm" data-animate="fadeInUpSmall" data-delay="400">Shop Now</a>
                                                                                                                                    </div>
                                                                                                                                    </div>
                                                                                                                                    </div>
                                                                                                                                    <div class="swiper-slide-bg" style="background-image: url('../External/blocks/preview/slider-1/2.jpg');"></div>
                                                                                                                                    </div>

                                                                                                                                    <div class="swiper-slide dark">
                                                                                                                                    <div class="container">
                                                                                                                                    <div class="slider-caption slider-caption-center">
                                                                                                                                    <p class="mb-4 text-white-50 text-smaller" data-animate="fadeInUpSmall">Shop for Kids</p>
                                                                                                                                    <h2 data-animate="fadeInUpSmall" data-delay="200">Bring power to your steps</h2>
                                                                                                                                    <div>
                                                                                                                                    <a href="#" class="button button-border button-light button-rounded button-large ms-0 topmargin-sm" data-animate="fadeInUpSmall" data-delay="400">Shop Now</a>
                                                                                                                                    </div>
                                                                                                                                    </div>
                                                                                                                                    </div>
                                                                                                                                    <div class="swiper-slide-bg" style="background-image: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.5)), url('../External/blocks/preview/slider-1/3.jpg');"></div>
                                                                                                                                    </div>
                                                                                                                                    </div>
                                                                                                                                    </div>
                                                                                                                                    <div class="slider-arrow-left"><i class="icon-angle-left"></i><span>Prev</span></div>
                                                                                                                                    <div class="slider-arrow-right"><span>Next</span> <i class="icon-angle-right"></i></div>
                                                                                                                                    <div class="slide-number font-secondary"><div class="slide-number-current"></div><span></span><div class="slide-number-total op-05"></div></div>
                                                                                                                                    </div>
                                                                                                                                    <div class="d-flex flex-row position-absolute z-10" style="top: auto; bottom: 40px; left: 40px;">
                                                                                                                                    <a href="#" class="social-icon mx-1 si-dark si-small si-facebook" data-animate="bounceInLeft">
                                                                                                                                    <i class="icon-facebook"></i>
                                                                                                                                    <i class="icon-facebook"></i>
                                                                                                                                    </a>
                                                                                                                                    <a href="#" class="social-icon mx-1 si-dark si-small si-instagram" data-animate="bounceInLeft" data-delay="100">
                                                                                                                                    <i class="icon-instagram"></i>
                                                                                                                                    <i class="icon-instagram"></i>
                                                                                                                                    </a>
                                                                                                                                    <a href="#" class="social-icon mx-1 si-dark si-small si-twitter" data-animate="bounceInLeft" data-delay="200">
                                                                                                                                    <i class="icon-twitter"></i>
                                                                                                                                    <i class="icon-twitter"></i>
                                                                                                                                    </a>
                                                                                                                                    </div>
                                                                                                                                    </section>

                                                                                                                                    <section id="content">
                                                                                                                                    <div class="content-wrap py-0">
                                                                                                                                    <div class="row justify-content-center align-items-center text-center min-vh-100">
                                                                                                                                    <div class="col-12 display-3">Content <br>...</div>
                                                                                                                                    </div>
                                                                                                                                    </div>
                                                                                                                                    </section>
                                                                                                                                 </div>
                                                                                                                                 <style>
                                                                                                                                        .block-slider-1 .search-form {
                                                                                                                                            width: 120px;
                                                                                                                                            transition: width .3s ease;
                                                                                                                                        }


                                                                                                                                        #header.dark.block-slider-1 .search-form {
                                                                                                                                            border-bottom-color: rgba(255, 255, 255, 0.6) !important;
                                                                                                                                        }

                                                                                                                                        .block-slider-1.dark .search-form input:focus::-moz-placeholder { color: #BBB; }
                                                                                                                                        .block-slider-1.dark .search-form input:focus:-ms-input-placeholder { color: #BBB; }
                                                                                                                                        .block-slider-1.dark .search-form input:focus::-webkit-input-placeholder { color: #BBB; }

                                                                                                                                        .dark .search-form .form-control:not(.not-dark),
                                                                                                                                        .dark .search-form i { color: #EEE; }

                                                                                                                                        .block-slider-1 {
                                                                                                                                            --t-color: #EEE;
                                                                                                                                        }

                                                                                                                                        .block-slider-1 .slide-number {
                                                                                                                                            display: flex;
                                                                                                                                            flex-direction: row;
                                                                                                                                            align-items: center;
                                                                                                                                            opacity: 1;
                                                                                                                                            top: 50%;
                                                                                                                                            bottom: auto !important;
                                                                                                                                            left: auto;
                                                                                                                                            right: 20px;
                                                                                                                                            color: var(--t-color);
                                                                                                                                            text-shadow: none;
                                                                                                                                            width: auto;
                                                                                                                                            height: auto;
                                                                                                                                            padding: 0;
                                                                                                                                            writing-mode: vertical-rl;
                                                                                                                                            transform: translateY(-50%);
                                                                                                                                        }

                                                                                                                                        .block-slider-1 .slide-number-current,
                                                                                                                                        .block-slider-1 .slide-number-total {
                                                                                                                                            position: relative;
                                                                                                                                            top: auto;
                                                                                                                                            bottom: auto;
                                                                                                                                        }

                                                                                                                                        .block-slider-1 .slide-number span {
                                                                                                                                            position: relative;
                                                                                                                                            height: 30px;
                                                                                                                                            width: 1px;
                                                                                                                                            background-color: var(--t-color);
                                                                                                                                            margin: 30px 0;
                                                                                                                                        }

                                                                                                                                        .block-slider-1 .slider-arrow-left,
                                                                                                                                        .block-slider-1 .slider-arrow-right {
                                                                                                                                            display: flex;
                                                                                                                                            align-items: center;
                                                                                                                                            width: auto;
                                                                                                                                            height: auto;
                                                                                                                                            top: auto;
                                                                                                                                            left: auto;
                                                                                                                                            right: 110px;
                                                                                                                                            bottom: 30px;
                                                                                                                                            transform: translateY(0);
                                                                                                                                            color: var(--t-color);
                                                                                                                                            background-color: transparent !important;
                                                                                                                                        }

                                                                                                                                        .block-slider-1 .slider-arrow-left span,
                                                                                                                                        .block-slider-1 .slider-arrow-right span {
                                                                                                                                            margin: 0 10px;
                                                                                                                                            text-transform: uppercase;
                                                                                                                                            font-size: 14px;
                                                                                                                                            letter-spacing: 1px;
                                                                                                                                        }

                                                                                                                                        .block-slider-1 .slider-arrow-left:hover,
                                                                                                                                        .block-slider-1 .slider-arrow-right:hover {
                                                                                                                                            background-color: transparent !important;
                                                                                                                                        }

                                                                                                                                        .block-slider-1 .slider-arrow-right {
                                                                                                                                            right: 30px;
                                                                                                                                        }

                                                                                                                                        .block-slider-1 .slider-arrow-left i,
                                                                                                                                        .block-slider-1 .slider-arrow-right i {
                                                                                                                                            position: relative;
                                                                                                                                            color: var(--t-color);
                                                                                                                                            text-shadow: none;
                                                                                                                                            font-size: 20px;
                                                                                                                                        }
                                                                                                                                 </style>

                                                                                                                                    <div id="gotoTop" class="icon-angle-up"></div>`,
    media: `<img width="100%" height="100%" src="../External/blocks/preview/slider-1/1.jpg">`,
});
editor.BlockManager.add('CardCar', {
    label: '<b>Card Car1</b>',
    category: 'Shops',
    content: `
                                                                                                             <div id="wrapper" class="clearfix">

                                                                                                                <section id="content">
                                                                                                                <div class="content-wrap bg-light py-0">
                                                                                                                <div class="container clearfix">
                                                                                                                <div class="row justify-content-center min-vh-100 align-items-center blocks-card-10">

                                                                                                                <div class="col-lg-4 col-md-6">

                                                                                                                <div class="card shadow-sm">
                                                                                                                <img src="../External/blocks/preview/card-10/car.jpg" class="card-img-top" alt="...">
                                                                                                                <div class="card-body">
                                                                                                                <span class="badge bg-info text-dark mb-2 fw-normal px-2 py-1">Premium</span>
                                                                                                                <h4 class="mb-2">Volkswagen - SUV</h4>
                                                                                                                <p class="mb-4 op-07" style="line-height: 1.65">Competently embrace dynamic intellectual capital.</p>
                                                                                                                <small class="ls2 fw-bold text-uppercase op-05 mb-2 d-block">Features</small>
                                                                                                                <div class="row g-0 mb-2 clearfix car-features">
                                                                                                                <div class="col-6 mb-2"><i class="icon-car-meter"></i>20000KMs</div>
                                                                                                                <div class="col-6 mb-2"><i class="icon-car-door"></i>5 Seater</div>
                                                                                                                <div class="col-6"><i class=" icon-car-cogs2"></i>Black</div>
                                                                                                                <div class="col-6"><i class="icon-car-pump"></i>20kmpl</div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                <div class="card-footer d-flex justify-content-between align-items-center bg-white py-3">
                                                                                                                <div>
                                                                                                                <h3 class="mb-0 h3 fw-semibold">$13.00</h3>
                                                                                                                <span class="op-06">pre day</span>
                                                                                                                </div>
                                                                                                                <a href="#" class="button button-red rounded-pill m-0">Book Now</a>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </section>
                                                                                                                </div>

                                                                                                                <div id="gotoTop" class="icon-angle-up"></div>`,
    media: `<img width="100%" height="100%" src="../External/blocks/preview/card-10/car.jpg">`,
});
/* ===Events=== */
editor.BlockManager.add('EventSection', {

    label: '<b>Event1</b>',
    category: 'Events',
    content: `<div id="wrapper" class="clearfix">

                                                                                                                        <!-- Content
                                                                                                                        ============================================= -->
                                                                                                                        <section id="content">
                                                                                                                            <div class="content-wrap">
                                                                                                                                <div class="container clearfix">

                                                                                                                                    <div class="row justify-content-center gutter-50 col-mb-50">

                                                                                                                                        <div class="col-xl-6 col-lg-8 text-center">
                                                                                                                                            <h3 class="h1 fw-bold mb-3">Event Card</h3>
                                                                                                                                        </div>

                                                                                                                                        <div class="clear"></div>

                                                                                                                                        <div class="entry event col-md-9 imagescalein">
                                                                                                                                            <div class="grid-inner row g-0 p-4 border rounded">
                                                                                                                                                <div class="col-lg-5 mb-lg-0">
                                                                                                                                                    <a href="#" class="entry-image overflow-hidden">
                                                                                                                                                        <img src="../External/blocks/events/1.jpg" alt="Inventore voluptates velit totam ipsa tenetur">
                                                                                                                                                        <div class="entry-date">10<span>Apr</span></div>
                                                                                                                                                    </a>
                                                                                                                                                </div>
                                                                                                                                                <div class="col-lg-7 ps-lg-4">
                                                                                                                                                    <div class="entry-title title-sm">
                                                                                                                                                        <h2><a href="#">Inventore voluptates velit totam ipsa tenetur</a></h2>
                                                                                                                                                    </div>
                                                                                                                                                    <div class="entry-meta">
                                                                                                                                                        <ul>
                                                                                                                                                            <li><span class="badge bg-warning text-dark py-1 px-2">Private</span></li>
                                                                                                                                                            <li><a href="#"><i class="icon-time"></i> 11:00 - 19:00</a></li>
                                                                                                                                                            <li><a href="#"><i class="icon-map-marker2"></i> Melbourne, Australia</a></li>
                                                                                                                                                        </ul>
                                                                                                                                                    </div>
                                                                                                                                                    <div class="entry-content">
                                                                                                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptatem, dolorem animi nisi autem blanditiis enim culpa reiciendis et explicabo tenetur voluptate rerum molestiae.</p>
                                                                                                                                                        <a href="#" class="btn btn-danger">Buy Tickets</a> <a href="#" class="btn btn-outline-secondary">Read More</a>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>

                                                                                                                                        <div class="entry event col-lg-5 col-md-6">
                                                                                                                                            <div class="grid-inner row g-0 p-4 bg-transparent shadow-sm h-shadow all-ts h-translatey-sm card border">
                                                                                                                                                <div class="entry-image">
                                                                                                                                                    <a href="#">
                                                                                                                                                        <img src="../External/blocks/events/2.jpg" alt="Inventore voluptates velit totam ipsa tenetur">
                                                                                                                                                        <div class="entry-date">10<span>Apr</span></div>
                                                                                                                                                    </a>
                                                                                                                                                </div>
                                                                                                                                                <div class="entry-title title-sm">
                                                                                                                                                    <h2><a href="#">Inventore voluptates velit totam ipsa tenetur</a></h2>
                                                                                                                                                </div>
                                                                                                                                                <div class="entry-meta">
                                                                                                                                                    <ul>
                                                                                                                                                        <li><span class="badge bg-warning text-dark py-1 px-2">Closed</span></li>
                                                                                                                                                        <li><a href="#"><i class="icon-time"></i> 11:00 - 19:00</a></li>
                                                                                                                                                        <li><a href="#"><i class="icon-map-marker2"></i> Melbourne, Australia</a></li>
                                                                                                                                                    </ul>
                                                                                                                                                </div>
                                                                                                                                                <div class="entry-content">
                                                                                                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita inventore totam minima quam ex, perspiciatis enim omnis laudantium dolore vero!</p>
                                                                                                                                                    <a href="#" class="btn btn-danger disabled">Buy Tickets</a> <a href="#" class="btn btn-outline-secondary">Read More</a>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>

                                                                                                                                        <div class="entry event col-lg-5 col-md-6">
                                                                                                                                            <div class="grid-inner row g-0 bg-transparent shadow-sm h-shadow all-ts h-translatey-sm card border">
                                                                                                                                                <div class="p-4 ">
                                                                                                                                                    <div class="entry-title title-sm">
                                                                                                                                                        <h2><a href="#">Tamworth Country Musical Festival</a></h2>
                                                                                                                                                    </div>
                                                                                                                                                    <div class="entry-meta">
                                                                                                                                                        <ul>
                                                                                                                                                            <li><span class="badge bg-success py-1 px-2">Public</span></li>
                                                                                                                                                            <li><a href="#"><i class="icon-time"></i> 10:00 - 14:00</a></li>
                                                                                                                                                            <li><a href="#"><i class="icon-map-marker2"></i> Sydney, Australia</a></li>
                                                                                                                                                        </ul>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                                <div class="entry-image my-1">
                                                                                                                                                    <a href="#">
                                                                                                                                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/b8cebCpghrY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                                                                                                                        <div class="entry-date">18<span>Jan</span></div>
                                                                                                                                                    </a>
                                                                                                                                                </div>
                                                                                                                                                <div class="entry-content p-4 m-0">
                                                                                                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi nulla cumque quia. A perspiciatis animi, veniam doloremque, inventore dolorem dolorum voluptate omnis eos fugiat quo velit, eius deleniti esse? Dolor.</p>
                                                                                                                                                    <a href="#" class="btn btn-danger">Buy Tickets</a> <a href="#" class="btn btn-outline-secondary">Read More</a>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>

                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </section><!-- #content end -->


                                                                                                                    </div><!-- #wrapper end -->


                                                                                                                    <div id="gotoTop" class="icon-angle-up"></div>`,

    media: '<img width="100%" height="100%" src="../External/blocks/intro/cards-5.jpg">',
});
//footer
editor.BlockManager.add('F11',
    {
        label: '<b>Footer1</b>',
        category: 'Footers',
        content: `
                                                                                                                <div id="wrapper" class="clearfix">

                                                                                                                <section id="content">
                                                                                                                <div class="content-wrap py-0">
                                                                                                                </div>
                                                                                                                </section>

                                                                                                                <footer id="footer" class="bg-light border-width-1 border-f5">
                                                                                                                <div class="container">

                                                                                                                <div class="footer-widgets-wrap">
                                                                                                                <div class="row justify-content-center text-center py-sm-5">
                                                                                                                <div class="col-12 mb-4">
                                                                                                                <div class="widget clearfix">
                                                                                                                <a href="#"><img src="../External/blocks/preview/logo@footer-2.png" alt="Image" class="mx-auto footer-logo mb-3" height="36"></a>
                                                                                                                <span class="tetx-uppercase op-05 d-block">The Multi-Purpose HTML5 Template</span>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                <div class="clear"></div>
                                                                                                                <div class="col-12 mt-5">
                                                                                                                <div class="widget">
                                                                                                                <ul class="list-inline m-0">
                                                                                                                <li class="list-inline-item mx-lg-3 my-lg-0 m-3"><a class="text-dark h-text-danger" href="#"><u>Documentation</u></a></li>
                                                                                                                <li class="list-inline-item mx-lg-3 my-lg-0 m-3"><a class="text-dark h-text-danger" href="#"><u>Feedback</u></a></li>
                                                                                                                <li class="list-inline-item mx-lg-3 my-lg-0 m-3"><a class="text-dark h-text-danger" href="#"><u>Plugins</u></a></li>
                                                                                                                <li class="list-inline-item mx-lg-3 my-lg-0 m-3"><a class="text-dark h-text-danger" href="#"><u>Support Forums</u></a></li>
                                                                                                                <li class="list-inline-item mx-lg-3 my-lg-0 m-3"><a class="text-dark h-text-danger" href="#"><u>Themes</u></a></li>
                                                                                                                <li class="list-inline-item mx-lg-3 my-lg-0 m-3"><a class="text-dark h-text-danger" href="#"><u>Canvas Blog</u></a></li>
                                                                                                                </ul>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>

                                                                                                                <div id="copyrights" class="bg-white">
                                                                                                                <div class="container">
                                                                                                                <div class="row">
                                                                                                                <div class="col-12 text-center">
                                                                                                                <div class="d-flex justify-content-center mb-3">
                                                                                                                <a href="#" class="social-icon si-small si-colored si-rounded si-facebook">
                                                                                                                <i class="icon-facebook"></i>
                                                                                                                <i class="icon-facebook"></i>
                                                                                                                </a>
                                                                                                                <a href="#" class="social-icon si-small si-colored si-rounded si-twitter">
                                                                                                                <i class="icon-twitter"></i>
                                                                                                                <i class="icon-twitter"></i>
                                                                                                                </a>
                                                                                                                <a href="#" class="social-icon si-small si-colored si-rounded si-gplus">
                                                                                                                <i class="icon-gplus"></i>
                                                                                                                <i class="icon-gplus"></i>
                                                                                                                </a>
                                                                                                                <a href="#" class="social-icon si-small si-colored si-rounded si-pinterest">
                                                                                                                <i class="icon-pinterest"></i>
                                                                                                                <i class="icon-pinterest"></i>
                                                                                                                </a>
                                                                                                                <a href="#" class="social-icon si-small si-colored si-rounded si-linkedin">
                                                                                                                <i class="icon-linkedin"></i>
                                                                                                                <i class="icon-linkedin"></i>
                                                                                                                </a>
                                                                                                                </div>
                                                                                                                <span class="text-black-50">&copy; 2020 All Rights Reserved by Canvas Inc.</span>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                </footer>
                                                                                                                </div>

                                                                                <div id="gotoTop" class="icon-angle-up"></div>`,
        media: '<img width="100%" height="100%" src="../External/blocks/intro/footer-2.jpg">',
    });
// Portfolio
editor.BlockManager.add('Portfolio1',
    {
        label: '<b>Portfolio</b>',
        category: 'Portfolio',
        content: `<section id="content">
                                                                                        <div class="content-wrap" style="background-color: #ece3da;">
                                                                                        <div class="container clearfix">
                                                                                        <div class="row mb-5">
                                                                                        <div class="col-lg-7">
                                                                                        <h1 class="font-secondary display-3 fw-bold parallax skrollable skrollable-after" data-start="transform:
                                                                                        translateY(0px)" data-200-start="transform: translateY(-30px)" style="transform: translateY(-30px);">Fashion City</h1>
                                                                                        <p>Inceptos voluptates lobortis, adipisicing venenatis tortor ut est doloremque? Sint eligendi. Faucibus. Cillum error dictumst placeat, corporis labore,
                                                                                        consequatur ultrices, proident egestas pharetra fusce habitant architecto molestias odio ligula gravida do, varius perferendis luctus? Porro fugiat quos
                                                                                        potenti volutpat mus massa porro occaecati curae. Blandit malesuada mollitia rhoncus.</p>
                                                                                        </div>
                                                                                        </div>
                                                                                        <div class="row my-5">
                                                                                        <div class="col-lg-10">
                                                                                        <div id="block-portfolio-1" class="portfolio row grid-container gutter-40 has-init-isotope" data-layout="fitRows" style="position: relative; height: 1220.75px;">

                                                                                                        <article class="portfolio-item col-md-4 col-6 parallax skrollable skrollable-after" data-bottom-top="transform: translateY(7%)" data-top-bottom="transform:
                                                                                                        translateY(-7%)" style="position: absolute; left: 0%; top: 0px; transform: translateY(-7%);">

                                                                                                        <div class="grid-inner">

                                                                                                        <div class="portfolio-image rounded">
                                                                                                        <a href="portfolio-single.html">
                                                                                                        <img src="../External/blocks/preview/portfolio-1/1.jpg" alt="Precedent">
                                                                                                        </a>
                                                                                                        <div class="bg-overlay">
                                                                                                        <div class="bg-overlay-content dark not-animated" data-hover-animate="fadeIn" style="animation-duration: 600ms;">
                                                                                                        <a href="../External/blocks/preview/portfolio-1/1.jpg" class="overlay-trigger-icon bg-light text-dark not-animated" data-hover-animate="zoomIn"
                                                                                                        data-hover-animate-out="zoomOut" data-hover-speed="350" data-lightbox="image" title="Precedent" style="animation-duration: 350ms;"><i class="icon-line-plus"></i></a>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        <div class="portfolio-desc text-center py-3">
                                                                                                        <h3><a href="portfolio-single.html">Precedent</a></h3>
                                                                                                        </div>

                                                                                                        </div>

                                                                                                        </article>


                                                                                                        <article class="portfolio-item col-md-4 col-6 parallax skrollable skrollable-after" data-bottom-top="transform: translateY(15%)" data-top-bottom="transform: translateY(-15%)" style="position: absolute; left: 33.3333%; top: 0px;">

                                                                                                        <div class="grid-inner">

                                                                                                         <div class="portfolio-image rounded">
                                                                                                        <a href="portfolio-single.html">
                                                                                                        <img src="../External/blocks/preview/portfolio-1/2.jpg" alt="Seasonal">
                                                                                                        </a>
                                                                                                        <div class="bg-overlay">
                                                                                                        <div class="bg-overlay-content dark animated fadeOut" data-hover-animate="fadeIn" style="animation-duration: 600ms;">
                                                                                                        <a href="../External/blocks/preview/portfolio-1/2.jpg" class="overlay-trigger-icon bg-light text-dark animated zoomOut" data-hover-animate="zoomIn"
                                                                                                        data-hover-animate-out="zoomOut" data-hover-speed="350" data-lightbox="image" title="Seasonal" style="animation-duration: 350ms;"><i class="icon-line-plus"></i></a>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        <div class="portfolio-desc text-center py-3">
                                                                                                        <h3><a href="portfolio-single.html">Seasonal</a></h3>
                                                                                                        </div>

                                                                                                        </div>

                                                                                                        </article>


                                                                                                        <article class="portfolio-item col-md-4 col-6 parallax skrollable skrollable-after" data-bottom-top="transform: translateY(5%)" data-top-bottom="transform: translateY(-5%)" style="position: absolute; left: 66.6667%; top: 0px; transform: translateY(-5%);">

                                                                                                        <div class="grid-inner">

                                                                                                        <div class="portfolio-image rounded">
                                                                                                        <a href="portfolio-single.html">
                                                                                                        <img src="../External/blocks/preview/portfolio-1/3.jpg" alt="Ignorance">
                                                                                                        </a>
                                                                                                        <div class="bg-overlay">
                                                                                                        <div class="bg-overlay-content dark animated fadeOut" data-hover-animate="fadeIn" style="animation-duration: 600ms;">
                                                                                                        <a href="../External/blocks/preview/portfolio-1/3.jpg" class="overlay-trigger-icon bg-light text-dark animated zoomOut" data-hover-animate="zoomIn" data-hover-animate-out="zoomOut" data-hover-speed="350" data-lightbox="image" title="Ignorance" style="animation-duration: 350ms;">
                                                                                                        <i class="icon-line-plus"></i></a>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        <div class="portfolio-desc text-center py-3">
                                                                                                        <h3><a href="portfolio-single.html">Ignorance</a></h3>
                                                                                                        </div>

                                                                                                        </div>

                                                                                                        </article>


                                                                                                        <article class="portfolio-item col-md-4 col-6 parallax skrollable skrollable-between" data-bottom-top="transform: translateY(17%)" data-top-bottom="transform: translateY(-17%)" style="position: absolute; left: 0%; top: 620.75px; transform: translateY(-5.61239%);">

                                                                                                        <div class="grid-inner">

                                                                                                        <div class="portfolio-image rounded">
                                                                                                        <a href="portfolio-single.html">
                                                                                                        <img src="../External/blocks/preview/portfolio-1/4.jpg" alt="Concentration">
                                                                                                        </a>
                                                                                                        <div class="bg-overlay">
                                                                                                        <div class="bg-overlay-content dark animated fadeOut" data-hover-animate="fadeIn" style="animation-duration: 600ms;">
                                                                                                        <a href="../External/blocks/preview/portfolio-1/4.jpg" class="overlay-trigger-icon bg-light text-dark animated zoomOut" data-hover-animate="zoomIn" data-hover-animate-out="zoomOut" data-hover-speed="350" data-lightbox="image" title="Concentration" style="animation-duration: 350ms;"><i class="icon-line-plus"></i></a>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        <div class="portfolio-desc text-center py-3">
                                                                                                        <h3><a href="portfolio-single.html">Concentration</a></h3>
                                                                                                        </div>

                                                                                                        </div>

                                                                                                        </article>


                                                                                                        <article class="portfolio-item col-md-4 col-6 parallax skrollable skrollable-between"
                                                                                                        data-bottom-top="transform: translateY(3%)" data-top-bottom="transform: translateY(-3%)" style="position:
                                                                                                        absolute; left: 33.3333%; top: 620.75px;">

                                                                                                        <div class="grid-inner">

                                                                                                        <div class="portfolio-image rounded">
                                                                                                        <a href="portfolio-single.html">
                                                                                                        <img src="../External/blocks/preview/portfolio-1/5.jpg" alt="Attitude">
                                                                                                        </a>
                                                                                                        <div class="bg-overlay">
                                                                                                        <div class="bg-overlay-content dark animated fadeOut" data-hover-animate="fadeIn" style="animation-duration: 600ms;">
                                                                                                        <a href="../External/blocks/preview/portfolio-1/5.jpg" class="overlay-trigger-icon bg-light text-dark animated zoomOut"
                                                                                                        data-hover-animate="zoomIn" data-hover-animate-out="zoomOut" data-hover-speed="350" data-lightbox="image" title="Attitude" style="animation-duration: 350ms;"><i class="icon-line-plus"></i></a>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        <div class="portfolio-desc text-center py-3">
                                                                                                        <h3><a href="portfolio-single.html">Attitude</a></h3>
                                                                                                        </div>

                                                                                                        </div>

                                                                                                        </article>


                                                                                                        <article class="portfolio-item col-md-4 col-6 parallax skrollable skrollable-between" data-bottom-top="transform: translateY(16%)" data-top-bottom="transform: translateY(-16%)" style="position: absolute; left: 66.6667%; top: 620.75px; transform: translateY(-5.28225%);">

                                                                                                        <div class="grid-inner">

                                                                                                        <div class="portfolio-image rounded">
                                                                                                        <a href="portfolio-single.html">
                                                                                                        <img src="../External/blocks/preview/portfolio-1/6.jpg" alt="Satisfaction">
                                                                                                        </a>
                                                                                                        <div class="bg-overlay">
                                                                                                        <div class="bg-overlay-content dark animated fadeOut" data-hover-animate="fadeIn" style="animation-duration: 600ms;">
                                                                                                        <a href="../External/blocks/preview/portfolio-1/6.jpg" class="overlay-trigger-icon bg-light text-dark animated zoomOut" data-hover-animate="zoomIn" data-hover-animate-out="zoomOut" data-hover-speed="350" data-lightbox="image" title="Satisfaction" style="animation-duration: 350ms;">
                                                                                                        <i class="icon-line-plus"></i></a>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        <div class="portfolio-desc text-center py-3">
                                                                                                        <h3><a href="portfolio-single.html">Satisfaction</a></h3>
                                                                                                        </div>

                                                                                                        </div>

                                                                                                        </article>

                                                                                                        </div>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        <div class="min-vh-50"></div>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        </section>`,
        media: '<img width="100%" height="100%" src="../External/blocks/intro/portfolio-1.jpg">'

    });
editor.BlockManager.add('Portfolio2',
    {
        label: '<b>Gallery 10</b>',
        category: 'Portfolio',
        content: `<section id="content">
                                                                                                <div class="content-wrap overflow-visible py-0">
                                                                                                <div class="position-relative bg-light">
                                                                                                <div class="position-sticky" style="top: 0;">
                                                                                                <div class="row g-0 justify-content-center align-items-center vh-75">
                                                                                                <div class="col-xl-6 col-lg-8 text-center">
                                                                                                <h3 class="display-4 fw-bold mb-3">Gallery</h3>
                                                                                                </div>
                                                                                                </div>
                                                                                                </div>
                                                                                                <div class="container">
                                                                                                <div class="row gutter-50 pb-4" data-lightbox="gallery">
                                                                                                <div class="col-md-6">
                                                                                                        <a href="../External/blocks/preview/gallery-7/1.jpg" data-lightbox="gallery-item"><img src="../External/blocks/preview/gallery-7/1.jpg" alt="Gallery Thumb 1"></a>
                                                                                                </div>
                                                                                                <div class="col-md-6">
                                                                                                <a href="../External/blocks/preview/gallery-7/2.jpg" data-lightbox="gallery-item"><img src="../External/blocks/preview/gallery-7/2.jpg" alt="Gallery Thumb 2"></a>
                                                                                                </div>
                                                                                                <div class="col-12">
                                                                                                <a href="../External/blocks/preview/gallery-7/6.jpg" data-lightbox="gallery-item"><img src="../External/blocks/preview/gallery-7/6.jpg" alt="Gallery Thumb 5"></a>
                                                                                                </div>
                                                                                                <div class="col-md-4">
                                                                                                <a href="../External/blocks/preview/gallery-7/4.jpg" data-lightbox="gallery-item"><img src="../External/blocks/preview/gallery-7/4.jpg" alt="Gallery Thumb 3"></a>
                                                                                                </div>
                                                                                                <div class="col-md-4">
                                                                                                <a href="../External/blocks/preview/gallery-7/5.jpg" data-lightbox="gallery-item"><img src="../External/blocks/preview/gallery-7/5.jpg" alt="Gallery Thumb 4"></a>
                                                                                                </div>
                                                                                                <div class="col-md-4">
                                                                                                <a href="../External/blocks/preview/gallery-7/3.jpg" data-lightbox="gallery-item"><img src="../External/blocks/preview/gallery-7/3.jpg" alt="Gallery Thumb 5"></a>
                                                                                                </div>
                                                                                                <div class="col-md-6">
                                                                                                <a href="../External/blocks/preview/gallery-7/7.jpg" data-lightbox="gallery-item"><img src="../External/blocks/preview/gallery-7/7.jpg" alt="Gallery Thumb 5"></a>
                                                                                                </div>
                                                                                                <div class="col-md-6">
                                                                                                        <a href="../External/blocks/preview/gallery-7/8.jpg" data-lightbox="gallery-item"><img src="../External/blocks/preview/gallery-7/8.jpg" alt="Gallery Thumb 5"></a>
                                                                                                </div>
                                                                                                </div>
                                                                                                </div>
                                                                                                </div>
                                                                                                </div>
                                                                                                </section>`
        , media: '<img width="100%" height="100%" src="../External/blocks/intro/gallery-10.jpg">'

    });
editor.BlockManager.add('Portfolio3',
    {
        label: '<b>Portfolio Single Full</b>',
        category: 'Portfolio',
        content: `<div id="wrapper">
                                                                                                        <section id="slider" class="slider-element swiper_wrapper customjs h-auto">
                                                                                                        <div class="swiper-container swiper-parent slider-top swiper-initialized swiper-horizontal swiper-pointer-events">
                                                                                                        <div class="swiper-wrapper h-auto" id="swiper-wrapper-102826733072f8e11" aria-live="polite" style="transition-duration: 0ms; transform: translate3d(-4777.31px, 0px, 0px);"><div class="swiper-slide swiper-slide-duplicate"
                                                                                                        style="background-image: url(&quot;../External/blocks/preview/portfolio-full/5.jpg&quot;); margin-right: 10px;" data-swiper-slide-index="4" role="group" aria-label="5 / 8"></div><div class="swiper-slide swiper-slide-duplicate"
                                                                                                        style="background-image: url(&quot;../External/blocks/preview/portfolio-full/6.jpg&quot;); margin-right: 10px;" data-swiper-slide-index="5" role="group" aria-label="6 / 8"></div><div class="swiper-slide swiper-slide-duplicate"
                                                                                                        style="background-image: url(&quot;../External/blocks/preview/portfolio-full/7.jpg&quot;); margin-right: 10px;" data-swiper-slide-index="6" role="group" aria-label="7 / 8"></div><div class="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                                                                                                        style="background-image: url(&quot;../External/blocks/preview/portfolio-full/8.jpg&quot;); margin-right: 10px;" data-swiper-slide-index="7" role="group" aria-label="8 / 8"></div>
                                                                                                        <div class="swiper-slide swiper-slide-active" style="background-image: url(&quot;../External/blocks/preview/portfolio-full/1.jpg&quot;); margin-right: 10px;" data-swiper-slide-index="0" role="group" aria-label="1 / 8"></div>
                                                                                                        <div class="swiper-slide swiper-slide-next" style="background-image: url(&quot;../External/blocks/preview/portfolio-full/2.jpg&quot;); margin-right: 10px;" data-swiper-slide-index="1" role="group" aria-label="2 / 8"></div>
                                                                                                        <div class="swiper-slide" style="background-image: url(&quot;../External/blocks/preview/portfolio-full/3.jpg&quot;); margin-right: 10px;" data-swiper-slide-index="2" role="group" aria-label="3 / 8"></div>
                                                                                                        <div class="swiper-slide" style="background-image: url(&quot;../External/blocks/preview/portfolio-full/4.jpg&quot;); margin-right: 10px;" data-swiper-slide-index="3" role="group" aria-label="4 / 8"></div>
                                                                                                        <div class="swiper-slide" style="background-image: url(&quot;../External/blocks/preview/portfolio-full/5.jpg&quot;); margin-right: 10px;" data-swiper-slide-index="4" role="group" aria-label="5 / 8"></div>
                                                                                                        <div class="swiper-slide" style="background-image: url(&quot;../External/blocks/preview/portfolio-full/6.jpg&quot;); margin-right: 10px;" data-swiper-slide-index="5" role="group" aria-label="6 / 8"></div>
                                                                                                        <div class="swiper-slide" style="background-image: url(&quot;../External/blocks/preview/portfolio-full/7.jpg&quot;); margin-right: 10px;" data-swiper-slide-index="6" role="group" aria-label="7 / 8"></div>
                                                                                                        <div class="swiper-slide swiper-slide-duplicate-prev" style="background-image: url(&quot;../External/blocks/preview/portfolio-full/8.jpg&quot;); margin-right: 10px;" data-swiper-slide-index="7" role="group" aria-label="8 / 8"></div>
                                                                                                        <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" style="background-image: url(&quot;../External/blocks/preview/portfolio-full/1.jpg&quot;); margin-right: 10px;"
                                                                                                        data-swiper-slide-index="0" role="group" aria-label="1 / 8"></div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" style="background-image: url(&quot;../External/blocks/preview/portfolio-full/2.jpg&quot;);
                                                                                                        margin-right: 10px;" data-swiper-slide-index="1" role="group" aria-label="2 / 8"></div><div class="swiper-slide swiper-slide-duplicate" style="background-image: url(&quot;../External/blocks/preview/portfolio-full/3.jpg&quot;); margin-right: 10px;"
                                                                                                        data-swiper-slide-index="2" role="group" aria-label="3 / 8"></div><div class="swiper-slide swiper-slide-duplicate" style="background-image: url(&quot;../External/blocks/preview/portfolio-full/4.jpg&quot;);
                                                                                                        margin-right: 10px;" data-swiper-slide-index="3" role="group" aria-label="4 / 8"></div></div>

                                                                                                        <div class="slider-arrow-left" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-102826733072f8e11"><i class="icon-angle-left"></i></div>
                                                                                                        <div class="slider-arrow-right" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-102826733072f8e11"><i class="icon-angle-right"></i></div>
                                                                                                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                                                                                                        <div class="swiper-container slider-thumbs swiper-initialized swiper-horizontal swiper-pointer-events">
                                                                                                        <div class="swiper-wrapper h-auto" id="swiper-wrapper-6f01f700ac63129c" aria-live="polite" style="transition-duration: 0ms; transform: translate3d(-802.15px, 0px, 0px);">
                                                                                                        <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4" role="group" aria-label="5 / 8" style="margin-right: 10px;"><img src="../External/blocks/preview/portfolio-full/thumbs/5.jpg" alt="Image"></div>
                                                                                                        <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="5" role="group" aria-label="6 / 8" style="margin-right: 10px;"><img src="../External/blocks/preview/portfolio-full/thumbs/6.jpg" alt="Image"></div>
                                                                                                        <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="6" role="group" aria-label="7 / 8" style="margin-right: 10px;"><img src="../External/blocks/preview/portfolio-full/thumbs/7.jpg" alt="Image">
                                                                                                        </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="7" role="group" aria-label="8 / 8" style="margin-right: 10px;"><img src="../External/blocks/preview/portfolio-full/thumbs/8.jpg" alt="Image"></div>
                                                                                                        <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="0" role="group" aria-label="1 / 8" style="margin-right: 10px;"><img src="../External/blocks/preview/portfolio-full/thumbs/1.jpg" alt="Image"></div>
                                                                                                        <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="1" role="group" aria-label="2 / 8" style="margin-right: 10px;"><img src="../External/blocks/preview/portfolio-full/thumbs/2.jpg" alt="Image"></div>
                                                                                                        <div class="swiper-slide" data-swiper-slide-index="2" role="group" aria-label="3 / 8" style="margin-right: 10px;"><img src="../External/blocks/preview/portfolio-full/thumbs/3.jpg" alt="Image"></div>
                                                                                                        <div class="swiper-slide" data-swiper-slide-index="3" role="group" aria-label="4 / 8" style="margin-right: 10px;"><img src="../External/blocks/preview/portfolio-full/thumbs/4.jpg" alt="Image"></div>
                                                                                                        <div class="swiper-slide" data-swiper-slide-index="4" role="group" aria-label="5 / 8" style="margin-right: 10px;"><img src="../External/blocks/preview/portfolio-full/thumbs/5.jpg" alt="Image"></div>
                                                                                                        <div class="swiper-slide" data-swiper-slide-index="5" role="group" aria-label="6 / 8" style="margin-right: 10px;"><img src="../External/blocks/preview/portfolio-full/thumbs/6.jpg" alt="Image"></div>
                                                                                                        <div class="swiper-slide" data-swiper-slide-index="6" role="group" aria-label="7 / 8" style="margin-right: 10px;"><img src="../External/blocks/preview/portfolio-full/thumbs/7.jpg" alt="Image"></div>
                                                                                                        <div class="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index="7" role="group" aria-label="8 / 8" style="margin-right: 10px;"><img src="../External/blocks/preview/portfolio-full/thumbs/8.jpg" alt="Image"></div>
                                                                                                        <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" role="group" aria-label="1 / 8" style="margin-right: 10px;">
                                                                                                        <img src="../External/blocks/preview/portfolio-full/thumbs/1.jpg" alt="Image"></div>
                                                                                                        <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                                                                                                        data-swiper-slide-index="1" role="group" aria-label="2 / 8" style="margin-right: 10px;">
                                                                                                        <img src="../External/blocks/preview/portfolio-full/thumbs/2.jpg" alt="Image"></div>
                                                                                                        <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" role="group"
                                                                                                        aria-label="3 / 8" style="margin-right: 10px;">
                                                                                                        <img src="../External/blocks/preview/portfolio-full/thumbs/3.jpg" alt="Image">
                                                                                                        </div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3" role="group"
                                                                                                        aria-label="4 / 8" style="margin-right: 10px;"><img src="../External/blocks/preview/portfolio-full/thumbs/4.jpg" alt="Image"></div></div>
                                                                                                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                                                                                                        </section>

                                                                                                        <section id="content">
                                                                                                        <div class="content-wrap">
                                                                                                        <div class="container">

                                                                                                        <div class="portfolio-single-content">
                                                                                                        <div class="row gutter-50 justify-content-between">
                                                                                                        <div class="col-md-6">

                                                                                                        <h2>Your Portfolio Title</h2>
                                                                                                        <p class="op-07 fw-normal lead font-primary">Illum molestias cupiditate eveniet dolore obcaecati voluptatibus est quos eos id recusandae officia.</p>
                                                                                                        <p class="op-07">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                                                        Tenetur voluptas, omnis libero nesciunt quia, vero mollitia dolorum sint quae at dignissimos,
                                                                                                        et architecto est aperiam repellendus reprehenderit. Eveniet accusamus aperiam ut illo animi
                                                                                                        officia. Voluptatibus nemo atque voluptas illum sed suscipit perferendis fuga similique nam
                                                                                                        debitis, labore iste molestiae quas asperiores. Et commodi alias est odio magnam,
                                                                                                        ab reprehenderit. Beatae, soluta placeat repellat sunt facere iste ipsa, similique.
                                                                                                        Recusandae accusantium ullam consequatur quae a nihil magnam est sunt blanditiis explicabo?
                                                                                                        Aliquid corrupti, officiis blanditiis corporis deserunt quibusdam, ea asperiores a excepturi
                                                                                                        odit obcaecati natus. Possimus expedita libero animi cupiditate autem.</p>

                                                                                                        </div>
                                                                                                        <div class="col-md-5">

                                                                                                        <ul class="portfolio-meta">
                                                                                                        <li><span><i class="icon-user"></i>Created by:</span> John Doe</li>
                                                                                                        <li><span><i class="icon-calendar3"></i>Completed on:</span> 17th March 2021</li>
                                                                                                        <li><span><i class="icon-lightbulb"></i>Skills:</span> HTML5 / PHP / CSS3</li>
                                                                                                        <li><span><i class="icon-link"></i>Client:</span> <a href="#">Google</a></li>
                                                                                                        </ul>
                                                                                                        <div class="line my-4"></div>

                                                                                                        <div class="d-flex justify-content-between align-items-center">
                                                                                                        <span>Share:</span>
                                                                                                        <div>
                                                                                                        <a href="#" class="social-icon si-small si-light si-facebook">
                                                                                                        <i class="icon-facebook"></i>
                                                                                                        <i class="icon-facebook"></i>
                                                                                                        </a>
                                                                                                        <a href="#" class="social-icon si-small si-light si-twitter">
                                                                                                        <i class="icon-twitter"></i>
                                                                                                        <i class="icon-twitter"></i>
                                                                                                        </a>
                                                                                                        <a href="#" class="social-icon si-small si-light si-pinterest">
                                                                                                        <i class="icon-pinterest"></i>
                                                                                                        <i class="icon-pinterest"></i>
                                                                                                        </a>
                                                                                                        <a href="#" class="social-icon si-small si-light si-gplus">
                                                                                                        <i class="icon-gplus"></i>
                                                                                                        <i class="icon-gplus"></i>
                                                                                                        </a>
                                                                                                        <a href="#" class="social-icon si-small si-light si-rss">
                                                                                                        <i class="icon-rss"></i>
                                                                                                        <i class="icon-rss"></i>
                                                                                                        </a>
                                                                                                        <a href="#" class="social-icon si-small si-light si-email3">
                                                                                                        <i class="icon-email3"></i>
                                                                                                        <i class="icon-email3"></i>
                                                                                                        </a>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        </div>
                                                                                                        </section>
                                                                                                        </div>`
        , media: '<img width="100%" height="100%" src="../External/blocks/intro/portfolio-single-full.jpg">'

    });
editor.BlockManager.add('Portfolio4',
    {
        label: '<b>Portfolio Single Full</b>',
        category: 'Portfolio',
        content: `<section id="content">
                                                                                                <div class="content-wrap">
                                                                                                <div class="container">
                                                                                                <div class="row gutter-50">

                                                                                                <div class="col-lg-7 portfolio-single-image" data-lightbox="gallery">
                                                                                                <div class="row col-mb-30">
                                                                                                <a href="../External/blocks/preview/portfolio-single/1.jpg" class="col-lg-12 col-md-6" data-lightbox="gallery-item"><img src="../External/blocks/preview/portfolio-single/1.jpg" alt="Image 1"></a>
                                                                                                <a href="../External/blocks/preview/portfolio-single/2.jpg" class="col-lg-12 col-md-6" data-lightbox="gallery-item"><img src="../External/blocks/preview/portfolio-single/2.jpg" alt="Image 2"></a>
                                                                                                <a href="../External/blocks/preview/portfolio-single/3.jpg" class="col-lg-12 col-md-6" data-lightbox="gallery-item"><img src="../External/blocks/preview/portfolio-single/3.jpg" alt="Image 3"></a>
                                                                                                        <a href="../External/blocks/preview/portfolio-single/4.jpg" class="col-lg-12 col-md-6" data-lightbox="gallery-item"><img src="../External/blocks/preview/portfolio-single/4.jpg" alt="Image 4"></a>
                                                                                                </div>
                                                                                                </div>

                                                                                                <div class="col-lg-5 portfolio-single-content content-sticky">

                                                                                                <h2>Your Favourite Coffee Mug</h2>
                                                                                                <p class="op-07">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, dolores, facere, corrupti delectus ex quidem adipisci tempore.<br><br>
                                                                                                Illum molestias cupiditate eveniet dolore obcaecati voluptatibus est quos eos id recusandae officia. Cupiditate, voluptates quibusdam ipsum vel corporis laboriosam id est doloremque?</p>

                                                                                                <div class="line my-5"></div>

                                                                                                <ul class="portfolio-meta bottommargin">
                                                                                                <li><span><i class="icon-user"></i>Created by:</span> John Doe</li>
                                                                                                <li><span><i class="icon-calendar3"></i>Completed on:</span> 17th March 2021</li>
                                                                                                <li><span><i class="icon-lightbulb"></i>Skills:</span> HTML5 / PHP / CSS3</li>
                                                                                                <li><span><i class="icon-link"></i>Client:</span> <a href="#">Google</a></li>
                                                                                                </ul>

                                                                                                <div class="line my-5"></div>

                                                                                                <div class="d-flex justify-content-between align-items-center">
                                                                                                <span>Share:</span>
                                                                                                <div>
                                                                                                <a href="#" class="social-icon si-small si-light si-facebook">
                                                                                                <i class="icon-facebook"></i>
                                                                                                <i class="icon-facebook"></i>
                                                                                                </a>
                                                                                                <a href="#" class="social-icon si-small si-light si-twitter">
                                                                                                <i class="icon-twitter"></i>
                                                                                                <i class="icon-twitter"></i>
                                                                                                </a>
                                                                                                <a href="#" class="social-icon si-small si-light si-pinterest">
                                                                                                <i class="icon-pinterest"></i>
                                                                                                <i class="icon-pinterest"></i>
                                                                                                </a>
                                                                                                <a href="#" class="social-icon si-small si-light si-gplus">
                                                                                                <i class="icon-gplus"></i>
                                                                                                <i class="icon-gplus"></i>
                                                                                                </a>
                                                                                                <a href="#" class="social-icon si-small si-light si-rss">
                                                                                                <i class="icon-rss"></i>
                                                                                                <i class="icon-rss"></i>
                                                                                                </a>
                                                                                                <a href="#" class="social-icon si-small si-light si-email3">
                                                                                                <i class="icon-email3"></i>
                                                                                                <i class="icon-email3"></i>
                                                                                                </a>
                                                                                                </div>
                                                                                                </div>

                                                                                                </div>
                                                                                                </div>
                                                                                                </div>
                                                                                                </div>
                                                                                                </section>`
        , media: '<img width="100%" height="100%" src="../External/blocks/intro/portfolio-single.jpg">',

    });
// Slider
editor.BlockManager.add('Slider1',
    {
        label: '<b>Hero 14</b>',
        category: 'Slider',
        content: `<div id="wrapper" class="clearfix">

                                                                                                <section id="slider" class="block-hero-14 slider-element overflow-visible">
                                                                                                <div class="container">
                                                                                                <div class="row min-vh-lg-100 align-items-center py-5 dark">

                                                                                                <div class="col-lg-7 offset-lg-1">
                                                                                                <h3 class="font-secondary mb-4 ls1 h3 mix-text">- Core Efficiency</h3>
                                                                                                <h3 class="text-uppercase m-0 display-3 fw-bold mix-text position-relative z-2 mb-4">Lets see how We do your Work.</h3>
                                                                                                <a href="#" class="button button-black bg-danger button-xlarge m-0">Explore Now</a>
                                                                                                </div>
                                                                                                </div>
                                                                                                </div>
                                                                                                <div class="section-slider">
                                                                                                <div class="swiper_wrapper overflow-visible min-vh-100" data-loop="true">
                                                                                                <div class="swiper-container swiper-parent swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                                                                                <div class="swiper-wrapper" id="swiper-wrapper-5bd2399618d78310a" aria-live="off" style="cursor: grab; transition-duration: 0ms; transform: translate3d(-1424px, 0px, 0px);"><div class="swiper-slide dark swiper-slide-duplicate swiper-slide-duplicate-next"
                                                                                                data-swiper-slide-index="2" style="width: 712px;" role="group" aria-label="3 / 3">
                                                                                                <div class="container">
                                                                                                <div class="slider-caption justify-content-end align-items-center" style="max-width: none;">
                                                                                                <h3 data-animate="fadeInUpSmall" class="fadeInUpSmall animated">Image Caption 2</h3>
                                                                                                </div>
                                                                                                </div>
                                                                                                <div class="swiper-slide-bg min-vh-100" style="background-image: url('../External/blocks/preview/hero-14/3.jpg'); background-position: center center; background-size: cover;"></div>
                                                                                                </div>

                                                                                                <div class="swiper-slide dark swiper-slide-prev" data-swiper-slide-index="0" style="width: 712px;" role="group" aria-label="1 / 3">
                                                                                                <div class="container">
                                                                                                <div class="slider-caption justify-content-end align-items-center" style="max-width: none;">
                                                                                                <h3 data-animate="fadeInUpSmall" class="not-animated">Image Caption 1</h3>
                                                                                                </div>
                                                                                                </div>
                                                                                                <div class="swiper-slide-bg min-vh-100" style="background: url('../External/blocks/preview/hero-14/1.jpg') center center; background-size: cover;"></div>
                                                                                                </div>

                                                                                                <div class="swiper-slide dark swiper-slide-active" data-swiper-slide-index="1" style="width: 712px;" role="group" aria-label="2 / 3">
                                                                                                <div class="container">
                                                                                                <div class="slider-caption justify-content-end align-items-center" style="max-width: none;">
                                                                                                <h3 data-animate="fadeInUpSmall" class="fadeInUpSmall animated">Image Caption 2</h3>
                                                                                                </div>
                                                                                                </div>
                                                                                                <div class="swiper-slide-bg min-vh-100" style="background-image: url('../External/blocks/preview/hero-14/2.jpg'); background-position: center center; background-size: cover;"></div>
                                                                                                </div>

                                                                                                <div class="swiper-slide dark swiper-slide-next" data-swiper-slide-index="2" style="width: 712px;" role="group" aria-label="3 / 3">
                                                                                                <div class="container">
                                                                                                <div class="slider-caption justify-content-end align-items-center" style="max-width: none;">
                                                                                                <h3 data-animate="fadeInUpSmall" class="fadeInUpSmall animated">Image Caption 2</h3>
                                                                                                </div>
                                                                                                </div>
                                                                                                <div class="swiper-slide-bg min-vh-100" style="background-image: url('../External/blocks/preview/hero-14/3.jpg'); background-position: center center; background-size: cover;"></div>
                                                                                                </div>
                                                                                                <div class="swiper-slide dark swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="0" role="group" aria-label="1 / 3" style="width: 712px;">
                                                                                                <div class="container">
                                                                                                <div class="slider-caption justify-content-end align-items-center" style="max-width: none;">
                                                                                                <h3 data-animate="fadeInUpSmall" class="not-animated">Image Caption 1</h3>
                                                                                                </div>
                                                                                                </div>
                                                                                                <div class="swiper-slide-bg min-vh-100" style="background: url('../External/blocks/preview/hero-14/1.jpg') center center; background-size: cover;"></div>
                                                                                                </div></div>
                                                                                                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                                                                                                <div class="slider-arrow-left" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-5bd2399618d78310a"><i class="icon-angle-left"></i></div>
                                                                                                <div class="slider-arrow-right" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-5bd2399618d78310a"><i class="icon-angle-right"></i></div>
                                                                                                <div class="slide-number font-secondary"><div class="slide-number-current">2</div><span></span><div class="slide-number-total op-05">3</div></div>
                                                                                                </div>
                                                                                                </div>
                                                                                                <div class="d-flex flex-row position-absolute z-10 op-06" style="writing-mode: vertical-rl; top: 50%; transform: translateY(-50%) scale(-1); left: 40px">
                                                                                                <a href="#" class="my-3 text-black-50 ls1 text-uppercase text-smaller">Facebook</a>
                                                                                                <a href="#" class="my-3 text-black-50 ls1 text-uppercase text-smaller">Twitter</a>
                                                                                                <a href="#" class="my-3 text-black-50 ls1 text-uppercase text-smaller">Instagram</a>
                                                                                                </div>
                                                                                                </section>

                                                                                <section id="content">
                                                                                <div class="content-wrap py-0">
                                                                                <div class="row justify-content-center align-items-center text-center min-vh-100">
                                                                                <div class="col-12 display-3">Content <br>...</div>
                                                                                </div>
                                                                                </div>
                                                                                </section>
                                                                                </div>`
        , media: '<img width="100%" height="100%" src="../External/blocks/intro/hero-14.jpg">'

    });
//Contact
editor.BlockManager.add('contact',
    {
        label: '<b>contact1</b>',
        category: 'contacts',
        content: `
                                                                                            <div id="wrapper" class="clearfix">

                                                                                <section id="content">
                                                                                <div class="content-wrap py-0">
                                                                                <div class="block-hero-20"
                                                                                style="background-image: radial-gradient(circle at 85% 1%, rgba(var(--color-secondary),
                                                                                0.31) 0%, rgba(var(--color-secondary), 0.31) 96%,transparent 96%, transparent 100%),
                                                                                radial-gradient(circle at 14% 15%, rgba(var(--color-secondary), 0.31) 0%, rgba(var(--color-secondary), 0.31) 1%,transparent 1%, transparent 100%),
                                                                                radial-gradient(circle at 60% 90%, rgba(var(--color-secondary), 0.31) 0%, rgba(var(--color-secondary), 0.31) 20%,transparent 20%, transparent 100%),
                                                                                radial-gradient(circle at 79% 7%, rgba(var(--color-secondary), 0.31) 0%
                                                                                , rgba(var(--color-secondary), 0.31) 78%,transparent 78%, transparent 100%)
                                                                                ,radial-gradient(circle at 55% 65%, rgba(var(--color-secondary), 0.31) 0%,
                                                                                rgba(var(--color-secondary), 0.31) 52%,transparent 52%, transparent 100%),
                                                                                linear-gradient(135deg, rgb(251,168,108),rgb(255,226,214)); padding: 130px 0">
                                                                                <div class="container mw-lg">
                                                                                <div class="row flex-md-row-reverse justify-content-between align-items-center">
                                                                                <div class="col-lg-6">
                                                                                <h5 class="ls3 fw-normal text-black op-04 mb-2 text-uppercase">Get In Touch</h5>
                                                                                <h3 class="mb-4 display-4 nott ls0 fw-semibold">Contact Us:</h3>
                                                                                <p class="mw-xs lead op-07 mb-5">Energistically syndicate team building synergy after efficient human capital. Assertively underwhelm sticky solutions.</p>
                                                                                <div class="row">
                                                                                <div class="col-sm-6">
                                                                                <div class="feature-box fbox-sm mb-4">
                                                                                <div class="fbox-icon">
                                                                                <i class="icon-line-map-pin"></i>
                                                                                </div>
                                                                                <div class="fbox-content">
                                                                                <h4 class="nott font-body fw-normal mb-2">
                                                                                795 Folsom Ave, Suite 600<br>
                                                                                San Francisco, CA 94107<br>
                                                                                </h4>
                                                                                </div>
                                                                                </div>
                                                                                <div class="feature-box fbox-sm mb-4">
                                                                                <div class="fbox-icon">
                                                                                <i class="icon-line-phone-call"></i>
                                                                                </div>
                                                                                <div class="fbox-content">
                                                                                <h4 class="nott font-body fw-normal mb-2"><a href="tel:+122-55412474">(1) 22 55412474</a></h4>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col-sm-6">
                                                                                <div class="feature-box fbox-sm mb-4">
                                                                                <div class="fbox-icon">
                                                                                <i class="icon-line-mail"></i>
                                                                                </div>
                                                                                <div class="fbox-content">
                                                                                <h4 class="nott font-body fw-normal mb-2"><a href="/cdn-cgi/l/email-protection#3957564b5c495540795a58574f584a175a5654"><span class="__cf_email__" data-cfemail="b3dddcc1d6c3dfcaf3d0d2ddc5d2c09dd0dcde">[email&#160;protected]</span></a></h4>
                                                                                </div>
                                                                                </div>
                                                                                <div class="feature-box fbox-sm">
                                                                                <div class="fbox-icon">
                                                                                <i class="icon-line-clock"></i>
                                                                                </div>
                                                                                <div class="fbox-content">
                                                                                <h4 class="nott font-body fw-normal mb-2"><a href="/cdn-cgi/l/email-protection#dcb2b3aeb9acb0a59cbfbdb2aabdaff2bfb3b1">Mon-Fri: 10:00-18:00 <br> Sat-Sun: 10:00-14:00</a></h4>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col-lg-5 mt-5 mt-lg-0">
                                                                                <div class="card border-0 p-4">
                                                                                <div class="card-body py-4">
                                                                                <div class="form-widget">
                                                                                <div class="form-result"></div>
                                                                                <form class="mb-0" id="template-contactform" name="template-contactform" action="include/form.php" method="post">
                                                                                <div class="form-process">
                                                                                <div class="css3-spinner">
                                                                                <div class="css3-spinner-scaler"></div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="row">
                                                                                <div class="col-12 form-group mb-4">
                                                                                <label class="color" for="template-contactform-name">Name <small>*</small></label>
                                                                                <input type="text" id="template-contactform-name" name="template-contactform-name" value="" class="form-control required" />
                                                                                </div>
                                                                                <div class="col-12 form-group mb-4">
                                                                                <label class="color" for="template-contactform-email">Email<small>*</small></label>
                                                                                <input type="email" id="template-contactform-email" name="template-contactform-email" value="" class="required email form-control" />
                                                                                </div>
                                                                                <div class="col-12 form-group mb-4">
                                                                                <label class="color" for="template-contactform-message">Message <small>*</small></label>
                                                                                <textarea class="required form-control" id="template-contactform-message" name="template-contactform-message" rows="4" cols="30"></textarea>
                                                                                </div>
                                                                                <div class="col-12 form-group mb-4 d-none">
                                                                                <input type="text" id="template-contactform-botcheck" name="template-contactform-botcheck" value="" class="form-control" />
                                                                                </div>
                                                                                <div class="col-12 form-group mb-0">
                                                                                <button class="btn text-white py-3 w-100 bg-color" type="submit" id="template-contactform-submit" name="template-contactform-submit" value="submit">Send Message</button>
                                                                                </div>
                                                                                </div>
                                                                                <input type="hidden" name="prefix" value="template-contactform-">
                                                                                </form>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </section>
                                                                                </div>

                                                                                <div id="gotoTop" class="icon-angle-up"></div>
                                                                                <style>

                                                                                        .block-hero-20 {
                                                                                            --color: #AF4320;
                                                                                            --color-secondary: 237,237,237;
                                                                                        }

                                                                                        .block-hero-20 h1,
                                                                                        .block-hero-20 h2,
                                                                                        .block-hero-20 h3,
                                                                                        .block-hero-20 h4,
                                                                                        .block-hero-20 h5,
                                                                                        .block-hero-20 h6,
                                                                                        .block-hero-20 p,
                                                                                        .block-hero-20 a,
                                                                                        .block-hero-20 .color {
                                                                                            font-family: 'Playfair Display', serif !important;
                                                                                            color: var(--color) !important;
                                                                                        }

                                                                                        .block-hero-20 .bg-color {
                                                                                            background-color: var(--color) !important;
                                                                                        }

                                                                                        .block-hero-20 .fbox-icon i {
                                                                                            background-color: #FFE2D6;
                                                                                            color: var(--color);
                                                                                        }

                                                                                    </style>
                                                                                        `,
        media: '<img width="100%" height="100%" src="../External/blocks/intro/hero-20.jpg">',
    });
editor.BlockManager.add('contact2',
    {
        label: '<b>contact2</b>',
        category: 'contacts',
        content: `
                                                                                                <div id="wrapper" class="clearfix">

                                                                                <section id="content">
                                                                                <div class="content-wrap py-0">
                                                                                <div class="row align-items-stretch justify-content-between block-contact-1 g-0">
                                                                                <div class="col-md-5">
                                                                                <div class="dark h-100 min-vh-md-100 d-flex flex-column justify-content-between p-5" style="background-image: radial-gradient(circle at 100% 0%, #CC135C 0%, #CC135C 10%, transparent 10%,  transparent 100%), radial-gradient(circle at 90% 103%, transparent 30%, #3D1144 30%, #3D1144 100%),linear-gradient(90deg, #FF736E,#FF736E);">
                                                                                <div>
                                                                                <h1 class="fw-bold mb-1">Contact Us</h1>
                                                                                <p class=" text-white-50 mb-5 mb-md-0">Get in Touch with Us. Our Team will reply your query within 24hrs.</p>
                                                                                </div>
                                                                                <div><div class="feature-box fbox-sm mb-4">
                                                                                <div class="fbox-icon">
                                                                                <i class="icon-line-map-pin bg-transparent text-white p-0"></i>
                                                                                </div>
                                                                                <div class="fbox-content">
                                                                                <h4 class="nott font-body fw-normal mb-2">
                                                                                 <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840108181595!2d144.95373631530705!3d-37.81721397975176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1617616092378!5m2!1sen!2sin" data-lightbox="iframe" class="text-white">
                                                                                121 King St,<br>Melbourne VIC 3000,<br>Australia
                                                                                </a>
                                                                                </h4>
                                                                                </div>
                                                                                </div>
                                                                                <div class="feature-box fbox-sm mb-4">
                                                                                <div class="fbox-icon">
                                                                                <i class="icon-line-phone-call bg-transparent text-white p-0"></i>
                                                                                </div>
                                                                                <div class="fbox-content">
                                                                                <h4 class="nott font-body fw-normal mb-2"><a class="text-white" href="tel:+122-55412474">+00 111 232 11 33</a></h4>
                                                                                </div>
                                                                                </div>
                                                                                <div class="feature-box fbox-sm mb-5 mb-md-0">
                                                                                <div class="fbox-icon">
                                                                                <i class="icon-line-mail bg-transparent text-white p-0"></i>
                                                                                </div>
                                                                                <div class="fbox-content">
                                                                                <h4 class="nott font-body fw-normal mb-2"><a class="text-white" href="/cdn-cgi/l/email-protection#046a6b766174687d4467656a7265772a676b69"><span class="__cf_email__" data-cfemail="6d03021f081d01142d0e0c031b0c1e430e0200">[email&#160;protected]</span></a></h4>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div>
                                                                                <a href="#" class="social-icon si-rounded si-borderless si-facebook">
                                                                                <i class="icon-facebook"></i>
                                                                                <i class="icon-facebook"></i>
                                                                                </a>
                                                                                <a href="#" class="social-icon si-rounded si-borderless si-twitter">
                                                                                <i class="icon-twitter"></i>
                                                                                <i class="icon-twitter"></i>
                                                                                </a>
                                                                                <a href="#" class="social-icon si-rounded si-borderless si-pinterest">
                                                                                <i class="icon-pinterest"></i>
                                                                                <i class="icon-pinterest"></i>
                                                                                </a>
                                                                                <a href="#" class="social-icon si-rounded si-borderless si-gplus">
                                                                                <i class="icon-gplus"></i>
                                                                                <i class="icon-gplus"></i>
                                                                                </a>
                                                                                <a href="#" class="social-icon si-rounded si-borderless si-rss">
                                                                                <i class="icon-rss"></i>
                                                                                <i class="icon-rss"></i>
                                                                                </a>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col-md-7 p-5 px-lg-6 d-flex flex-column align-self-center">
                                                                                <div class="form-widget">
                                                                                <div class="form-result"></div>
                                                                                <form class="mb-0" id="template-contactform" name="template-contactform" action="include/form.php" method="post">
                                                                                <div class="form-process">
                                                                                <div class="css3-spinner">
                                                                                <div class="css3-spinner-scaler"></div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="row">
                                                                                <div class="col-md-6 form-group mb-5">
                                                                                <label for="template-contactform-name">Name: <small class="text-danger">*</small></label>
                                                                                <input type="text" id="template-contactform-name" name="template-contactform-name" value="" class="form-control required" placeholder="John Doe" />
                                                                                </div>
                                                                                <div class="col-md-6 form-group mb-5">
                                                                                <label for="template-contactform-phone">Phone: <small class="text-danger">*</small></label>
                                                                                <input type="text" id="template-contactform-phone" name="template-contactform-phone" value="" class="form-control required" placeholder="+00 111 232 11 33" />
                                                                                </div>
                                                                                <div class="w-100"></div>
                                                                                <div class="col-12 form-group mb-5">
                                                                                <label for="template-contactform-email">Email Address: <small class="text-danger">*</small></label>
                                                                                <input type="email" id="template-contactform-email" name="template-contactform-email" value="" class="required email form-control" placeholder="johndoe@unknown.com" />
                                                                                </div>
                                                                                <div class="w-100"></div>
                                                                                <div class="col-12 form-group mb-5">
                                                                                <label class="mb-3 h6">Subject:</label><br>
                                                                                <div class="custom-control custom-radio custom-control-inline">
                                                                                <input type="radio" id="template-contactform-subject-wordpress" name="template-contactform-subject" class="custom-control-input" value="Wordpress">
                                                                                <label class="custom-control-label" for="template-contactform-subject-wordpress">Wordpress</label>
                                                                                </div>
                                                                                <div class="custom-control custom-radio custom-control-inline">
                                                                                <input type="radio" id="template-contactform-subject-php" name="template-contactform-subject" class="custom-control-input" value="PHP / MySQL">
                                                                                <label class="custom-control-label" for="template-contactform-subject-php">PHP / MySQL</label>
                                                                                </div>
                                                                                <div class="custom-control custom-radio custom-control-inline">
                                                                                <input type="radio" id="template-contactform-subject-html-css" name="template-contactform-subject" class="custom-control-input" value="HTML5 / CSS3">
                                                                                <label class="custom-control-label" for="template-contactform-subject-html-css">HTML5 / CSS3</label>
                                                                                </div>
                                                                                <div class="custom-control custom-radio custom-control-inline">
                                                                                <input type="radio" id="template-contactform-subject-graphics" name="template-contactform-subject" class="custom-control-input" value="Graphic Design">
                                                                                <label class="custom-control-label" for="template-contactform-subject-graphics">Graphic Design</label>
                                                                                </div>
                                                                                </div>
                                                                                <div class="w-100"></div>
                                                                                <div class="col-12 form-group mb-5">
                                                                                <label for="template-contactform-message">Message: <small class="text-danger">*</small></label>
                                                                                <textarea class="required form-control" id="template-contactform-message" name="template-contactform-message" rows="3" placeholder="Write your message here..."></textarea>
                                                                                </div>
                                                                                <div class="col-12 form-group mb-5 d-none">
                                                                                <input type="text" id="template-contactform-botcheck" name="template-contactform-botcheck" value="" class="form-control" />
                                                                                </div>
                                                                                <div class="col-12 form-group mb-0">
                                                                                <button class="button button-large rounded m-0 float-end py-3 px-5" type="submit" id="template-contactform-submit" name="template-contactform-submit" value="submit" style="background-color: #3D1144;">Send Message</button>
                                                                                </div>
                                                                                </div>
                                                                                <input type="hidden" name="prefix" value="template-contactform-">
                                                                                </form>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </section>
                                                                                </div>

                                                                                <div id="gotoTop" class="icon-angle-up"></div>
                                                                                <style>

                                                                                        .block-contact-1,
                                                                                        .block-contact-1 h1,
                                                                                        .block-contact-1 h2,
                                                                                        .block-contact-1 h3,
                                                                                        .block-contact-1 h4,
                                                                                        .block-contact-1 h5,
                                                                                        .block-contact-1 h6,
                                                                                        .block-contact-1 p,
                                                                                        .block-contact-1 label,
                                                                                        .block-contact-1 input {
                                                                                            font-family: 'Inter', sans-serif;
                                                                                        }

                                                                                        .block-contact-1 .form-control {
                                                                                            padding: 12px 2px;
                                                                                            background-color: transparent !important;
                                                                                            border-top-width: 0;
                                                                                            border-right-width: 0;
                                                                                            border-left-width: 0;
                                                                                            border-bottom-width: 2px;
                                                                                            border-radius: 0;
                                                                                            font-weight: 500;
                                                                                            font-size: 18px;
                                                                                        }

                                                                                        .block-contact-1 .form-control::-moz-placeholder {
                                                                                            color: #CCC;
                                                                                            font-weight: 400;
                                                                                            font-size: 15px;
                                                                                        }
                                                                                        .block-contact-1 .form-control:-ms-input-placeholder {
                                                                                            color: #CCC;
                                                                                            font-weight: 400;
                                                                                            font-size: 15px;
                                                                                        }
                                                                                        .block-contact-1 .form-control::-webkit-input-placeholder {
                                                                                            color: #CCC;
                                                                                            font-weight: 400;
                                                                                            font-size: 15px;
                                                                                        }

                                                                                        .block-contact-1 textarea.form-control {
                                                                                            resize: none;
                                                                                            overflow: hidden;
                                                                                            word-wrap: break-word;
                                                                                        }

                                                                                        .block-contact-1 label:not(.custom-control-label) {
                                                                                            text-transform: none;
                                                                                            letter-spacing: 0;
                                                                                            font-weight: 500;
                                                                                            color: #777;
                                                                                            margin-bottom: 3px;
                                                                                            font-size: 14px;
                                                                                        }

                                                                                        .block-contact-1 .custom-control-label::before,
                                                                                        .block-contact-1 .custom-control-label::after { top: 0.0875rem; }

                                                                                        .block-contact-1 .form-control:active,
                                                                                        .block-contact-1 .form-control:focus {
                                                                                            border-color: #3D1144;
                                                                                        }

                                                                                        .custom-control-input:checked ~ .custom-control-label::before {
                                                                                            border-color: #3D1144;
                                                                                            background-color: #3D1144;
                                                                                        }

                                                                                        .custom-control-input:focus ~ .custom-control-label::before {
                                                                                            box-shadow: 0 0 0 0.2rem #3D114415;
                                                                                        }

                                                                                        .block-contact-1 .social-icon {
                                                                                            background-color: rgba(0,0,0,0.2);
                                                                                            font-size: 16px;
                                                                                        }
                                                                                    </style>
                                                                                                `,
        media: '<img width="100%" height="100%" src="../External/blocks/intro/contact-1.jpg">',
    });
//featured Box
editor.BlockManager.add('FB1',
    {
        label: '<b>Box1</b>',
        category: 'Featured Boxes',
        content: `
                                                                                                <div id="wrapper" class="clearfix">

                                                                                <section id="content">
                                                                                <div class="content-wrap">
                                                                                <div class="container">
                                                                                <div class="row feature-box-border-horizontal col-mb-50">
                                                                                <div class="col-lg-3 col-md-4">
                                                                                <div class="feature-box">
                                                                                <div class="fbox-content">
                                                                                <h2 class="display-2 fw-bolder mb-3 text-danger">1</h2>
                                                                                <h3 class="nott text-larger mb-4">Choose your Plan</h3>
                                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quae rerum dolores aperiam amet enim consequuntur maiores totam odit molestiae vel ut earum deleniti.</p>
                                                                                <a href="#" class="btn btn-link mt-2 text-danger p-0"><u>Get Started</u> <i class="icon-angle-right me-0"></i></a>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col d-none d-lg-flex text-center align-self-center flex-column">
                                                                                <a href="#" class="d-block h-translate-x-n all-ts"><i class="icon-double-angle-right icon-stacked rounded-pill text-danger ps-1 h5 border border-default icon-2x"></i></a>
                                                                                </div>
                                                                                <div class="col-lg-3 col-md-4">
                                                                                <div class="feature-box flex-column">
                                                                                <div class="fbox-content">
                                                                                <h2 class="display-2 fw-bolder mb-3 text-danger op-06">2</h2>
                                                                                <h3 class="nott text-larger mb-4">Select your Demo</h3>
                                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quae rerum dolores aperiam amet enim consequuntur maiores totam odit molestiae vel ut earum deleniti.</p>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col d-none d-lg-flex text-center align-self-center flex-column">
                                                                                <a href="#" class="d-block h-translate-x-n all-ts"><i class="icon-double-angle-right icon-stacked rounded-pill text-danger ps-1 h5 border border-default icon-2x"></i></a>
                                                                                </div>
                                                                                <div class="col-lg-3 col-md-4">
                                                                                <div class="feature-box flex-column noborder">
                                                                                <div class="fbox-content">
                                                                                <h2 class="display-2 fw-bolder mb-3 text-danger op-03">3</h2>
                                                                                <h3 class="nott text-larger mb-4">Finish your Project</h3>
                                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quae rerum dolores aperiam amet enim consequuntur maiores totam odit molestiae vel ut earum deleniti.</p>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </section>
                                                                                </div>

                                                                                <div id="gotoTop" class="icon-angle-up"></div>

                                                                                                `,
        media: '<img width="100%" height="100%" src="../External/blocks/intro/footer-2.jpg">',
    });
editor.BlockManager.add('FB2',
    {
        label: '<b>Box2</b>',
        category: 'Featured Boxes',
        content:
            `

                                                                                <div id="wrapper" class="clearfix">

                                                                                <section id="content">
                                                                                <div class="content-wrap">
                                                                                <div class="container clearfix">
                                                                                <div class="row justify-content-center mw-lg mx-auto gutter-20">
                                                                                <div class="col-md-6 text-center">
                                                                                <h3 class="h1 fw-bold mb-3">What You Get in <span>Canvas</span>?</h3>
                                                                                <p class="text-larger text-muted">Best-Selling & Most Trusted HTML5 Template. Experience the Ever-Growing Feature Rich Template since 2014.</p>
                                                                                </div>
                                                                                <div class="w-100 mt-4"></div>
                                                                                <div class="col-md-3">
                                                                                <div class="feature-box fbox-center fbox-plain px-4 py-5 rounded-3 bg-light border mx-0">
                                                                                <div class="fbox-icon mb-2">
                                                                                <a href="#"><i class="icon-line-layers"></i></a>
                                                                                </div>
                                                                                <div class="fbox-content">
                                                                                <h3>Niche Demos</h3>
                                                                                <p class="my-0">45+ Demos</p>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                <div class="feature-box fbox-center fbox-plain px-4 py-5 rounded-3 bg-light border mx-0">
                                                                                <div class="fbox-icon mb-2">
                                                                                <a href="#"><i class="icon-line-ellipsis"></i></a>
                                                                                </div>
                                                                                <div class="fbox-content">
                                                                                <h3>One Pages</h3>
                                                                                <p class="my-0">65+ Pages</p>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                <div class="feature-box fbox-center fbox-plain px-4 py-5 rounded-3 bg-light border mx-0">
                                                                                <div class="fbox-icon mb-2">
                                                                                <a href="#"><i class="icon-line-paper"></i></a>
                                                                                </div>
                                                                                <div class="fbox-content">
                                                                                <h3>Templates</h3>
                                                                                <p class="my-0">1000+ Templates</p>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                <div class="feature-box fbox-center fbox-plain px-4 py-5 rounded-3 bg-light border mx-0">
                                                                                <div class="fbox-icon mb-2">
                                                                                <a href="#"><i class="icon-line-code"></i></a>
                                                                                </div>
                                                                                <div class="fbox-content">
                                                                                <h3>Revolution Sliders</h3>
                                                                                <p class="my-0">140+ Sliders</p>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                <div class="feature-box fbox-center fbox-plain px-4 py-5 rounded-3 bg-light border mx-0">
                                                                                <div class="fbox-icon mb-2">
                                                                                <a href="#"><i class="icon-line-codesandbox"></i></a>
                                                                                </div>
                                                                                <div class="fbox-content">
                                                                                <h3>Shortcodes</h3>
                                                                                <p class="my-0">1200+ Features</p>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                <div class="feature-box fbox-center fbox-plain px-4 py-5 rounded-3 bg-light border mx-0">
                                                                                <div class="fbox-icon mb-2">
                                                                                <a href="#"><i class="icon-line-layout"></i></a>
                                                                                </div>
                                                                                <div class="fbox-content">
                                                                                <h3>Headers Styles</h3>
                                                                                <p class="my-0">Unlimited</p>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                <div class="feature-box fbox-center fbox-plain px-4 py-5 rounded-3 bg-light border mx-0">
                                                                                <div class="fbox-icon mb-2">
                                                                                <a href="#"><i class="icon-line-users"></i></a>
                                                                                </div>
                                                                                <div class="fbox-content">
                                                                                <h3>Happy Customers</h3>
                                                                                <p class="my-0">55000+ Customers</p>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                <div class="feature-box fbox-center fbox-plain px-4 py-5 rounded-3 bg-light border mx-0">
                                                                                <div class="fbox-icon mb-2">
                                                                                <a href="#"><i class="icon-wpforms"></i></a>
                                                                                </div>
                                                                                <div class="fbox-content">
                                                                                <h3>Form Layouts</h3>
                                                                                <p class="my-0">20+ Layouts</p>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="w-100"></div>
                                                                                <div class="col-md-3 text-center mt-5">
                                                                                <a href="#" class="button button-rounded button-large button-dark">Learn More</a>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </section>
                                                                                </div>

                                                                                <div id="gotoTop" class="icon-angle-up"></div>

                                                                                                `,
        media: '<img width="100%" height="100%" src="../External/blocks/intro/featured-boxes-4.jpg">',
    });
//Card
editor.BlockManager.add('card',
    {
        label: '<b>Card1</b>',
        category: 'Cards',
        content: `

                                                                                <div id="wrapper" class="clearfix">

                                                                                <section id="content">
                                                                                <div class="content-wrap min-vh-100 d-flex align-items-center">
                                                                                <div class="container clearfix">
                                                                                <div class="row justify-content-center gutter-50 col-mb-50">
                                                                                <div class="col-xl-6 col-lg-8 text-center">
                                                                                <h3 class="h1 fw-bold mb-3">Team Card</h3>
                                                                                </div>
                                                                                <div class="clear"></div>
                                                                                <div class="col-lg-8">
                                                                                <div class="row team team-list rounded-5 g-0 align-items-center shadow-sm border h-shadow h-translatey-sm all-ts rounded-4 overflow-hidden">
                                                                                <div class="col-md-4 team-image col-sm-5 d-flex align-self-stretch">
                                                                                <img src="../External/blocks/preview/team/T2.jpg" alt="John Doe">
                                                                                </div>
                                                                                <div class="col-md-8 col-sm-7 p-4">
                                                                                <div class="team-desc text-start">
                                                                                <div class="team-title pt-0 mb-3"><h4>John Doe</h4><span class="fst-normal">UX Designer</span></div>
                                                                                <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ratione, consequatur eos deserunt maiores architecto amet id repellat dolore ullam.</p>
                                                                                <a href="#" class="social-icon inline-block si-small si-colored si-rounded si-facebook">
                                                                                <i class="icon-facebook"></i>
                                                                                <i class="icon-facebook"></i>
                                                                                </a>
                                                                                <a href="#" class="social-icon inline-block si-small si-colored si-rounded si-twitter">
                                                                                <i class="icon-twitter"></i>
                                                                                <i class="icon-twitter"></i>
                                                                                </a>
                                                                                <a href="#" class="social-icon inline-block si-small si-colored si-rounded si-gplus">
                                                                                <i class="icon-gplus"></i>
                                                                                <i class="icon-gplus"></i>
                                                                                </a>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col-lg-8">
                                                                                <div class="row team rounded-5 g-0 align-items-center shadow-sm border h-shadow h-translatey-sm all-ts rounded-4 overflow-hidden bg-dark dark">
                                                                                <div class="col-md-8 col-sm-7 p-4">
                                                                                <div class="team-desc text-start">
                                                                                <div class="team-title pt-0 mb-3"><h4>John Doe</h4><span class="fst-normal">UI Designer</span></div>
                                                                                <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ratione, consequatur eos deserunt maiores architecto amet id repellat dolore ullam.</p>
                                                                                <a href="#" class="social-icon inline-block si-small si-light si-rounded si-facebook">
                                                                                <i class="icon-facebook"></i>
                                                                                <i class="icon-facebook"></i>
                                                                                </a>
                                                                                <a href="#" class="social-icon inline-block si-small si-light si-rounded si-twitter">
                                                                                <i class="icon-twitter"></i>
                                                                                <i class="icon-twitter"></i>
                                                                                </a>
                                                                                <a href="#" class="social-icon inline-block si-small si-light si-rounded si-gplus">
                                                                                <i class="icon-gplus"></i>
                                                                                <i class="icon-gplus"></i>
                                                                                </a>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col-md-4 team-image col-sm-5 d-flex align-self-stretch">
                                                                                <img src="../External/blocks/preview/team/T2.jpg" alt="John Doe">
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="clear"></div>
                                                                                <div class="col-lg-8">
                                                                                <div class="row team align-items-center">
                                                                                <div class="col-md-4">
                                                                                <img src="../External/blocks/preview/team/T2.jpg" alt="John Doe" class="rounded-4">
                                                                                </div>
                                                                                <div class="col-md-8 p-4">
                                                                                <div class="team-desc text-start">
                                                                                <div class="team-title pt-0 mb-3"><h4>John Doe</h4><span class="fst-normal">UX Designer</span></div>
                                                                                <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ratione, consequatur eos deserunt maiores architecto amet id repellat dolore ullam.</p>
                                                                                <a href="#" class="social-icon inline-block si-small si-colored si-rounded si-facebook">
                                                                                <i class="icon-facebook"></i>
                                                                                <i class="icon-facebook"></i>
                                                                                </a>
                                                                                <a href="#" class="social-icon inline-block si-small si-colored si-rounded si-twitter">
                                                                                <i class="icon-twitter"></i>
                                                                                <i class="icon-twitter"></i>
                                                                                </a>
                                                                                <a href="#" class="social-icon inline-block si-small si-colored si-rounded si-gplus">
                                                                                <i class="icon-gplus"></i>
                                                                                <i class="icon-gplus"></i>
                                                                                </a>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="clear"></div>
                                                                                <div class="col-lg-8">
                                                                                <div class="row team align-items-center">
                                                                                <div class="col-md-8 p-4">
                                                                                <div class="team-desc text-start">
                                                                                <div class="team-title pt-0 mb-3"><h4>John Doe</h4><span class="fst-normal">UX Designer</span></div>
                                                                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ratione, consequatur eos deserunt maiores architecto amet id repellat dolore ullam.</p>
                                                                                <a href="#" class="social-icon inline-block si-small si-colored si-rounded si-facebook">
                                                                                <i class="icon-facebook"></i>
                                                                                <i class="icon-facebook"></i>
                                                                                </a>
                                                                                <a href="#" class="social-icon inline-block si-small si-colored si-rounded si-twitter">
                                                                                <i class="icon-twitter"></i>
                                                                                <i class="icon-twitter"></i>
                                                                                </a>
                                                                                <a href="#" class="social-icon inline-block si-small si-colored si-rounded si-gplus">
                                                                                <i class="icon-gplus"></i>
                                                                                <i class="icon-gplus"></i>
                                                                                </a>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col-md-4">
                                                                                <img src="../External/blocks/preview/team/4.jpg" alt="John Doe" class="rounded-4">
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </section>
                                                                                </div>

                                                                                <div id="gotoTop" class="icon-angle-up"></div>
                                                                                                `,
        media: '<img width="100%" height="100%" src="../External/blocks/intro/cards-8.jpg">',
    });
// Gallery
editor.BlockManager.add('G1',
    {
        label: '<b>Gallery1</b>',
        category: 'Galleries',
        content: `

                                                                                <div id="wrapper" class="clearfix">

                                                                                <section id="content">
                                                                                <div class="content-wrap">
                                                                                <div class="container">
                                                                                <div class="row justify-content-center mb-5">
                                                                                <div class="col-xl-6 col-lg-8 text-center">
                                                                                <h3 class="h1 fw-bold mb-4">Popular Categories</h3>
                                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam temporibus doloremque sunt consequatur nemo commodi rerum delectus ab magni sequi unde non odit mollitia aliquid reprehenderit assumenda cumque, quia.</p>
                                                                                </div>
                                                                                </div>
                                                                                <div class="row gallery-categories gutter-20">
                                                                                <div class="col-md-7">
                                                                                <div style="background: url('../External/blocks/preview/gallery-4/1.jpg') no-repeat center center; background-size: cover; height: 250px;">
                                                                                <div class="vertical-middle p-4 dark">
                                                                                <div class="heading-block m-0 border-0 w-50">
                                                                                <h3 class="text-capitalize font-secondary nott fw-bold h1 mb-3">Travel</h3>
                                                                                <a href="#" class="more-link border-light text-light mb-0 stretched-link">Shop Now <i class="icon-line-arrow-right"></i></a>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col-md-5">
                                                                                <div style="background: url('../External/blocks/preview/gallery-4/2.jpg') no-repeat center center; background-size: cover; height: 250px;">
                                                                                <div class="vertical-middle p-4">
                                                                                <div class="heading-block m-0 border-0 w-50">
                                                                                <h3 class="text-capitalize font-secondary nott fw-bold h1 mb-3">Headphones</h3>
                                                                                <a href="#" class="more-link border-dark text-dark mb-0 stretched-link">Shop Now <i class="icon-line-arrow-right"></i></a>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col-md-4">
                                                                                <div style="background: url('../External/blocks/preview/gallery-4/3.jpg') no-repeat 50% 40%; background-size: cover; height: 250px;">
                                                                                <div class="vertical-middle p-4">
                                                                                <div class="heading-block m-0 border-0 w-50">
                                                                                <h3 class="text-capitalize font-secondary nott fw-bold h1 mb-3">Watches</h3>
                                                                                <a href="#" class="more-link border-dark text-dark mb-0 stretched-link">Shop Now <i class="icon-line-arrow-right"></i></a>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col-md-4">
                                                                                <div style="background: url('../External/blocks/preview/gallery-4/4.jpg') no-repeat 100% 100%; background-size: cover; height: 250px;">
                                                                                <div class="vertical-middle p-4">
                                                                                <div class="heading-block m-0 border-0 w-50">
                                                                                <h3 class="text-capitalize font-secondary nott fw-bold h1 mb-3">Bags</h3>
                                                                                <a href="#" class="more-link border-dark text-dark mb-0 stretched-link">Shop Now <i class="icon-line-arrow-right"></i></a>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                 <div class="col-md-4">
                                                                                <div style="background: url('../External/blocks/preview/gallery-4/5.jpg') no-repeat 20% 50%; background-size: cover; height: 250px;">
                                                                                <div class="vertical-middle p-4">
                                                                                <div class="heading-block m-0 border-0 w-50">
                                                                                <h3 class="text-capitalize font-secondary nott fw-bold h1 mb-3">Drones</h3>
                                                                                <a href="#" class="more-link border-dark text-dark mb-0 stretched-link">Shop Now <i class="icon-line-arrow-right"></i></a>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col-md-5">
                                                                                <div style="background: url('../External/blocks/preview/gallery-4/6.jpg') no-repeat 50% 80%; background-size: cover; height: 250px;">
                                                                                <div class="vertical-middle p-4">
                                                                                <div class="heading-block m-0 border-0 w-50">
                                                                                <h3 class="text-capitalize font-secondary nott fw-bold h1 mb-3">Lenses</h3>
                                                                                <a href="#" class="more-link border-dark text-dark mb-0 stretched-link">Shop Now <i class="icon-line-arrow-right"></i></a>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col-md-7">
                                                                                <div style="background: url('../External/blocks/preview/gallery-4/7.jpg') no-repeat center center; background-size: cover; height: 250px;">
                                                                                <div class="vertical-middle p-4">
                                                                                <div class="heading-block m-0 border-0 w-50">
                                                                                <h3 class="text-capitalize font-secondary nott fw-bold h1 mb-3">Shoes</h3>
                                                                                <a href="#" class="more-link border-dark text-dark mb-0 stretched-link">Shop Now <i class="icon-line-arrow-right"></i></a>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </section>
                                                                                </div>

                                                                                <div id="gotoTop" class="icon-angle-up"></div>
                                                                                                `,
        media: '<img width="100%" height="100%" src="../External/blocks/intro/gallery-4.jpg">',
    });
editor.BlockManager.add('G2',
    {
        label: '<b>Gallery2</b>',
        category: 'Galleries',
        content: `

                                                                                <div id="wrapper">

                                                                                <section id="content">
                                                                                <div class="content-wrap">
                                                                                <div class="container">
                                                                                <div class="row gutter-50">
                                                                                <div class="col-lg-7 portfolio-single-image">
                                                                                <mj-button background-color="#007bff" color="white" href="#">Click Me!</mj-button>
                                                                                <div class="masonry-thumbs grid-container masonry-gap-xl grid-1 grid-md-2" data-lightbox="gallery">
                                                                                <a href="../External/blocks/preview/portfolio-single/1.jpg" data-lightbox="gallery-item" class="grid-item"><img class="rounded-5" src="../External/blocks/preview/portfolio-single/1.jpg" alt="Image"></a>
                                                                                <a href="../External/blocks/preview/portfolio-single/2.jpg" data-lightbox="gallery-item" class="grid-item"><img class="rounded-5" src="../External/blocks/preview/portfolio-single/2.jpg" alt="Image"></a>
                                                                                <a href="../External/blocks/preview/portfolio-single/3.jpg" data-lightbox="gallery-item" class="grid-item"><img class="rounded-5" src="../External/blocks/preview/portfolio-single/3.jpg" alt="Image"></a>
                                                                                <a href="../External/blocks/preview/portfolio-single/4.jpg" data-lightbox="gallery-item" class="grid-item"><img class="rounded-5" src="../External/blocks/preview/portfolio-single/4.jpg" alt="Image"></a>
                                                                                <a href="../External/blocks/preview/portfolio-single/5.jpg" data-lightbox="gallery-item" class="grid-item"><img class="rounded-5" src="../External/blocks/preview/portfolio-single/5.jpg" alt="Image"></a>
                                                                                <a href="../External/blocks/preview/portfolio-single/6.jpg" data-lightbox="gallery-item" class="grid-item"><img class="rounded-5" src="../External/blocks/preview/portfolio-single/6.jpg" alt="Image"></a>
                                                                                </div>
                                                                                </div>

                                                                                <div class="col-lg-5 portfolio-single-content content-sticky">

                                                                                <h2>Your Favourite Coffee Mug</h2>
                                                                                <p class="op-07">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, dolores, facere, corrupti delectus ex quidem adipisci tempore.<br><br>
                                                                                Illum molestias cupiditate eveniet dolore obcaecati voluptatibus est quos eos id recusandae officia. Cupiditate, voluptates quibusdam ipsum vel corporis laboriosam id est doloremque?</p>

                                                                                <div class="line my-5"></div>

                                                                                <ul class="portfolio-meta bottommargin">
                                                                                <li><span><i class="icon-user"></i>Created by:</span> John Doe</li>
                                                                                <li><span><i class="icon-calendar3"></i>Completed on:</span> 17th March 2021</li>
                                                                                <li><span><i class="icon-lightbulb"></i>Skills:</span> HTML5 / PHP / CSS3</li>
                                                                                <li><span><i class="icon-link"></i>Client:</span> <a href="#">Google</a></li>
                                                                                </ul>

                                                                                <div class="line my-5"></div>

                                                                                <div class="d-flex justify-content-between align-items-center">
                                                                                <span>Share:</span>
                                                                                <div>
                                                                                <a href="#" class="social-icon si-small si-light mb-0 si-facebook">
                                                                                <i class="icon-facebook"></i>
                                                                                <i class="icon-facebook"></i>
                                                                                </a>
                                                                                <a href="#" class="social-icon si-small si-light mb-0 si-twitter">
                                                                                <i class="icon-twitter"></i>
                                                                                <i class="icon-twitter"></i>
                                                                                </a>
                                                                                <a href="#" class="social-icon si-small si-light mb-0 si-pinterest">
                                                                                <i class="icon-pinterest"></i>
                                                                                <i class="icon-pinterest"></i>
                                                                                </a>
                                                                                <a href="#" class="social-icon si-small si-light mb-0 si-gplus">
                                                                                <i class="icon-gplus"></i>
                                                                                <i class="icon-gplus"></i>
                                                                                </a>
                                                                                <a href="#" class="social-icon si-small si-light mb-0 si-rss">
                                                                                <i class="icon-rss"></i>
                                                                                <i class="icon-rss"></i>
                                                                                </a>
                                                                                <a href="#" class="social-icon si-small si-light mb-0 si-email3">
                                                                                <i class="icon-email3"></i>
                                                                                <i class="icon-email3"></i>
                                                                                </a>
                                                                                </div>
                                                                                </div>

                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                </section>
                                                                                </div>

                                                                                <div id="gotoTop" class="icon-angle-up"></div>
                                                                                <style>

                                                                                        .block-portfolio-single-grid .portfolio-single-content h2 {
                                                                                            font-size: 1.75rem;
                                                                                        }

                                                                                            .block-portfolio-single-grid .portfolio-meta {
                                                                                                font-size: .925rem;
                                                                                            }


                                                                                    </style>
                                                                                                `,
        media: '<img width="100%" height="100%" src="../External/blocks/intro/gallery-4.jpg">',
    }
);
// Testimonials
editor.BlockManager.add('T1',
    {
        label: '<b>Testimonial1</b>',
        category: 'Testimonials',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row align-items-center justify-content-center">
                  <div class="col-12 col-md-10 col-lg-8">
                    <p class="lead">
                      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                    </p>

                    <p class="lead"><strong>Person Name</strong> <em class="ml-4">Co-founder at Company</em></p>
                  </div>
                  <div class="col-8 col-sm-6 col-md-2 col-lg-3 col-xl-2 mt-4 mt-md-0 ml-auto mr-auto mr-md-0">
                    <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/1.jpg">
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/t2.png">',
    }
);
editor.BlockManager.add('T2',
    {
        label: '<b>Testimonial2</b>',
        category: 'Testimonial',
        content: `<section class="fdb-block" style="background-image: url(../fraola/imgs/hero/red.svg);">
              <div class="container">
                <div class="fdb-box">
                  <div class="row align-items-center justify-content-center">
                    <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 m-auto">
                      <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/3.jpg">
                    </div>

                    <div class="col-12 col-md-8 ml-auto mr-auto mt-4 mt-md-0">
                      <p class="lead">
                        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
                      </p>

                      <p class="h3 mt-4 mt-lg-5"><strong>Person Name</strong></p>
                      <p><em>Co-founder at Company</em></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/t1.png">',
    }
);
editor.BlockManager.add('T3',
    {
        label: '<b>Testimonial3</b>',
        category: 'Testimonial',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center">
                  <div class="col-12">
                    <h3><strong>You are in good company</strong></h3>

                    <div class="mt-5 justify-content-center">
                      <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/adobe.svg">
                      <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/amazon.svg">
                      <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/ebay.svg">
                      <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/samsung.svg">
                      <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/orange.svg">
                      <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/salesforce.svg">
                    </div>
                    <div class="mt-2 mt-md-5 justify-content-center">
                      <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/cisco.svg">
                      <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/apple.svg">
                      <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/ibm.svg">
                      <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/intel.svg">
                      <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/panasonic.svg">
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/t3.png">',
    }
);
editor.BlockManager.add('T4',
    {
        label: '<b>Testimonial4</b>',
        category: 'Testimonial',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row align-items-center justify-content-center">
                  <div class="col-md-6">
                    <div class="fdb-box fdb-touch">
                      <p class="h3 mb-4">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics."</p>

                      <p>
                        <img alt="image" height="50" class="rounded-circle" src="../fraola/imgs/people/5.jpg">
                        <strong class="ml-3">Person Name</strong>
                      </p>
                    </div>
                  </div>

                  <div class="col-md-6 mt-4 mt-md-0">
                    <div class="fdb-box fdb-touch">
                      <p class="h3 mb-4">"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."</p>

                      <p>
                        <img alt="image" height="50" class="rounded-circle" src="../fraola/imgs/people/4.jpg">
                        <strong class="ml-3">Person Name</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/t4.png">',
    }
);
editor.BlockManager.add('T5',
    {
        label: '<b>Testimonial5</b>',
        category: 'Testimonial',
        content: `<section class="fdb-block py-5">
              <div class="container py-5" style="background-image: url(imgs/shapes/2.svg);">
                <div class="row align-items-center justify-content-center">
                  <div class="col-lg-9 col-xl-6">
                    <div class="fdb-box">
                      <div class="row">
                        <div class="col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto">
                          <img alt="image" class="img-fluid rounded" src="../fraola/imgs/people/6.jpg">
                        </div>

                        <div class="col-md-8 mt-4 mt-md-0">
                          <p class="lead">
                            "Even the all-powerful Pointing has no control about day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
                          </p>

                          <p class="h3 mt-4 mt-xl-5"><strong>Person Name</strong></p>
                          <p><em>Co-founder at Company</em></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-9 col-xl-6 mt-4 mt-xl-0">
                    <div class="fdb-box">
                      <div class="row">
                        <div class="col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto">
                          <img alt="image" class="img-fluid rounded" src="../fraola/imgs/people/8.jpg">
                        </div>

                        <div class="col-md-8 mt-4 mt-md-0">
                          <p class="lead">
                            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Separated they at the coast of the Semantics, a large language ocean."
                          </p>

                          <p class="h3 mt-4 mt-xl-5"><strong>Person Name</strong></p>
                          <p><em>Co-founder at Company</em></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/t5.png">',
    }
);
editor.BlockManager.add('T6',
    {
        label: '<b>Testimonial6</b>',
        category: 'Testimonial',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center justify-content-center">
                  <div class="col-lg-8">
                    <h2>You are in good company</h2>
                    <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                    <div class="mt-5 justify-content-center">
                      <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/adobe.svg">
                      <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/amazon.svg">
                      <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/ebay.svg">
                      <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/samsung.svg">
                      <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/orange.svg">
                      <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/salesforce.svg">
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/t6.png">',
    }
);
editor.BlockManager.add('T7',
    {
        label: '<b>Testimonial7</b>',
        category: 'Testimonial',
        content: `<section class="fdb-block bg-dark">
              <div class="container">
                <div class="row justify-content-center text-center">
                  <div class="col">
                    <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/adobe.svg">
                    <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/amazon.svg">
                    <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/ebay.svg">
                    <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/samsung.svg">
                    <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/orange.svg">
                    <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/salesforce.svg">
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/t7.png">',
    }
);
editor.BlockManager.add('T8',
    {
        label: '<b>Testimonial8</b>',
        category: 'Testimonial',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row pb-xl-5 text-center justify-content-center">
                  <div class="col-md-10 col-lg-7">
                    <h1>Testimonials</h1>
                  </div>
                </div>

                <div class="row mt-5 justify-content-center">
                  <div class="col-md-8 col-lg-4 col-xl-3 m-auto text-center">
                    <img alt="image" height="50" src="../fraola/imgs/customers/intel.svg">
                    <p class="h3 mt-4">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."</p>

                    <p class="h3 mt-4 mt-xl-5"><strong>Person Name</strong></p>
                    <p>Co-founder at Company</p>
                  </div>

                  <div class="col-md-8 col-lg-4 col-xl-3 pt-5 pt-lg-0 m-auto text-center">
                    <img alt="image" height="50" src="../fraola/imgs/customers/apple.svg">
                    <p class="h3 mt-4">"Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>

                    <p class="h3 mt-4 mt-xl-5"><strong>Person Name</strong></p>
                    <p>Co-founder at Company</p>
                  </div>

                  <div class="col-md-8 col-lg-4 col-xl-3 pt-5 pt-lg-0 m-auto text-center">
                    <img alt="image" height="50" src="../fraola/imgs/customers/samsung.svg">
                    <p class="h3 mt-4">"A small river named Duden flows by their place and supplies it with the necessary regelialia."</p>

                    <p class="h3 mt-4 mt-xl-5"><strong>Person Name</strong></p>
                    <p>Co-founder at Company</p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/t8.png">',
    }
);
editor.BlockManager.add('T9',
    {
        label: '<b>Testimonial9</b>',
        category: 'Testimonial',
        content: `<section class="fdb-block" style="background-image: url(imgs/shapes/9.svg);">
              <div class="container">
                <div class="row text-center justify-content-center">
                  <div class="col-md-10 col-lg-8 col-xl-7">
                    <h1>Testimonials</h1>
                    <p class="lead">A small river named Duden flows by their place and supplies it with the necessary regelialia. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
                  </div>
                </div>

                <div class="row mt-5 align-items-center justify-content-center">
                  <div class="col-md-8 col-lg-4">
                    <div class="fdb-box">
                      <div class="row no-gutters align-items-center">
                        <div class="col-3">
                          <img alt="image" class="img-fluid rounded" src="../fraola/imgs/people/1.jpg">
                        </div>
                        <div class="col-8 ml-auto">
                          <p>
                            <strong>Person Name</strong><br>
                            <em>Co-founder at Company</em>
                          </p>
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col-12">
                          <p class="lead">
                            "Even the all-powerful Pointing has no control about the blind texts it is an small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-8 col-lg-4 mt-4 mt-lg-0">
                    <div class="fdb-box">
                      <div class="row no-gutters align-items-center">
                        <div class="col-3">
                          <img alt="image" class="img-fluid rounded" src="../fraola/imgs/people/3.jpg">
                        </div>
                        <div class="col-8 ml-auto">
                          <p>
                            <strong>Person Name</strong><br>
                            <em>Co-founder at Company</em>
                          </p>
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col-12">
                          <p class="lead">
                            "Far far away, behind the word mountains, far from the countries Vokalia. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-8 col-lg-4 mt-4 mt-lg-0">
                    <div class="fdb-box">
                      <div class="row no-gutters align-items-center">
                        <div class="col-3">
                          <img alt="image" class="img-fluid rounded" src="../fraola/imgs/people/2.jpg">
                        </div>
                        <div class="col-8 ml-auto">
                          <p>
                            <strong>Person Name</strong><br>
                            <em>Co-founder at Company</em>
                          </p>
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col-12">
                          <p class="lead">
                            "Separated they live in Bookmarksgrove right at the coast of the Semantics, the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/t9.png">',
    }
);
editor.BlockManager.add('T10',
    {
        label: '<b>Testimonial10</b>',
        category: 'Testimonial',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center justify-content-center">
                  <div class="col-md-10 col-lg-7">
                    <h1>Testimonials</h1>
                  </div>
                </div>

                <div class="row mt-5 justify-content-center">
                  <div class="col-md-10 col-lg-3 ml-auto mr-auto text-center">
                    <p class="h3 mb-4 mb-lg-5">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."</p>

                    <p><img alt="image" height="50" class="rounded-circle" src="../fraola/imgs/people/5.jpg"></p>
                    <p class="lead"><strong>Person Name</strong></p>
                    <p>Co-founder, Company</p>
                  </div>

                  <div class="col-md-10 col-lg-3 pt-5 pt-lg-0 ml-auto mr-auto text-center">
                    <p class="h3 mb-4 mb-lg-5">"Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>

                    <p><img alt="image" height="50" class="rounded-circle" src="../fraola/imgs/people/8.jpg"></p>
                    <p class="lead"><strong>Person Name</strong></p>
                    <p>Co-founder, Company</p>
                  </div>

                  <div class="col-md-10 col-lg-3 pt-5 pt-lg-0 ml-auto mr-auto text-center">
                    <p class="h3 mb-4 mb-lg-5">"A small river named Duden flows by their place and supplies it with the necessary regelialia."</p>

                    <p><img alt="image" height="50" class="rounded-circle" src="../fraola/imgs/people/9.jpg"></p>
                    <p class="lead"><strong>Person Name</strong></p>
                    <p>Co-founder, Company</p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/t10.png">',
    }
);

//Teams
editor.BlockManager.add('TM1',
    {
        label: '<b>Team 1</b>',
        category: 'Teams',
        content: `<section class="fdb-block team-1">
              <div class="container">
                <div class="row text-center justify-content-center">
                  <div class="col-8">
                    <h1>Our Team</h1>
                    <p class="lead">Far far away, behind the word mountains, far from the countries.</p>
                  </div>
                </div>

                <div class="row-50"></div>

                <div class="row">
                  <div class="col-sm-3 text-left">
                    <div class="fdb-box p-0">
                      <img alt="image" class="img-fluid rounded-0" src="../fraola/imgs/people/1.jpg">

                      <div class="content p-3">
                        <h3><strong>Sara Doe</strong></h3>
                        <p>Founder</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-3 text-left">
                    <div class="fdb-box p-0">
                      <img alt="image" class="img-fluid rounded-0" src="../fraola/imgs/people/2.jpg">

                      <div class="content p-3">
                        <h3><strong>Sara Doe</strong></h3>
                        <p>Founder</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3 text-left">
                    <div class="fdb-box p-0">
                      <img alt="image" class="img-fluid rounded-0" src="../fraola/imgs/people/3.jpg">

                      <div class="content p-3">
                        <h3><strong>Sara Doe</strong></h3>
                        <p>Founder</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3 text-left">
                    <div class="fdb-box p-0">
                      <img alt="image" class="img-fluid rounded-0" src="../fraola/imgs/people/6.jpg">

                      <div class="content p-3">
                        <h3><strong>Sara Doe</strong></h3>
                        <p>Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/tm1.png">',
    }
);
editor.BlockManager.add('TM2',
    {
        label: '<b>Team 2</b>',
        category: 'Teams',
        content: `<section class="fdb-block team-2">
              <div class="container">
                <div class="row text-center justify-content-center">
                  <div class="col-8">
                    <h1>Meet Our Team</h1>
                  </div>
                </div>

                <div class="row-50"></div>

                <div class="row text-center justify-content-center">
                  <div class="col-sm-3 m-sm-auto">
                    <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/4.jpg">

                    <h2>Sara Doe</h2>
                    <p>Founder</p>
                  </div>

                  <div class="col-sm-3 m-sm-auto">
                    <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/5.jpg">

                    <h2>Sara Doe</h2>
                    <p>Founder</p>
                  </div>

                  <div class="col-sm-3 m-sm-auto">
                    <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/7.jpg">

                    <h2>Sara Doe</h2>

                    <p>Founder</p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/tm2.png">',
    }
);
editor.BlockManager.add('TM3',
    {
        label: '<b>Team 3</b>',
        category: 'Teams',
        content: `<section class="fdb-block team-3">
              <div class="container">
                <div class="row text-center justify-content-center">
                  <div class="col-8">
                    <h1>Meet Our Team</h1>
                  </div>
                </div>

                <div class="row-70"></div>

                <div class="row text-center justify-content-center mb-5">
                  <div class="col-sm-2 m-sm-auto">
                    <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/1.jpg">

                    <h3><strong>Sara Doe</strong></h3>
                    <p><em>Founder</em></p>
                  </div>

                  <div class="col-sm-2 m-sm-auto">
                    <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/6.jpg">

                    <h3><strong>Sara Doe</strong></h3>
                    <p><em>Founder</em></p>
                  </div>

                  <div class="col-sm-2 m-sm-auto">
                    <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/7.jpg">

                    <h3><strong>Sara Doe</strong></h3>
                    <p><em>Founder</em></p>
                  </div>

                  <div class="col-sm-2 m-sm-auto">
                    <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/8.jpg">

                    <h3><strong>Sara Doe</strong></h3>
                    <p><em>Founder</em></p>
                  </div>
                </div>

                <div class="row justify-content-center text-center">
                  <div class="col-sm-2 m-sm-auto">
                    <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/2.jpg">

                    <h3><strong>Sara Doe</strong></h3>
                    <p><em>Founder</em></p>
                  </div>

                  <div class="col-sm-2 m-sm-auto">
                    <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/3.jpg">

                    <h3><strong>Sara Doe</strong></h3>
                    <p><em>Founder</em></p>
                  </div>

                  <div class="col-sm-2 m-sm-auto">
                    <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/5.jpg">

                    <h3><strong>Sara Doe</strong></h3>
                    <p><em>Founder</em></p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/tm3.png">',
    }
);
editor.BlockManager.add('TM4',
    {
        label: '<b>Team 4</b>',
        category: 'Teams',
        content: `<section class="fdb-block team-4">
              <div class="container">
                <div class="row text-center justify-content-center">
                  <div class="col-8">
                    <h1>Team</h1>
                  </div>
                </div>

                <div class="row text-center mt-5">
                  <div class="col-3">
                    <img alt="image" class="img-fluid rounded" src="../fraola/imgs/people/5.jpg">
                    <h3><strong>John Smith</strong></h3>
                    <p>Position</p>
                    <p>A wonderful serenity has taken possession of my entire soul.</p>
                  </div>

                  <div class="col-3">
                    <img alt="image" class="img-fluid rounded" src="../fraola/imgs/people/6.jpg">
                    <h3><strong>John Smith</strong></h3>
                    <p>Position</p>
                    <p>Pityful a rethoric question ran over her cheek.</p>
                  </div>

                  <div class="col-3">
                    <img alt="image" class="img-fluid rounded" src="../fraola/imgs/people/3.jpg">
                    <h3><strong>John Smith</strong></h3>
                    <p>Position</p>
                    <p>And if she hasn’t been rewritten, then they are still using her.</p>
                  </div>

                  <div class="col-3">
                    <img alt="image" class="img-fluid rounded" src="../fraola/imgs/people/2.jpg">
                    <h3><strong>John Smith</strong></h3>
                    <p>Position</p>
                    <p>Wild Question Marks, but the Little Blind Text didn’t listen.</p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/tm4.png">',
    }
);
editor.BlockManager.add('TM5',
    {
        label: '<b>Team 5</b>',
        category: 'Teams',
        content: `<section class="fdb-block team-5">
              <div class="container">
                <div class="row text-center justify-content-center">
                  <div class="col-8">
                    <h1>Meet Our Team</h1>
                  </div>
                </div>

                <div class="row-70"></div>

                <div class="row text-center justify-content-center">
                  <div class="col-sm-2 m-sm-auto">
                    <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/1.jpg">

                    <h3><strong>Sara Doe</strong></h3>
                    <p>"Wild Question Marks, but the Little Blind"</p>
                  </div>

                  <div class="col-sm-2 m-sm-auto">
                    <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/6.jpg">

                    <h3><strong>Sara Doe</strong></h3>
                    <p>"Wild Question Marks, but the Little Blind"</p>
                  </div>

                  <div class="col-sm-2 m-sm-auto">
                    <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/5.jpg">

                    <h3><strong>Sara Doe</strong></h3>
                    <p>"Wild Question Marks, but the Little Blind"</p>
                  </div>

                  <div class="col-sm-2 m-sm-auto">
                    <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/8.jpg">

                    <h3><strong>Sara Doe</strong></h3>
                    <p>"Wild Question Marks, but the Little Blind"</p>
                  </div>
                </div>

                <div class="row justify-content-center text-center mt-5">
                  <div class="col-sm-2  m-sm-auto">
                    <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/3.jpg">

                    <h3><strong>Sara Doe</strong></h3>
                    <p>"Wild Question Marks, but the Little Blind"</p>
                  </div>

                  <div class="col-sm-2 m-sm-auto">
                    <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/9.jpg">

                    <h3><strong>Sara Doe</strong></h3>
                    <p>"Wild Question Marks, but the Little Blind"</p>
                  </div>

                  <div class="col-sm-2 m-sm-auto">
                    <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/7.jpg">

                    <h3><strong>Sara Doe</strong></h3>
                    <p>"Wild Question Marks, but the Little Blind"</p>
                  </div>

                  <div class="col-sm-2 m-sm-auto">
                    <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/2.jpg">

                    <h3><strong>Sara Doe</strong></h3>
                    <p>"Wild Question Marks, but the Little Blind"</p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/tm5.png">',
    }
);
editor.BlockManager.add('TM6',
    {
        label: '<b>Team 6</b>',
        category: 'Teams',
        content: `<section class="fdb-block team-6">
              <div class="container">
                <div class="row text-center justify-content-center">
                  <div class="col-8">
                    <h1>Team</h1>
                  </div>
                </div>

                <div class="row text-center mt-5">
                  <div class="col-4">
                    <img alt="image" class="img-fluid rounded" src="../fraola/imgs/people/9.jpg">
                    <h3><strong>John Smith</strong></h3>
                    <p>Position</p>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
                  </div>

                  <div class="col-4">
                    <img alt="image" class="img-fluid rounded" src="../fraola/imgs/people/1.jpg">
                    <h3><strong>John Smith</strong></h3>
                    <p>Position</p>
                    <p>One morning, when Gregor Samsa woke from troubled dreams.</p>
                  </div>

                  <div class="col-4">
                    <img alt="image" class="img-fluid rounded" src="../fraola/imgs/people/3.jpg">
                    <h3><strong>John Smith</strong></h3>
                    <p>Position</p>
                    <p>A small river named Duden flows by their place and supplies it.</p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/tm6.png">',
    }
);
editor.BlockManager.add('TM7',
    {
        label: '<b>Team 7</b>',
        category: 'Teams',
        content: `<section class="fdb-block team-7">
              <div class="container">
                <div class="row text-center justify-content-center">
                  <div class="col-8">
                    <h1>Team</h1>
                  </div>
                </div>

                <div class="row-70"></div>

                <div class="row justify-content-center">
                  <div class="col-sm-3 m-sm-auto">
                    <div class="row align-items-center">
                      <div class="col-4">
                        <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/2.jpg">
                      </div>

                      <div class="col-8">
                        <h3>Employee Name</h3>
                        <p>Position</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-3 m-sm-auto">
                    <div class="row align-items-center">
                      <div class="col-4">
                        <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/8.jpg">
                      </div>

                      <div class="col-8">
                        <h3>Employee Name</h3>
                        <p>Position</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-3 m-sm-auto">
                    <div class="row align-items-center">
                      <div class="col-4">
                        <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/6.jpg">
                      </div>

                      <div class="col-8">
                        <h3>Employee Name</h3>
                        <p>Position</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row-50"></div>

                <div class="row justify-content-center">
                  <div class="col-sm-3 m-sm-auto">
                    <div class="row align-items-center">
                      <div class="col-4">
                        <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/4.jpg">
                      </div>

                      <div class="col-8">
                        <h3>Employee Name</h3>
                        <p>Position</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-3 m-sm-auto">
                    <div class="row align-items-center">
                      <div class="col-4">
                        <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/1.jpg">
                      </div>

                      <div class="col-8">
                        <h3>Employee Name</h3>
                        <p>Position</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-3 m-sm-auto">
                    <div class="row align-items-center">
                      <div class="col-4">
                        <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/3.jpg">
                      </div>

                      <div class="col-8">
                        <h3>Employee Name</h3>
                        <p>Position</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row-50"></div>

                <div class="row justify-content-center">
                  <div class="col-sm-3 m-sm-auto">
                    <div class="row align-items-center">
                      <div class="col-4">
                        <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/5.jpg">
                      </div>

                      <div class="col-8">
                        <h3>Employee Name</h3>
                        <p>Position</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-3 m-sm-auto">
                    <div class="row align-items-center">
                      <div class="col-4">
                        <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/9.jpg">
                      </div>

                      <div class="col-8">
                        <h3>Employee Name</h3>
                        <p>Position</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-3 m-sm-auto">
                    <div class="row align-items-center">
                      <div class="col-4">
                        <img alt="image" class="img-fluid rounded-circle" src="../fraola/imgs/people/7.jpg">
                      </div>

                      <div class="col-8">
                        <h3>Employee Name</h3>
                        <p>Position</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/tm7.png">',
    }
);
editor.BlockManager.add('TM8',
    {
        label: '<b>Team 8</b>',
        category: 'Teams',
        content: `<section class="fdb-block team-8">
              <div class="container">
                <div class="row text-center justify-content-center">
                  <div class="col-8">
                    <h1>Our Amazing Team</h1>
                    <p class="lead">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  </div>
                </div>

                <div class="row-100"></div>

                <div class="row justify-content-center text-left">
                  <div class="col-sm-6">
                    <div class="row align-items-center">
                      <div class="col-4">
                        <img alt="image" class="img-fluid rounded" src="../fraola/imgs/people/8.jpg">
                      </div>

                      <div class="col-8">
                        <h3><strong>Employee Name</strong></h3>
                        <p class="lead">Position</p>

                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="row align-items-center">
                      <div class="col-4">
                        <img alt="image" class="img-fluid rounded" src="../fraola/imgs/people/7.jpg">
                      </div>

                      <div class="col-8">
                        <h3><strong>Employee Name</strong></h3>
                        <p class="lead">Position</p>

                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row-70"></div>

                <div class="row justify-content-center text-left">
                  <div class="col-sm-6">
                    <div class="row align-items-center">
                      <div class="col-4">
                        <img alt="image" class="img-fluid rounded" src="../fraola/imgs/people/9.jpg">
                      </div>

                      <div class="col-8">
                        <h3><strong>Employee Name</strong></h3>
                        <p class="lead">Position</p>

                        <p>One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="row align-items-center">
                      <div class="col-4">
                        <img alt="image" class="img-fluid rounded" src="../fraola/imgs/people/4.jpg">
                      </div>

                      <div class="col-8">
                        <h3><strong>Employee Name</strong></h3>
                        <p class="lead">Position</p>

                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/tm8.png">',
    }
);

// Pricing
editor.BlockManager.add('P1',
    {
        label: '<b>Pricing 1</b>',
        category: 'Pricing',
        content: `<section class="fdb-block" style="background-image: url(./imgs/shapes/1.svg)">
              <div class="container">
                <div class="row text-center">
                  <div class="col">
                    <h1 class="text-light">Pricing</h1>
                  </div>
                </div>

                <div class="row mt-5 align-items-center">
                  <div class="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center">
                    <div class="fdb-box shadow pb-5 pt-5 pl-3 pr-3 rounded">
                      <h2>Hobby</h2>
                      <p class="lead"><strong>$9 / month</strong></p>
                      <p class="h3 font-weight-light">Even the all-powerful Pointing has no control about.</p>

                      <ul class="text-left mt-5 mb-5">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                      </ul>

                      <p><a href="https://www.techtimekw.com" class="btn btn-outline-primary mt-4">Subscribe</a></p>
                    </div>
                  </div>

                  <div class="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">
                    <div class="fdb-box shadow pb-5 pt-5 pl-3 pr-3 fdb-touch rounded">
                      <h2 class="text-primary">Professional</h2>
                      <p class="lead"><strong>$19 / month</strong></p>
                      <p class="h3 font-weight-light">Far far away, behind the word mountains, far from.</p>

                      <ul class="text-left mt-5 mb-5">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                      </ul>

                      <p><a href="https://www.techtimekw.com" class="btn btn-primary mt-4">Subscribe</a></p>
                    </div>
                  </div>

                  <div class="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">
                    <div class="fdb-box shadow pb-5 pt-5 pl-3 pr-3 rounded">
                      <h2>Business</h2>
                      <p class="lead"><strong>$49 / month</strong></p>
                      <p class="h3 font-weight-light">Wild Question Marks, but the Little Blind Text didn’t listen.</p>

                      <ul class="text-left mt-5 mb-5">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                      </ul>

                      <p><a href="https://www.techtimekw.com" class="btn btn-outline-primary mt-4">Subscribe</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/pp1.png">',
    }
);
editor.BlockManager.add('P2',
    {
        label: '<b>Pricing 2</b>',
        category: 'Pricing',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center">
                  <div class="col">
                    <h1>Pricing</h1>
                  </div>
                </div>

                <div class="row mt-5 align-items-center">
                  <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left">
                    <div class="fdb-box fdb-touch p-5 rounded">
                      <h2>Hobby <strong class="float-xl-right d-lg-block d-xl-inline">$99</strong></h2>
                      <p class="lead"><em>Copy Writers ambushed her, made her drunk.</em></p>

                      <ul class="text-left pl-3 mt-5 mb-5">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                      </ul>

                      <p class="text-left pt-4"><a href="https://www.techtimekw.com" class="btn btn-primary">Buy Now</a></p>
                    </div>
                  </div>

                  <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0">
                    <div class="fdb-box fdb-touch p-5 rounded">
                      <h2>Advanced <strong class="float-xl-right d-lg-block d-xl-inline">$349</strong></h2>
                      <p class="lead"><em>Separated they live in Bookmarks right.</em></p>

                      <ul class="text-left pl-3 mt-5 mb-5">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                      </ul>

                      <p class="text-left pt-4"><a href="https://www.techtimekw.com" class="btn btn-primary">Buy Now</a></p>
                    </div>
                  </div>

                  <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0">
                    <div class="fdb-box fdb-touch p-5 rounded">
                      <h2>Business <strong class="float-xl-right d-lg-block d-xl-inline">$849</strong></h2>
                      <p class="lead"><em>A small river named Duden their place.</em></p>

                      <ul class="text-left pl-3 mt-5 mb-5">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                      </ul>

                      <p class="text-left pt-4"><a href="https://www.techtimekw.com" class="btn btn-primary">Buy Now</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/pp2.png">',
    }
);
editor.BlockManager.add('P3',
    {
        label: '<b>Pricing 3</b>',
        category: 'Pricing',
        content: ` <section class="fdb-block" style="background-image: url(imgs/hero/red.svg);">
              <div class="container">
                <div class="row text-center">
                  <div class="col">
                    <h1 class="text-white">Pricing</h1>
                  </div>
                </div>

                <div class="row mt-5 align-items-center">
                  <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center">
                    <div class="fdb-box p-4">
                      <h2>Hobby</h2>
                      <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia.</p>

                      <p class="h1 mt-5 mb-5">$99</p>

                      <p><a href="https://www.techtimekw.com" class="btn btn-dark">Buy Now</a></p>
                    </div>
                  </div>

                  <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">
                    <div class="fdb-box px-4 pt-5">
                      <h2>Advanced</h2>
                      <p class="lead">Separated they live in Bookmarksgrove right at the coast, a large language ocean.</p>

                      <p class="h1 mt-5 mb-5">$299</p>

                      <p><a href="https://www.techtimekw.com" class="btn btn-secondary">Buy Now</a></p>
                    </div>
                  </div>

                  <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">
                    <div class="fdb-box p-4">
                      <h2>Business</h2>
                      <p class="lead">Even the all-powerful Pointing has no control about the blind texts it is an almost life.</p>

                      <p class="h1 mb-5 mt-5">$799</p>

                      <p><a href="https://www.techtimekw.com" class="btn btn-dark">Buy Now</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/pp3.png">',
    }
);
editor.BlockManager.add('P4',
    {
        label: '<b>Pricing 4</b>',
        category: 'Pricing',
        content: `<section class="fdb-block py-0">
              <div class="container pt-5 my-5" style="background-image: url(imgs/shapes/2.svg)">
                <div class="row text-center py-5">
                  <div class="col">
                    <h1>Pricing Plans</h1>
                  </div>
                </div>

                <div class="row py-5 align-items-top">
                  <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left">
                    <div class="bg-gray pb-5 pt-5 pl-4 pr-4 rounded shadow">
                      <h2 class="font-weight-light">Startup</h2>
                      <hr>
                      <p class="h2"><strong>$9.90</strong></p>
                      <p class="h4">Far far away, behind the word mountains, far from the countries.</p>
                      <hr>
                      <p class="text-right"><em>Unlimited calls</em></p>
                      <p class="text-right"><em>Free hosting</em></p>
                      <p class="text-right"><em>40MB of storage</em></p>
                      <p><br></p>
                      <p><br></p>
                      <p><br></p>
                      <p class="text-center pt-4"><a href="https://www.techtimekw.com" class="btn btn-primary">Choose Plan</a></p>
                    </div>
                  </div>

                  <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0">
                    <div class="bg-gray pb-5 pt-5 pl-4 pr-4 rounded shadow">
                      <h2 class="font-weight-light">Standard</h2>
                      <hr>
                      <p class="h2"><strong>$29.90</strong></p>
                      <p class="h4">The copy warned the Blind Text, that it would have been rewritten</p>
                      <hr>
                      <p class="text-right"><em>Unlimited calls</em></p>
                      <p class="text-right"><em>Free hosting</em></p>
                      <p class="text-right"><em>1GB of storage</em></p>
                      <p class="text-right"><em>10 hours of support</em></p>
                      <p class="text-right"><em>Custom domain</em></p>
                      <p><br></p>
                      <p class="text-center pt-4"><a href="https://www.techtimekw.com" class="btn btn-primary">Choose Plan</a></p>
                    </div>
                  </div>

                  <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0">
                    <div class="bg-gray pb-5 pt-5 pl-4 pr-4 rounded shadow">
                      <h2 class="font-weight-light">Professional</h2>
                      <hr>
                      <p class="h2"><strong>$59.90</strong></p>
                      <p class="h4"> the headline of Alphabet Village and the subline of her own road.</p>
                      <hr>
                      <p class="text-right"><em>Unlimited calls</em></p>
                      <p class="text-right"><em>Free hosting</em></p>
                      <p class="text-right"><em>1GB of storage</em></p>
                      <p class="text-right"><em>20 hours of support</em></p>
                      <p class="text-right"><em>Custom domain</em></p>
                      <p class="text-right"><em>Analytics and SEO</em></p>

                      <p class="text-center pt-4"><a href="https://www.techtimekw.com" class="btn btn-primary">Choose Plan</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/pp4.png">',
    }
);
editor.BlockManager.add('P5',
    {
        label: '<b>Pricing 5</b>',
        category: 'Pricing',
        content: `<section class="fdb-block" style="background-image: url(imgs/shapes/8.svg);">
              <div class="container">
                <div class="row text-center">
                  <div class="col">
                    <h1>Pricing Plans</h1>
                  </div>
                </div>

                <div class="row mt-5 align-items-center no-gutters">
                  <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center shadow">
                    <div class="bg-white pb-5 pt-5 pl-4 pr-4 rounded-left">
                      <h2 class="font-weight-light">Basic</h2>

                      <p class="h1 mt-5 mb-5"><strong>$19</strong> <span class="h4">/month</span></p>

                      <ul class="text-left">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                      </ul>

                      <p class="text-center pt-4"><a href="https://www.techtimekw.com" class="btn btn-outline-dark">Choose Plan</a></p>
                    </div>
                  </div>

                  <div class="col-12 col-sm-10 col-md-8 ml-auto mr-auto col-lg-4 text-center mt-4 mt-lg-0 sl-1 pt-0 pt-lg-3 pb-0 pb-lg-3 bg-white fdb-touch rounded shadow">
                    <div class="pb-5 pt-5 pl-4 pr-4">
                      <h2 class="font-weight-light">Standard</h2>

                      <p class="h1 mt-5 mb-5"><strong>$49</strong> <span class="h4">/month</span></p>

                      <ul class="text-left">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                      </ul>

                      <p class="text-center pt-4"><a href="https://www.techtimekw.com" class="btn btn-primary btn-shadow">Choose Plan</a></p>
                    </div>
                  </div>

                  <div class="col-12 col-sm-10 col-md-8 ml-auto mr-auto col-lg-4 text-center mt-4 mt-lg-0 shadow">
                    <div class="bg-white pb-5 pt-5 pl-4 pr-4 rounded-right">
                      <h2 class="font-weight-light">OEM</h2>

                      <p class="h1 mt-5 mb-5"><strong>$99</strong> <span class="h4">/month</span></p>

                      <ul class="text-left">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                      </ul>

                      <p class="text-center pt-4"><a href="https://www.techtimekw.com" class="btn btn-outline-dark">Choose Plan</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/pp5.png">',
    }
);
editor.BlockManager.add('P6',
    {
        label: '<b>Pricing 6</b>',
        category: 'Pricing',
        content: ` <section class="fdb-block">
              <div class="container">
                <div class="row text-center">
                  <div class="col">
                    <h1>Pricing Plans</h1>
                  </div>
                </div>

                <div class="row mt-5 align-items-top">
                  <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left">
                    <div class="rounded">
                      <div class="bg-dark p-3 text-center">
                        <h2 class="font-weight-light">Startup</h2>
                        <p class="h2"><strong>$9.90</strong></p>
                      </div>

                      <div class="bg-gray p-5 text-center">
                        <p><img alt="image" height="40" src="../fraola/imgs/icons/layers.svg"></p>
                        <p class="h4"><strong>For small companies</strong></p>
                        <p><br></p>
                        <p>10 hours of support</p>
                        <p>40MB of storage</p>
                        <p>Subdomain</p>

                        <p class="text-center pt-5"><a href="https://www.techtimekw.com" class="btn btn-secondary">Choose Plan</a></p>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0">
                    <div class="rounded">
                      <div class="bg-dark p-3 text-center">
                        <h2 class="font-weight-light">Standard</h2>
                        <p class="h2"><strong>$19.90</strong></p>
                      </div>

                      <div class="bg-gray p-5 text-center">
                        <p><img alt="image" height="40" src="../fraola/imgs/icons/monitor.svg"></p>
                        <p class="h4"><strong>For medium companies</strong></p>
                        <p><br></p>
                        <p>10 hours of support</p>
                        <p>40MB of storage</p>
                        <p>Subdomain</p>

                        <p class="text-center pt-5"><a href="https://www.techtimekw.com" class="btn btn-secondary">Choose Plan</a></p>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0">
                    <div class="rounded">
                      <div class="bg-dark p-3 text-center">
                        <h2 class="font-weight-light">Business</h2>
                        <p class="h2"><strong>$29.90</strong></p>
                      </div>

                      <div class="bg-gray p-5 text-center">
                        <p><img alt="image" height="40" src="../fraola/imgs/icons/package.svg"></p>
                        <p class="h4"><strong>For large companies</strong></p>
                        <p><br></p>
                        <p>10 hours of support</p>
                        <p>40MB of storage</p>
                        <p>Subdomain</p>

                        <p class="text-center pt-5"><a href="https://www.techtimekw.com" class="btn btn-secondary">Choose Plan</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/pp6.png">',
    }
);
editor.BlockManager.add('P7',
    {
        label: '<b>Pricing 7</b>',
        category: 'Pricing',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center">
                  <div class="col">
                    <h1>Pricing Plans</h1>
                  </div>
                </div>

                <div class="row mt-5 align-items-top">
                  <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center">
                    <div class="bg-gray pb-5 pt-5 pl-4 pr-4 rounded">
                      <h3><strong>Startup</strong></h3>
                      <p class="h4">&lt; 10 employees</p>

                      <p class="h1 mt-5">$9.90 <span class="lead">/ month</span></p>
                      <p>Far far away, behind the word mountains, far from the countries.</p>
                      <hr>
                      <p><em>Unlimited calls</em></p>
                      <p><em>Free hosting</em></p>
                      <p><em>40MB of storage</em></p>

                      <p class="text-center pt-5"><a href="https://www.techtimekw.com" class="btn btn-primary">Subscribe</a></p>
                    </div>
                  </div>

                  <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">
                    <div class="bg-gray pb-5 pt-5 pl-4 pr-4 rounded">
                      <h3><strong>Agency</strong></h3>
                      <p class="h4">10-100 employees</p>

                      <p class="h1 mt-5">$19.90 <span class="lead">/ month</span></p>
                      <p>And if she hasn’t been rewritten, then they are still using her.</p>
                      <hr>
                      <p><em>Unlimited calls</em></p>
                      <p><em>Free hosting</em></p>
                      <p><em>40MB of storage</em></p>

                      <p class="text-center pt-5"><a href="https://www.techtimekw.com" class="btn btn-primary">Subscribe</a></p>
                    </div>
                  </div>

                  <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">
                    <div class="bg-gray pb-5 pt-5 pl-4 pr-4 rounded">
                      <h3><strong>Business</strong></h3>
                      <p class="h4">&gt;100 employees</p>

                      <p class="h1 mt-5">$99.90 <span class="lead">/ month</span></p>
                      <p>Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
                      <hr>
                      <p><em>Unlimited calls</em></p>
                      <p><em>Free hosting</em></p>
                      <p><em>40MB of storage</em></p>

                      <p class="text-center pt-5"><a href="https://www.techtimekw.com" class="btn btn-primary">Subscribe</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/pp7.png">',
    }
);
editor.BlockManager.add('P8',
    {
        label: '<b>Pricing 8</b>',
        category: 'Pricing',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center">
                  <div class="col">
                    <h1>Pricing Plans</h1>
                  </div>
                </div>

                <div class="row mt-5 align-items-top">
                  <div class="col-12 col-md-8 m-auto col-lg-4 text-center">
                    <img alt="image" height="60" src="../fraola/imgs/icons/cloud.svg">
                    <h2><strong>Startup</strong></h2>
                    <p class="h3 mb-4 mb-lg-5"><em>$9 / month</em></p>

                    <p>10 hours of support</p>
                    <p>40MB of storage</p>
                    <p>Subdomain</p>

                    <p class="text-center mt-4 mt-lg-5"><a href="https://www.techtimekw.com" class="btn btn-primary">Choose Plan</a></p>
                  </div>

                  <div class="col-12 col-md-8 col-lg-4 text-center m-auto pt-5 pt-lg-0">
                    <img alt="image" height="60" src="../fraola/imgs/icons/life-buoy.svg">
                    <h2><strong>Advanced</strong></h2>
                    <p class="h3 mb-4 mb-lg-5"><em>$19 / month</em></p>

                    <p>10 hours of support</p>
                    <p>40MB of storage</p>
                    <p>Subdomain</p>

                    <p class="text-center mt-4 mt-lg-5"><a href="https://www.techtimekw.com" class="btn btn-primary">Choose Plan</a></p>
                  </div>

                  <div class="col-12 col-md-8 m-auto col-lg-4 text-center pt-5 pt-lg-0">
                    <img alt="image" height="60" src="../fraola/imgs/icons/layers.svg">
                    <h2><strong>Business</strong></h2>
                    <p class="h3 mb-4 mb-lg-5"><em>$29 / month</em></p>

                    <p>10 hours of support</p>
                    <p>40MB of storage</p>
                    <p>Subdomain</p>

                    <p class="text-center mt-4 mt-lg-5"><a href="https://www.techtimekw.com" class="btn btn-primary">Choose Plan</a></p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/pp8.png">',
    }
);
editor.BlockManager.add('P9',
    {
        label: '<b>Pricing 9</b>',
        category: 'Pricing',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center">
                  <div class="col">
                    <h1>Pricing Plans</h1>
                  </div>
                </div>

                <div class="row mt-5 align-items-top">
                  <div class="col-12 col-sm-10 col-md-6 col-lg-5 m-auto col-xl-3 text-left">
                    <div class="bg-gray p-3 text-center rounded sl-1">
                      <h2 class="font-weight-light">Startup</h2>
                      <p class="h2">$99</p>
                      <p class="text-center"><a href="https://www.techtimekw.com" class="btn btn-outline-secondary">Buy Now</a></p>

                      <hr class="mt-5 mb-5">

                      <p>10 hours of support</p>
                      <p>40MB of storage</p>
                      <p>Subdomain</p>
                    </div>
                  </div>

                  <div class="col-12 col-sm-10 col-md-6 col-lg-5 m-auto col-xl-3 text-left pt-5 pt-md-0">
                    <div class="bg-gray p-3 text-center rounded sl-1">
                      <h2 class="font-weight-light">Advanced</h2>
                      <p class="h2">$399</p>
                      <p class="text-center"><a href="https://www.techtimekw.com" class="btn btn-secondary">Buy Now</a></p>

                      <hr class="mt-5 mb-5">

                      <p>10 hours of support</p>
                      <p>40MB of storage</p>
                      <p>Subdomain</p>
                    </div>
                  </div>

                  <div class="col-12 col-sm-10 col-md-6 col-lg-5 m-auto col-xl-3 text-left pt-5 pt-xl-0">
                    <div class="bg-gray p-3 text-center rounded sl-1">
                      <h2 class="font-weight-light">Business</h2>
                      <p class="h2">$999</p>
                      <p class="text-center"><a href="https://www.techtimekw.com" class="btn btn-outline-secondary">Buy Now</a></p>

                      <hr class="mt-5 mb-5">

                      <p>10 hours of support</p>
                      <p>40MB of storage</p>
                      <p>Subdomain</p>
                    </div>
                  </div>

                  <div class="col-12 col-sm-10 col-md-6 col-lg-5 m-auto col-xl-3 text-left pt-5 pt-xl-0">
                    <div class="bg-gray p-3 text-center rounded sl-1">
                      <h2 class="font-weight-light">Enterprise</h2>
                      <p class="h2">Call Us</p>
                      <p class="text-center"><a href="https://www.techtimekw.com" class="btn btn-outline-secondary">Contact</a></p>

                      <hr class="mt-5 mb-5">

                      <p>10 hours of support</p>
                      <p>40MB of storage</p>
                      <p>Subdomain</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/pp9.png">',
    }
);
editor.BlockManager.add('P10',
    {
        label: '<b>Pricing 10</b>',
        category: 'Pricing',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center">
                  <div class="col">
                    <h1>Pricing Plans</h1>
                  </div>
                </div>

                <table class="table text-center mt-5 d-none d-lg-table">
                  <tbody>
                    <tr>
                      <th scope="row" class="border-0"></th>
                      <td class="text-center border-0">
                        <h2 class="font-weight-light">Hobby</h2>
                        <p class="lead">$99</p>
                        <p><a href="https://www.techtimekw.com" class="btn btn-outline-primary">Buy Now</a></p>
                      </td>
                      <td class="text-center border-0">
                        <h2 class="font-weight-light">Professional</h2>
                        <p class="lead">$399</p>
                        <p><a href="https://www.techtimekw.com" class="btn btn-outline-primary">Buy Now</a></p>
                      </td>
                      <td class="text-center border-0">
                        <h2 class="font-weight-light">Business</h2>
                        <p class="lead">$899</p>
                        <p><a href="https://www.techtimekw.com" class="btn btn-primary">Buy Now</a></p>
                      </td>
                      <td class="text-center border-0">
                        <h2 class="font-weight-light">Enterprise</h2>
                        <p class="lead">Call us</p>
                        <p><a href="https://www.techtimekw.com" class="btn btn-outline-primary">Contact</a></p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Support</th>
                      <td>3 months</td>
                      <td>6 months</td>
                      <td>12 months</td>
                      <td>Custom</td>
                    </tr>
                    <tr>
                      <th scope="row">Full source code</th>
                      <td>✓</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <th scope="row">SaaS / Subscription</th>
                      <td>✓</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <th scope="row">Intranet</th>
                      <td></td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <th scope="row">Downloadable Software</th>
                      <td></td>
                      <td></td>
                      <td>✓</td>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <th scope="row">Redistribute</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <th scope="row">Custom code</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>✓</td>
                    </tr>
                  </tbody>
                </table>

                <table class="table text-center mt-5 d-table d-lg-none">
                  <tbody>
                    <tr>
                      <td class="text-center border-0" colspan="2">
                        <h2 class="font-weight-light">Hobby</h2>
                        <p class="h2">$99</p>
                        <p><a href="https://www.techtimekw.com" class="btn btn-outline-primary">Buy Now</a></p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Support</th>
                      <td>3 months</td>
                    </tr>
                    <tr>
                      <th scope="row">Full source code</th>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <th scope="row">SaaS / Subscription</th>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <th scope="row">Intranet</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">Downloadable Software</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">Redistribute</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">Custom code</th>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <table class="table text-center mt-5 d-table d-lg-none">
                  <tbody>
                    <tr>
                      <td class="text-center" colspan="2">
                        <h2 class="font-weight-light">Professional</h2>
                        <p class="h2">$399</p>
                        <p><a href="https://www.techtimekw.com" class="btn btn-outline-primary">Buy Now</a></p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Support</th>
                      <td>6 months</td>
                    </tr>
                    <tr>
                      <th scope="row">Full source code</th>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <th scope="row">SaaS / Subscription</th>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <th scope="row">Intranet</th>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <th scope="row">Downloadable Software</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">Redistribute</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">Custom code</th>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <table class="table text-center mt-5 d-table d-lg-none">
                  <tbody>
                    <tr>
                      <td class="text-center" colspan="2">
                        <h2 class="font-weight-light">Business</h2>
                        <p class="h2">$899</p>
                        <p><a href="https://www.techtimekw.com" class="btn btn-primary">Buy Now</a></p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Support</th>
                      <td>12 months</td>
                    </tr>
                    <tr>
                      <th scope="row">Full source code</th>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <th scope="row">SaaS / Subscription</th>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <th scope="row">Intranet</th>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <th scope="row">Downloadable Software</th>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <th scope="row">Redistribute</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">Custom code</th>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <table class="table text-center mt-5 d-table d-lg-none">
                  <tbody>
                    <tr>
                      <td class="text-center" colspan="2">
                        <h2 class="font-weight-light">Enterprise</h2>
                        <p class="h2">Call us</p>
                        <p><a href="https://www.techtimekw.com" class="btn btn-outline-primary">Contact</a></p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Support</th>
                      <td>Custom</td>
                    </tr>
                    <tr>
                      <th scope="row">Full source code</th>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <th scope="row">SaaS / Subscription</th>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <th scope="row">Intranet</th>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <th scope="row">Downloadable Software</th>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <th scope="row">Redistribute</th>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <th scope="row">Custom code</th>
                      <td>✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/pp10.png">',
    }
);

// contacts
editor.BlockManager.add('CO1',
    {
        label: '<b>Contact 1</b>',
        category: 'contacts',
        content: `<section class="fdb-block pt-0">
              <div class="container-fluid p-0 pb-md-5">
                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
                  width="100%" height="300" frameborder="0" style="border:0" allowfullscreen=""></iframe>
              </div>
              <div class="container">
                <div class="row mt-5">
                  <div class="col-12 col-md-6 col-lg-5">
                    <h2>Contact Us</h2>
                    <p class="lead">
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                    </p>

                    <p class="lead">
                      It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    </p>


                    <p class="h3 mt-5">
                      <strong>Email:</strong> <a href="https://www.techtimekw.com">hello@website.com</a>
                    </p>
                    <p class="lead">
                      <strong>Phone:</strong> <a href="https://www.techtimekw.com">+44 123 123 1232</a>
                    </p>
                  </div>

                  <div class="col-12 col-md-6 ml-auto pt-5 pt-md-0">
                    <form>
                      <div class="row">
                        <div class="col">
                          <input type="text" class="form-control" placeholder="First name">
                        </div>
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Last name">
                        </div>
                      </div>

                      <div class="row mt-4">
                        <div class="col">
                          <input type="email" class="form-control" placeholder="Enter email">
                        </div>
                      </div>

                      <div class="row mt-4">
                        <div class="col">
                          <input type="email" class="form-control" placeholder="Subject">
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col">
                          <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col">
                          <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/co1.png">',
    }
);
editor.BlockManager.add('CO2',
    {
        label: '<b>Contact 2</b>',
        category: 'contacts',
        content: `<section class="fdb-block bg-dark" style="background-image: url(imgs/hero/blue.svg);">
              <div class="container">
                <div class="row text-center justify-content-center">
                  <div class="col-12 col-md-8 col-lg-7">
                    <h1>Contact Us</h1>
                    <h2>We love to hear from you!</h2>
                  </div>
                </div>

                <div class="row pt-4">
                  <div class="col-12">
                    <form>
                      <div class="row">
                        <div class="col-12 col-md">
                          <input type="text" class="form-control" placeholder="Name">
                        </div>
                        <div class="col-12 col-md mt-4 mt-md-0">
                          <input type="text" class="form-control" placeholder="Email">
                        </div>
                        <div class="col-12 col-md mt-4 mt-md-0">
                          <input type="text" class="form-control" placeholder="Phone (optional)">
                        </div>
                      </div>

                      <div class="row mt-4">
                        <div class="col">
                          <input type="email" class="form-control" placeholder="Subject">
                        </div>
                      </div>

                      <div class="row mt-4">
                        <div class="col">
                          <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col text-center">
                          <button type="submit" class="btn btn-dark">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            `,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/co2.png">',
    }
);
editor.BlockManager.add('CO3',
    {
        label: '<b>Contact 3</b>',
        category: 'contacts',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center justify-content-center">
                  <div class="col-12 col-md-8 col-lg-7">
                    <h1>Contact Us</h1>
                    <p class="lead">One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                  </div>
                </div>

                <div class="row pt-4">
                  <div class="col-12 col-md-6">
                    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
                      width="100%" height="300" frameborder="0" style="border:0" allowfullscreen=""></iframe>
                  </div>

                  <div class="col-12 col-md-6 pt-5 pt-md-0">
                    <form>
                      <div class="row">
                        <div class="col">
                          <input type="email" class="form-control" placeholder="Enter email">
                        </div>
                      </div>

                      <div class="row mt-4">
                        <div class="col">
                          <input type="email" class="form-control" placeholder="Subject">
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col">
                          <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col">
                          <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/co3.png">',
    }
);
editor.BlockManager.add('CO4',
    {
        label: '<b>Contact 4</b>',
        category: 'contacts',
        content: `<section class="fdb-block py-0">
              <div class="container py-5 my-5" style="background-image: url(imgs/shapes/9.svg);">
                <div class="row py-5">
                  <div class="col py-5">
                    <div class="fdb-box fdb-touch">
                      <div class="row text-center justify-content-center">
                        <div class="col-12 col-md-9 col-lg-7">
                          <h1>Contact Us</h1>
                          <p class="lead">Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.</p>
                        </div>
                      </div>

                      <div class="row justify-content-center pt-4">
                        <div class="col-12 col-md-8">
                          <form>
                            <div class="row">
                              <div class="col-12 col-md">
                                <input type="text" class="form-control" placeholder="Name">
                              </div>
                              <div class="col-12 col-md mt-4 mt-md-0">
                                <input type="text" class="form-control" placeholder="Email">
                              </div>
                            </div>

                            <div class="row mt-4">
                              <div class="col">
                                <input type="email" class="form-control" placeholder="Subject">
                              </div>
                            </div>

                            <div class="row mt-4">
                              <div class="col">
                                <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>
                              </div>
                            </div>
                            <div class="row mt-4">
                              <div class="col text-center">
                                <button type="submit" class="btn btn-primary">Submit</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/co4.png">',
    }
);
editor.BlockManager.add('CO5',
    {
        label: '<b>Contact 5</b>',
        category: 'contacts',
        content: `<section class="fdb-block pt-0">
              <div class="container-fluid p-0 pb-3">
                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
                  width="100%" height="300" frameborder="0" style="border:0" allowfullscreen=""></iframe>
              </div>
              <div class="container">
                <div class="row text-center justify-content-center pt-5">
                  <div class="col-12 col-md-7">
                    <h1>Contact Us</h1>
                  </div>
                </div>

                <div class="row justify-content-center pt-4">
                  <div class="col-12 col-md-7">
                    <form>
                      <div class="row">
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Email">
                        </div>
                      </div>

                      <div class="row mt-4">
                        <div class="col">
                          <input type="email" class="form-control" placeholder="Subject">
                        </div>
                      </div>

                      <div class="row mt-4">
                        <div class="col">
                          <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col text-center">
                          <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="row-100"></div>
              </div>
              <div class="bg-dark">
                <div class="container">
                  <div class="row-50"></div>
                  <div class="row justify-content-center text-center">
                    <div class="col-12 col-md mr-auto ml-auto">
                      <img alt="image" height="40" class="mb-2" src="../fraola/imgs/icons/phone.svg">
                      <p class="lead">+44 (112) 123 752</p>
                    </div>

                    <div class="col-12 col-md pt-4 pt-md-0 mr-auto ml-auto">
                      <img alt="image" height="40" class="mb-2" src="../fraola/imgs/icons/navigation.svg">
                      <p class="lead">123 6th St.<br>Melbourne, FL 32904</p>
                    </div>

                    <div class="col-12 col-md pt-4 pt-md-0 mr-auto ml-auto">
                      <img alt="image" height="40" class="mb-2" src="../fraola/imgs/icons/mail.svg">
                      <p class="lead">support@website.com</p>
                    </div>
                  </div>
                  <div class="row-50"></div>
                </div>
              </div>

              <div class="container">
                <div class="row-70"></div>
                <div class="row text-center">
                  <div class="col">
                    <p class="h2">
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-facebook"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-twitter"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-instagram"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-google"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-pinterest"></i></a>
                    </p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/co5.png">',
    }
);
editor.BlockManager.add('CO6',
    {
        label: '<b>Contact 6</b>',
        category: 'contacts',
        content: `<section class="fdb-block pt-0">
              <div class="container-fluid p-0 pb-5">
                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
                  width="100%" height="300" frameborder="0" style="border:0" allowfullscreen=""></iframe>
              </div>
              <div class="container">
                <div class="row pt-5">
                  <div class="col-12">
                    <form>
                      <div class="row">
                        <div class="col-12 col-md">
                          <label>First Name</label>
                          <input type="text" class="form-control">
                        </div>
                        <div class="col-12 col-md mt-4 mt-md-0">
                          <label>Last Name</label>
                          <input type="text" class="form-control">
                        </div>
                      </div>

                      <div class="row mt-4">
                        <div class="col">
                          <label>Your Email</label>
                          <input type="email" class="form-control">
                        </div>
                      </div>

                      <div class="row mt-4">
                        <div class="col">
                          <label>Subject (optional but helpful)</label>
                          <input type="email" class="form-control">
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col">
                          <label>How can we help?</label>
                          <textarea class="form-control" name="message" rows="3"></textarea>
                        </div>
                      </div>
                      <div class="row mt-4 text-center">
                        <div class="col">
                          <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/co5.png">',
    }
);
editor.BlockManager.add('CO7',
    {
        label: '<b>Contact 7</b>',
        category: 'contacts',
        content: `<section class="fdb-block py-0">
              <div class="container py-5" style="background-image: url(imgs/shapes/6.svg);">
                <div class="row text-center justify-content-center">
                  <div class="col-12 col-md-8 col-lg-7">
                    <h1>Contact Us</h1>
                    <p class="lead">If you’re already an active user, please <a href="https://www.techtimekw.com">sign in</a> before contacting us.</p>
                  </div>
                </div>
                <div class="row-50">
                </div>
                <div class="row justify-content-center">
                  <div class="col-12 col-md-8 col-lg-7">
                    <form>
                      <div class="row">
                        <div class="col">
                          <label>Your Email Address</label>
                          <input type="text" class="form-control">
                        </div>
                      </div>

                      <div class="row mt-4">
                        <div class="col">
                          <label>Subject (optional but helpful)</label>
                          <input type="email" class="form-control">
                        </div>
                      </div>

                      <div class="row mt-4">
                        <div class="col">
                          <label>How can we help?</label>
                          <textarea class="form-control" name="message" rows="3"></textarea>
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col text-right">
                          <button type="submit" class="btn btn-dark">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="row-100"></div>
              </div>

              <div class="container-fluid p-0">
                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
                  width="100%" height="300" frameborder="0" style="border:0" allowfullscreen=""></iframe>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/co7.png">',
    }
);
editor.BlockManager.add('CO8',
    {
        label: '<b>Contact 8</b>',
        category: 'contacts',
        content: `<section class="fdb-block pt-0" style="background-image: url(./imgs/shapes/8.svg)">
              <div class="bg-gray">
                <div class="container">
                  <div class="row-100"></div>
                  <div class="row text-left">
                    <div class="col-8">
                      <h1>Contact Us</h1>
                      <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                  </div>
                  <div class="row-100"></div>
                </div>
              </div>
              <div class="container bg-r">
                <div class="row-100"></div>
                <div class="row">
                  <div class="col-12 col-md-6 col-lg-5">
                    <h2>Call or email</h2>
                    <p class="text-large">Support, Sales, and Account Management services are currently available in English</p>

                    <p class="h3 mt-4 mt-lg-5">
                      <strong>Support</strong>
                    </p>
                    <p>
                      +800 3005 4300
                    </p>
                    <p>
                      <a href="https://www.techtimekw.com">Contact Support</a>
                    </p>
                    <p>
                      Our technical support is available by phone or email from 11am to 11pm BST, Monday through Friday.
                    </p>

                    <p class="h3 mt-4 mt-lg-5">
                      <strong>Sales</strong>
                    </p>
                    <p>
                      +800 3005 4300
                    </p>
                    <p>
                      <a href="https://www.techtimekw.com">Contact Sales</a>
                    </p>
                    <p>
                      Our technical support is available by phone or email from 11am to 11pm BST, Monday through Friday.
                    </p>

                    <p class="h3 mt-4 mt-lg-5">
                      <strong>General inquiries</strong>
                    </p>
                    <p>
                      <a href="https://www.techtimekw.com">hello@website.com</a>
                    </p>
                  </div>

                  <div class="col-12 col-md-6 ml-auto">
                    <h2>Drop us a line</h2>
                    <form>
                      <div class="row">
                        <div class="col">
                          <input type="text" class="form-control" placeholder="First name">
                        </div>
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Last name">
                        </div>
                      </div>

                      <div class="row mt-4">
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Company Name">
                        </div>
                      </div>

                      <div class="row mt-4">
                        <div class="col">
                          <input type="email" class="form-control" placeholder="Email">
                        </div>
                      </div>

                      <div class="row mt-4">
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Phone">
                        </div>
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Country">
                        </div>
                      </div>

                      <div class="row mt-4">
                        <div class="col">
                          <select class="form-control" required="">
                              <option value="">Select Department</option>
                              <option value="1">Support</option>
                              <option value="2">Sales</option>
                              <option value="3">Accounting</option>
                            </select>
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col">
                          <textarea class="form-control" name="message" rows="5" placeholder="How can we help?"></textarea>
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col">
                          <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/co8.png">',
    }
);
editor.BlockManager.add('CO9',
    {
        label: '<b>Contact 9</b>',
        category: 'contacts',
        content: `<section class="fdb-block bg-gray">
              <div class="container">
                <div class="row text-center justify-content-center">
                  <div class="col-12 col-md-8 col-lg-7">
                    <p class="h2">support@website.com</p>
                    <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p><br></p>
                    <p class="h2">
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-facebook"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-twitter"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-instagram"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-google"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-pinterest"></i></a>
                    </p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/co9.png">',
    }
);
editor.BlockManager.add('CO10',
    {
        label: '<b>Contact 10</b>',
        category: 'contacts',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center justify-content-center">
                  <div class="col-12 col-md-8 col-lg-7">
                    <h1>Contact Us</h1>
                    <p class="lead">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  </div>
                </div>
                <div class="row-70"></div>
                <div class="row">
                  <div class="col-12 col-md-8 col-lg m-auto">
                    <form>
                      <div class="row">
                        <div class="col">
                          <input type="email" class="form-control" placeholder="Enter email">
                        </div>
                      </div>

                      <div class="row mt-4">
                        <div class="col">
                          <input type="email" class="form-control" placeholder="Subject">
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col">
                          <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col">
                          <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div class="col-12 col-md-8 col-lg pt-5 m-auto pt-lg-0">
                    <iframe class="mb-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
                      width="100%" height="200" frameborder="0" style="border:0" allowfullscreen=""></iframe>

                    <p><strong>Showroom</strong></p>
                    <p>
                      71 Pilgrim Avenue<br>Chevy Chase, MD 20815
                    </p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/co10.png">',
    }
);

// Features
editor.BlockManager.add('FF1',
    {
        label: '<b>Feature 1</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center justify-content-sm-center no-gutters">
                  <div class="col-12 col-sm-8 col-md-3 m-auto">
                    <h3><strong>Feature 1</strong></h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                  </div>

                  <div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0">
                    <h3><strong>Feature 2</strong></h3>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  </div>

                  <div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0">
                    <h3><strong>Feature 3</strong></h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>

                <div class="row text-center justify-content-md-center pt-3 pt-md-5">
                  <div class="col-12 col-sm-8 col-md-3 m-auto">
                    <h3><strong>Feature 4</strong></h3>
                    <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth</p>
                  </div>

                  <div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0">
                    <h3><strong>Feature 5</strong></h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day.</p>
                  </div>

                  <div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0">
                    <h3><strong>Feature 6</strong></h3>
                    <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks</p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff1.png">',
    }
);
editor.BlockManager.add('FF2',
    {
        label: '<b>Feature 2</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-left justify-content-sm-center">
                  <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto">
                    <h3><strong>Feature 1</strong></h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-md-0 pt-lg-0">
                    <h3><strong>Feature 2</strong></h3>
                    <p>Separated they live in Bookmarksgrove right at the coast of the.</p>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-lg-0">
                    <h3><strong>Feature 3</strong></h3>
                    <p>A small river named Duden flows by their place and supplies it with.</p>
                  </div>

                  <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-lg-0">
                    <h3><strong>Feature 4</strong></h3>
                    <p>But nothing the copy said could convince her and so it didn’t take long</p>
                  </div>
                </div>

                <div class="row text-left justify-content-sm-center pt-3 pt-lg-5">
                  <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto">
                    <h3><strong>Feature 5</strong></h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-md-0 pt-lg-0">
                    <h3><strong>Feature 6</strong></h3>
                    <p>Separated they live in Bookmarksgrove right at the coast of the.</p>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-lg-0">
                    <h3><strong>Feature 7</strong></h3>
                    <p>A small river named Duden flows by their place and supplies it with.</p>
                  </div>

                  <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-lg-0">
                    <h3><strong>Feature 8</strong></h3>
                    <p>But nothing the copy said could convince her and so it didn’t take long</p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff2.png">',
    }
);
editor.BlockManager.add('FF3',
    {
        label: '<b>Feature 3</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row">
                  <div class="col-12 text-center">
                    <h1>Features</h1>
                  </div>
                </div>

                <div class="row text-left justify-content-center pt-5">
                  <div class="col-12 col-md-6 col-lg-5 m-auto">
                    <h3><strong>Feature One</strong></h3>

                    <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <div class="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-md-0">
                    <h3><strong>Feature Two</strong></h3>

                    <p class="lead">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line.</p>
                  </div>
                </div>

                <div class="row text-left justify-content-center pt-lg-4">
                  <div class="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-lg-0">
                    <h3><strong>Feature Three</strong></h3>

                    <p class="lead">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.</p>
                  </div>
                  <div class="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-lg-0">
                    <h3><strong>Feature Four</strong></h3>

                    <p class="lead">A small river named Duden flows by their place far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff3.png">',
    }
);
editor.BlockManager.add('FF4',
    {
        label: '<b>Feature 4</b>',
        category: 'Features',
        content: ` <section class="fdb-block bg-dark" style="background-image: url(imgs/hero/purple.svg);">
              <div class="container">
                <div class="row">
                  <div class="col text-center">
                    <h1>TechTime Design Blocks</h1>
                  </div>
                </div>

                <div class="row-70"></div>

                <div class="row text-center justify-content-sm-center no-gutters">
                  <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto">
                    <div class="fdb-box fdb-touch">
                      <h2>Feature 1</h2>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                      <p class="mt-4"><a href="https://www.techtimekw.com">Learn More <i class="fas fa-angle-right"></i></a></p>
                    </div>
                  </div>
                  <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto pt-5 pt-xl-0">
                    <div class="fdb-box fdb-touch">
                      <h2>Feature 2</h2>
                      <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                      <p class="mt-4"><a href="https://www.techtimekw.com">Learn More <i class="fas fa-angle-right"></i></a></p>
                    </div>
                  </div>
                  <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto pt-5 pt-xl-0">
                    <div class="fdb-box fdb-touch">
                      <h2>Feature 3</h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                      <p class="mt-4"><a href="https://www.techtimekw.com">Learn More <i class="fas fa-angle-right"></i></a></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff4.png">',
    }
);
editor.BlockManager.add('FF5',
    {
        label: '<b>Feature 5</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-12 col-lg-6 col-xl-5">
                    <h1>Design Blocks</h1>
                    <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                    <div class="row pt-4 pt-xl-5">
                      <div class="col-12 col-md-5">
                        <h4><strong>Feature One</strong></h4>
                        <p>A small river named Duden flows</p>
                      </div>
                      <div class="col-12 col-md-5 m-auto pt-3 pt-md-0">
                        <h4><strong>Feature Two</strong></h4>
                        <p>Separated they live in Bookmarksgrove</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-8 col-lg-6 m-auto mr-lg-0 ml-lg-auto pt-5 pt-lg-0">
                    <img alt="image" class="img-fluid" src="../fraola/imgs/draws/scrum.svg">
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff5.png">',
    }
);
editor.BlockManager.add('FF6',
    {
        label: '<b>Feature 6</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-12 col-md-8 col-lg-6 m-md-auto ml-lg-0 mr-lg-auto">
                    <img alt="image" class="img-fluid" src="../fraola/imgs/draws/features.svg">
                  </div>
                  <div class="col-12 col-lg-6 col-xl-5 ml-sm-auto pt-5 pt-lg-0">
                    <h1>Design Blocks</h1>

                    <div class="row pt-4 pt-xl-5">
                      <div class="col-12 col-sm-6 col-xl-5">
                        <h4><strong>Feature One</strong></h4>
                        <p>Far far away, behind the word mountains</p>
                      </div>
                      <div class="col-12 col-sm-6 col-xl-5 m-auto pt-3 pt-sm-0">
                        <h4><strong>Feature Two</strong></h4>
                        <p>Separated they live in Bookmarksgrove</p>
                      </div>
                    </div>

                    <div class="row pt-3">
                      <div class="col-12 col-sm-6 col-xl-5">
                        <h4><strong>Feature Three</strong></h4>
                        <p>A small river named Duden flows by me</p>
                      </div>
                      <div class="col-12 col-sm-6 col-xl-5 m-auto pt-3 pt-sm-0">
                        <h4><strong>Feature Four</strong></h4>
                        <p>Separated they live in Bookmarksgrove</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff6.png">',
    }
);
editor.BlockManager.add('FF7',
    {
        label: '<b>Feature 7</b>',
        category: 'Features',
        content: ` <section class="fdb-block">
              <div class="container">
                <div class="row text-center">
                  <div class="col-12 col-sm-6 col-lg-5 col-xl-4 m-auto">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/layers.svg">
                    <h3><strong>Feature 1</strong></h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                  </div>

                  <div class="col-12 col-sm-6 col-lg-5 col-xl-4 m-auto pt-4 pt-sm-0">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/github.svg">
                    <h3><strong>Feature 2</strong></h3>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff7.png">',
    }
);
editor.BlockManager.add('FF8',
    {
        label: '<b>Feature 8</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center">
                  <div class="col-12">
                    <h1>Features</h1>
                    <img alt="image" class="img-fluid mt-5" src="../fraola/imgs/draws/email.svg">
                  </div>
                </div>

                <div class="row text-center justify-content-center mt-5 pt-5">
                  <div class="col-12 col-sm-4 col-lg-3 m-md-auto">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/monitor.svg">
                    <h3><strong>Feature 1</strong></h3>
                  </div>

                  <div class="col-12 col-sm-4 col-lg-3 m-auto pt-4 pt-sm-0">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/map.svg">
                    <h3><strong>Feature 2</strong></h3>
                  </div>

                  <div class="col-12 col-sm-4 col-lg-3 m-auto pt-4 pt-sm-0">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/package.svg">
                    <h3><strong>Feature 3</strong></h3>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff8.png">',
    }
);
editor.BlockManager.add('FF9',
    {
        label: '<b>Feature 9</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center">
                  <div class="col-12">
                    <h1>Features</h1>
                  </div>
                </div>

                <div class="row text-center justify-content-center mt-5">
                  <div class="col-12 col-sm-4 col-xl-3 m-md-auto">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/layers.svg">
                    <h3><strong>Feature 1</strong></h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  </div>

                  <div class="col-12 col-sm-4 col-xl-3 m-auto pt-4 pt-sm-0">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/gift.svg">
                    <h3><strong>Feature 2</strong></h3>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large ocean.</p>
                  </div>

                  <div class="col-12 col-sm-4 col-xl-3 m-auto pt-4 pt-sm-0">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/cloud.svg">
                    <h3><strong>Feature 3</strong></h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff9.png">',
    }
);
editor.BlockManager.add('FF10',
    {
        label: '<b>Feature 10</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center">
                  <div class="col-12">
                    <h1>Features</h1>
                  </div>
                </div>
                <div class="row text-center justify-content-center mt-5">
                  <div class="col-12 col-sm-6 col-lg-3">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/monitor.svg">
                    <h3><strong>Feature One</strong></h3>
                    <p>Far far away, behind the word mountains, far from the countries</p>
                  </div>

                  <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-sm-0">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/map-pin.svg">
                    <h3><strong>Feature Two</strong></h3>
                    <p>Separated they live in Bookmarksgrove right at the coast</p>
                  </div>

                  <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/life-buoy.svg">
                    <h3><strong>Feature Three</strong></h3>
                    <p>A small river named Duden flows by their place and supplies it</p>
                  </div>

                  <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/package.svg">
                    <h3><strong>Feature Four</strong></h3>
                    <p>Duden flows by their place far far away, behind the word mountains.</p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff10.png">',
    }
);
editor.BlockManager.add('FF11',
    {
        label: '<b>Feature 11</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center">
                  <div class="col-12">
                    <h1>Features</h1>
                  </div>
                </div>
                <div class="row text-left mt-5">
                  <div class="col-12 col-md-4">
                    <div class="row">
                      <div class="col-3">
                        <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/gift.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature One</strong></h3>
                        <p>Far far away, behind the word mountains, far from the countries</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-4 pt-3 pt-sm-4 pt-md-0">
                    <div class="row">
                      <div class="col-3">
                        <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/cloud.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature Two</strong></h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts.</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-4 pt-3 pt-sm-4 pt-md-0">
                    <div class="row">
                      <div class="col-3">
                        <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/map-pin.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature Three</strong></h3>
                        <p>A small river named Duden flows by their place and supplies it</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row text-left pt-3 pt-sm-4 pt-md-5">
                  <div class="col-12 col-md-4">
                    <div class="row">
                      <div class="col-3">
                        <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/layers.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature Four</strong></h3>
                        <p>Duden flows by their place far far away, behind the word mountains.</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-4 pt-3 pt-sm-4 pt-md-0">
                    <div class="row">
                      <div class="col-3">
                        <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/life-buoy.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature Five</strong></h3>
                        <p>Separated they live in Bookmarksgrove right at the coast</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-4 pt-3 pt-sm-4 pt-md-0">
                    <div class="row">
                      <div class="col-3">
                        <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/layout.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature Six</strong></h3>
                        <p>On her way she met a copy. The copy warned the Little Blind Text.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff11.png">',
    }
);
editor.BlockManager.add('FF12',
    {
        label: '<b>Feature 12</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center">
                  <div class="col-12">
                    <h1>Features</h1>
                  </div>
                </div>
                <div class="row text-left mt-5">
                  <div class="col-12 col-sm-6 col-lg-3">
                    <div class="row">
                      <div class="col-3">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/layers.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature One</strong></h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-sm-0">
                    <div class="row">
                      <div class="col-3">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/layout.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature Two</strong></h3>
                        <p>Separated they live in Bookmarksgrove right at the coast</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">
                    <div class="row">
                      <div class="col-3">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/life-buoy.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature Three</strong></h3>
                        <p>A small river named Duden flows by their place and supplies it</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">
                    <div class="row">
                      <div class="col-3">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/map-pin.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature Four</strong></h3>
                        <p>Far far away, behind the word mountains, far from the countries</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row text-left pt-3 pt-lg-5">
                  <div class="col-12 col-sm-6 col-lg-3">
                    <div class="row">
                      <div class="col-3">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/monitor.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature Five</strong></h3>
                        <p>On her way she met a copy. The copy warned the Little Blind Text.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-sm-0">
                    <div class="row">
                      <div class="col-3">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/package.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature Six</strong></h3>
                        <p>Far far away, behind the word mountains, far from the countries</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">
                    <div class="row">
                      <div class="col-3">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/cloud.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature Seven</strong></h3>
                        <p>Duden flows by their place far far away, behind the word mountains.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">
                    <div class="row">
                      <div class="col-3">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/gift.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature Eight</strong></h3>
                        <p>Separated they live in Bookmarksgrove right at the coast</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff12.png">',
    }
);
editor.BlockManager.add('FF13',
    {
        label: '<b>Feature 13</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-lg-right align-items-center">
                  <div class="col-12 col-sm-6 col-lg-3">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/gift.svg">
                    <h4><strong>Feature One</strong></h4>
                    <p>Far far away, behind the word mountains is hope.</p>

                    <img alt="image" class="fdb-icon mt-3 mt-xl-5" src="../fraola/imgs/icons/layers.svg">
                    <h4><strong>Feature Two</strong></h4>
                    <p>On her way she met a copy of the Little Blind Text.</p>

                    <img alt="image" class="fdb-icon mt-3 mt-xl-5" src="../fraola/imgs/icons/map.svg">
                    <h4><strong>Feature Three</strong></h4>
                    <p>Even the all-powerful has no control about the blind texts</p>
                  </div>

                  <div class="col-12 col-sm-6 col-lg-3 text-left pt-3 pt-sm-0 order-lg-12">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/map-pin.svg">
                    <h4><strong>Feature Four</strong></h4>
                    <p>Duden flows by their place, behind the word mountains.</p>

                    <img alt="image" class="fdb-icon mt-3 mt-xl-5" src="../fraola/imgs/icons/package.svg">
                    <h4><strong>Feature Five</strong></h4>
                    <p>Separated they live in Bookmark right at the coast</p>

                    <img alt="image" class="fdb-icon mt-3 mt-xl-5" src="../fraola/imgs/icons/monitor.svg">
                    <h4><strong>Feature Six</strong></h4>
                    <p>A small river named Duden flows by their place and supplies it</p>
                  </div>

                  <div class="col-7 col-sm-4 col-lg-4 m-auto pt-5 pt-lg-0 order-lg-1">
                    <img alt="image" class="img-fluid" src="../fraola/imgs/draws/simple-iphone.svg">
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff13.png">',
    }
);
editor.BlockManager.add('FF14',
    {
        label: '<b>Feature 14</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-right align-items-center">
                  <div class="col-7 col-md-4 m-auto">
                    <img alt="image" class="img-fluid" src="../fraola/imgs/draws/simple-iphone.svg">
                  </div>

                  <div class="col-12 col-md-7 col-lg-5 m-auto text-left pt-5 pt-md-0">
                    <div class="row pb-lg-5">
                      <div class="col-3">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/layers.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature Seven</strong></h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts.</p>
                      </div>
                    </div>

                    <div class="row pt-4 pt-md-5 pb-lg-5">
                      <div class="col-3">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/monitor.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature Seven</strong></h3>
                        <p>Duden flows by their place far far away, behind the word mountains.</p>
                      </div>
                    </div>


                    <div class="row pt-4 pt-md-5">
                      <div class="col-3">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/cloud.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature Seven</strong></h3>
                        <p>A small river named Duden flows by their place and supplies it.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff14.png">',
    }
);
editor.BlockManager.add('FF15',
    {
        label: '<b>Feature 15</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-right align-items-center">
                  <div class="col-12 col-lg-6 col-xl-5 m-lg-auto text-left">
                    <h1>Features</h1>
                    <p class="h3 pb-xl-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                    <div class="row pt-5">
                      <div class="col-3">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/gift.svg">
                      </div>
                      <div class="col-9">
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences.</p>
                      </div>
                    </div>

                    <div class="row pt-5">
                      <div class="col-9 text-right">
                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, there live the blind texts.</p>
                      </div>

                      <div class="col-3">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/map-pin.svg">
                      </div>
                    </div>
                  </div>

                  <div class="col-7 col-sm-4 m-auto pt-5 pt-md-0">
                    <img alt="image" class="img-fluid" src="../fraola/imgs/draws/simple-iphone.svg">
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff15.png">',
    }
);
editor.BlockManager.add('FF16',
    {
        label: '<b>Feature 16</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center pb-xl-5">
                  <div class="col-12 col-md-8 text-center">
                    <h1>TechTime Design Blocks</h1>
                    <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  </div>
                </div>

                <div class="row text-right align-items-center-lg align-items-end pt-5">
                  <div class="col-7 col-sm-4 m-auto mb-md-0 mt-md-0 m-lg-auto">
                    <img alt="image" class="img-fluid" src="../fraola/imgs/draws/simple-iphone.svg">
                  </div>

                  <div class="col-12 col-md-7 col-lg-6 col-xl-5 m-auto text-left pt-5 pt-md-0">
                    <h3><strong>Feature One</strong></h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences.</p>

                    <h3 class="mt-4 mt-xl-5"><strong>Feature Two</strong></h3>
                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, there live the blind texts.</p>

                    <h3 class="mt-4 mt-xl-5"><strong>Feature Three</strong></h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum.</p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff16.png">',
    }
);
editor.BlockManager.add('FF17',
    {
        label: '<b>Feature 17</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col text-left">
                    <h1>TechTime Design Blocks</h1>
                    <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  </div>
                </div>
                <div class="row justify-content-center mb-5">
                  <div class="col-10">
                    <img alt="image" class="img-fluid mt-5" src="../fraola/imgs/draws/android.svg">
                  </div>
                </div>

                <div class="row text-left pt-5">
                  <div class="col-12 col-md-4">
                    <div class="row">
                      <div class="col-3">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/github.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature One</strong></h3>
                        <p>Far far away, behind the word mountains, far from the countries</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-4 pt-4 pt-md-0">
                    <div class="row">
                      <div class="col-3">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/layers.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature Two</strong></h3>
                        <p>Separated they live in Bookmarksgrove right at the coast</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-4 pt-4 pt-md-0">
                    <div class="row">
                      <div class="col-3">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/life-buoy.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature Three</strong></h3>
                        <p>A small river named Duden flows by their place and supplies it</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff17.png">',
    }
);
editor.BlockManager.add('FF18',
    {
        label: '<b>Feature 18</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 text-center">
                    <h1>Features</h1>
                  </div>
                </div>

                <div class="row text-center mt-5">
                  <div class="col-12 col-sm-4">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/gift.svg">
                    <h3><strong>Feature One</strong></h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                  </div>

                  <div class="col-12 col-sm-4 pt-4 pt-sm-0">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/cloud.svg">
                    <h3><strong>Feature Two</strong></h3>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. </p>
                  </div>

                  <div class="col-12 col-sm-4 pt-4 pt-sm-0">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/layers.svg">
                    <h3><strong>Feature Three</strong></h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country,</p>
                  </div>
                </div>

                <div class="row mt-5 justify-content-center">
                  <div class="col-8">
                    <img alt="image" class="img-fluid" src="../fraola/imgs/draws/product-tour.svg">
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff18.png">',
    }
);
editor.BlockManager.add('FF19',
    {
        label: '<b>Feature 19</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 text-left">
                    <h1>TechTime Design Blocks</h1>
                    <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  </div>
                </div>

                <div class="row text-left mt-5">
                  <div class="col-12 col-sm-8 col-md-4 col-lg-3 m-sm-auto mr-md-auto ml-md-0">
                    <img alt="image" class="img-fluid rounded" src="../fraola/imgs/hero/blue.svg">
                    <h3><strong>Feature One</strong></h3>
                    <p>Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  </div>

                  <div class="col-12 col-sm-8 col-md-4 col-lg-3 m-sm-auto pt-5 pt-md-0">
                    <img alt="image" class="img-fluid rounded" src="../fraola/imgs/hero/red.svg">
                    <h3><strong>Feature Two</strong></h3>
                    <p> It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                  </div>

                  <div class="col-12 col-sm-8 col-md-4 col-lg-3 m-sm-auto ml-md-auto mr-md-0 pt-5 pt-md-0">
                    <img alt="image" class="img-fluid rounded" src="../fraola/imgs/hero/yellow.svg">
                    <h3><strong>Feature Three</strong></h3>
                    <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.</p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff19.png">',
    }
);
editor.BlockManager.add('FF20',
    {
        label: '<b>Feature 20</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 text-left">
                    <h1>TechTime Design Blocks</h1>
                    <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                    <img alt="image" class="img-fluid mt-5" src="../fraola/imgs/draws/android.svg">
                  </div>
                </div>

                <div class="row text-left pt-5">
                  <div class="col-12 col-md-6">
                    <h3><strong>Feature One</strong></h3>

                    <p>Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with
                      the necessary regelialia. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>

                    <p><a href="https://www.techtimekw.com">Learn More <i class="fas fa-angle-right"></i></a></p>
                  </div>
                  <div class="col-12 col-md-6 pt-4 pt-md-0">
                    <h3><strong>Feature Two</strong></h3>

                    <p> It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. The Big Oxmox advised her not to do so, because there
                      were thousands of bad Commas, wild Question Marks and devious Semikoli. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from
                      its origin.</p>

                    <p><a href="https://www.techtimekw.com">Learn More <i class="fas fa-angle-right"></i></a></p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff20.png">',
    }
);
editor.BlockManager.add('FF21',
    {
        label: '<b>Feature 21</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 text-left">
                    <h1>TechTime Design Blocks</h1>
                    <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. On her way she met a copy.
                      The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text.</p>
                  </div>
                </div>

                <div class="row text-left pt-5">
                  <div class="col-12 col-sm-6 col-md-5">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/layers.svg">
                    <h3><strong>Feature One</strong></h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                  </div>

                  <div class="col-12 col-sm-6 col-md-5 ml-sm-auto pt-5 pt-sm-0">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/package.svg">
                    <h3><strong>Feature Two</strong></h3>
                    <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff21.png">',
    }
);
editor.BlockManager.add('FF22',
    {
        label: '<b>Feature 22</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center pb-5">
                  <div class="col-12 text-center">
                    <h1>TechTime Design Blocks</h1>
                  </div>
                </div>

                <div class="row text-left align-items-center pt-5 pb-md-5">
                  <div class="col-4 col-md-5">
                    <img alt="image" class="img-fluid" src="../fraola/imgs/draws/designer.svg">
                  </div>

                  <div class="col-12 col-md-5 m-md-auto">
                    <h2><strong>Feature One</strong></h2>
                    <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p><a href="https://www.techtimekw.com">Learn More <i class="fas fa-angle-right"></i></a></p>
                  </div>
                </div>

                <div class="row text-left align-items-center pt-5 pb-md-5">
                  <div class="col-4 col-md-5 m-md-auto order-md-5">
                    <img alt="image" class="img-fluid" src="../fraola/imgs/draws/design-life.svg">
                  </div>

                  <div class="col-12 col-md-5">
                    <h2><strong>Feature Two</strong></h2>
                    <p class="lead">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                    <p><a href="https://www.techtimekw.com">Learn More <i class="fas fa-angle-right"></i></a></p>
                  </div>
                </div>

                <div class="row text-left align-items-center pt-5">
                  <div class="col-4 col-md-5">
                    <img alt="image" class="img-fluid" src="../fraola/imgs/draws/design-community.svg">
                  </div>

                  <div class="col-12 col-md-5 m-md-auto">
                    <h2><strong>Feature Three</strong></h2>
                    <p class="lead">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn
                      around.
                    </p>
                    <p><a href="https://www.techtimekw.com">Learn More <i class="fas fa-angle-right"></i></a></p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff22.png">',
    }
);
editor.BlockManager.add('FF23',
    {
        label: '<b>Feature 23</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-md-10 col-lg-8 text-left">
                    <h1>TechTime Design Blocks is simply ahead the word mountains</h1>
                    <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                    <p class="lead"><a href="https://www.techtimekw.com">Explore all features <i class="fas fa-angle-right"></i></a></p>
                  </div>
                </div>

                <div class="row text-center no-gutters pt-5">
                  <div class="col-12 col-md-10 col-lg-8">
                    <div class="row">
                      <div class="col-8 col-sm-5 col-md-2 m-auto">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/github.svg">
                        <h4>Feature One</h4>
                      </div>
                      <div class="col-8 col-sm-5 col-md-2 m-auto pt-5 pt-sm-0">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/monitor.svg">
                        <h4>Feature Two</h4>
                      </div>
                      <div class="col-8 col-sm-5 col-md-2 m-auto pt-5 pt-md-0">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/layers.svg">
                        <h4>Feature Three</h4>
                      </div>
                      <div class="col-8 col-sm-5 col-md-2 m-auto pt-5 pt-md-0">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/cloud.svg">
                        <h4>Feature Four</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff23.png">',
    }
);
editor.BlockManager.add('FF24',
    {
        label: '<b>Feature 24</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row align-items-top">
                  <div class="col-12 col-md-6 col-xl-4 m-auto">
                    <h2>Learn more about the TechTime Design Blocks you love</h2>
                  </div>

                  <div class="col-12 col-md-6 pt-5 pt-md-0">
                    <div class="row justify-content-left">
                      <div class="col-3 m-auto text-center">
                        <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/gift.svg">
                        <p><a href="https://www.techtimekw.com">One <i class="fas fa-angle-right"></i></a></p>
                      </div>
                      <div class="col-3 m-auto text-center">
                        <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/map.svg">
                        <p><a href="https://www.techtimekw.com">Two <i class="fas fa-angle-right"></i></a></p>
                      </div>
                      <div class="col-3 m-auto text-center">
                        <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/life-buoy.svg">
                        <p><a href="https://www.techtimekw.com">Three <i class="fas fa-angle-right"></i></a></p>
                      </div>
                    </div>

                    <div class="row justify-content-left mt-4 mt-xl-5">
                      <div class="col-3 m-auto text-center">
                        <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/layout.svg">
                        <p><a href="https://www.techtimekw.com">Four <i class="fas fa-angle-right"></i></a></p>
                      </div>
                      <div class="col-3 m-auto text-center">
                        <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/map-pin.svg">
                        <p><a href="https://www.techtimekw.com">Five <i class="fas fa-angle-right"></i></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff24.png">',
    }
);
editor.BlockManager.add('FF25',
    {
        label: '<b>Feature 25</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center">
                  <div class="col-12">
                    <h1>There is a feature for everyone</h1>
                    <p class="lead"><a href="https://www.techtimekw.com">See all features <i class="fas fa-angle-right"></i></a>
                    </p>
                  </div>
                </div>

                <div class="row text-center justify-content-center mt-5">
                  <div class="col-10 col-sm-3">
                    <img alt="image" class="img-fluid rounded" src="../fraola/imgs/hero/blue.svg">
                    <h3><strong>Feature One</strong></h3>
                  </div>
                  <div class="col-10 col-sm-3 pt-5 pt-sm-0">
                    <img alt="image" class="img-fluid rounded" src="../fraola/imgs/hero/red.svg">
                    <h3><strong>Feature Two</strong></h3>
                  </div>

                  <div class="col-10 col-sm-3 pt-5 pt-sm-0">
                    <img alt="image" class="img-fluid rounded" src="../fraola/imgs/hero/purple.svg">
                    <h3><strong>Feature Three</strong></h3>
                  </div>

                  <div class="col-10 col-sm-3 pt-5 pt-sm-0">
                    <img alt="image" class="img-fluid rounded" src="../fraola/imgs/hero/yellow.svg">
                    <h3><strong>Feature Four</strong></h3>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff25.png">',
    }
);
editor.BlockManager.add('FF26',
    {
        label: '<b>Feature 26</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row align-items-center pb-xl-5">
                  <div class="col-12 col-md-7 col-xl-5">
                    <h1>TechTime Design Blocks</h1>
                    <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 m-sm-auto mr-md-0 ml-md-auto pt-4 pt-md-0">
                    <img alt="image" class="img-fluid" src="../fraola/imgs/draws/developer.svg">
                  </div>
                </div>

                <div class="row pt-5">
                  <div class="col-12 col-sm-6 col-md-3">
                    <h3><strong>Feature One</strong></h3>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large ocean.</p>
                  </div>

                  <div class="col-12 col-sm-6 col-md-3 pt-3 pt-sm-0">
                    <h3><strong>Feature Two</strong></h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>

                  <div class="col-12 col-sm-6 col-md-3 pt-3 pt-md-0">
                    <h3><strong>Feature Three</strong></h3>
                    <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  </div>

                  <div class="col-12 col-sm-6 col-md-3 pt-3 pt-md-0">
                    <h3><strong>Feature Four</strong></h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff26.png">',
    }
);
editor.BlockManager.add('FF27',
    {
        label: '<b>Feature 27</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center pb-xl-5">
                  <div class="col-8 col-sm-8 text-center">
                    <h1>TechTime Design Blocks</h1>
                    <img alt="image" class="img-fluid mt-5" src="../fraola/imgs/draws/development.svg">
                  </div>
                </div>

                <div class="row text-left justify-content-center pt-5">
                  <div class="col-12 col-md-6 col-lg-5 m-sm-auto">
                    <div class="row">
                      <div class="col-3">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/github.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature One</strong></h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-lg-5 m-sm-auto pt-3 pt-sm-5 pt-md-0">
                    <div class="row">
                      <div class="col-3">
                        <img alt="image" class="img-fluid" src="../fraola/imgs/icons/layers.svg">
                      </div>
                      <div class="col-9">
                        <h3><strong>Feature Two</strong></h3>
                        <p>Separated they live in Bookmarksgrove, right at the coast of the Semantics, a large language ocean.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff27.png">',
    }
);
editor.BlockManager.add('FF28',
    {
        label: '<b>Feature 28</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center">
                  <div class="col-12">
                    <h1>Features</h1>
                  </div>
                </div>
                <div class="row text-center justify-content-center mt-5">
                  <div class="col-12 col-md-4 col-lg-3 m-md-auto">
                    <h3><strong>Feature 1</strong></h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  </div>

                  <div class="col-12 col-md-4 col-lg-3 m-md-auto pt-3 pt-md-0">
                    <h3><strong>Feature 2</strong></h3>
                    <p>Separated they live in Bookmarksgrove right at the coast, a large language ocean.</p>
                  </div>

                  <div class="col-12 col-md-4 col-lg-3 m-md-auto pt-3 pt-md-0">
                    <h3><strong>Feature 3</strong></h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff28.png">',
    }
);
editor.BlockManager.add('FF29',
    {
        label: '<b>Feature 29</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12col-md-10 col-lg-8 text-center">
                    <h1>TechTime Design Blocks</h1>
                  </div>
                </div>

                <div class="row justify-content-center text-center mt-5">
                  <div class="col-12 col-sm-6 col-md-5 col-lg-3">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/github.svg">
                    <h3><strong>Feature one longer Text</strong></h3>
                  </div>

                  <div class="col-12 col-sm-6 col-md-5 col-lg-3 pt-4 pt-sm-0">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/gift.svg">
                    <h3><strong>Feature two shorter</strong></h3>
                  </div>
                </div>

                <div class="row justify-content-center text-center mt-5 mt-md-4 pt-5">
                  <div class="col-12 col-md-10 col-lg-8">
                    <img alt="image" class="img-fluid" src="../fraola/imgs/draws/social-media.svg">
                    <p><em>Coming this fall</em></p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff29.png">',
    }
);
editor.BlockManager.add('FF30',
    {
        label: '<b>Feature 30</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center">
                  <div class="col-12 col-sm-6 col-md-3">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/monitor.svg">
                    <h3><strong>The all-powerful Pointing has no control</strong></h3>
                    <p class="mt-3"><a class="btn btn-primary" href="https://www.techtimekw.com">Learn</a></p>
                  </div>

                  <div class="col-12 col-sm-6 col-md-3 pt-5 pt-sm-0">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/layout.svg">
                    <h3><strong>Far far away, behind the word mountains</strong></h3>
                    <p class="mt-3"><a class="btn btn-primary" href="https://www.techtimekw.com">Learn</a></p>
                  </div>

                  <div class="col-12 col-sm-6 col-md-3 pt-5 pt-md-0">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/map-pin.svg">
                    <h3><strong>The Big Oxmox advised her not to do so</strong></h3>
                    <p class="mt-3"><a class="btn btn-primary" href="https://www.techtimekw.com">Learn</a></p>
                  </div>

                  <div class="col-12 col-sm-6 col-md-3 pt-5 pt-md-0">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/github.svg">
                    <h3><strong>The copy warned the Little Blind Text</strong></h3>
                    <p class="mt-3"><a class="btn btn-primary" href="https://www.techtimekw.com">Learn</a></p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff30.png">',
    }
);
editor.BlockManager.add('FF31',
    {
        label: '<b>Feature 31</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center">
                  <div class="col-12 col-md-8 m-auto col-lg-4">
                    <div class="fdb-box fdb-touch">
                      <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/map.svg">
                      <h2>Feature 1</h2>
                      <p>Far far away, behind the word mountains, far from the countries.</p>
                    </div>
                  </div>

                  <div class="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0">
                    <div class="fdb-box fdb-touch">
                      <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/cloud.svg">
                      <h2>Feature 2</h2>
                      <p>Separated they live in Bookmarksgrove right at the coast.</p>
                    </div>
                  </div>

                  <div class="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0">
                    <div class="fdb-box fdb-touch">
                      <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/package.svg">
                      <h2>Feature 3</h2>
                      <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff31.png">',
    }
);
editor.BlockManager.add('FF32',
    {
        label: '<b>Feature 32</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-left">
                  <div class="col-12 col-md-8 m-auto col-lg-4">
                    <div class="fdb-box fdb-touch">
                      <h2>Feature 1</h2>
                      <p>Far far away, behind the word mountains, far from the country Vokalia, there live the blind texts.</p>
                      <p><a href="https://www.techtimekw.com">Read more</a></p>
                    </div>
                  </div>
                  <div class="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0">
                    <div class="fdb-box fdb-touch">
                      <h2>Feature 2</h2>
                      <p>Separated they live in Bookmarks right at the coast of the Semantics, a large language ocean.</p>
                      <p><a href="https://www.techtimekw.com">Read more</a></p>
                    </div>
                  </div>
                  <div class="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0">
                    <div class="fdb-box fdb-touch">
                      <h2>Feature 3</h2>
                      <p>A small river named Duden flows by their small place and supplies it with the necessary regelialia.</p>
                      <p><a href="https://www.techtimekw.com">Read more</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff32.png">',
    }
);
editor.BlockManager.add('FF33',
    {
        label: '<b>Feature 33</b>',
        category: 'Features',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-left">
                  <div class="col-12 col-md-4">
                    <h2>Feature One</h2>
                    <p><strong>Far far away</strong>, behind the word mountains, far from the countries <a href="https://www.techtimekw.com">Vokalia and Consonantia</a>, there live the blind texts.</p>
                  </div>

                  <div class="col-12 col-md-4 pt-5 pt-sm-4 pt-md-0">
                    <h2>Feature Two</h2>
                    <p> A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>

                  <div class="col-12 col-md-4 pt-5 pt-sm-4 pt-md-0">
                    <h2>Feature Three</h2>
                    <p>Even the all-powerful Pointing has no control about the <strong>blind texts</strong> it is an almost unorthographic life.</p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/ff32.png">',
    }
);

// Footers
editor.BlockManager.add('FO1',
    {
        label: '<b>Footer 1</b>',
        category: 'Footers',
        content: `<footer class="fdb-block footer-small">
              <div class="container">
                <div class="row text-center">
                  <div class="col">
                    <p>© 2018 TechTime. All Rights Reserved</p>
                  </div>
                </div>
              </div>
            </footer>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/fo1.png">',
    }
);
editor.BlockManager.add('FO2',
    {
        label: '<b>Footer 2</b>',
        category: 'Footers',
        content: `<footer class="fdb-block footer-small bg-dark">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-12 col-md-8">
                    <ul class="nav justify-content-center justify-content-md-start">
                      <li class="nav-item">
                        <a class="nav-link active" href="https://www.techtimekw.com">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Terms</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">About</a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right">
                    © 2018 TechTime. All Rights Reserved
                  </div>
                </div>
              </div>
            </footer>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/fo2.png">',
    }
);
editor.BlockManager.add('FO3',
    {
        label: '<b>Footer 3</b>',
        category: 'Footers',
        content: `<footer class="fdb-block footer-small">
              <div class="container">
                <div class="row text-center align-items-center">
                  <div class="col-12 col-md-8">
                    <ul class="nav justify-content-center justify-content-md-start align-items-center">
                      <li class="nav-item">
                        <a class="nav-link active" href="https://www.techtimekw.com">
                            <img alt="image" src="../fraola/imgs/logo.png" height="40">
                          </a>
                      </li>
                      <li class="w-100 d-block d-sm-none"></li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Terms</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">About</a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-12 col-md-4 mt-4 mt-md-0 text-md-right">
                    © 2013-2018 TechTime
                  </div>
                </div>
              </div>
            </footer>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/fo3.png">',
    }
);
editor.BlockManager.add('FO4',
    {
        label: '<b>Footer 4</b>',
        category: 'Footers',
        content: `<footer class="fdb-block footer-small">
              <div class="container">
                <div class="row text-center align-items-center">
                  <div class="col-12 col-sm-6 col-md-4 text-sm-left">
                    <img alt="image" src="../fraola/imgs/logo.png" height="40">
                  </div>

                  <div class="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0 text-center text-sm-right text-md-center">
                    © 2013-2018 TechTime
                  </div>

                  <div class="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right">
                    <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                    <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-facebook" aria-hidden="true"></i></a>
                    <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-pinterest" aria-hidden="true"></i></a>
                    <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-google" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
            </footer>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/fo4.png">',
    }
);
editor.BlockManager.add('FO5',
    {
        label: '<b>Footer 5</b>',
        category: 'Footers',
        content: `<footer class="fdb-block footer-small">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-12 col-md-6">
                    <ul class="nav justify-content-center justify-content-md-start">
                      <li class="nav-item">
                        <a class="nav-link active" href="https://www.techtimekw.com">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Terms</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">About</a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-12 col-md-6 mt-4 mt-md-0 text-center text-md-right">
                    <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                    <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-facebook" aria-hidden="true"></i></a>
                    <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-pinterest" aria-hidden="true"></i></a>
                    <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-google" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
            </footer>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/fo5.png">',
    }
);
editor.BlockManager.add('FO6',
    {
        label: '<b>Footer 6</b>',
        category: 'Footers',
        content: `<footer class="fdb-block footer-small bg-dark">
              <div class="container">
                <div class="row text-center align-items-center">
                  <div class="col">
                    <ul class="nav justify-content-center">
                      <li class="nav-item">
                        <a class="nav-link active" href="https://www.techtimekw.com">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Privacy Policy</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Terms</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">About</a>
                      </li>
                    </ul>

                    <p class="h5 mt-5">© 2013-2018 TechTime</p>
                  </div>
                </div>
              </div>
            </footer>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/fo6.png">',
    }
);
editor.BlockManager.add('FO7',
    {
        label: '<b>Footer 7</b>',
        category: 'Footers',
        content: ` <footer class="fdb-block footer-small">
              <div class="container">
                <div class="row text-center align-items-center">
                  <div class="col-12 col-lg-2 text-lg-left">
                    <img alt="image" src="../fraola/imgs/logo.png" height="40">
                  </div>

                  <div class="col mt-4 mt-lg-0 text-center">
                    <ul class="nav justify-content-center">
                      <li class="nav-item">
                        <a class="nav-link active" href="https://www.techtimekw.com">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Privacy Policy</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Terms</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">About</a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-12 col-lg-2 mt-4 mt-lg-0 text-lg-right">
                    <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                    <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-facebook" aria-hidden="true"></i></a>
                    <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-pinterest" aria-hidden="true"></i></a>
                    <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-google" aria-hidden="true"></i></a>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col text-center">
                    © 2018 TechTime. All Rights Reserved
                  </div>
                </div>
              </div>
            </footer>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/fo7.png">',
    }
);
editor.BlockManager.add('FO8',
    {
        label: '<b>Footer 8</b>',
        category: 'Footers',
        content: `<footer class="fdb-block footer-small">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-12 col-md-6">
                    <ul class="nav justify-content-center justify-content-md-start">
                      <li class="nav-item">
                        <a class="nav-link active" href="https://www.techtimekw.com">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Terms</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">About</a>
                      </li>
                    </ul>
                  </div>

                  <div class="col mt-4 mt-md-0 text-center text-md-right">
                    <a href="https://www.techtimekw.com" class="btn btn-primary">Contact Us</a>
                  </div>
                </div>
              </div>
            </footer>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/fo8.png">',
    }
);
editor.BlockManager.add('FO9',
    {
        label: '<b>Footer 9</b>',
        category: 'Footers',
        content: `<footer class="fdb-block footer-large">
              <div class="container">
                <div class="row align-items-top text-center">
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3 text-sm-left">
                    <h3><strong>Group 1</strong></h3>
                    <nav class="nav flex-column">
                      <a class="nav-link active" href="https://www.techtimekw.com">Home</a>
                      <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      <a class="nav-link" href="https://www.techtimekw.com">Pricing</a>
                      <a class="nav-link" href="https://www.techtimekw.com">Team</a>
                      <a class="nav-link" href="https://www.techtimekw.com">Contact Us</a>
                    </nav>
                  </div>

                  <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 mt-sm-0 text-sm-left">
                    <h3><strong>Group 2</strong></h3>
                    <nav class="nav flex-column">
                      <a class="nav-link active" href="https://www.techtimekw.com">Privacy Policy</a>
                      <a class="nav-link" href="https://www.techtimekw.com">Terms</a>
                      <a class="nav-link" href="https://www.techtimekw.com">FAQ</a>
                      <a class="nav-link" href="https://www.techtimekw.com">Support</a>
                    </nav>
                  </div>

                  <div class="col-12 col-md-4 col-lg-3 text-md-left mt-5 mt-md-0">
                    <h3><strong>About Us</strong></h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>

                  <div class="col-12 col-lg-2 ml-auto text-lg-left mt-4 mt-lg-0">
                    <h3><strong>Follow Us</strong></h3>
                    <p class="lead">
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-facebook" aria-hidden="true"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-pinterest" aria-hidden="true"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-google" aria-hidden="true"></i></a>
                    </p>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col text-center">
                    © 2018 TechTime. All Rights Reserved
                  </div>
                </div>
              </div>
            </footer>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/fo9.png">',
    }
);
editor.BlockManager.add('FO10',
    {
        label: '<b>Footer 10</b>',
        category: 'Footers',
        content: `<footer class="fdb-block footer-large bg-dark">
              <div class="container">
                <div class="row align-items-top text-center text-md-left">
                  <div class="col-12 col-sm-6 col-md-4">
                    <h3><strong>Country A</strong></h3>
                    <p>Street Address 52<br>Contact Name</p>
                    <p>+44 827 312 5002</p>
                    <p><a href="https://www.techtimekw.com">countrya@amazing.com</a></p>
                  </div>

                  <div class="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0">
                    <h3><strong>Country B</strong></h3>
                    <p>Street Address 100<br>Contact Name</p>
                    <p>+13 827 312 5002</p>
                    <p><a href="https://www.techtimekw.com">countryb@amazing.com</a></p>
                  </div>

                  <div class="col-12 col-md-4 mt-5 mt-md-0 text-md-left">
                    <h3><strong>About Us</strong></h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>

                <div class="row mt-5">
                  <div class="col text-center">
                    © 2018 TechTime. All Rights Reserved
                  </div>
                </div>
              </div>
            </footer>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/fo10.png">',
    }
);
editor.BlockManager.add('FO11',
    {
        label: '<b>Footer 11</b>',
        category: 'Footers',
        content: ` <footer class="fdb-block footer-small">
              <div class="container">
                <div class="row align-items-center text-center">
                  <div class="col-12 col-lg-4 text-lg-left">
                    © 2018 TechTime
                  </div>

                  <div class="col-12 col-lg-4 mt-4 mt-lg-0">
                    <img alt="image" src="../fraola/imgs/logo.png" height="40">
                  </div>

                  <div class="col-12 col-lg-4 text-lg-right mt-4 mt-lg-0">
                    <ul class="nav justify-content-lg-end justify-content-center">
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Privacy</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Terms</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">About</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/fo11.png">',
    }
);
editor.BlockManager.add('FO12',
    {
        label: '<b>Footer 12</b>',
        category: 'Footers',
        content: `<footer class="fdb-block footer-large">
              <div class="container">
                <div class="row text-center">
                  <div class="col">
                    <h3>Company Name</h3>
                    <p>70 Bowman St.<br>South Windsor, CT 06074</p>
                    <p>USA</p>
                    <p>+13 827 312 5002</p>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col text-center">
                    <p class="lead">
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-facebook" aria-hidden="true"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-pinterest" aria-hidden="true"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-google" aria-hidden="true"></i></a>
                    </p>
                  </div>
                </div>
              </div>
            </footer>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/fo12.png">',
    }
);

// Forms
editor.BlockManager.add('F4',
    {
        label: '<b>Form 4</b>',
        category: 'Forms',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-8 col-lg-6 text-center">
                    <h1>Subscribe</h1>
                    <div class="input-group mt-4 mb-4">
                      <input type="text" class="form-control" placeholder="Enter your email address">
                      <div class="input-group-append">
                        <button class="btn btn-primary" type="button">Submit</button>
                      </div>
                    </div>

                    <p class="h4">Find us on <a href="https://www.techtimekw.com">Facebook</a> and <a href="https://www.techtimekw.com">Twitter</a>.</p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/f1.png">',
    }
);
editor.BlockManager.add('F5',
    {
        label: '<b>Form 5</b>',
        category: 'Forms',
        content: `<section class="fdb-block" style="background-image: url(imgs/hero/blue.svg);">
              <div class="container">
                <div class="fdb-box">
                  <div class="row justify-content-center align-items-center">
                    <div class="col-12 col-lg-6">
                      <h2>Join us!</h2>
                      <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
                    </div>
                    <div class="col-12 col-lg-5 text-center">
                      <div class="input-group mt-4">
                        <input type="text" class="form-control" placeholder="Enter your email address">
                        <div class="input-group-append">
                          <button class="btn btn-primary" type="button">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/f2.png">',
    }
);
editor.BlockManager.add('F6',
    {
        label: '<b>Form 6</b>',
        category: 'Forms',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-lg-10 col-xl-8 text-center">
                    <div class="row">
                      <div class="col">
                        <h1>Register</h1>
                        <p class="lead">When she reached the first hills, she had a last view back on the skyline of her hometown.</p>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <div class="col-12 col-md-5 mt-4">
                        <input type="text" class="form-control" placeholder="Email">
                      </div>
                      <div class="col-12 col-md-5 mt-4">
                        <input type="password" class="form-control" placeholder="Password">
                      </div>
                      <div class="col-12 col-md-2 mt-4">
                        <button class="btn btn-secondary" type="button">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/f3.png">',
    }
);
editor.BlockManager.add('F7',
    {
        label: '<b>Form 7</b>',
        category: 'Forms',
        content: `<section class="fdb-block py-0">
              <div class="container py-5 my-5" style="background-image: url(imgs/shapes/6.svg);">
                <div class="row">
                  <div class="col-12 col-md-8 col-lg-7 col-xl-5 text-left">
                    <div class="row">
                      <div class="col">
                        <h1>Sign Up</h1>
                        <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col mt-4">
                        <input type="text" class="form-control" placeholder="Email">
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col">
                        <input type="password" class="form-control" placeholder="Password">
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col">
                        <button class="btn btn-primary" type="button">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/f4.png">',
    }
);
editor.BlockManager.add('F8',
    {
        label: '<b>Form 8</b>',
        category: 'Forms',
        content: `<section class="fdb-block py-0">
              <div class="container py-5 my-5" style="background-image: url(imgs/shapes/4.svg);">
                <div class=" row justify-content-end">
                  <div class="col-12 col-md-8 col-lg-6 col-xl-5 text-left">
                    <div class="fdb-box">
                      <div class="row">
                        <div class="col">
                          <h1>Log In</h1>
                          <p class="lead">Right at the coast of the Semantics, a large language ocean. A small river named Duden.</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col mt-4">
                          <input type="text" class="form-control" placeholder="Email">
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col">
                          <input type="password" class="form-control" placeholder="Password">
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col">
                          <button class="btn btn-secondary" type="button">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/f5.png">',
    }
);
editor.BlockManager.add('F9',
    {
        label: '<b>Form 9</b>',
        category: 'Forms',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-8 col-lg-8 col-xl-6">
                    <div class="row">
                      <div class="col text-center">
                        <h1>Register</h1>
                        <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <div class="col mt-4">
                        <input type="text" class="form-control" placeholder="Company Name">
                      </div>
                    </div>
                    <div class="row align-items-center mt-4">
                      <div class="col">
                        <input type="email" class="form-control" placeholder="Email">
                      </div>
                    </div>
                    <div class="row align-items-center mt-4">
                      <div class="col">
                        <input type="password" class="form-control" placeholder="Password">
                      </div>
                      <div class="col">
                        <input type="password" class="form-control" placeholder="Confirm Password">
                      </div>
                    </div>
                    <div class="row justify-content-start mt-4">
                      <div class="col">
                        <div class="form-check">
                          <label class="form-check-label">
                              <input type="checkbox" class="form-check-input">
                              I Read and Accept <a href="https://www.techtimekw.com">Terms and Conditions</a>
                            </label>
                        </div>

                        <button class="btn btn-primary mt-4">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/f6.png">',
    }
);
editor.BlockManager.add('F10',
    {
        label: '<b>Form 10</b>',
        category: 'Forms',
        content: `<section class="fdb-block" style="background-image: url(imgs/hero/red.svg);">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-8 col-lg-7 col-xl-5 text-center">
                    <div class="fdb-box">
                      <div class="row">
                        <div class="col">
                          <h1>Log In</h1>
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Email">
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col">
                          <input type="password" class="form-control mb-1" placeholder="Password">
                          <p class="text-right"><a href="https://www.techtimekw.com">Recover Password</a></p>
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col">
                          <button class="btn btn-outline-secondary" type="button">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/f7.png">',
    }
);
editor.BlockManager.add('F11',
    {
        label: '<b>Form 11</b>',
        category: 'Forms',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-8 col-lg-7 col-md-5 text-center">
                    <div class="fdb-box fdb-touch">
                      <div class="row">
                        <div class="col">
                          <h1>Register</h1>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col mt-4">
                          <input type="text" class="form-control" placeholder="Name">
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Email">
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col">
                          <input type="password" class="form-control mb-1" placeholder="Password">
                          <p class="text-right"><a href="https://www.techtimekw.com">Already have an account?</a></p>
                        </div>
                      </div>
                      <div class="row mt-4">
                        <div class="col">
                          <button class="btn btn-primary" type="button">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/f8.png">',
    }
);
editor.BlockManager.add('F12',
    {
        label: '<b>Form 12</b>',
        category: 'Forms',
        content: `<section class="fdb-block bg-gray">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12  col-md-10 col-lg-8 col-xl-6 text-center">
                    <img alt="image" height="40" src="../fraola/imgs/icons/layers.svg">
                    <h1>Never miss an update</h1>
                    <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                    <div class="input-group mt-4 mb-4">
                      <input type="text" class="form-control" placeholder="Enter your email address">
                      <div class="input-group-append">
                        <button class="btn btn-primary" type="button">Submit</button>
                      </div>
                    </div>
                    <p class="h5"><em>*Your email address is safe with us. We never share your email address.</em></p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/f9.png">',
    }
);
editor.BlockManager.add('F13',
    {
        label: '<b>Form 13</b>',
        category: 'Forms',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
                    <h1>Company Name</h1>
                    <p class="lead">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown.</p>
                    <div class="input-group mt-5 mb-5">
                      <input type="text" class="form-control" placeholder="Enter your email address">
                      <div class="input-group-append">
                        <button class="btn btn-primary" type="button">Submit</button>
                      </div>
                    </div>
                    <p class="h2">
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-facebook"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-twitter"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-instagram"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-google"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-pinterest"></i></a>
                    </p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/f10.png">',
    }
);
editor.BlockManager.add('F14',
    {
        label: '<b>Form 14</b>',
        category: 'Forms',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-md-6 m-md-auto ml-lg-0 col-lg-5">
                    <img alt="image" class="img-fluid" src="../fraola/imgs/draws/group-chat.svg">
                  </div>
                  <div class="col-12 col-md-10 col-lg-6 mt-4 mt-lg-0 ml-auto mr-auto ml-lg-auto text-left">
                    <div class="row">
                      <div class="col">
                        <h1>Subscribe</h1>
                        <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col">
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Enter your email address">
                          <div class="input-group-append">
                            <button class="btn btn-primary" type="button">Submit</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <p class="h4">* Leave your email address to be notified first.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/f11.png">',
    }
);
editor.BlockManager.add('F15',
    {
        label: '<b>Form 15</b>',
        category: 'Forms',
        content: `<section class="fdb-block" style="background-image: url(imgs/shapes/1.svg);">
              <div class="container">
                <div class="row justify-content-end">
                  <div class="col-12 col-md-9 col-lg-8">
                    <div class="fdb-box fdb-touch">
                      <div class="row justify-content-center">
                        <div class="col-12 col-lg-10">
                          <h1>Subscribe</h1>
                          <p class="lead">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove.</p>
                        </div>
                      </div>
                      <div class="row justify-content-center mt-4">
                        <div class="col-12 col-lg-10">
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter your email address">
                            <div class="input-group-append">
                              <button class="btn btn-primary" type="button">Submit</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/f12.png">',
    }
);

// Headers
editor.BlockManager.add('H1',
    {
        label: '<b>Header 1</b>',
        category: 'Navbars',
        content: `<header>
              <div class="container">
                <nav class="navbar">
                  <a href="https://www.techtimekw.com">
                    <img src="../fraola/imgs/logo.png" height="30" alt="image">
                  </a>
                </nav>
              </div>
            </header>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/1.jpg">',
    }
);
editor.BlockManager.add('H2',
    {
        label: '<b>Header 2</b>',
        category: 'Navbars',
        content: `<header>
              <div class="container text-center">
                <nav class="navbar">
                  <a class="ml-auto mr-auto" href="https://www.techtimekw.com">
                    <img src="../fraola/imgs/logo.png" height="30" alt="image">
                  </a>
                </nav>
              </div>
            </header>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/2.jpg">',
    }
);
editor.BlockManager.add('H3',
    {
        label: '<b>Header 3</b>',
        category: 'Navbars',
        content: `<header>
              <div class="container">
                <nav class="navbar navbar-expand-md">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav0" aria-controls="navbarNav0" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarNav0">
                    <ul class="navbar-nav mr-auto ml-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="https://www.techtimekw.com">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Pricing</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Team</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </header>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/3.jpg">',
    }
);
editor.BlockManager.add('H4',
    {
        label: '<b>Header 4</b>',
        category: 'Navbars',
        content: `<header>
              <div class="container">
                <nav class="navbar navbar-expand-md">
                  <a class="navbar-brand" href="https://www.techtimekw.com">
                    <img src="../fraola/imgs/logo.png" height="30" alt="image">
                  </a>

                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarNav1">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="https://www.techtimekw.com">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Pricing</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Team</a>
                      </li>
                    </ul>

                    <ul class="navbar-nav justify-content-end d-none d-lg-flex ml-md-auto">
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com"><i class="fab fa-slack"></i></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com"><i class="fab fa-twitter"></i></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com"><i class="fab fa-github"></i></a>
                      </li>
                    </ul>

                    <a class="btn btn-outline-primary ml-md-3" href="https://www.techtimekw.com">Button</a>
                  </div>
                </nav>
              </div>
            </header>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/4.jpg">',
    }
);
editor.BlockManager.add('H5',
    {
        label: '<b>Header 5</b>',
        category: 'Navbars',
        content: `<header>
              <div class="container">
                <nav class="navbar navbar-expand-md no-gutters">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav2" aria-controls="navbarNav2" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="col-4 col-md-2 text-right text-md-center order-lg-6">
                    <a href="https://www.techtimekw.com">
                      <img src="../fraola/imgs/logo.png" height="30" alt="image">
                    </a>
                  </div>

                  <div class="collapse navbar-collapse col-12 col-md-5 order-lg-1" id="navbarNav2">
                    <ul class="navbar-nav col-5">
                      <li class="nav-item active">
                        <a class="nav-link" href="https://www.techtimekw.com">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Pricing</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Team</a>
                      </li>
                    </ul>
                  </div>

                  <ul class="navbar-nav justify-content-end col-sm-5 order-lg-12 d-none d-md-flex">
                    <li class="nav-item">
                      <a class="nav-link" href="https://www.techtimekw.com"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://www.techtimekw.com"><i class="fab fa-github"></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://www.techtimekw.com"><i class="fab fa-slack"></i></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/5.jpg">',
    }

);
editor.BlockManager.add('H6',
    {
        label: '<b>Header 6</b>',
        category: 'Navbars',
        content: `<header>
              <div class="container">
                <nav class="navbar navbar-expand-md">
                  <a class="navbar-brand" href="https://www.techtimekw.com">
                    <img src="../fraola/imgs/logo.png" height="30" alt="image">
                  </a>

                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav3" aria-controls="navbarNav3" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarNav3">
                    <ul class="navbar-nav ml-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="https://www.techtimekw.com">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Pricing</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Team</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">About</a>
                      </li>
                    </ul>

                    <a class="btn btn-outline-primary ml-md-3" href="https://www.techtimekw.com">Button</a>
                  </div>
                </nav>
              </div>
            </header>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/6.jpg">',
    }
);
editor.BlockManager.add('H7',
    {
        label: '<b>Header 7</b>',
        category: 'Navbars',
        content: `<header>
              <div class="container">
                <nav class="navbar navbar-expand-md no-gutters">
                  <div class="col-2 text-left">
                    <a href="https://www.techtimekw.com">
                      <img src="../fraola/imgs/logo.png" height="30" alt="image">
                    </a>
                  </div>

                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav4" aria-controls="navbarNav4" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse justify-content-center col-md-8" id="navbarNav4">
                    <ul class="navbar-nav justify-content-center">
                      <li class="nav-item active">
                        <a class="nav-link" href="https://www.techtimekw.com">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Pricing</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Team</a>
                      </li>
                    </ul>
                  </div>

                  <ul class="navbar-nav col-2 justify-content-end d-none d-md-flex">
                    <li class="nav-item">
                      <a class="nav-link" href="https://www.techtimekw.com"><i class="fab fa-facebook"></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://www.techtimekw.com"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://www.techtimekw.com"><i class="fab fa-github"></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://www.techtimekw.com"><i class="fab fa-google"></i></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/7.jpg">',
    }
);
editor.BlockManager.add('H8',
    {
        label: '<b>Header 8</b>',
        category: 'Navbars',
        content: `<header>
              <div class="container">
                <nav class="navbar navbar-expand-lg">
                  <a class="navbar-brand" href="https://www.techtimekw.com">
                    <img src="../fraola/imgs/logo.png" height="30" alt="image">
                  </a>

                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav5" aria-controls="navbarNav5" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarNav5">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="https://www.techtimekw.com">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Pricing</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Team</a>
                      </li>
                    </ul>

                    <ul class="navbar-nav justify-content-end ml-auto">
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Docs</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Contact</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Log In</a>
                      </li>
                    </ul>

                    <a class="btn btn-primary ml-md-3" href="https://www.techtimekw.com">Button</a>
                  </div>
                </nav>
              </div>
            </header>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/8.jpg">',
    }
);
editor.BlockManager.add('H9',
    {
        label: '<b>Header 9</b>',
        category: 'Navbars',
        content: `<header>
              <div class="container">
                <nav class="navbar navbar-expand-md no-gutters">
                  <div class="col-2 text-left">
                    <a href="https://www.techtimekw.com">
                      <img src="../fraola/imgs/logo.png" height="30" alt="image">
                    </a>
                  </div>

                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-1" aria-controls="navbarNav6" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse justify-content-center col-md-8 navbar-collapse-1">
                    <ul class="navbar-nav justify-content-center">
                      <li class="nav-item active">
                        <a class="nav-link" href="https://www.techtimekw.com">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Pricing</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Team</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Contact</a>
                      </li>
                    </ul>
                  </div>

                  <div class="collapse navbar-collapse justify-content-end col-md-2 navbar-collapse-1">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Log In <i class="fas fa-sign-in-alt"></i></a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </header>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/9.jpg">',
    }
);
editor.BlockManager.add('H10',
    {
        label: '<b>Header 10</b>',
        category: 'Navbars',
        content: `<header>
              <div class="container">
                <nav class="navbar navbar-expand-md no-gutters">
                  <div class="col-3 text-left">
                    <a href="https://www.techtimekw.com">
                      <img src="../fraola/imgs/logo.png" height="30" alt="image">
                    </a>
                  </div>

                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-2" aria-controls="navbarNav7" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse navbar-collapse-2 justify-content-center col-md-6" id="navbarNav7">
                    <ul class="navbar-nav justify-content-center">
                      <li class="nav-item active">
                        <a class="nav-link" href="https://www.techtimekw.com">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Pricing</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Team</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Contact</a>
                      </li>
                    </ul>
                  </div>

                  <div class="collapse navbar-collapse navbar-collapse-2">
                    <ul class="navbar-nav ml-auto justify-content-end">
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Log In</a>
                      </li>
                    </ul>

                    <a class="btn btn-primary ml-md-3" href="https://www.techtimekw.com">Register</a>
                  </div>
                </nav>
              </div>
            </header>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/10.jpg">',
    }
);
editor.BlockManager.add('H11',
    {
        label: '<b>Header 11</b>',
        category: 'Navbars',
        content: `<header class="bg-dark">
              <div class="container">
                <nav class="navbar">
                  <a href="https://www.techtimekw.com">
                    <img src="../fraola/imgs/logo.png" height="30" alt="image">
                  </a>
                </nav>
              </div>
            </header>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/11.jpg">',
    }
);
editor.BlockManager.add('H12',
    {
        label: '<b>Header 12</b>',
        category: 'Navbars',
        content: `<header class="bg-dark">
              <div class="container text-center">
                <nav class="navbar">
                  <a class="ml-auto mr-auto" href="https://www.techtimekw.com">
                    <img src="../fraola/imgs/logo.png" height="30" alt="image">
                  </a>
                </nav>
              </div>
            </header>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/12.jpg">',
    }
);
editor.BlockManager.add('H13',
    {
        label: '<b>Header 13</b>',
        category: 'Navbars',
        content: `<header class="bg-dark">
              <div class="container">
                <nav class="navbar navbar-expand-md">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav8" aria-controls="navbarNav8" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarNav8">
                    <ul class="navbar-nav mr-auto ml-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="https://www.techtimekw.com">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Pricing</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Team</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </header>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/13.jpg">',
    }
);
editor.BlockManager.add('H14',
    {
        label: '<b>Header 14</b>',
        category: 'Navbars',
        content: `<header class="bg-dark">
              <div class="container">
                <nav class="navbar navbar-expand-md">
                  <a class="navbar-brand" href="https://www.techtimekw.com">
                    <img src="../fraola/imgs/logo.png" height="30" alt="image">
                  </a>

                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav9" aria-controls="navbarNav9" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarNav9">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="https://www.techtimekw.com">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Pricing</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Team</a>
                      </li>
                    </ul>

                    <ul class="navbar-nav justify-content-end d-none d-lg-flex ml-md-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="https://www.techtimekw.com"><i class="fab fa-slack"></i></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com"><i class="fab fa-twitter"></i></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com"><i class="fab fa-github"></i></a>
                      </li>
                    </ul>

                    <a class="btn btn-outline-light ml-md-3" href="https://www.techtimekw.com">Button</a>
                  </div>
                </nav>
              </div>
            </header>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/14.jpg">',
    }
);
editor.BlockManager.add('H15',
    {
        label: '<b>Header 15</b>',
        category: 'Navbars',
        content: `<header class="bg-dark">
              <div class="container">
                <nav class="navbar navbar-expand-md no-gutters">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav10" aria-controls="navbarNav10" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="col-4 col-sm-2 text-center order-lg-6">
                    <a href="https://www.techtimekw.com">
                      <img src="../fraola/imgs/logo.png" height="30" alt="image">
                    </a>
                  </div>

                  <div class="collapse navbar-collapse col-12 col-md-5 order-lg-1" id="navbarNav10">
                    <ul class="navbar-nav col-5">
                      <li class="nav-item active">
                        <a class="nav-link" href="https://www.techtimekw.com">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Pricing</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Team</a>
                      </li>
                    </ul>
                  </div>

                  <ul class="navbar-nav justify-content-end col-sm-5 order-lg-12 d-none d-md-flex">
                    <li class="nav-item">
                      <a class="nav-link" href="https://www.techtimekw.com"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://www.techtimekw.com"><i class="fab fa-github"></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://www.techtimekw.com"><i class="fab fa-slack"></i></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/15.jpg">',
    }
);
editor.BlockManager.add('H16',
    {
        label: '<b>Header 16</b>',
        category: 'Navbars',
        content: `<header class="bg-dark">
              <div class="container">
                <nav class="navbar navbar-expand-md">
                  <a class="navbar-brand" href="https://www.techtimekw.com">
                    <img src="../fraola/imgs/logo.png" height="30" alt="image">
                  </a>

                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav11" aria-controls="navbarNav11" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarNav11">
                    <ul class="navbar-nav ml-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="https://www.techtimekw.com">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Pricing</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Team</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">About</a>
                      </li>
                    </ul>

                    <a class="btn btn-outline-light ml-md-3" href="https://www.techtimekw.com">Button</a>
                  </div>
                </nav>
              </div>
            </header>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/16.jpg">',
    }
);
editor.BlockManager.add('H17',
    {
        label: '<b>Header 17</b>',
        category: 'Navbars',
        content: `<header class="bg-dark">
              <div class="container">
                <nav class="navbar navbar-expand-md no-gutters">
                  <div class="col-2 text-left">
                    <a href="https://www.techtimekw.com">
                      <img src="../fraola/imgs/logo.png" height="30" alt="image">
                    </a>
                  </div>

                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav12" aria-controls="navbarNav12" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse justify-content-center col-md-8" id="navbarNav12">
                    <ul class="navbar-nav justify-content-center">
                      <li class="nav-item active">
                        <a class="nav-link" href="https://www.techtimekw.com">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Pricing</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Team</a>
                      </li>
                    </ul>
                  </div>

                  <ul class="navbar-nav col-2 justify-content-end d-none d-md-flex">
                    <li class="nav-item active">
                      <a class="nav-link" href="https://www.techtimekw.com"><i class="fab fa-facebook"></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://www.techtimekw.com"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://www.techtimekw.com"><i class="fab fa-github"></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://www.techtimekw.com"><i class="fab fa-google"></i></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/17.jpg">',
    }
);
editor.BlockManager.add('H18',
    {
        label: '<b>Header 18</b>',
        category: 'Navbars',
        content: `<header class="bg-dark">
              <div class="container">
                <nav class="navbar navbar-expand-lg">
                  <a class="navbar-brand" href="https://www.techtimekw.com">
                    <img src="../fraola/imgs/logo.png" height="30" alt="image">
                  </a>

                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav13" aria-controls="navbarNav13" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarNav13">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="https://www.techtimekw.com">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Pricing</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Team</a>
                      </li>
                    </ul>

                    <ul class="navbar-nav justify-content-end ml-auto">
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Docs</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Contact</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Log In</a>
                      </li>
                    </ul>

                    <a class="btn btn-light ml-md-3" href="https://www.techtimekw.com">Button</a>
                  </div>
                </nav>
              </div>
            </header>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/18.jpg">',
    }
);
editor.BlockManager.add('H19',
    {
        label: '<b>Header 19</b>',
        category: 'Navbars',
        content: `<header class="bg-dark">
              <div class="container">
                <nav class="navbar navbar-expand-md no-gutters">
                  <div class="col-2 text-left">
                    <a href="https://www.techtimekw.com">
                      <img src="../fraola/imgs/logo.png" height="30" alt="image">
                    </a>
                  </div>

                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-3" aria-controls="navbarNav14" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse justify-content-center col-md-8 navbar-collapse-3" id="navbarNav14">
                    <ul class="navbar-nav justify-content-center">
                      <li class="nav-item active">
                        <a class="nav-link" href="https://www.techtimekw.com">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Pricing</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Team</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Contact</a>
                      </li>
                    </ul>
                  </div>

                  <div class="collapse navbar-collapse justify-content-end col-md-2 navbar-collapse-3">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Log In <i class="fas fa-sign-in-alt"></i></a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </header>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/19.jpg">',
    }
);
editor.BlockManager.add('H20',
    {
        label: '<b>Header 20</b>',
        category: 'Navbars',
        content: `<header class="bg-dark">
              <div class="container">
                <nav class="navbar navbar-expand-md no-gutters">
                  <div class="col-3 text-left">
                    <a href="https://www.techtimekw.com">
                      <img src="../fraola/imgs/logo.png" height="30" alt="image">
                    </a>
                  </div>

                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-4" aria-controls="navbarNav15" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse navbar-collapse-4 justify-content-center col-md-6" id="navbarNav15">
                    <ul class="navbar-nav justify-content-center">
                      <li class="nav-item active">
                        <a class="nav-link" href="https://www.techtimekw.com">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Features</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Pricing</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Team</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Contact</a>
                      </li>
                    </ul>
                  </div>

                  <div class="collapse navbar-collapse navbar-collapse-4">
                    <ul class="navbar-nav ml-auto justify-content-end">
                      <li class="nav-item">
                        <a class="nav-link" href="https://www.techtimekw.com">Log In</a>
                      </li>
                    </ul>

                    <a class="btn btn-primary ml-md-3" href="https://www.techtimekw.com">Register</a>
                  </div>
                </nav>
              </div>
            </header>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/20.jpg">',
    }
);

// Call to Action
editor.BlockManager.add('CTA1',
    {
        label: '<b>CTA 1</b>',
        category: 'Call To Action',
        content: ` <section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-8 text-center">
                    <p class="lead">
                      "Separated they live in Bookmarksgrove right at the coast of the Semantics, far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast."
                    </p>

                    <p class="mt-5 mt-sm-4">
                      <a class="btn btn-primary" href="https://www.techtimekw.com">Download</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta1.png">',
    }
);
editor.BlockManager.add('CTA2',
    {
        label: '<b>CTA 2</b>',
        category: 'Call To Action',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-6 text-center">
                    <h1>Call to Action</h1>
                    <p class="lead">
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
                    </p>
                    <p class="mt-5 mt-sm-4">
                      <a class="btn btn-secondary" href="https://www.techtimekw.com">Download</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta2.png">',
    }
);
editor.BlockManager.add('CTA3',
    {
        label: '<b>CTA 3</b>',
        category: 'Call To Action',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-sm-8 col-md-6 col-lg-6 text-center">
                    <h2>
                      <strong>Right at the coast of the Semantics, a large language ocean.</strong>
                    </h2>
                    <p class="mt-5 mt-sm-4">
                      <a class="btn btn-outline-primary" href="https://www.techtimekw.com">Download</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta3.png">',
    }
);
editor.BlockManager.add('CTA4',
    {
        label: '<b>CTA 4</b>',
        category: 'Call To Action',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-8 col-lg-6 text-center">
                    <h1>Call to Action</h1>
                    <p class="lead">
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
                    </p>
                    <p class="mt-5 mt-sm-4">
                      <a class="btn btn-primary" href="https://www.techtimekw.com">Download</a>
                    </p>
                  </div>
                </div>

                <div class="row pt-5 pb-3">
                  <div class="col-12 text-center">
                    <p><strong>Fortune 100 companies are using our products</strong></p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 text-center">
                    <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/adobe.svg">
                    <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/amazon.svg">
                    <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/ebay.svg">
                    <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/samsung.svg">
                    <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/orange.svg">
                    <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="../fraola/imgs/customers/salesforce.svg">
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta4.png">',
    }
);
editor.BlockManager.add('CTA5',
    {
        label: '<b>CTA 5</b>',
        category: 'Call To Action',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-8 text-center">
                    <h1>Far far away, behind the word mountains, far from</h1>
                    <p class="mt-5">
                      <a class="btn btn-secondary" href="https://www.techtimekw.com">Download</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta5.png">',
    }
);
editor.BlockManager.add('CTA6',
    {
        label: '<b>CTA 6</b>',
        category: 'Call To Action',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-sm-10 col-md-8 col-lg-4 text-center">
                    <p class="lead">
                      Follow us and ask more on:
                    </p>
                    <p class="h2">
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-facebook"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-twitter"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-instagram"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-google"></i></a>
                      <a href="https://www.techtimekw.com" class="mx-2"><i class="fab fa-pinterest"></i></a>
                    </p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta6.png">',
    }
);
editor.BlockManager.add('CTA7',
    {
        label: '<b>CTA 7</b>',
        category: 'Call To Action',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row text-center pb-0 pb-lg-4">
                  <div class="col-12">
                    <h1>Call to action</h1>
                  </div>
                </div>
                <div class="row text-center pt-4 pt-md-5">
                  <div class="col-12 col-sm-10 col-md-6 col-lg-4 m-sm-auto">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/gift.svg">
                    <h3>First Action</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                    <p class="mt-3"><a class="btn btn-light sl-1" href="https://www.techtimekw.com">Button</a></p>
                  </div>

                  <div class="col-12 col-sm-10 col-md-6 col-lg-4 ml-sm-auto mr-sm-auto mt-5 mt-md-0">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/cloud.svg">
                    <h3>Second Action</h3>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p class="mt-3"><a class="btn btn-light sl-1" href="https://www.techtimekw.com">Button</a></p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta7.png">',
    }
);
editor.BlockManager.add('CTA8',
    {
        label: '<b>CTA 8</b>',
        category: 'Call To Action',
        content: `<section class="fdb-block py-0">
              <div class="container py-5 my-5" style="background-image: url(imgs/shapes/2.svg);">
                <div class="row justify-content-center py-5">
                  <div class="col-12 col-md-10 col-lg-8 text-center">
                    <div class="fdb-box">
                      <h1>Call to Action</h1>
                      <p class="lead">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
                      </p>
                      <p class="mt-4">
                        <a class="btn btn-primary" href="https://www.techtimekw.com">Download</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta8.png">',
    }
);
editor.BlockManager.add('CTA9',
    {
        label: '<b>CTA 9</b>',
        category: 'Call To Action',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row align-items-center justify-content-center">
                  <div class="col-auto">
                    <h2>Use TechTime Design Blocks for free in your project</h2>
                  </div>
                  <div class="col-auto mt-4 mt-sm-0">
                    <a class="btn btn-primary" href="https://www.techtimekw.com">Download</a>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta9.png">',
    }
);
editor.BlockManager.add('CTA10',
    {
        label: '<b>CTA 10</b>',
        category: 'Call To Action',
        content: `<section class="fdb-block py-0">
              <div class="container py-5 my-5 bg-r" style="background-image: url(imgs/shapes/4.svg);">
                <div class="row justify-content-end py-5">
                  <div class="col-12 col-md-8 col-lg-6 mr-5 text-center">
                    <div class="fdb-box">
                      <h1>Call to Action</h1>
                      <p class="lead">
                        When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove
                      </p>
                      <p class="mt-4">
                        <a class="btn btn-secondary" href="https://www.techtimekw.com">Download</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta10.png">',
    }
);
editor.BlockManager.add('CTA11',
    {
        label: '<b>CTA 11</b>',
        category: 'Call To Action',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row align-items-center justify-content-center">
                  <div class="col-auto text-center">
                    <a class="btn btn-outline-secondary" href="https://www.techtimekw.com">Download</a>
                  </div>

                  <div class="col-auto mt-4 mt-sm-0">
                    <h2>Use TechTime Design Blocks for free in your project</h2>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta11.png">',
    }
);
editor.BlockManager.add('CTA12',
    {
        label: '<b>CTA 12</b>',
        category: 'Call To Action',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row">
                  <div class="col-12 text-center">
                    <h1>TechTime Design Blocks</h1>
                    <p class="h2">
                      Far far away, behind the word mountains, far from.
                    </p>
                  </div>
                </div>

                <div class="row align-items-center pt-2 pt-lg-5">
                  <div class="col-12 col-md-8 col-lg-7">
                    <h2>Call to action</h2>
                    <p class="lead">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                    <p class="mt-4"><a class="btn btn-primary" href="https://www.techtimekw.com">Take a Tour</a></p>
                  </div>

                  <div class="col-8 col-md-4 m-auto m-md-0 ml-md-auto pt-5">
                    <img alt="image" class="img-fluid" src="../fraola/imgs/draws/git.svg">
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta12.png">',
    }
);
editor.BlockManager.add('CTA13',
    {
        label: '<b>CTA 13</b>',
        category: 'Call To Action',
        content: `<section class="fdb-block fdb-viewport bg-dark" style="background-image: url(imgs/hero/purple.svg);">
              <div class="container justify-content-center align-items-center d-flex">
                <div class="row justify-content-center text-center">
                  <div class="col-12 col-md-8">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/coffee.svg">
                    <h1>TechTime Design Blocks</h1>
                    <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="mt-5"><a href="https://www.techtimekw.com" class="btn btn-dark">Call to Action</a></p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta13.png">',
    }
);
editor.BlockManager.add('CTA14',
    {
        label: '<b>CTA 14</b>',
        category: 'Call To Action',
        content: `<section class="fdb-block py-0">
              <div class="container bg-r py-5 my-5" style="background-image: url(imgs/shapes/1.svg);">
                <div class="row py-5">
                  <div class="col-12 col-sm-10 col-md-8 col-lg-6 text-left">
                    <h1>Call to Action</h1>
                    <p class="lead">
                      A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    </p>
                    <p class="mt-4">
                      <a class="btn btn-primary" href="https://www.techtimekw.com">Download</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta14.png">',
    }
);
editor.BlockManager.add('CTA15',
    {
        label: '<b>CTA 15</b>',
        category: 'Call To Action',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0">
                    <img alt="image" class="img-fluid" src="../fraola/imgs/draws/smile.svg">
                  </div>

                  <div class="col-12 col-md-8 ml-auto pt-5 pt-md-0">
                    <h2>Call to action</h2>
                    <p class="lead">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn
                      around and return to its own, safe country.</p>
                    <p class="mt-4"><a class="btn btn-secondary" href="https://www.techtimekw.com">Take a Tour</a></p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta15.png">',
    }
);
editor.BlockManager.add('CTA16',
    {
        label: '<b>CTA 16</b>',
        category: 'Call To Action',
        content: `<section class="fdb-block bg-dark fdb-viewport" style="background-image: url(imgs/hero/blue.svg);">
              <div class="container align-items-center justify-content-center d-flex">
                <div class="row justify-content-center text-center">
                  <div class="col-12 col-md-10 col-lg-8">
                    <h1>TechTime Design Blocks is Open Source and free to use in your apps</h1>
                    <p class="mt-5"><a href="https://www.techtimekw.com" class="btn btn-outline-light">Call to Action</a></p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta16.png">',
    }
);
editor.BlockManager.add('CTA17',
    {
        label: '<b>CTA 17</b>',
        category: 'Call To Action',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <h1>TechTime Design Blocks</h1>
                    <p class="lead">
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by
                      their place and supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>

                <div class="row justify-content-center align-items-center pt-5">
                  <div class="col-8 col-sm-3">
                    <img alt="image" class="img-fluid" src="../fraola/imgs/draws/code.svg">
                  </div>
                  <div class="col-12 col-sm-6 m-auto pt-4 pt-sm-0">
                    <h2><strong>Bootstrap</strong></h2>
                    <p class="lead">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                  </div>
                  <div class="col-12 col-sm-3 text-center pt-4 pt-sm-0">
                    <p><a class="btn btn-outline-primary" href="https://www.techtimekw.com">Take a Tour</a></p>
                    <p><a class="btn btn-primary" href="https://www.techtimekw.com">Start Now</a></p>
                    <p class="h5"><em>Some foo text</em></p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta17.png">',
    }
);
editor.BlockManager.add('CTA18',
    {
        label: '<b>CTA 18</b>',
        category: 'Call To Action',
        content: `<section class="fdb-block">
              <div class="container align-items-end justify-content-center d-flex">
                <div class="row align-items-top text-left">
                  <div class="col-12 col-md-6 col-lg-5">
                    <p class="mb-5 mt-5"><img alt="image" height="40" src="../fraola/imgs/logo.png"></p>
                    <h1>Design Blocks</h1>
                    <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p class="mt-4"><a href="https://www.techtimekw.com" class="btn btn-primary">Call to Action</a></p>
                  </div>

                  <div class="col-12 col-sm-4 col-md-6 col-lg-4 m-auto pt-5">
                    <img alt="image" class="img-fluid rounded-0" src="../fraola/imgs/draws/sync.svg">
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta18.png">',
    }
);
editor.BlockManager.add('CTA19',
    {
        label: '<b>CTA 19</b>',
        category: 'Call To Action',
        content: `<section class="fdb-block">
              <div class="container align-items-center justify-content-center d-flex">
                <div class="row align-items-center text-left">
                  <div class="col-12 col-sm-6">
                    <img alt="image" class="img-fluid" src="../fraola/imgs/draws/sync2.svg">
                  </div>

                  <div class="col-12 col-lg-5 ml-auto pt-5 pt-lg-0">
                    <h1>TechTime Design Blocks</h1>
                    <p class="lead">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                    <p class="mt-4"><a href="https://www.techtimekw.com" class="btn btn-secondary">Call to Action</a></p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta19.png">',
    }
);
editor.BlockManager.add('CTA20',
    {
        label: '<b>CTA 20</b>',
        category: 'Call To Action',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row align-items-center text-left">
                  <div class="col-12 col-md-8">
                    <h1>TechTime Design Blocks</h1>
                    <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                  </div>
                  <div class="col-12 col-md-3 ml-auto text-left text-md-right">
                    <p><a href="https://www.techtimekw.com" class="btn btn-primary">Call to Action</a></p>
                  </div>
                </div>

                <div class="row pt-5">
                  <div class="col-6 offset-3">
                    <img alt="image" class="img-fluid" src="../fraola/imgs/draws/rocket.svg">
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta20.png">',
    }
);
editor.BlockManager.add('CTA21',
    {
        label: '<b>CTA 21</b>',
        category: 'Call To Action',
        content: ` <section class="fdb-block fdb-viewport bg-dark" style="background-image: url(imgs/hero/red.svg);">
              <div class="container align-items-center justify-content-center d-flex">
                <div class="row align-items-center text-left">
                  <div class="col-12 col-sm-10 col-md-8 col-lg-8">
                    <h1>TechTime Design Blocks is build on Boostrap Framework</h1>
                    <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there.</p>
                    <p class="mt-5">
                      <a href="https://www.techtimekw.com" class="btn btn-light">Call to Action</a>
                      <a href="https://www.techtimekw.com" class="btn btn-dark ml-4">Button</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>`,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta21.png">',
    }
);
editor.BlockManager.add('CTA22',
    {
        label: '<b>CTA 22</b>',
        category: 'Call To Action',
        content: `<section class="fdb-block">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-8 col-lg-5 text-center pb-md-5">
                    <h1>TechTime Design Blocks</h1>
                    <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    <p class="mt-4"><a href="https://www.techtimekw.com" class="btn btn-primary">Call to Action</a></p>
                  </div>
                </div>

                <div class="row text-center justify-content-center pt-5">
                  <div class="col-12 col-sm-6 col-lg-3">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/cloud.svg">

                    <h3><strong>Feature One</strong></h3>

                    <p>Far far away, behind the word mountains, far from the countries</p>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-sm-0">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/gift.svg">

                    <h3><strong>Feature Two</strong></h3>

                    <p>Separated they live in Bookmarksgrove right at the coast</p>
                  </div>

                  <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/github.svg">

                    <h3><strong>Feature Three</strong></h3>

                    <p>A small river named Duden flows by their place and supplies it</p>
                  </div>

                  <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
                    <img alt="image" class="fdb-icon" src="../fraola/imgs/icons/compass.svg">

                    <h3><strong>Feature Four</strong></h3>

                    <p>Far far away, behind the word mountains, far from the countries</p>
                  </div>
                </div>
              </div>
            </section>
            `,
        media: '<img width="70px" height="70px" src="../fraola/imgs/thumbnail/cta22.png">',
    }
);