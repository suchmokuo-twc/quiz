export class ProductModel {
  constructor(id, name, price, unit, image) {
    this.id = id;
    this.name = name;
    this.price = Number(price);
    this.unit = unit;
    this.image = image;
  }
}
