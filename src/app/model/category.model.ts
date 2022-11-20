export class CategoryModel{
  constructor(
    public category_id : string,
    public category_name : string,
    public created_date : Date,
    public sub_category: string
  ){}
}
