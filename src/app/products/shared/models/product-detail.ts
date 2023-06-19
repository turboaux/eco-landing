export class ProductDetail {

    constructor(
        public id: string,
        public name: string, 
        public description: string, 
        public featureImage: string, 
        public servingSize: number,
        public calories: number, 
        public totalFat: number,
        public totalCarbohydrate: number,
        public isEcoFriendly: boolean,
        public ingredients: string,
        public ecologicalFootprint: number,
    ) {}

    static adapt(entry: any): ProductDetail {

        return new ProductDetail(
            entry.sys.id,
            entry.fields.name,
            entry.fields.description,
            entry.fields.featureImage.fields.file.url,
            entry.fields.servingSize,
            entry.fields.calories,
            entry.fields.totalFat,
            entry.fields.totalCarbohydrate,
            entry.fields.isEcoFriendly,
            entry.fields.ingredients,
            entry.fields.ecologicalFootprint
        ); 
    }
}