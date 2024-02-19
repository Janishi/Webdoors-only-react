import Button from "./Button";
import image1 from "./images/Rectangle 32.jpeg";
import image2 from "./images/imagee2.png";

import {
  HeadingContainer,
  Container,
  Line1,
  Line2,
  Line3,
  LineContainer,
  H3,
  Image1,
  NewsContainer1,
  SubNewsContainer,
  SubNewsH3,
  SubNewsp1,
  SubNews2,
  SubNews22,
  SubNewsH32,
  SubNewsp12,
  SubNewsContiner22,
  Image2,
  
} from "./styles";

function Section5() {
  return (
    <Container>
      <HeadingContainer>
        <LineContainer>
          <Line1></Line1>
          <Line2></Line2>
          <Line3></Line3>
        </LineContainer>
        <H3>Read News about web</H3>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M11.5 8.5L19 1M14 1H19V6M19 12V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H8"
              stroke="#8F8CEF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </HeadingContainer>
      <div>
        <NewsContainer1>
          <Image1 src={image1} alt="image1" />
          <SubNewsContainer>
            <SubNewsH3>Lorem ipsum dolor amet</SubNewsH3>
            <SubNewsp1>11 November 2021</SubNewsp1>

            <Button />
          </SubNewsContainer>
          <SubNews2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
            condimentum scelerisque viverra magna sollicitudin vestibulum. Augue
            augue elementum massa vestibulum, vitae cras tempor, vulputate
            risus. Facilisis tristique lorem cras porttitor ultrices cursus
            tristique. Ipsum lectus pretium rhoncus id.
          </SubNews2>
        </NewsContainer1>

        <SubNewsContiner22>
          <div>
            <SubNewsH32>Test name of News</SubNewsH32>
            <SubNewsp12>11 November 2021</SubNewsp12>
            <Button />
          </div>
          <SubNews22>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
            condimentum scelerisque viverra magna sollicitudin vestibulum. Augue
            augue elementum massa vestibulum, vitae cras tempor, vulputate
            risus. Facilisis tristique lorem cras porttitor ultrices cursus
            tristique. Ipsum lectus pretium rhoncus id.
          </SubNews22>
          <Image2 src={image2} alt="image2" />
        </SubNewsContiner22>
      </div>
    </Container>
  );
}

export default Section5;
