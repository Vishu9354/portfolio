import React from 'react'
import './portfolio.css'
export default function Portfolio() {
  return (
    <>
        <div className='left'>
            <div className='name font'>
                Vishal Kumar
            </div>
            <div className='position font'>
                Developer
            </div>
            <div className='detail font'>
            Building responsive and dynamic web experiences <br/> with a passion for clean code and design
            </div>

            <div className='navigation font'>
                <div>
                <div className='hr'>About</div>
                <div className='hr'>Skills</div>
                <div className='hr'>Projects</div>
                </div>
            </div>
        </div>
        <div className='right'>
            <div className='intro font'>
                I am Vishal kumar currently Studying at IIT Jammu. Also passinated in development. With Strong knowlegde of HTML, CSS, Javascript a nd React Js. Also Work with Different College Teams and built user-friendly Website for college fest. Also Developed Website for College club Nature and Adventure Club IIT Jammu. As I Already worked with different teams in my college. I am good in managing and working different teams. Also have experinced in working alone. I am good at compliting my projects before deadline. While working on different projects my main focus is to build user friendly interface and optimizing preformance to ensure fast load time this helps to enhance users experience on website.<br/><br/>
                Explore my projects and if you are looking for frontend developer connect with me and discuss how I can contribute to your project

            </div>

            <div className='project font'>
                <a href='#'>
                <div className='projectdetail font'>
                    <div className='time'>
                    2024
                    </div>
                    <div className='prjright'>
                        <div className='prjname'>
                          <b>  Web Devloper Nature and Adventure Club IIT Jammu</b>
                        </div>
                        <div className='prjdetail'>
                            Develop Website for Nature and Adventure Club IIT Jammu.Ensured a user-friendly and responsive website design by utilizing React Js. Implemented various features,club
                            information, and member profiles.
                        </div>
                        <div className='skills'>
                            <span className='skill'>
                                HTML
                            </span>
                            <span className='skill'>
                              CSS
                            </span>
                            <span className='skill'>
                                Javascript
                            </span>
                            <span className='skill'>
                                ReactJs
                            </span>
                        </div>
                    </div>
                </div>
                </a>
            </div>
        </div>
    </>
  )
}
