export class User {

    constructor(
        public name: string, 
        public avatar: string
    ) {}

    static adapt(entry: any) {

        return new User(
            entry.fields.name,
            entry.fields.avatar.fields.file.url
        );
    }
}