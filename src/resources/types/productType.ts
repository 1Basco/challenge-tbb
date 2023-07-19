export interface IProduct {
  name: string;
  shortDescription: string;
  id: string;
  images: [
    {
      alt: string;
      asset: {
        url: string;
      };
    }
  ];
  category: ICategory;
}

export interface ICategory {
  _id: string;
  name: string;
}

export interface IProducts {
  data: {
    nodes: IProduct[];
  };
}
