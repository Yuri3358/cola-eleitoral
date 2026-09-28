const pageComponent = {
    template: pageTemplate,
    data() {
        return {
            year: "",
            candidates: {
                senator: "",
                senator2: "",
                governor: "",
                federal: "", 
                state: "",
                president: ""
            }
        }
    },
    mounted() {
        this.getYear()
    },
    methods: { 
        getYear() {
            const date = new Date().getFullYear()
            this.year = date
        },
        printCard() {
            window.print()
        },
        clearInputs() {
            const roles = Object.keys(this.candidates)
            for (let i = 0; i <= roles.length; i++) {
                roles.map(role => {
                    this.candidates[role] = "00"
                })
            }
        }
    }
}

exports = { pageComponent }