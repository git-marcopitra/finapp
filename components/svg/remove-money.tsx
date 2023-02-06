import { FC } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const RemoveMoney: FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 22 20" fill="none" {...props}>
    <Path
      d="M9.46 3.9999L10 3.4099V6.9999C10 7.26511 10.1054 7.51947 10.2929 7.707C10.4804 7.89454 10.7348 7.9999 11 7.9999C11.2652 7.9999 11.5196 7.89454 11.7071 7.707C11.8946 7.51947 12 7.26511 12 6.9999V3.4099L12.54 3.9599C12.6308 4.06242 12.7416 4.14521 12.8657 4.20313C12.9898 4.26105 13.1244 4.29287 13.2613 4.29662C13.3982 4.30037 13.5344 4.27597 13.6615 4.22493C13.7885 4.17389 13.9038 4.09729 14 3.9999C14.0937 3.90693 14.1681 3.79633 14.2189 3.67447C14.2697 3.55261 14.2958 3.42191 14.2958 3.2899C14.2958 3.15788 14.2697 3.02718 14.2189 2.90532C14.1681 2.78346 14.0937 2.67286 14 2.5799L11.71 0.289896C11.6149 0.198856 11.5028 0.127491 11.38 0.0798963C11.1365 -0.0201217 10.8635 -0.0201217 10.62 0.0798963C10.4972 0.127491 10.3851 0.198856 10.29 0.289896L8 2.5399C7.80639 2.7335 7.69762 2.99609 7.69762 3.2699C7.69762 3.5437 7.80639 3.80629 8 3.9999C8.19361 4.1935 8.4562 4.30227 8.73 4.30227C9.0038 4.30227 9.26639 4.1935 9.46 3.9999ZM11 9.9999C10.4067 9.9999 9.82664 10.1758 9.33329 10.5055C8.83994 10.8351 8.45542 11.3037 8.22836 11.8518C8.0013 12.4 7.94189 13.0032 8.05764 13.5852C8.1734 14.1671 8.45912 14.7017 8.87868 15.1212C9.29824 15.5408 9.83279 15.8265 10.4147 15.9423C10.9967 16.058 11.5999 15.9986 12.1481 15.7715C12.6962 15.5445 13.1648 15.16 13.4944 14.6666C13.8241 14.1733 14 13.5932 14 12.9999C14 12.2042 13.6839 11.4412 13.1213 10.8786C12.5587 10.316 11.7956 9.9999 11 9.9999ZM11 13.9999C10.8022 13.9999 10.6089 13.9412 10.4444 13.8314C10.28 13.7215 10.1518 13.5653 10.0761 13.3826C10.0004 13.1999 9.98063 12.9988 10.0192 12.8048C10.0578 12.6108 10.153 12.4326 10.2929 12.2928C10.4327 12.1529 10.6109 12.0577 10.8049 12.0191C10.9989 11.9805 11.2 12.0003 11.3827 12.076C11.5654 12.1517 11.7216 12.2799 11.8315 12.4443C11.9414 12.6088 12 12.8021 12 12.9999C12 13.2651 11.8946 13.5195 11.7071 13.707C11.5196 13.8945 11.2652 13.9999 11 13.9999ZM4 12.9999C4 13.1977 4.05865 13.391 4.16853 13.5555C4.27841 13.7199 4.43459 13.8481 4.61732 13.9238C4.80004 13.9995 5.00111 14.0193 5.19509 13.9807C5.38907 13.9421 5.56725 13.8469 5.70711 13.707C5.84696 13.5672 5.9422 13.389 5.98079 13.195C6.01937 13.001 5.99957 12.7999 5.92388 12.6172C5.84819 12.4345 5.72002 12.2783 5.55557 12.1684C5.39112 12.0585 5.19778 11.9999 5 11.9999C4.73478 11.9999 4.48043 12.1053 4.29289 12.2928C4.10536 12.4803 4 12.7347 4 12.9999ZM18 12.9999C18 12.8021 17.9414 12.6088 17.8315 12.4443C17.7216 12.2799 17.5654 12.1517 17.3827 12.076C17.2 12.0003 16.9989 11.9805 16.8049 12.0191C16.6109 12.0577 16.4327 12.1529 16.2929 12.2928C16.153 12.4326 16.0578 12.6108 16.0192 12.8048C15.9806 12.9988 16.0004 13.1999 16.0761 13.3826C16.1518 13.5653 16.28 13.7215 16.4444 13.8314C16.6089 13.9412 16.8022 13.9999 17 13.9999C17.2652 13.9999 17.5196 13.8945 17.7071 13.707C17.8946 13.5195 18 13.2651 18 12.9999ZM19 5.9999H15C14.7348 5.9999 14.4804 6.10525 14.2929 6.29279C14.1054 6.48033 14 6.73468 14 6.9999C14 7.26511 14.1054 7.51947 14.2929 7.707C14.4804 7.89454 14.7348 7.9999 15 7.9999H19C19.2652 7.9999 19.5196 8.10525 19.7071 8.29279C19.8946 8.48033 20 8.73468 20 8.9999V16.9999C20 17.2651 19.8946 17.5195 19.7071 17.707C19.5196 17.8945 19.2652 17.9999 19 17.9999H3C2.73478 17.9999 2.48043 17.8945 2.29289 17.707C2.10536 17.5195 2 17.2651 2 16.9999V8.9999C2 8.73468 2.10536 8.48033 2.29289 8.29279C2.48043 8.10525 2.73478 7.9999 3 7.9999H7C7.26522 7.9999 7.51957 7.89454 7.70711 7.707C7.89464 7.51947 8 7.26511 8 6.9999C8 6.73468 7.89464 6.48033 7.70711 6.29279C7.51957 6.10525 7.26522 5.9999 7 5.9999H3C2.20435 5.9999 1.44129 6.31597 0.87868 6.87858C0.31607 7.44118 0 8.20425 0 8.9999V16.9999C0 17.7955 0.31607 18.5586 0.87868 19.1212C1.44129 19.6838 2.20435 19.9999 3 19.9999H19C19.7956 19.9999 20.5587 19.6838 21.1213 19.1212C21.6839 18.5586 22 17.7955 22 16.9999V8.9999C22 8.20425 21.6839 7.44118 21.1213 6.87858C20.5587 6.31597 19.7956 5.9999 19 5.9999Z"
      fill={props.fill || "black"}
    />
  </Svg>
);

export default RemoveMoney;