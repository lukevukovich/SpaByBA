import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { PageTransition } from "./components/PageTransition";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { Packages } from "./pages/Packages";
import { Memberships } from "./pages/Memberships";
import { AboutUs } from "./pages/AboutUs";
import { GetInTouch } from "./pages/GetInTouch";
import { PaymentPlans } from "./pages/PaymentPlans";
import { LegalPage } from "./pages/LegalPage";
import { NotFound } from "./pages/NotFound";

function App() {
  const location = useLocation();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/services"
            element={
              <PageTransition>
                <Services />
              </PageTransition>
            }
          />
          <Route
            path="/services/:slug"
            element={
              <PageTransition>
                <ServiceDetailPage />
              </PageTransition>
            }
          />
          <Route
            path="/packages"
            element={
              <PageTransition>
                <Packages />
              </PageTransition>
            }
          />
          <Route
            path="/memberships"
            element={
              <PageTransition>
                <Memberships />
              </PageTransition>
            }
          />
          <Route
            path="/about-us"
            element={
              <PageTransition>
                <AboutUs />
              </PageTransition>
            }
          />
          <Route
            path="/get-in-touch"
            element={
              <PageTransition>
                <GetInTouch />
              </PageTransition>
            }
          />
          <Route
            path="/get-in-touch/payment-plans"
            element={
              <PageTransition>
                <PaymentPlans />
              </PageTransition>
            }
          />
          <Route
            path="/terms-of-use"
            element={
              <PageTransition>
                <LegalPage kind="terms" />
              </PageTransition>
            }
          />
          <Route
            path="/accessibility-statement"
            element={
              <PageTransition>
                <LegalPage kind="accessibility" />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
