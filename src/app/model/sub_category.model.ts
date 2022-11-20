export class SubCategoryModel{
  constructor(
    public sub_category_id : string,
    public sub_category_name : string,
    public created_data : Date,
    public brand: string,
    public category: string
  ){}
}
