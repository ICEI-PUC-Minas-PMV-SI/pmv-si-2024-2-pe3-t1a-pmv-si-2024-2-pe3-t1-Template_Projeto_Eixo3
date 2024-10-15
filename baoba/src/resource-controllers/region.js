class Region {
    constructor(name, location, biomes = []) {
        this.name = name;
        this.location = location;
        this.biomes = biomes.filter(element => isValidBiome(element))
        this.reports = []
    }

    addReport(content) {
        const newReport = new Report(content)
        this.reports.push(newReport)
    }

    viewReports() {
        return this.reports
    }

    getReportByIndex(index) {
        return this.reports[index] ? this.reports[index].viewReport() : null;
    }

    updateReport(index, newContent) {
        if (this.reports[index]) {
            this.reports[index].generateReport(newContent)
        } else {
            console.log("Relatório de id especificado não encontrado")
        }
    }

    deleteReport(index) {
        if (this.reports[index]) {
            this.reports.splice(index, 1)
        } else {
            console.log("Relatório de id especificado não encontrado")
        }
    }

    commentOnReport(index, comment) {
        if (this.reports[index]) {
            this.reports[index].commentReport(comment);
        } else {
            console.log("Relatório de id especificado não encontrado")
        }
    }
}

export {
    Region
}