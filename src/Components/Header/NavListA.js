function NavListA(prop) {
  return (
    <a style={astyles.wrapper} href={prop.url}>
      {prop.title}
    </a>
  );
}

export default NavListA;

const astyles = {
  wrapper: {
    color: "#fff",
    textAlign: "justify",
    fontFamily: "Quicksand",
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: -0.27,
    fontStyle: "normal",
    lineHeight: "normal",
  },
};
