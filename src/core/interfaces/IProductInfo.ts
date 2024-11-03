export interface IProductInfo {
  id?: string;
  img?: string;
  description?: string;
  isFavorite?: boolean;
  isCart?: boolean;
  rate?: number;
  sales?: number;
  tag?: number;
  price?: number;
  discount?: number;
}

export enum tagInfo {
  FRETE_GRATIS = 1,
  COMBO = 2,
}
