import Fade from "react-reveal/Fade";

const WithTopFade = ({ children }) => {
  return <Fade top>{children}</Fade>;
};
const WithBottomFade = ({ children }) => {
  return <Fade bottom>{children}</Fade>;
};
const WithLeftFade = ({ children }) => {
  return <Fade left>{children}</Fade>;
};
const WithRightFade = ({ children }) => {
  return <Fade right>{children}</Fade>;
};

export { WithTopFade, WithBottomFade, WithLeftFade, WithRightFade };
