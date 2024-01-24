import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { BsPersonCircle } from "react-icons/bs";

interface ProfileProps {
  username: string;
}

export const Profile: React.FC<ProfileProps> = ({ username }) => {
  return (
    <ProfileStyled>
      <div className="info-profile">
        <p>
          Bonjour, <b>{username}</b>
        </p>
        <Link to="/">
          <div className="profile-desc">
            <small>Se déconnecter</small>
          </div>
        </Link>
      </div>
      <div className="profile-picture">
        <BsPersonCircle />
      </div>
    </ProfileStyled>
  );
};

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;
  font-family: "Open Sans", sans-serif;

  .info-profile {
    text-align: right;
    margin-right: 10px;
  }
  p {
    margin: 0;
    color: ${theme.colors.greyBlue};
    b {
      color: ${theme.colors.primary};
    }
  }
  a {
    text-decoration: none;
    .profile-desc {
      &:hover {
        text-decoration: underline;
        color: ${theme.colors.greyDark};
      }
      small {
        font-size: ${theme.fonts.XXS};
        color: ${theme.colors.greyBlue};
        font-weight: ${theme.weights.medium};
        text-decoration: none;
        position: relative;
        bottom: 2px;
      }
    }
  }

  .profile-picture {
    height: auto;
    display: flex;
    height: 100%;
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
  }
`;
