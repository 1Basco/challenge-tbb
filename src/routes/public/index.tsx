import { RouteConstants } from "@/app/constants/route.constants";
import ProductsPage from "@/pages/public/products";
import Footer from "@/resources/components/Layout/footer";
import Header from "@/resources/components/Layout/header";
import { Route, Routes } from "react-router-dom";

type PublicRouterProps = {};

const PublicRouter: React.FC<
  PublicRouterProps
> = ({}: PublicRouterProps): JSX.Element => {
  return (
    <>
      <Header />
      <div className="lg:px-24">
        <Routes>
          <Route path={RouteConstants.ROOT} element={<ProductsPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default PublicRouter;
