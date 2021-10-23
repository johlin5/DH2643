import { UserData } from "./ProfilePresenter";
import { Container, makeStyles, createStyles, Avatar, Card, CardHeader, Typography, Divider } from "@material-ui/core";
import ProfileQuizPresenter from "./ProfileQuizPresenter";
type ProfileViewProps = { user: UserData | undefined; image: string };

const ProfileView: React.FC<ProfileViewProps> = ({ user, image }) => {
  const classes = useStyles();
  const { userName, firstName, lastName, biography } = user?.findUserByUserName || {};

  return (
    <Container component="main" className={classes.root}>
      <Card style={{ height: "100%", minHeight: "80vh" }}>
        <CardHeader
          avatar={<Avatar src={image} style={{ width: "50px", height: "50px", margin: 0 }} />}
          title={<Typography variant="h5">{userName ? userName : "Username"} </Typography>}
          subheader={firstName && lastName ? firstName + " " + lastName : ""}
        />
        {biography ? biography : ""}
        <Divider />
        <Typography variant="h6" style={{ paddingLeft: "8px" }}>
          Your quizes
        </Typography>
        <ProfileQuizPresenter />
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
      padding: "16px"
    },
    topRow: {
      flexDirection: "row"
    }
  })
);
