import { UserData } from "./ProfilePresenter";
import {
  makeStyles,
  createStyles,
  Avatar,
  CardHeader,
  Typography,
  Divider,
  Button,
  CardActions
} from "@material-ui/core";
type ProfileViewProps = { user: UserData | undefined; image: string; editProfile: () => void };

const ProfileView: React.FC<ProfileViewProps> = ({ user, image, editProfile }) => {
  const classes = useStyles();
  const { userName, firstName, lastName, biography } = user?.findUserByUserName || {};

  return (
    <>
      <CardHeader
        avatar={<Avatar src={image} style={{ width: "50px", height: "50px", margin: 0 }} />}
        title={<Typography variant="h5">{userName ? userName : "Username"} </Typography>}
        subheader={firstName && lastName ? firstName + " " + lastName : ""}
      />
      <CardActions>
        <Button variant="contained" color="primary" onClick={editProfile}>
          Edit
        </Button>
      </CardActions>
      {biography ? biography : ""}
      <Divider />
    </>
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
