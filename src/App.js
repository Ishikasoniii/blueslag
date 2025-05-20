// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
// import Footer from './component/footer';
// import FaqData from './component/faq';
// import CourseInfo from './component/card';
// import WhyUsSlider from './component/slider';
// import CourseIntro from './component/home';
// import StatsSection from './component/section';
// import Navbar from './component/navbar';
// import All from './Allpage';

// function App() {
//   return (
//    <>
 
  
//        <Router>
//          {/* <All></All> */}
//           <Route path='/' element={<All />}></Route>
//     <Routes>
//         <Route path="/frontend/src/component/card.jsx" element={<CourseInfo />} />
        
//       </Routes>
//     </Router> 

//    </>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './component/footer';
import FaqData from './component/faq';
import CourseInfo from './component/card';
import WhyUsSlider from './component/slider';
import CourseIntro from './component/home';
import StatsSection from './component/section';
import Navbar from './component/navbar';
import All from './Allpage';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
<All></All>
      <Routes>
        {/* Define all your routes inside Routes */}
        <Route path="/frontend/src/Allpage.jsx" element={<All />} />
        <Route path="/frontend/src/component/card.jsx" element={<CourseInfo />} />
        <Route path="/frontend/src/component/faq.jsx" element={<FaqData />} />
        <Route path="/frontend/src/component/slider.jsx" element={<WhyUsSlider />} />
        <Route path="/course-intro" element={<CourseIntro />} />
        <Route path="/stats" element={<StatsSection />} />
      </Routes>

      {/* <Footer />  */}
    </Router>
  );
}

export default App;
