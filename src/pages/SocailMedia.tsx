import { useState } from "react";
import FacebookLogin from "react-facebook-login";
import styled from "styled-components";

const APP_ID = process.env.REACT_APP_FACEBOOK_APP_ID;

interface IProfile {
  name: string;
  picture: any;
  status?: string;
}

export default function SocailMedia() {
  const [auth, setAuth] = useState(false);
  const [profile, setProfile] = useState<IProfile>({ name: "", picture: "" });

  const responseFacebook = (userInfo: IProfile) => {
    if (userInfo?.status !== "unknown") {
      setProfile({ ...profile, ...userInfo });
      setAuth(true);
    } else {
      setAuth(false);
    }
  };

  const componentClicked = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(event.target);
  };

  const renderFB = () => {
    if (auth) {
      return (
        <div className="profile">
          <h3>{profile.name}</h3>
          <img className="img" src={profile.picture?.data?.url} alt="" />
        </div>
      );
    }
    return (
      <FacebookLogin
        appId={APP_ID || ""}
        autoLoad
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
    );
  };

  return (
    <Wrapper>
      <h2>Facebook login with ReactJs</h2>
      {renderFB()}
      <div
        className="fb-like"
        data-href="http://localhost:3000"
        data-width="50"
        data-layout="button_count"
        data-action="like"
        data-size="large"
        data-share="true"
      ></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding-top: 30px;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .fa-facebook {
    padding-right: 5px;
  }

  .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;

    img {
      height: 200px;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  button {
    display: flex;
    height: 30px;
    background: #1877f2;
    justify-content: center;
    align-items: center;
    border: 0;
  }
`;
