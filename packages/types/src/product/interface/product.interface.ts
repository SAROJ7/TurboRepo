import { CreateProductDto } from "../dto/create-product.dto";

export interface IProduct extends CreateProductDto {
  id: string;
}
