import { RouteConstants } from "@/app/constants/route.constants";
import { Link } from "react-router-dom";
import tbbLogo from "@/resources/assets/images/tbb-logo.png";

const Header = (): JSX.Element => {
  return (
    <div className="flex justify-start items-center py-5 px-4 h-16 md:px-24 bg-slate-800 text-white">
      <Link className="font-semibold max-w-[105px]" to={RouteConstants.ROOT}>
        <img src={tbbLogo} alt="The Brooklyn Brothers Logo" />
      </Link>
    </div>
  );
};

export default Header;
