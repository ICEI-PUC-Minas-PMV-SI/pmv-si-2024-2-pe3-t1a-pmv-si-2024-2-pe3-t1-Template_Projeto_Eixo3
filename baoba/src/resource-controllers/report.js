class Report {

    static id = 0

    constructor(content = null) {
        this.content = content
        this.comments = []
        this.id = ++Report.id
    }

    generateReport() {
        // nesse caso precisamos do CRUD pra entender melhor como isso será feito dentro das páginas
    }
    viewReport() {
        return { 
            content: this.content, 
            comments: this.comments
         }
    }
    commentReport(comment) {
        this.comments.push(comment)
    }
}

export {
    Report
}