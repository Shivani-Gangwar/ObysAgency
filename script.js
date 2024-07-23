function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();  
}
locomotiveAnimation()
 
function LoadingAnimation(){
    var tl = gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5
});
tl.to("#line-part3 h5",{
   opacity:1,
});
tl.from("#line-part1",{
    opacity:0,
    onStart: function(){
        var h5 = document.querySelector("#line-part1 h5")
        var grow = 0;
        setInterval(function(){
        if(grow<100){
           h5.innerHTML = grow++;
        }
        else{
           h5.innerHTML = grow;
        }
        },10)
    },
});
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:3.5
});
tl.to(".line h2",{
    animationName:"anime",
    opacity:1,
});

tl.from("#page1",{
    y:1600,
    opacity:0,
    delay:0.2,
    ease:Power4,
    duration:0.5
});
tl.to("#loader",{
    display:"none"
})
tl.from("#nav",{
    opacity:0,
});
tl.from("#hero1 h1,#hero2 h1,#hero3 h2, #hero3 h3,#hero4 h1",{
    y:140,
    stagger:0.2,
});
tl.from("#hero1",{
    opacity:0,
}, "-=1.5");
}
LoadingAnimation()

function cursorAnimation(){
    document.addEventListener("mousemove", function(dets) {
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y
        })
    })
    
    document.addEventListener("mousemove",function(dets){
             gsap.to("#flag",{
                x:dets.x,
                y:dets.y
             })
    })
    document.querySelector("#hero3").addEventListener("mouseenter", function(){
        gsap.to("#flag",{
            opacity:1
        })
    })
    document.querySelector("#hero3").addEventListener("mouseleave", function(){
        gsap.to("#flag",{
            opacity:0
        })
    })
    
    
   var video = document.querySelector("#video-content");
   var vid = document.querySelector("#video-content video")
   var img = document.querySelector("#video-content img");
   video.addEventListener("mouseenter", function(){
     video.addEventListener("mousemove", function(dets){
        gsap.to("#cursor",{
            opacity:0
        }) 
       
        gsap.to("#video-crsr",{
          left:dets.x -570,
          y:dets.y -300
        });
     });
   });
   video.addEventListener("mouseleave", function(){
    gsap.to("#cursor",{
        opacity:1
    })
    gsap.to("#video-crsr",{
        left:"70%",
        top:"-9.4%"
    })
   })
   var flag=0
   vid.addEventListener("click", function(){
    if(flag == 0){
        vid.play()
        vid.style.opacity=1
        img.style.opacity=0
        document.querySelector("#video-crsr").innerHTML =`<i class="ri-pause-large-line"></i>`
        gsap.to("#video-crsr",{
            scale:0.5
        }) 
        flag =1
    }else{
      vid.pause()
      vid.style.opacity=0
      img.style.opacity=1
      document.querySelector("#video-crsr").innerHTML =`<i class="ri-play-fill"></i>`
      gsap.to("#video-crsr",{
         scale:1
      })
      flag = 0
    }  
    })     
}
cursorAnimation()

function sheryAnimation(){
    Shery.makeMagnet("#nav-part2 h3" , {});
    Shery.imageEffect(".image-div, .image2-div, .image3-div, .image4-div, .image5-div, .image6-div", {
        style: 6,
        config:{"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.84,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272780405376852},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.5,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.43,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}},
        gooey: true,
      });
}
sheryAnimation()



