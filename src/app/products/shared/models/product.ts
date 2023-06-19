export class Product {

    constructor(
        public id: string,
        public name: string, 
        public description: string, 
        public featureImage: string, 
        public calories: number
    ) {}

    static adapt(entry: any): Product {

        return new Product(
            entry.sys.id,
            entry.fields.name,
            entry.fields.description,
            entry.fields.featureImage.fields.file.url,
            entry.fields.calories
        ); 
    }
}