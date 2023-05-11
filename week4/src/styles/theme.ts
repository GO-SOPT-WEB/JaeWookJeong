import { css, DefaultTheme } from "styled-components";

const colors = {
  Color_Coral: "#FF5D5D",
  Color_Yellow: "#FFFDC2",
  Color_Blue: "#3973CB",
  Color_Sky: "#C6DDFF",
  Color_Gray_Black: "#1E1F21",
  Color_Gray_2: "#525C67",
  Color_Gray_3: "#8A949E",
  Color_Gray_4: "#C3CDD5",
  Color_Gray_5: "#E8EBEF",
  Color_Gray_6: "#F4F5F7",
  Color_White: "#FFFFFF",
};

const fonts = {
  Noto_B_Title_1: css`
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.7rem;
    letter-spacing: -0.03em;
  `,
  Noto_SB_Title_2: css`
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.2rem;
    letter-spacing: -0.02em;
  `,
  Noto_B_Title_3: css`
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 4rem;
    line-height: 3.95rem;
  `,
  Noto_M_Subtitle_1: css`
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: -0.05em;
  `,
  Noto_SB_Subtitle_2: css`
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: -0.02em;
  `,
  Noto_M_Subtitle_3: css`
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.2rem;
    letter-spacing: -0.02em;
  `,
  Noto_M_Subtitle_4: css`
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: -0.02em;
  `,
  Noto_M_Subtitle_5: css`
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.9rem;
    letter-spacing: -0.05em;
  `,
  Noto_SB_Subtitle_6: css`
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.9rem;
    letter-spacing: -0.05em;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;
