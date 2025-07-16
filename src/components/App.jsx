import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AboutUs } from './Pages/AboutUs/AboutUs';
import { HomePage } from './Pages/HomePage/HomePage';
import { ContactUs } from './Pages/ContactUs/ContactUs';
import { OurMission } from './Pages/OurMission/OurMission';
import { CoreValues } from './Pages/CoreValues/CoreValues';

// Componente para hacer scroll al top
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/AboutUs"
          element={<AboutUs />}
        />
        <Route
          path="/OurMission"
          element={<OurMission />}
        />
        <Route
          path="/CoreValues"
          element={<CoreValues />}
        />
        <Route
          path="/ContactUs"
          element={<ContactUs />}
        />
      </Routes>
    </>
  );
};
