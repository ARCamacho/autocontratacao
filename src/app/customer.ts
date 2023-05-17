export class Customer {
    public withdrawalValue: number;
    public name: string;
    public phone: string;
    public countryIdentity: string;
    public messages: any;
    public statusCode: number;
    public statusName: string;
    public digitalFormalizationLink: string;
    public lenderName: string;


    constructor() {
        this.withdrawalValue = 0;
        this.name = "";
        this.phone = "";
        this.countryIdentity = "";
        this.messages = null;
        this.statusCode = 0;
        this.statusName = "";
        this.digitalFormalizationLink = "";
        this.lenderName = "" || "BMG";



    }
}
