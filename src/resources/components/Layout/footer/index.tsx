import { RouteConstants } from "@/app/constants/route.constants";
import tbbLogo from "@/resources/assets/images/tbb-logo.png";
import { Link } from "react-router-dom";

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="flex mt-4 justify-center content-between items-center bg-cover p-4 bg-slate-800 h-[300px] z-20 w-full text-white">
      <Link to={RouteConstants.ROOT}>
        <img
          alt="The Brooklyn Brothers Logo"
          height={94}
          width={130}
          src={tbbLogo}
        />
      </Link>
    </footer>
  );
};

export default Footer;
