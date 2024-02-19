import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
function Main() {
  return (
    <div style={styles}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Section4 />
      <Section5 />
    </div>
  );
}

export default Main;

const styles = {
  marginLeft: "12.5%",
  marginRight: "12.5%",
};
