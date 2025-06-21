import { Route, Routes } from 'react-router-dom';
import { AboutUs } from './Pages/AboutUs/AboutUs';
import { HomePage } from './Pages/HomePage/HomePage';
import { ContactUs } from './Pages/ContactUs/ContactUs';
import { OurMission } from './Pages/OurMission/OurMission';
import { CoreValues } from './Pages/CoreValues/CoreValues';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/OurMission" element={<OurMission />} />
      <Route path="/CoreValues" element={<CoreValues />} />
      <Route path="/ContactUs" element={<ContactUs />} />
    </Routes>
  );
};
