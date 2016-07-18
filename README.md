Reveal - Slide Generator
===================================================================

I find that I am often creating projects that use reveal as the slide presentation
framework, but built around webpack and a few other technologies.   

This specific repository is to simplify the creation of these projects (as they are usually
folders in existing git repositories).  It also allows me to use docker (which I love) to
create a reusable tool on any machine (without requiring it to be mac, or linux or have
specific npm like tools installed).    

## Usage

    docker pull mikewright/reveal-slide-generator
    docker run --rm -it -v $PWD:/output mikewright/reveal-slide-generator 

