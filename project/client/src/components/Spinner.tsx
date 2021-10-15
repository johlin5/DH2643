import GridLoader from "react-spinners/GridLoader";
import { css } from "@emotion/react";
import { RED } from "../app/theme";

const Spinner: React.FC = () => {
  const override = css`
    display: block;
    margin: auto auto;
    border-color: red;
  `;

  return <GridLoader color={RED} loading={true} css={override} size={50} />;
};

export default Spinner;
