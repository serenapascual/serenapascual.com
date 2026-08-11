import React from "react"

export default function Demos() {
  return (
    <div className="cgai">
      <h2>computer graphics in the ai era</h2>
      <p>
        CGAI, taught by Professor <a href="https://faculty.cc.gatech.edu/~bozhu/">Bo Zhu</a>, was one of my favorite courses I got to take in my MS program. Like its title implies, we explored modern AI/ML–driven techniques in graphics including neural radiance fields (NeRFs) and Gaussian splatting. On this page, I'll be sharing just some of what we covered.
      </p>
      <p>
        <img src="/cgai/raytrace.png" alt="pie" />
        The intro assignment was to implement a simple ray-tracer in GLSL. Despite this being a familiar task, I'm glad for this assignment as a warmup to GLSL - which I had minimal experience with at the start of 2026.
      </p>
      <p>
        <img src="/cgai/pie.gif" alt="pie" />
        Another early assignment had us implementing signed distance functions (SDFs) to create a custom object. I've also had prior exposure to writing SDFs using the Processing SDK in Java, but adding geometry-based color and animation as a function of time was new to me.
      </p>      
      <p>
        <img src="/cgai/ball.gif" alt="ball" />
        Though this looks like a plain ol' sphere, this beach ball actually uses a neural SDF! What could have been accomplished in 1 line of code instead took 50+ lines and several hours of model training and debugging. OK, I meant that in a tongue-in-cheek way, but this method is cool because in theory the neural network could have learned the implicit functions for any arbitrary manifold OBJ. My hardware at the time (2018 MacBook Pro, integrated Intel Iris GPU with 1.5 GB VRAM) was barring me from rendering anything more complex.
      </p>      
      <p>
        <img src="/cgai/rainbow.png" alt="rainbow" />
        In priming for NeRF, we studied volumetric rendering for density fields. The sky background here was provided to us and <a href="https://www.shadertoy.com/view/7sSGRV">originally by CustomPhase on ShaderToy</a>. The rainbow is my addition to the scene, and on my learning backlog is to experiment with volume rendering for more participating media, e.g. water and smoke.
      </p>
      <p>
        <img src="/cgai/hehe.gif" alt="hehe"  />
        We were challenged to implement a denoising diffusion probabilistic model (DDPM) as a glimpse into how synthetic images are generated from Gaussian noise. For my training data, I chose an image depicting a silly childhood game.
      </p>      
      <p>
        <img src="/cgai/horse.png" alt="horse" />
        In the end, we were given the prompt "Dream Worlds" and told to either produce a creative scene or investigate a technical topic further in response. I opted for creative scene, as the prompt immediately made me think of David Lynch's eerie, surreal cinema; my chosen reference was the <a href="https://static.wikia.nocookie.net/twinpeaks/images/9/92/Pale_horse_%28FWWM%29.jpg/revision/latest/scale-to-width-down/1000?cb=20191203072738">pale horse</a> from <i>Twin Peaks</i>. If I were to put more time into this one, I'd love to enhance the scene by illuminating the lamp, making the horse blink, or writing up a wood grain texture for the floor.
      </p>
      <p>
        Thanks for getting this far! Allow me to acknowledge that I compiled these samples using screen captures of my GLSL fragments, but the user experience has the potential to be better with some of those fragments embedded directly into this webpage. I will consider that for a future iteration.
      </p>
    </div>
  )
}
