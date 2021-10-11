import { Container } from "@material-ui/core";
import { FETCH_ALL_QUIZES } from "../../services/queries/Quiz";
import { useQuery } from "@apollo/client";

const DashboardPresenter: React.FC = () => {
  const { loading, error, data } = useQuery(FETCH_ALL_QUIZES);

  console.log(data);
  return (
    <Container component="main" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      ello
    </Container>
  );
};

export default DashboardPresenter;
