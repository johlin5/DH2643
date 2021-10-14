import ProfileView from "./ProfileView";
import { FIND_USER_BY_NAME } from "../../services/queries/User";
import { useQuery } from "@apollo/client";
import { accountNameAtom } from "../../atoms/account";
import { useRecoilValue } from "recoil";
import Spinner from "../../components/Spinner";
import { fetchMonster } from "../../services/avatar/fetch";
import { useEffect, useState } from "react";
export type User = {
  biography: string | null;
  firstName: string | null;
  id: string | null;
  userName: string | null;
};

export type UserData = { findUserByUserName: User };

const ProfilePresenter: React.FC = () => {
  const accountName = useRecoilValue(accountNameAtom);
  const [icon, setIcon] = useState<string>("");

  useEffect(() => {
    const fetch = async () => {
      let total = 0;
      if (accountName) {
        accountName.split("").map((char) => {
          total = total + char.charCodeAt(0);
        });
      }
      const monster = await fetchMonster(total, 32);
      setIcon(monster);
    };
    fetch();
  }, []);

  const { loading, error, data } = useQuery<UserData>(FIND_USER_BY_NAME, { variables: { userName: accountName } });

  if (loading || !data) {
    <Spinner />;
  }
  return <ProfileView user={data} image={icon} />;
};

export default ProfilePresenter;
