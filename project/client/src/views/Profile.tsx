import { SIGN_UP } from "../services/queries/User";
import { useMutation, gql } from "@apollo/client";
import { Button } from "@material-ui/core";
const Profile: React.FC = () => {
  // const [signup, { data, loading, error }] = useMutation(SIGN_UP);
  const [signup, { data, loading, error }] = useMutation(SIGN_UP, {
    variables: {
      signupInput: {
        userName: "k121alle",
        password: "!aBCD1234",
        passwordConfirmation: "!aBCD1234",
        firstName: "kalle"
      }
    }
  });

  const register = async () => {
    const result = await signup();
    console.log(data);
    console.log(result);
  };

  if (loading) return <>Loading</>;

  return (
    <>
      {error && <>{error.message}</>}
      <Button
        onClick={() => {
          register();
        }}
      >
        Signup
      </Button>
    </>
  );
};
// { variables: { id: "testid", userName: "kalleAnka", password: "ABCD1234", firstName: "kalle" }
export default Profile;
