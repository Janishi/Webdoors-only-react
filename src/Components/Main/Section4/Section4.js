import Project from "./Project";
import { H3 } from "./styles";
import arrow from "./Images/Line 1.png";
import mobile from "./Images/mobile.png";
import image2 from "./Images/image2.png";
import image3 from "./Images/image3.png";

function Section4() {
  return (
    <div style={styles}>
      <H3>Projects</H3>
      <hr />
      <Project
        h3={"WeBsite"}
        pTag={
          "Fitudin vestibulum. Augue augue elementum massa vestibulum, vitae cras tempor,"
        }
        icon={arrow}
        image={mobile}
      />
      <Project
        h3={"WeBsite"}
        pTag={
          "vulputate risus. Facilisis tristique lorem cras porttitor ultrices cursus tristique. Ipsum lectus pretium rhoncu"
        }
        icon={arrow}
        image={image2}
      />
      <Project
        h3={"WeBsite"}
        pTag={
          "Fitudin vestibulum. Augue augue elementum massa vestibulum, vitae cras tempor, vulputate risus."
        }
        icon={arrow}
        image={image3}
      />
    </div>
  );
}

export default Section4;

const styles = {
  marginBottom: "160px",
};
