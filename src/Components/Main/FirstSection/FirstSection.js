import image from "../../Main/FirstSection/webdoors logo 1.png";
import line from "../../Main/FirstSection/Line 1.png";
import Page1 from "../../Main/FirstSection/Group 83.svg";
import FirstSech2, {
  FirstSectionH22,
  SpanTag,
  H2Container,
  H1Tag,
  FirstP,
  TopDiv,
  SecondP,
  ArrowStyle,
  ContainerDiv,
  Page1Styale,
} from "./FirstSech2";

function FirstSection() {
  return (
    <>
      <ContainerDiv>
        <H2Container>
          <FirstSech2>INTRODUCING</FirstSech2>
          <FirstSectionH22>Webdoors</FirstSectionH22>
        </H2Container>

        <H1Tag>
          DIGITAL <SpanTag>EXPERIENCE,</SpanTag> RE-IMAGINED
        </H1Tag>
        <FirstP>
          A full-service digital agency with capabilities across web design and
          development
        </FirstP>
        <TopDiv>
          <SecondP>Need a Website?</SecondP>
          <div>
            <ArrowStyle src={line} alt="arrow"></ArrowStyle>
          </div>
        </TopDiv>
        <img src={image} alt="imamge" />
        <Page1Styale src={Page1} alt="page indicato" />
      </ContainerDiv>
    </>
  );
}

export default FirstSection;
