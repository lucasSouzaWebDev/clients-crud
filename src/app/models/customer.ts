export class Customer {
    private _id: number
    private _name: string
    private _cpf: number
    private _cnpj: number
    private _typePerson: string
    private _street: string
    private _number: number
    private _neighborhood: string
    private _city: string
    private _state: string

    constructor() { }

    get id() { return this._id; }
    set id(id: number) { this._id = id }
    get name() { return this._name; }
    set name(name: string) { this._name = name; }
    get cpf() { return this._cpf; }
    set cpf(cpf: number) { this._cpf = cpf; }
    get cnpj() { return this._cnpj; }
    set cnpj(cnpj: number) { this._cnpj = cnpj; }
    get typePerson() { return this._typePerson; }
    set typePerson(typePerson: string) { this._typePerson = typePerson; }
    get street() { return this._street; }
    set street(street: string) { this._street = street; }
    get number() { return this._number; }
    set number(number: number) { this._number = number; }
    get neighborhood() { return this._neighborhood; }
    set neighborhood(neighborhood: string) { this._neighborhood = neighborhood; }
    get city() { return this._city; }
    set city(city: string) { this._city = city; }
    get state() { return this._state; }
    set state(state: string) { this._state = state; }
}