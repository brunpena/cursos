window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

  const videoHero = document.querySelector(".hero video");
  const videoFooter = document.querySelector("footer video");

  videoHero.src = "img/video-hero.mp4";
  videoHero.autoplay = true;
  videoHero.loop = true;
  videoHero.muted = true;

  videoFooter.src = "img/video-footer.mp4";
  videoFooter.autoplay = true;
  videoFooter.loop = true;
  videoFooter.muted = true;

  //QUANDO ROLO A PAGINA CADA RETANGULO DESCE
  //LINHA DO TEMPO

  const linhaDoTempo = gsap.timeline({
    scrollTrigger: {
      trigger: ".transicao",
      scrub: 2,
      start: "0% 0%",
      end: "+=3000",
      pin: true,
    },
  });

  linhaDoTempo.to(".retangulos div", {
    y: 0,
    stagger: 0.2,
    duration: 4,
  });

  linhaDoTempo.to(".secao2", {
    opacity: 1,
    duration: 0.1,
  });

  const split = new SplitText(".secao2 h2", {
    types: "chars",
    mask: "lines",
  });
  linhaDoTempo.from(split.chars, {
    y: 100,
    stagger: 0.1,
    duration: 1,
  });

  //ANIMAÇÕES TEXTOS SURGINDO

  const linhaDoTempo2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".secao4",
      markers: true,
      scrub: 2,
      end: "+=3000",
      pin: true,
    },
  });

  const textosSecao4 = document.querySelectorAll(".secao4 h2");

  textosSecao4.forEach((texto) => {
    const split2 = new SplitText(texto,{
        types: "chars"
    })
    linhaDoTempo2.from(split2.chars, {
        opacity: 0,
        filter: "blur(20px)",
        stagger: {
            each: .2,
            from: "random"
        }
    })

    linhaDoTempo2.to(split2.chars, {
        opacity: 0,
        stagger: {
            each: .2,
            from: "random"
        }
    }, "+=2")
  });
});
