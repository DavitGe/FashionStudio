import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyle';
import { dark } from './styles/Themes';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useEffect, useRef, useState } from 'react';
import Home from './sections/Home';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { AnimatePresence } from 'framer-motion';
import About from './sections/About';
import Shop from './sections/Shop';
import ScrollTriggerProxy from './components/ScrollTriggerProxy';
import Banner from './sections/Banner';
import NewArrival from './sections/NewArrival';
import Footer from './sections/Footer';
import Loader from './sections/Loader';

function App() {
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence>
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home key="home" />
              <About key="about" />
              <Shop key="shop" />
              {/* <Marquee key="marquee" /> */}
              <Banner key="marquee" />
              <NewArrival key="new arrival" />
              <Footer key="Footer" />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
