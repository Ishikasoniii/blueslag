import logo from './logo.svg';
import './App.css';
import Footer from './component/footer';
import FaqData from './component/faq';
import CourseInfo from './component/card';
import WhyUsSlider from './component/slider';
import CourseIntro from './component/home';
import StatsSection from './component/section';
import Navbar from './component/navbar';
import CompaniesSection from './component/logo';

function All() {
  return (
   <>

   <Navbar></Navbar>
   <CourseIntro></CourseIntro>
 
   <WhyUsSlider></WhyUsSlider>
   <CompaniesSection></CompaniesSection>
   <StatsSection></StatsSection>
<CourseInfo></CourseInfo>
   <FaqData></FaqData>
   <Footer></Footer>

   </>
  );
}

export default All;
