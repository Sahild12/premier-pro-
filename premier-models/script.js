var tl = gsap.timeline();

function page1() {
  tl.from("#nav h1, #nav h2, #menu-icon", {
    y: -200,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
  });
  tl.from("#content ", {
    scale: 0,
    opacity: 0,
    duration: 0.8,
  });
}

function page2() {
  gsap.from("#alphabet", {
    x: -2000,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    clearProps: "all",
    scrollTrigger: {
      trigger: "#alphabet",
      scroller: "body",
      start: "top 90%",
    },
  });
  gsap.from(" #alphabet h6", {
    y: -100,
    opacity: 0,
    stagger: 0.1,
    clearProps: "all",
    scrollTrigger: {
      trigger: "#alphabet",
      scroller: "body",
      start: "top 90%",
    },
  });

  gsap.from("#page2 #page-part1", {
    x: -500,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top 60%",
    },
  });

  gsap.from("#page2 #page-part2", {
    y: 500,
    opacity: 0,
    delay: 0.2,
    duration: 0.8,
    delay: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top 60%",
    },
  });
}

function page2nd() {
  gsap.from("#page2nd #right", {
    y: 500,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#page2nd",
      scroller: "body",
      start: "top 60%",
    },
  });

  gsap.from("#page2nd #left", {
    x: -500,
    opacity: 0,
    delay: 0.5,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#page2nd",
      scroller: "body",
      start: "top 60%",
    },
  });
}
function page3() {
  gsap.from("#page-3>h1", {
    y: -200,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#page-3",
      scroller: "body",
      start: "top 60%",
    },
  });
  gsap.from("#page-3 #AllModel .Model h4,#page-3 #AllModel .Model", {
    x: -500,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page-3",
      scroller: "body",
      start: "top 30%",
    },
  });
}
function page5(){
gsap.to("#one img", {
  width: "100%",
  scrollTrigger: {
    trigger: "#page-5th",
    scroller: "body",
    start: "top 10%",
    // markers: true,
    scrub: 2,
    pin: true,
  },
});
}

function page4() {
gsap.from("#Page4th #page4-l", {
    x: -500,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#Page4th",
      scroller: "body",
      start: "top 60%",
    },
  });

  gsap.from("#Page4th #page4-r #box1", {
    x: -500,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#Page4th",
      scroller: "body",
      start: "top 60%",
    },
  });
    gsap.from("#Page4th #page4-r #box2 .imgc", {
    y: -600,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#Page4th",
      scroller: "body",
      start: "top 60%",
    },
  });
}

function mobileMenu() {
  var menuIcon = document.querySelector("#menu-icon");
  var closeIcon = document.querySelector("#mobile-menu-close");
  var mobileMenu = document.querySelector("#mobile-menu");
  var mobileLinks = document.querySelectorAll("#mobile-menu-links a");

  if (menuIcon && closeIcon && mobileMenu) {
    menuIcon.addEventListener("click", function () {
      gsap.to(mobileMenu, {
        right: "0%",
        duration: 0.5,
        ease: "power2.out"
      });
      gsap.from(mobileLinks, {
        x: 100,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.2
      });
    });

    closeIcon.addEventListener("click", function () {
      gsap.to(mobileMenu, {
        right: "-100%",
        duration: 0.5,
        ease: "power2.in"
      });
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        gsap.to(mobileMenu, {
          right: "-100%",
          duration: 0.3,
          ease: "power2.in"
        });
      });
    });
  }
}

page1();
page2();
page2nd();
page3();
page4();
page5();
mobileMenu();

