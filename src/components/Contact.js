import React from 'react'

const Contact = () => {
    return (
        <section className='contact' id='contact'>

            <h1 className='heading'>
                <span>Contact </span> us
            </h1>

            <div className="row">
            <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.5331885638834!2d77.088325!3d28.493601799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1939aa6004ef%3A0x3240c4c9cab262ab!2sCyber%20City%2C%20DLF%20Tower%208th%20Rd%2C%20DLF%20Cyber%20City%2C%20DLF%20Phase%202%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin!4v1689976837712!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            >

           </iframe>
               <form>
                <h3>Get in Touch</h3>
                <div className="inputBox">
                    <span className='fas fa-user'></span>
                    <input type="text" placeholder='Name'/>
                </div>
                <div className="inputBox">
                    <span className='fas fa-envelope'></span>
                    <input type="email" placeholder='Your Email'/>
                </div>
                <div className="inputBox">
                    <span className='fas fa-phone'></span>
                    <input type="tel" placeholder='Your Phone Number'/>
                </div>

                <input type="submit" value="Contact now" className='btn'/>
               </form>
            </div>

        </section>
    )
}

export default Contact
