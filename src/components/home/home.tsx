import styles from './home.module.scss';

import Landing from "../landing/landing";
import Services from "../services/services";
import About from "../about/about";
import Reviews from "../reviews/reviews";
import Contact from "../contact/contact";
import Footer from "../footer/footer";

function Home(){
    return(
        <>
            <section className={styles.home}>
                <Landing/>
                <Services/>
                <About/>
                <Reviews/>
                <Contact/>
                <Footer/>
            </section>
        </>
    )
};

export default Home;