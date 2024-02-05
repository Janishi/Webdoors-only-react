import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";

function Main() {
  return (
    <div style={styles}>
      <FirstSection />
      <SecondSection />
    </div>
  );
}

export default Main;

const styles = {
  marginLeft: "10%",
  marginRight: "10%",
};
