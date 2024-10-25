export interface IGeneralProductInfo {
  id?: string;
  img?: string;
  description?: string;
  isFavorite?: boolean;
  isCart?: boolean;
  rate?: number;
  sales?: number;
  tag?: string;
  price?: number;
  discount?: number;
}

enum tagInfo {
  FRETE_GRATIS = "Frete Grátis",
  COMBO = "Combo",
}
