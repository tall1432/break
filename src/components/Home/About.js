import React from 'react';
import Title from '../Title';
import styles from '../../css/about.module.css'
import image from '../../images/defaultBcg.jpeg'
import card from './card';
const About = () => {
    return (
        <section className = {styles.about}>
            <Title title = 'about' subtitle ='us'/>
        <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
        <div className={styles.imgContainer}>
        <img src = {image} alt = 'about infos'/>
        </div>
        </article>
        <article className={styles.aboutInfo}>
        <h4>explore the difference </h4>
        <p> Elit irure cupidatat mollit sunt cillum magna.In laboris ad quis ullamco commodo sint aliqua mollit nostrud. </p>
        <p> Elit irure cupidatat mollit sunt cillum magna.In laboris ad quis ullamco commodo sint aliqua mollit nostrud. </p>
        <button type='button' className=' btn-primary'>read more</button>
        </article>
        </div>

        </section>
    );
}

export default About;
