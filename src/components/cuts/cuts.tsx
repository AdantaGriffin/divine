import styles from './cuts.module.scss';

function Cuts(){
    return(
        <>
            <section className={styles.cuts}>
                
                <div className={styles.cutsTitle}>
                    <img/>
                    <h2>Service Menu</h2>
                </div>

                <div className={styles.cutServices}>

                    <div className={styles.servicesList}>
                        <h3>Cuts:</h3>
                        <hr></hr>
                        <ul className={styles.cutList}>
                            
                            <li className={styles.cutItem}>
                                <p>home visit</p>
                                <ul className={styles.cutPriceList}>
                                    <li className={styles.price}>adult: 150+</li>
                                    <li className={styles.price}>child: 150+</li>
                                </ul>
                            </li>

                            <li className={styles.cutItem}>
                                <p>regular</p>
                                <ul className={styles.cutPriceList}>
                                    <li className={styles.price}>adult: 35+</li>
                                    <li className={styles.price}>child: 20+</li>
                                </ul>
                            </li>

                            <li className={styles.cutItem}>
                                <p>fade</p>
                                <ul className={styles.cutPriceList}>
                                    <li className={styles.price}>adult: 40</li>
                                    <li className={styles.price}>child: 25</li>
                                </ul>
                            </li>

                            <li className={styles.cutItem}>
                                <p>shape up</p>
                                <ul className={styles.cutPriceList}>
                                    <li className={styles.price}>adult: 20</li>
                                    <li className={styles.price}>child: 15</li>
                                </ul>
                            </li>

                            <li className={styles.cutItem}>
                                <p>eye brow trim</p>
                                <ul className={styles.cutPriceList}>
                                    <li className={styles.price}>adult: 10</li>
                                    <li className={styles.price}>child: 10</li>
                                </ul>
                            </li>

                            <li className={styles.cutItem}>
                                <p>beard</p>
                                <ul className={styles.cutPriceList}>
                                    <li className={styles.price}>adult: 20</li>
                                    <li className={styles.price}>child: </li>
                                </ul>
                            </li>

                            <li className={styles.cutItem}>
                                <p>bald shave</p>
                                <ul className={styles.cutPriceList}>
                                    <li>adult: 40</li>
                                    <li>child: </li>
                                </ul>
                            </li>

                            <li className={styles.cutItem}>
                                <p>tape up</p>
                                <ul className={styles.cutPriceList}>
                                    <li className={styles.price}>adult: 40</li>
                                    <li className={styles.price}>child: 25</li>
                                </ul>
                            </li>

                            <li className={styles.cutItem}>
                                <p>ceasar</p>
                                <ul className={styles.cutPriceList}>
                                    <li className={styles.price}>adult: 35</li>
                                    <li className={styles.price}>child: 20</li>
                                </ul>
                            </li>

                            <li className={styles.cutItem}>
                                <p>mohawk</p>
                                <ul className={styles.cutPriceList}>
                                    <li className={styles.price}>adult: 45</li>
                                    <li className={styles.price}>child: 30</li>
                                </ul>
                            </li>

                            <li className={styles.cutItem}>
                                <p>flat top</p>
                                <ul className={styles.cutPriceList}>
                                    <li className={styles.price}>adult: 40</li>
                                    <li className={styles.price}>child: 25</li>
                                </ul>
                            </li>

                            <li className={styles.cutItem}>
                                <p>designs</p>
                                <ul className={styles.cutPriceList}>
                                    <li className={styles.price}>adult: 10+</li>
                                    <li className={styles.price}>child: 10+</li>
                                </ul>
                            </li>

                        </ul>
                    </div>

                    <div className={styles.servicesList}>
                        <h3>Styling & Treatments:</h3>
                        <hr></hr>
                        <ul className={styles.addOnList}>

                            <li className={styles.stylistItem}>
                                <p>highlights</p>
                                <ul className={styles.cutPriceList}>
                                    <li className={styles.price}>adult: 150+</li>
                                    <li className={styles.price}>child: 150+</li>
                                </ul>
                            </li>


                            <li className={styles.stylistItem}>
                                <p>full color</p>
                                <ul className={styles.cutPriceList}>
                                    <li className={styles.price}>adult: 150+</li>
                                    <li className={styles.price}>child: 150+</li>
                                </ul>
                            </li>


                            <li className={styles.stylistItem}>
                                <p>beard</p>
                                <ul className={styles.cutPriceList}>
                                    <li className={styles.price}>adult: 150+</li>
                                    <li className={styles.price}>child: 150+</li>
                                </ul>
                            </li>


                            <li className={styles.stylistItem}>
                                <p>perm</p>
                                <ul className={styles.cutPriceList}>
                                    <li className={styles.price}>adult: 150+</li>
                                    <li className={styles.price}>child: 150+</li>
                                </ul>
                            </li>

                            <li className={styles.stylistItem}>
                                <p>facials</p>
                                <ul className={styles.cutPriceList}>
                                    <li className={styles.price}>adult: 75+</li>
                                    <li className={styles.price}>child:</li>
                                </ul>
                            </li>

                        </ul>
                    </div>

                </div>
            </section>
        </>
    )
};

export default Cuts;