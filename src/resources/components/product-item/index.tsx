import { IProduct } from "@/resources/types/productType";

type ProductItemProps = {
  product: IProduct;
};

const ProductItem: React.FC<ProductItemProps> = ({
  product,
}: ProductItemProps): JSX.Element => {
  return (
    <div
      className="justify-between shadow-md border bg-white border-gray-400 shadow-gray-400 rounded overflow-auto overflow-ellipsis max-h-[450px]"
      aria-description={product.name}
    >
      <div className="flex justify-center items-center py-2">
        <img
          width={191}
          height={290}
          src={product.images[0].asset.url}
          alt={product.images[0].alt}
          className="rounded-t-lg text-center"
        />
      </div>
      <div className="max-w-fit p-4">
        <span className="text-gray-400 text-xs">{product.category.name}</span>

        <h2 className="font-semibold text-base leading-tight my-2">
          {product.name}
        </h2>
        <p className="text-gray-500 text-xs overflow-hidden overflow-ellipsis break-words">
          {product.shortDescription}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
