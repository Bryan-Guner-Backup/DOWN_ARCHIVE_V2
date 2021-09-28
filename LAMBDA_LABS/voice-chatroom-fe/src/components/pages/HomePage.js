import React from 'react'
import thread from '../assets/thread.jpg'
import mentor from '../assets/mentorpair.png'

import '../../sass/homepage.scss'

const Homepage = () => {

    return (
        <section className="home">

            <div className="hometop">
                <h3 className="welcome">Welcome to Wyzer Mentoring</h3>
                <h3 className="what">
                    What is Mentoring?   
                </h3>
                <p className="description">Mentoring is a reciprocal and collaborative at-will relationship that most often 
                    occurs between a mentor and mentee for the purpose of the mentee’s growth, 
                    learning, and career development. </p>
                <p>In simpler terms? Mentoring is like untangling tangled thought patterns and methods to help guide an individual to a smoother path to success!</p>
                <img className="thread" src={thread} alt="" />
            </div>

            <div className="midhome">
                <h2> Why is mentoring important?</h2>
            </div>
    
            <div>
               <div className="box">
                    <p>A good mentor can help the mentee become more effective at work, learn new skills, develop greater confidence, and make better decisions for their overall growth.
                        Whether it's for work, hobbies or other aspects of life, a mentor's coaching can give great motivation, direction, and insight from their direct experiences.
                    </p>
                    <p>With a mentor, a mentee has opportunity to ask case specific questions! Have you ever watched a DIY video and just felt you were missing something but couldn't pinpoint just what it was?
                        Working with someone helps untangle the more complex instructions into easier to understand sections and even helps a mentor refine their method of instruction.
                    </p>
                    <p>Mentors report many benefits as well, including satisfaction from seeing others develop; expanded generational and cultural perspectives; strengthening of technical, leadership, and interpersonal skills; and continuing to experience new ideas and insights.
                    </p>
                </div>
            </div>

            <h3 className="midhome">Why Wyzer?</h3>
            <div className="box">
                <p>Oftentimes mentorships are set up in career specific environments and can be hard to find for more general purposes. Other mediums for learning simply give users options to purchase and view pre recorded classes.
                    While this is great for some, one size of learning doesn't fit all. Wyzer allows individuals to find mentors for any topic of interest or purpose to learn on their own terms!
                </p>
                <img className="mentor" src={mentor} alt=""/>
                <p>"What about the mentors?" Wyzer's got your interests covered too! Here you'll find a space to develop your mentoring abilities whether you're a professional or someone seeking to share experience in your field.
                    The ability to set your own teaching style, grow your audience as you see fit and provide 1:1 mentoring on YOUR schedule gives you the freedom to refine your methods and grow with your mentees!
                </p>
            </div>
            <h3 className="midhome">
                Give Us A Try!
            </h3>
        </section>
    )

}

export default Homepage