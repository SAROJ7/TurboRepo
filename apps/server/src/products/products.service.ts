import { Injectable } from '@nestjs/common';
import { CreateProductDto, IProduct } from '@repo/types';

@Injectable()
export class ProductsService {
  private readonly products: IProduct[] = [];
  createProduct(createProductDto: CreateProductDto): IProduct {
    const product: IProduct = {
      ...createProductDto,
      id: Math.random().toString(36).substring(7),
    };

    this.products.push(product);
    return product;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }
}
