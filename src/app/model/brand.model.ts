export class BrandModel{
  constructor(
    public brand_id : string,
    public brand_name : string,
    public created_date : Date,
    public product: string,
    public sub_Category: string
  ){}
}
