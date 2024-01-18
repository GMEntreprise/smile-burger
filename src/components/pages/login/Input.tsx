import { ChangeEvent } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

interface InputProps {
  value: string;
  placeholder: string;
  icon: React.ReactElement;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  icon,
}) => {
  return (
    <InputStyled>
      {icon && icon}
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        required
      />
    </InputStyled>
  );
};

const InputStyled = styled.div`
  background-color: ${theme.colors.background_white};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    color: ${theme.colors.greySemiDark};
    margin-right: 8px;
    font-size: 15px;
  }
  input[type="text"] {
    border: none;
    width: 100%;
    font-size: 15px;
  }

  &::placeholder {
    background: ${theme.colors.background_white};
    color: ${theme.colors.white};
  }
`;
