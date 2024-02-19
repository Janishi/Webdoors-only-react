import { SpanTag, H3Tag, Paragraph, Container } from "./SecondSection.style";
function Services(props) {
  return (
    <Container>
      <SpanTag>{props.span}</SpanTag>
      <H3Tag>{props.h3}</H3Tag>
      <Paragraph>{props.ptag}</Paragraph>
    </Container>
  );
}
export default Services;
