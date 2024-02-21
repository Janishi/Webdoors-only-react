import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import img7 from "./images/img7.svg";
import img8 from "./images/img8.svg";
import img9 from "./images/img9.svg";
import img10 from "./images/img10.svg";
import img11 from "./images/img11.svg";
import webdoors from "./images/webdoors.png";
import dmca from "./images/dmca.png";
import eba from "./images/eba.png";
import be from "./images/be.png";
import instagram from "./images/instagram.svg";
import twitter from "./images/twitter.svg";
import linkdin from "./images/linkdin.svg";
import facdbook from "./images/facebook.svg";
import youtube from "./images/youtube.svg";
import icon from "./images/icon.svg";
import github from "./images/github.svg";
import line from "./images/Group 83.png";

import {
  Row1Container,
  Container,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Webdoors,
  Dmca,
  Eba,
  Footer21Container,
  Copyright,
  IconsContainer,
  FooterContainer,
  FooterMobile,
  FooterNumbers,
  FooterNumbersContainer,
  Numbers,
  Line,
  LineContainer
} from "./styles";

function Footer() {
  return (
    <Container>
      <Row1Container style={styles}>
        <Img1 src={img1} alt="img1" />
        <Img2 src={img2} alt="img2" />
        <Img3 src={img3} alt="img3" />
        <Img4 src={img4} alt="img4" />
        <Img5 src={img5} alt="img5" />
        <Img6 src={img6} alt="img6" />
      </Row1Container>

      <Row1Container>
        <Img7 src={img7} alt="img7" />
        <Img8 src={img8} alt="img8" />
        <Img9 src={img9} alt="img9" />
        <Img10 src={img10} alt="img10" />
        <Img11 src={img11} alt="img11" />
      </Row1Container>

      <FooterContainer>
        <Footer21Container>
          <Webdoors src={webdoors} alt="webdoors logo" />
          <div>
            <Dmca src={dmca} alt="DMCA" />
            <Eba src={eba} alt="eba" />
          </div>
        </Footer21Container>

        <div>
          <IconsContainer>
            <img src={be} alt="icon" />
            <img src={instagram} alt="icon" />
            <img src={twitter} alt="icon" />
            <img src={linkdin} alt="icon" />
            <img src={facdbook} alt="icon" />
            <img src={youtube} alt="icon" />
            <img src={icon} alt="icon" />
            <img src={github} alt="icon" />
          </IconsContainer>

          <FooterNumbersContainer>
            <div>
              <FooterMobile>Name:</FooterMobile>
              <FooterNumbers> JSC Webdoors</FooterNumbers>
              <br />
              <FooterMobile>Gov.Id:</FooterMobile>
              <FooterNumbers> 405281216</FooterNumbers>
            </div>
            <Numbers>
              <FooterMobile>Telephone: </FooterMobile>
              <FooterNumbers>+995 571507979</FooterNumbers>
              <br />
              <FooterMobile>Telephone2: </FooterMobile>
              <FooterNumbers>+995 599339099</FooterNumbers>
              <br />
              <FooterMobile>Email: </FooterMobile>
              <FooterNumbers> Info@Webdoors.Ge</FooterNumbers>
              <br />
              <FooterMobile>Address: </FooterMobile>
              <FooterNumbers> 97 Akaki Tsereteli Ave,</FooterNumbers>
              <br />
              <FooterMobile>Zip: </FooterMobile>
              <FooterNumbers>0179</FooterNumbers>
            </Numbers>
          </FooterNumbersContainer>
        </div>
      </FooterContainer>

      <LineContainer>
        <Copyright>Copyright © 2018-2022 all rights reserved</Copyright>
        <Line src={line} alt="line" />
      </LineContainer>
    </Container>
  );
}

export default Footer;

const styles = {
  marginBottom: "60px",
};
