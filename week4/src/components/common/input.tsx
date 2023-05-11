import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { OPTION } from "../../constants/option";
import { useEffect, useState } from "react";

const Input = () => {
  const [selected, setSelected] = useState("day");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setCity("");
  }, [selected]);

  const handleOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  const handleInputCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleNaviagateInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/${selected}/${city}`);
    setCity("");
  };

  return (
    <StWrapper>
      <StForm onSubmit={handleNaviagateInput}>
        <StSelect onChange={handleOption} value={selected}>
          {OPTION.map(({ value, text }, idx) => (
            <option key={idx} value={value}>
              {text}
            </option>
          ))}
        </StSelect>
        <StInput
          type="text"
          value={city}
          placeholder="도시를 입력해주세요"
          onChange={handleInputCity}
        />
        <StBtn type="submit">날씨 검색</StBtn>
      </StForm>
    </StWrapper>
  );
};

export default Input;

const StWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 2rem;
`;
const StForm = styled.form``;
const StSelect = styled.select`
  padding: 0.5rem;
  margin-right: 1rem;

  border: 0.2rem solid ${({ theme }) => theme.colors.Color_Coral};
  border-radius: 0.5rem;

  cursor: pointer;
  outline: none;
`;
const StInput = styled.input`
  padding: 1rem 4rem;
  margin-right: 1rem;

  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.Color_Yellow};
  ${({ theme }) => theme.fonts.Noto_M_Subtitle_3}

  outline: none;
`;
const StBtn = styled.button`
  padding: 1rem;

  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.Color_Coral};
  color: ${({ theme }) => theme.colors.Color_White};
  ${({ theme }) => theme.fonts.Noto_M_Subtitle_3}

  cursor: pointer;
`;
