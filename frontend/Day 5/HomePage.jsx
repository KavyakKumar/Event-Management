import '../assets/styles.css';
import Navbar from './Navbar'; // Assuming Navbar.jsx is in the same folder
import Footer from './Footer'; // Assuming Footer.jsx is in the same folder
import  { lazy, Suspense } from 'react';
import Slider from './Slider';

// import PropTypes from 'prop-types';

// const Navbar = lazy(() => import('./Navbar')); // Lazy loading Navbar component
// const Footer = lazy(() => import('./Footer')); // Lazy loading Footer component
const Loading = lazy(() => import('./Loading')); // Lazy loading Loading component

// const SliderComponent = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000
//   };

const HomePage = () => {
  
  return (
    <div className="home-page">
      <Suspense fallback={<Loading />}>
      <Navbar />
      <Slider />
      <h1>Welcome to our Event Management Company!</h1>
      <p>We organize unforgettable events tailored just for you.
      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate 
      the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may
       be used as a placeholder before the final copy is available. It is also used to temporarily replace 
       text in a process called greeking, which allows designers to consider the form of a webpage or publication,
        without the meaning of the text influencing the design.
      Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text
       by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical
        and improper Latin. The first two words themselves are a truncation of dolorem ipsum.
      Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized
       by advertisements for Letraset transfer sheets. Lorem ipsum was introduced to the digital world in the mid-1980s, 
      when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker.
      Other popular word processors, including Pages and Microsoft Word, have since adopted Lorem ipsum,as have many
      LaTeX packages, web content managers such as Joomla! and WordPress, and CSS libraries such as Semantic UI.
      We organize unforgettable events tailored just for you.
      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate 
      the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may
       be used as a placeholder before the final copy is available. It is also used to temporarily replace 
       text in a process called greeking, which allows designers to consider the form of a webpage or publication,
        without the meaning of the text influencing the design.
      Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text
       by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical
        and improper Latin. The first two words themselves are a truncation of dolorem ipsum.
      Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized
       by advertisements for Letraset transfer sheets. Lorem ipsum was introduced to the digital world in the mid-1980s, 
      when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker.
      Other popular word processors, including Pages and Microsoft Word, have since adopted Lorem ipsum,as have many
      LaTeX packages, web content managers such as Joomla! and WordPress, and CSS libraries such as Semantic UI.
      We organize unforgettable events tailored just for you.
      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate 
      the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may
       be used as a placeholder before the final copy is available. It is also used to temporarily replace 
       text in a process called greeking, which allows designers to consider the form of a webpage or publication,
        without the meaning of the text influencing the design.
      Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text
       by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical
        and improper Latin. The first two words themselves are a truncation of dolorem ipsum.
      Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized
       by advertisements for Letraset transfer sheets. Lorem ipsum was introduced to the digital world in the mid-1980s, 
      when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker.
      Other popular word processors, including Pages and Microsoft Word, have since adopted Lorem ipsum,as have many
      LaTeX packages, web content managers such as Joomla! and WordPress, and CSS libraries such as Semantic UI.
      </p>
      <Footer />
      </Suspense>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage; 








