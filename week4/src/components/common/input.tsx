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

const StWrapper = styled.section``;
const StForm = styled.form``;
const StSelect = styled.select``;
const StInput = styled.input``;
const StBtn = styled.button``;
