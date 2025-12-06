import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className='description'>
                <p>
                    Plan and organize your events effortlessly with Event Planner. From
                    birthdaysto corporate meetings, we've got you covered.
                </p>
                <button className='get-started-button'>Get Started</button>
            </section>
            <section className='events_categories'>
                <ul>
                    <h2>Social Events:</h2>
                    <li>Birtday Parties</li>
                    <li>Anniversary celebration</li>
                    <li>Wedding receptions</li>
                    <li>Baby shower</li>
                    <li>Graduation parties</li>
                    <li>Family reunion</li>
                </ul>
                <ul>
                    <h2>Entertainment Events:</h2>
                    <li>Concerts</li>
                    <li>Music festival</li>
                    <li>Film screening</li>
                    <li>Comedy shows</li>
                    <li>art exhibitaion</li>
                    <li>Cultural events</li>
                </ul>
                <ul>
                    <h2>Community Events:</h2>
                    <li>Fundraising Events</li>
                    <li>Charity galas</li>
                    <li>Volunteer drives</li>
                    <li>Neiborhood block parties</li>
                    <li>Community festivals</li>
                    <li>Cultural celebrations</li>
                </ul>
            </section>
            <section className='features'>
                <h2>Features</h2>
                <ul>
                    <li>Easy event creation and management</li>
                    <li>Customizable event templates</li>
                    <li>Guest list management</li>
                    <li>Real-time collaboration</li>
                    <li>Reminders and notifications</li>
                </ul>
            </section>
            <section className='testimonials'>
                <h2>Testimonials</h2>
                <div className='testimonial'>
                    <p>"Event Planner made organizing my wedding a breez, Highly recommended!"</p>
                    <p className='author'> - Meliza Espenida</p>
                </div>
                <div className='testimonial'>
                    <p>"I use Event Planner for all my events, It saves me so much time and effort!"</p>
                    <p className='author'> - Meliza Espenida the 2nd</p>
                </div>
            </section>
            <section className='contact'>
                <h2>Contact Us</h2>
                <form action="">
                    <input type="text" placeholder='Name'/>
                    <input type="email" placeholder='Email'/>
                    <textarea placeholder="Message" />
                    <button className='submit-button'>Send</button>
                </form>
            </section>
        </div>
    );
};

export default EventPlanner;
