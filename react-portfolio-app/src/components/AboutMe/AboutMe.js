import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Headshot from '../public/tressa2bw.jpg';

function AboutMe(props) {
    return (
    <>
      <Header></Header>
      <p>
        <h2>Tressa Park</h2>
      </p>
    Full Stack Developer proficient in both front and back end coding. Primary
      responsibilities include designing user interactions on websites, developing
      servers and databases for website functionality, and coding for mobile platforms.
    Senior Graphic Designer responsible for managing all design projects from concept
      to delivery. Other responsibilities include creating original artwork and reviewing
      the drafts of Junior Graphic Designers to ensure quality work.

      <section id="contact-info">
        <h4>Contact Info</h4>
        <ul>
          <li><strong>Email:</strong> tressapark@gmail.com</li>
          <li><strong>Linkedin:</strong> <a
            href="https://www.linkedin.com/in/tressa-park-1417666/">https://www.linkedin.com/in/tressa-park-1417666/</a>
          </li>
          <li><strong>Github:</strong> <a href="https://github.com/TressaPark">https://github.com/TressaPark</a></li>
          <li><strong>Phone:</strong> 773.895.0590</li>
        </ul>
      </section>
      <Footer></Footer>
    </>
);
}

export default AboutMe;