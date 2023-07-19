import { Helmet as HeadHelmet } from "react-helmet";

type HelmetProps = {
  title: string;
};

const Helmet: React.FC<HelmetProps> = ({ title }: HelmetProps): JSX.Element => (
  <HeadHelmet>
    <title>{title}</title>
  </HeadHelmet>
);

export default Helmet;
