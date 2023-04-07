const pageComponent = {
    template: pageTemplate,
    data() {
        return {
            year: 0,
            candidates: {
                senator: 0,
                governor: 0,
                federal: 0, 
                state: 0,
                president: 0
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
                    this.candidates[role] = 0
                })
            }
        }
    }
}

exports = { pageComponent }