import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import '../assets/css/style.css';

function Footer() {
  return (
   <Container fluid className="pt-3 footerback">
         <Row className="Footer">
            <Col>
               <div className="footerimage">
                  <img alt="footer_image" src="https://www.arcadeagroup.com/a-footer.svg"></img>
               </div>
            </Col>
            <Col md={6}>
               <div className="footerform">
                  <form action="https://arcadeagroup.us6.list-manage.com/subscribe/post" method="POST">
                     <input type="hidden" name="u" value="526cde56bb3f37173cfaa0a6b"/><input type="hidden" name="id" value="256e73495e"/>
                     <h3 className="text-white mb-3">The Arcadea Brief</h3>
                     <p className="text-white ">Join the Arcadea Brief, where we share our <br/> latest ideas and lessons learned, straight to <br/> your inbox.</p>
                     <div className="news-subscription mt-4">
                        <input type="email" className="p-2 border border-white " name="EMAIL" placeholder="Your email" required=""/><a className="signup" href="/" type="submit">Sign&nbsp;up</a>
                     </div>
                  </form>
               </div>
            </Col>  
         </Row>
         <Container>
            <Row className="mt-5 pb-5">
               <Col className="pt-3">
                  <p className="text-white ">
                     © Copyright Arcadea Group 2021
                  </p>
               </Col>
               <Col className="d-flex flex-row mt-2">
                  <a className="p-3 text-white text-decoration-none" href="/">Philosophy</a>
                  <a className="p-3 text-white text-decoration-none" href="/">Perspectives</a>
                  <a className="p-3 text-white text-decoration-none" href="/">People</a>
                  <a className="p-3 text-white text-decoration-none" href="mailto:info@arcadeagroup.com">Contact</a>
               </Col>
            </Row>
         </Container>   
   </Container>
  );
}

export default Footer;
