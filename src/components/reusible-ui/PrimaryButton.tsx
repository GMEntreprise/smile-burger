import styled from "styled-components";
import { theme } from "../../theme";

interface PrimaryButtonProps {
  label: string;
  Icon: React.ReactElement;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  Icon,
}) => {
  return (
    <PrimaryButtonStyled>
      <span className="label">{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
};
const PrimaryButtonStyled = styled.button`
  width: 100%;
  border: 1px solid ${theme.colors.primary};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 18px 24px;
  background-color: ${theme.colors.primary};
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;

  border-radius: ${theme.borderRadius.round};
  color: ${theme.colors.white};
  font-weight: 700;
  cursor: pointer;

  .label {
    font-size: 0.9rem;
  }

  &:hover:not(:disabled) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-in-out;
  }
  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }

  /********* RESPONSIVE **********/
  @media (max-width: 992px) {
    button {
      font-size: 16px;
    }
  }
`;
