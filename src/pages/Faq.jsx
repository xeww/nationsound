import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Question from "../components/Question/Question.jsx";
import Separator from "../components/Separator.jsx";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop.jsx";

export default function Faq() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Separator margin="20" />
        <Question
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Question
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Question
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Question
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Separator margin="40" />
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
}
