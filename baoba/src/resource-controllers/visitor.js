class Visitor {
    static id = 0

    constructor(){
        this.id = ++Visitor.id
    }
}

export {
    Visitor
}