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
    </Container>
  );
}

export default Footer;

const styles = {
  marginBottom: "60px",
};
