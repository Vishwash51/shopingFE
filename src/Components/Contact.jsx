import React from 'react';

function Contact() {
    
        return (
            <div id="contact">
                <h1>Book your order</h1>
                <form>
                    <input type="text" placeholder="your name" />
                    <input type="email" placeholder="your email" />
                    <textarea placeholder="Write here..."></textarea>
                    <input type='submit' value="Book"/>
                </form>
            </div>
        );
    
}

export default Contact;