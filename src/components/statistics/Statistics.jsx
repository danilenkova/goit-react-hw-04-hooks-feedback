import PropTypes from "prop-types";
import { StyledStatistics, StatisticsItem } from "./Statistics.styled";
import { FaRegGrinAlt, FaRegMeh, FaRegFrown } from "react-icons/fa";

const feedBackTypes = {
  good: <FaRegGrinAlt />,
  neutral: <FaRegMeh />,
  bad: <FaRegFrown />,
};

const Statistics = ({ data }) => {
  return (
    <StyledStatistics>
      {Object.keys(data).map((item) => (
        <StatisticsItem key={item}>
          {feedBackTypes[item]}
          {item}: {data[item]}
        </StatisticsItem>
      ))}
    </StyledStatistics>
  );
};

Statistics.protoTypes = {
  data: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};

export default Statistics;
