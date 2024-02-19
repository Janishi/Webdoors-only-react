import line from "./images/Group 83.png";
import { Container, HeaderIcon, H3, Ptag } from "./style";
function ThirdSection() {
  return (
    <Container>
      <HeaderIcon>
        <H3>Our life’s work</H3>
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
      </HeaderIcon>
      <img src={line} alt="line" />
      <Ptag>
        <span>Lorem ipsum dolor</span> sit amet, consectetur adipiscing elit.
        Nisi, condimentum scelerisque viverra magna sollicitudin vestibulum.
        Augue augue elementum massa vestibulum, vitae cras tempor, vulputate
        risus. Facilisis tristique lorem cras porttitor ultrices cursus
        tristique. Ipsum lectus pretium rhoncus id. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nisi, condimentum scelerisque viverra magna
        sollicitudin vestibulum. Augue augue elementum massa vestibulum, vitae
        cras tempor, vulputate risus. Facilisis tristique lorem cras porttitor
        ultrices cursus tristique. Ipsum lectus pretium rhoncus id.{" "}
      </Ptag>
    </Container>
  );
}

export default ThirdSection;
