import { useMutation, useQuery } from "@apollo/client";
import Spinner from "../../../components/Spinner";
import { UPDATE_USER, FIND_USER_BY_ID } from "../../../services/queries/User";
import ProfileEditView from "./ProfileEditView";
import { useState } from "react";

type Profile = {
  id: string;
  userName: string;
  firstName: string | undefined;
  lastName: string | undefined;
  image: string | undefined;
  biography: string | undefined;
};

export type ProfileUpdateState = {
  firstName: string | undefined;
  lastName: string | undefined;
  image: string | undefined;
  biography: string | undefined;
};

export type ProfileData = { findUserById: Profile };

const ProfileEditPresenter: React.FC = () => {
  const { loading, data, error } = useQuery<ProfileData>(FIND_USER_BY_ID);
  const [update, updatedResponse] = useMutation<ProfileData>(UPDATE_USER);
  const submitEdit = async (input: ProfileUpdateState) => {
    await update({
      variables: {
        input: {
          ...input
        }
      }
    });
  };
  const [profileUpdateState, setProfileUpdateState] = useState<ProfileUpdateState>({
    firstName: data?.findUserById.firstName,
    lastName: data?.findUserById.lastName,
    image: data?.findUserById.image,
    biography: data?.findUserById.biography
  });

  if (!data || loading) {
    return <Spinner />;
  }

  return (
    <ProfileEditView
      userData={profileUpdateState}
      onClick={() => submitEdit(profileUpdateState)}
      onChange={(value) => setProfileUpdateState(value)}
    />
  );
};

export default ProfileEditPresenter;
