new Vue({
    el: '#app',
    data: {
        form: {
            id: null,
            location: '',
            type: '',
            lastInspectionDate: ''
        },
        extinguishers: []
    },
    methods: {
        addOrUpdateExtinguisher() {
            if (this.form.id === null) {
                // Add new extinguisher
                const newExtinguisher = { ...this.form, id: Date.now() };
                this.extinguishers.push(newExtinguisher);
            } else {
                // Update existing extinguisher
                const index = this.extinguishers.findIndex(e => e.id === this.form.id);
                this.$set(this.extinguishers, index, { ...this.form });
            }
            this.resetForm();
        },
        editExtinguisher(extinguisher) {
            this.form = { ...extinguisher };
        },
        deleteExtinguisher(id) {
            this.extinguishers = this.extinguishers.filter(e => e.id !== id);
        },
        resetForm() {
            this.form = {
                id: null,
                location: '',
                type: '',
                lastInspectionDate: ''
            };
        }
    }
});
