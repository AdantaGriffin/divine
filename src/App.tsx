import styles from './App.module.scss';

import Header from './components/header/header';
import Landing from './components/landing/landing';
import Services from './components/services/services';
import About from './components/about/about';
import Reviews from './components/reviews/reviews';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {

  return (
    <div className={styles.app}>
      <Header/>
      <Landing/>
      <Services/>
      <About/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
