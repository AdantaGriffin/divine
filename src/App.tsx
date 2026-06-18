import styles from './App.module.scss';

import Header from './components/header/header';
import Landing from './components/landing/landing';
import Services from './components/services/services';
import About from './components/about/about';
import Reviews from './components/reviews/reviews';
import Footer from './components/footer/footer';

function App() {

  return (
    <>
      <Header/>
      <Landing/>
      <Services/>
      <About/>
      <Reviews/>
      <Footer/>
    </>
  )
}

export default App
