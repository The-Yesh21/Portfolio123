import React from "react"
import "./Home.css"
import hero from "../../assets/images/hero.png"
import skill1 from "../../assets/images/skill1.png"
import skill2 from "../../assets/images/skill2.png"
import skill3 from "../../assets/images/skill3.png"
import html from "../../assets/images/html.png"
import css from "../../assets/images/css.png"
import js from "../../assets/images/javascript.png"
import react from "../../assets/images/react.jpg"
import jira from "../../assets/images/jira.png"
import python from "../../assets/images/python.jpg"
import java from "../../assets/images/java.png"
import android from "../../assets/images/android.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Yeshwanth</span>
            </h1>
            <h2>
              a <span>
                <Typewriter words={["Professional Coder.", "Versatile Developer.", "Creative Designer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I use animation as a third dimension by which to simplify experiences and guiding through each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that matter.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className='btn_shadow'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className='btn_shadow'>
                    <i className='fab fa-instagram'></i>
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className='btn_shadow'>
                    <i className='fab fa-linkedin-in'></i>
                  </a>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <div className="skill_grid">
                    <button className='btn_shadow'>
                    <img src={skill1} alt='skill' />
                    </button>
                    <button className='btn_shadow'>
                    <img src={skill2} alt='skill' />
                    </button>
                    <button className='btn_shadow'>
                    <img src={skill3} alt='skill' />
                    </button>
                    <button className='btn_shadow'>
                        <img src={jira} alt='jira' />
                    </button>
                    <button className='btn_shadow'>
                        <img src={python} alt='python' />
                    </button>
                    <button className='btn_shadow'>
                        <img src={react} alt='react' />
                    </button>
                    <button className='btn_shadow'>
                        <img src={java} alt='java' />
                    </button>
                    <button className='btn_shadow'>
                        <img src={html} alt='html' />
                    </button>
                    <button className='btn_shadow'>
                        <img src={css} alt='css' />
                    </button>
                    <button className='btn_shadow'>
                        <img src={js} alt='js' />
                    </button>
                    <button className='btn_shadow'>
                        <img src={android} alt='android' />
                    </button>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='hero' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home