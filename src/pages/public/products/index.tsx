import { Helmet } from "react-helmet";

export default function ProductsPage(): JSX.Element {
  return (
    <>
      <Helmet title="Products" />
      <div>
        <h1 className="text-4xl font-bold">Page</h1>
      </div>
    </>
  );
}
