import React from 'react'

export default function ContactForm() {
    return (
        <div class="contact-container">
            <h1 class="brand">Contact&nbsp;<span>Fire</span>Fly</h1>
            <h5>Please submit this form and we will get back to you as fast as we can</h5>
            <div class="wrapper animated bounceInLeft">
                <div class="company-info">
                    <h3 class="company-name-text" style={{ marginLeft: "4rem", fontSize: "2rem", color: "#4a9123" }}>Project FireFly</h3>

                    <ul class="contact-list">
                        <li><i class="fa fa-road"></i>&nbsp;&nbsp; 99 Main Street</li>
                        <li><i class="fa fa-phone"></i>&nbsp;&nbsp; (555) 555-5555</li>
                        <li><i class="fa fa-envelope"></i>&nbsp; &nbsp; fireflyteam@gmail.com</li>
                    </ul>
                </div>
                <div class="contact">
                    <h3>Email Us</h3>
                    <form>
                        <p>
                            <label>Name</label>
                            <input type="text" name="name" />
                        </p>
                        <p>
                            <label>Email Address</label>
                            <input type="email" name="email" />
                        </p>
                        <p>
                            <label>Phone Number</label>
                            <input type="text" name="phone"></input>
                        </p>
                        <p class="full">
                            <label>Message</label>
                            <textarea name="message" rows="5"></textarea>
                        </p>
                        <p class="full">
                            <button>Submit</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
