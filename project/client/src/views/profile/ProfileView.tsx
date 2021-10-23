import { UserData } from "./ProfilePresenter";
import { Container, makeStyles, createStyles, Avatar, Card, CardHeader, Typography } from "@material-ui/core";

type ProfileViewProps = { user: UserData | undefined; image: string };

const ProfileView: React.FC<ProfileViewProps> = ({ user, image }) => {
  const classes = useStyles();
  const { userName, firstName, lastName, biography } = user?.findUserByUserName || {};

  return (
    <Container component="main" className={classes.root}>
      <Card>
        <CardHeader
          avatar={<Avatar src={image} style={{ width: "50px", height: "50px", margin: 0 }} />}
          title={<Typography variant="h5">{userName ? userName : "Username"} </Typography>}
          subheader={firstName && lastName ? firstName + " " + lastName : ""}
        />
        {biography ? biography : ""}
      </Card>
    </Container>
  );
};
export default ProfileView;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100%",
      minHeight: "80vh",
      backgroundColor: "white",
      padding: "16px"
    },
    topRow: {
      flexDirection: "row"
    }
  })
);
