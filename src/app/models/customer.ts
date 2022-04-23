export class Customer {
    constructor(
        public id?: number,
        public name?: string,
        public cpf?: number,
        public cnpj?: number,
        public typePerson?: string,
        public zipcode?: string,
        public street?: string,
        public number?: number,
        public neighborhood?: string,
        public city?: string,
        public state?: string,
        public telephone?: string
    ) { }
}