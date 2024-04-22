import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";
import About from "../about/About";
import Contact from "../contact/Contact";
import Education from "../education/Education";
import Experiences from "../experiences/Experiences";
import Intro from "../intro/Intro";
import Projects from "../projects/Projects";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";

const Home = () => {
  return (
    <div className="bg-primary-content">
      <Header />
      <div className="bg-primary-content px-40 sm:px-5">
        <Intro />
        <About />
        <Education />
        <Experiences />
        <Projects />
        <Contact />
        <Footer />
        <LeftSideBar />
      </div>
      
    </div>
  )
}

export default Home;