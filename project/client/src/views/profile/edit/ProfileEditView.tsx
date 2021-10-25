import { ProfileUpdateState } from "./ProfileEditPresenter";
import { Typography } from "@material-ui/core";

type ProfileEditViewProps = {
  userData: ProfileUpdateState;
  onClick: () => void;
  onChange: (value: ProfileUpdateState) => void;
};

const ProfileEditView: React.FC<ProfileEditViewProps> = ({ userData, onClick, onChange }) => {
  if (!history) {
    return <>No quiz history!</>;
  }

  const { firstName, lastName, image, biography } = userData;
  return (
    <>
      <Typography variant="h6" style={{ paddingLeft: "8px" }}>
        Edit Profile
      </Typography>
      <form onSubmit={onClick}>
        <label>
          First name:
          <input
            type="text"
            name="firstName"
            value={firstName || ""}
            onChange={(e) => onChange({ ...userData, firstName: e.target.value })}
          />
        </label>
        <label>
          Last name:
          <input
            type="text"
            name="lastName"
            value={lastName || ""}
            onChange={(e) => onChange({ ...userData, lastName: e.target.value })}
          />
        </label>
        <label>
          Biography:
          <input
            type="text"
            name="biography"
            value={biography || ""}
            onChange={(e) => onChange({ ...userData, biography: e.target.value })}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default ProfileEditView;
