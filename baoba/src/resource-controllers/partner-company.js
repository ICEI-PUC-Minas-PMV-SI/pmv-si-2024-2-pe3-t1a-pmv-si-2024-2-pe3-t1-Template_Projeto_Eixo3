import { Administrator } from "./user"


class PartnerCompany {
    constructor(name, email, password, cnpj, field_of_work) {
        this.user = new Administrator(name, email, password)
        const validateCnpj = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/g

        if (validateCnpj.exec(cnpj)){
            this.cnpj = cnpj
        } else{
            return new Error('Invalid CNPJ')
        }
        this.field_of_work = field_of_work
    }

    viewEconomicImpact(){
        generateReport() //sugestão de método
    }
}

export {
    PartnerCompany
}