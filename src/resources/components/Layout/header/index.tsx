import { RouteConstants } from "@/app/constants/route.constants";
import { Link } from "react-router-dom";
import tbbLogo from "@/resources/assets/images/tbb-logo.png";

const Header = (): JSX.Element => {
  return (
    <div className="flex items-center py-5 px-4 h-16 md:px-24 bg-slate-800 text-white">
      <Link
        className="justify-start font-semibold max-w-[60px] md:max-w-[105px]"
        to={RouteConstants.ROOT}
      >
        <img src={tbbLogo} alt="The Brooklyn Brothers Logo" />
      </Link>

      <nav className="mx-auto pr-[60px] md:pr-[105px]">
        <ul className="flex space-x-8">
          <li>
            <Link
              className="font-semibold text-base md:text-2xl"
              to={RouteConstants.ROOT}
            >
              Challenge TBB
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
