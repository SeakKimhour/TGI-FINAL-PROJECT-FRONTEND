export class ProductModel{
  constructor(
    public product_id : string,
    public product_name : string,
    public brand : string,
    public product_price: number,
    public product_condition: string,
    public contact_number: string,
    public product_description: string,
    public created_data: Date,
    public status: string,
    public image_url: string,
  ){}
}
