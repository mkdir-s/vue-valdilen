const App = {
    data() {
        return {
            placeholderString: 'введите название заметки..',
            title: 'Список задач',
            inputValue: '',
            notes: ['Заметка 1'],
        }
    },
    methods: {
        addHandler() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue);
                this.inputValue = '';
            }
        },
        removeNote(idx) {
            this.notes.splice(idx, 1);
        },
        toUpperCase(item) {
            return item.toUpperCase();
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2;
        }
    },
    watch: {
        inputValue(value) {
            if(value.length > 50) {
                this.inputValue = '';
            }
        }
    }
}

Vue.createApp(App).mount('#app');