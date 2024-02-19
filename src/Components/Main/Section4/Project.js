import { ProjectH3, PTag, Container, Image, Arrow } from "./styles";
function Project(props) {
  return (
    <div>
      <Container>
        <div style={styles}>
          <ProjectH3>{props.h3}</ProjectH3>
          <PTag>{props.pTag}</PTag>
          <Arrow src={props.icon} alt="image1" />
        </div>
        <Image src={props.image} alt="image2" />
      </Container>
      <hr />
    </div>
  );
}

export default Project;

const styles = {
    position: "relative"
}
