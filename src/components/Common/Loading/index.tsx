import { Background } from "./style";
import Spinner from "../../../assets/svg/Spinner.gif";

export default function Loading() {
  return (
    <Background>
      <img src={Spinner} alt="로딩중" width="10%" />
    </Background>
  );
}
