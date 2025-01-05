import AboutMe from "../../Components/AboutMe";
import Banner from "../../Components/Banner";
import ContactMe from "../../Components/ContactMe";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import Projects from "../../Components/Projects";
import Skills from "../../Components/Skills";

const Home = () => {
  return (
    <div>
      {/* Navbar and banner div here */}
      <header className="bg-[#292F36]">
        {/* Navbar div */}
        <div>
          <NavBar></NavBar>
        </div>
        {/* Navbar div */}

        {/* Divider here */}
        <div className="border border-[#43454D] max-w-[88%] mx-auto"></div>
        {/* Divider here */}

        {/* Banner div */}
        <div className="mt-[64px]">
            <Banner></Banner>
        </div>
        {/* Banner div */}
      </header>
      {/* Navbar and banner div here */}

      <main>
        {/* About me section div here */}
        <div className="bg-[url('/src/assets/images/aboutMeBg.png')] bg-no-repeat bg-cover">
            <AboutMe></AboutMe>
        </div>
        {/* About me section div here */}

        {/* Skills section div here */}
        <div className="bg-[url('/src/assets/images/codingBg.jpg')] bg-no-repeat bg-cover">
          <Skills></Skills>
        </div>
        {/* Skills section div here */}

        {/* Projects section div here */}
        <div className="bg-[url('/src/assets/images/projectBg.png')] bg-no-repeat bg-cover">
          <Projects></Projects>
        </div>
        {/* Projects section div here */}

        {/* Contact me section */}
        <div id="contact-me" className="bg-[#292F36] bg-no-repeat bg-cover ">
          <ContactMe></ContactMe>
        </div>
        {/* Contact me section */}
      </main>

      <footer className="bg-[#292F36] border-t-2 border-[#43454D]">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
