import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { Element } from "react-scroll";
import AboutMe from "../../Components/AboutMe";
import Banner from "../../Components/Banner";
import ContactMe from "../../Components/ContactMe";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import Projects from "../../Components/Projects";
import Skills from "../../Components/Skills";

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const mainContentRef = useRef(null);
  const animationRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setAnimationComplete(true); // Now mainContent is shown
          gsap.to(mainContentRef.current, {
            opacity: 1,
            duration: 1,
            delay: 0.1,
            ease: "power2.out",
          });
        },
      });

      tl.from("#intro-slider", { xPercent: "-100", duration: 1.3, delay: 0.3 })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.1,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 1,
        });
    }, animationRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Animation Screen */}
      {!animationComplete && (
        <div ref={animationRef} className="relative">
          <div
            id="intro-slider"
            className="h-screen p-10 bg-gray-100 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col justify-center gap-10 tracking-tight"
          >
            <h1 className="text-5xl xl:text-9xl" id="title-1">
              Web Developer
            </h1>
            <h1 className="text-5xl xl:text-9xl" id="title-2">
              Hard-Worker
            </h1>
            <h1 className="text-5xl xl:text-9xl" id="title-3">
              Passionate
            </h1>
          </div>
          <div className="h-screen flex bg-gray-950 justify-center place-items-center">
            <h1
              id="welcome"
              className="text-5xl xl:text-9xl font-bold text-gray-100 font-spaceGrotesk"
            >
              Welcome.
            </h1>
          </div>
        </div>
      )}

      {/* Main Content - Hidden until animation is done */}
      <div
        ref={mainContentRef}
        className={`opacity-0 transition-opacity duration-1000 ${
          animationComplete ? "block" : "hidden"
        }`}
      >
        <header>
          <div >
            <NavBar />
          </div>
          <div>
            <Banner />
          </div>
        </header>

        <main>
          <div className="bg-[url('/src/assets/images/aboutMeBg.png')] bg-fixed bg-no-repeat bg-cover">
            <AboutMe />
          </div>

          <div className="bg-[url('/src/assets/images/codingBg.jpg')] bg-fixed bg-no-repeat bg-cover">
            <Skills />
          </div>

          <div className="bg-[url('/src/assets/images/projectBg.png')] bg-fixed bg-no-repeat bg-cover">
            <Projects />
          </div>

          <Element name="contact-me">
            <div>
              <ContactMe />
            </div>
          </Element>
        </main>

        <footer className="bg-[#292F36] border-t-2 border-[#43454D]">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Home;
