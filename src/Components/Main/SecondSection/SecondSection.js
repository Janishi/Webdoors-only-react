import {
  H4style,
  Divstyle,
  H3number,
  H3style,
  H3Container,
  Ptag,
  LeftDivContainer,
  WholeContainer,
  RightDivContainer,
} from "./SecondSection.style";

const array = [{}, {}];

function SecondSection() {
  return (
    <div>
      <H4style>
        Services{" "}
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
      </H4style>
      <WholeContainer>
        <LeftDivContainer>
          <Divstyle>
            <H3Container>
              <H3number>02.</H3number>
              <H3style> Wireframing</H3style>
            </H3Container>

            <Ptag>
              Our experienced UI/UX designers will create wireframes to
              visualize the client’s concept and ideas that clearly define the
              user journey
            </Ptag>
          </Divstyle>

          <Divstyle style={secondDiv}>
            <H3Container>
              <H3number>04.</H3number>
              <H3style>Design&code</H3style>
            </H3Container>

            <Ptag>
              We use Human Interface Guidelines and follow industry best
              practices during our design and coding process. Our capabilities
              deliver sleek and responsive apps to give you a competitive edge.
            </Ptag>
          </Divstyle>

          <Divstyle>
            <H3Container>
              <H3number>06.</H3number>
              <H3style> Deployment</H3style>
            </H3Container>

            <Ptag>
              Once the app fulfills our client’s requirements and expectations,
              we deploy the app according to the launch plan.
            </Ptag>
          </Divstyle>
        </LeftDivContainer>

        <RightDivContainer>
          <Divstyle>
            <H3Container>
              <H3number>01.</H3number>
              <H3style> Analysis</H3style>
            </H3Container>

            <Ptag>
              We work with our clients to gather the requirements, use cases,
              process specifications and conduct in-depth research on
              demographics, behavior patterns, and target audiences to refine
              your idea and create a strong app foundation
            </Ptag>
          </Divstyle>

          <Divstyle style={secondDiv}>
            <H3Container>
              <H3number>03.</H3number>
              <H3style>Prototyping&code</H3style>
            </H3Container>

            <Ptag>
              We lead the industry with best in class prototype design
              techniques that give you an earlier heads up on the look and feel,
              during the development cycle.
            </Ptag>
          </Divstyle>

          <Divstyle>
            <H3Container>
              <H3number>05.</H3number>
              <H3style> Testing & QA</H3style>
            </H3Container>

            <Ptag>
              We rigorously test the performance app performance to Industry
              standards to evaluate its scalability, responsiveness, and
              stability.
            </Ptag>
          </Divstyle>
        </RightDivContainer>
      </WholeContainer>
    </div>
  );
}

export default SecondSection;

const secondDiv = {
  marginTop: 234,
  marginBottom: 270,
};
