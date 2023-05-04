import styled from "styled-components";

interface FinalModalProps {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const FinalModal = (props: FinalModalProps) => {
  const { setIsOpenModal } = props;

  const handleToggleModal = () => {
    setIsOpenModal((prev) => !prev);
    window.location.reload();
  };

  return (
    <Wrapper>
      축하! <BackButton onClick={handleToggleModal}>다시하기</BackButton>
    </Wrapper>
  );
};

export default FinalModal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;

  width: 55rem;
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.colors.Color_Sky};
  ${({ theme }) => theme.fonts.Noto_B_Title_1}

  transform: translate(-50%, -50%);
`;

const BackButton = styled.button`
  width: 80%;
  padding: 1.125rem 0;
  margin-top: 3rem;

  border: none;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.Color_White};
  ${({ theme }) => theme.fonts.Noto_M_Subtitle_1}

  outline: none;
  cursor: pointer;
`;
