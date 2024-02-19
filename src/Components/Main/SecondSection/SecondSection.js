import { H4style } from "./SecondSection.style";
import wireframing from "./../images/Ellipse 31.png";
import analysis from "./../images/Group 36.png";
import prototype from "./../images/Group 34.png";
import Design from "./../images/Group 33.png";
import testing from "./../images/Testing.png";
import Deployment from "./../images/Deployment.png";
import Services from "./Services";
import {
  WireframingAnime,
  WireframingContainer,
  Line,
  AnalysisContainer,
  AnalysisAnim,
  Line2,
  PrototypeAnim,
  Line3,
  PrototypeContainer,
  Line4,
  Testing,
  TestingAnim,
  Line5,
  DeploymentDiv,
  DeploymentAnim,
  Line6,
  SecondSectionContainer,
  MainLine6
} from "./SecondSection.style";

function SecondSection() {
  return (
    <SecondSectionContainer>
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

      <div>
        <AnalysisContainer>
          <Line></Line>
          <Line2></Line2>
          <AnalysisAnim src={analysis} alt="image1" />
          <Services
            span={"01."}
            h3={"Analysis"}
            ptag={
              "We work with our clients to gather the requirements, use cases, process specifications and conduct in-depth research on demographics, behavior patterns, and target audiences to refine your idea and create a strong app foundation"
            }
          />
        </AnalysisContainer>

        <WireframingContainer>
          <Services
            span={"02."}
            h3={"Wireframing"}
            ptag={
              "Our experienced UI/UX designers will create wireframes to visualize the client’s concept and ideas that clearly define the user journey"
            }
          />
          <WireframingAnime src={wireframing} alt="services"></WireframingAnime>
        </WireframingContainer>

        <PrototypeContainer>
          <Line3></Line3>
          <PrototypeAnim src={prototype} alt="images3" />
          <Services
            span={"03."}
            h3={"Prototyping"}
            ptag={
              "We lead the industry with best in class prototype design techniques that give you an earlier heads up on the look and feel, during the development cycle."
            }
          />
        </PrototypeContainer>

        <WireframingContainer>
          <Services
            span={"04."}
            h3={"Design & code"}
            ptag={
              "We use Human Interface Guidelines and follow industry best practices during our design and coding process. Our capabilities deliver sleek and responsive apps to give you a competitive edge"
            }
          />
          <WireframingAnime src={Design} alt="image4" />
          <Line4></Line4>
        </WireframingContainer>
        <Testing>
          <Line5></Line5>
          <TestingAnim src={testing} alt="image5" />
          <Services
            span={"05."}
            h3={"Testing & QA"}
            ptag={
              "We rigorously test the performance app performance to Industry standards to evaluate its scalability, responsiveness, and stability."
            }
          />
        </Testing>
        <DeploymentDiv>
          <Services
            span={"06."}
            h3={"Deployment"}
            ptag={
              "Once the app fulfills our client’s requirements and expectations, we deploy the app according to the launch plan."
            }
          />
          <DeploymentAnim src={Deployment} alt="image6" />
          <Line6></Line6>
          <MainLine6></MainLine6>
        </DeploymentDiv>
      </div>
    </SecondSectionContainer>
  );
}

export default SecondSection;

