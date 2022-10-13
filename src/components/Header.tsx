import Image from "next/image";
import { logo } from "../../public";
import { headerData } from "../cms/data";

const Header = () => {
  return (
    <nav>
      <Image src={logo} height="" />
    </nav>
  );
};
export default Header;
