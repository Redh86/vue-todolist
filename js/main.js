var app = new Vue({
    el: "#root",
    data: {
        newToDo: "",
        toDo: [
            "Fare la spesa",
            "Pigliarsi a schiaffi",
            "Passeggiata",
        ]
    },
    methods: {
        add(){
            this.toDo.push(this.newToDo);
            this.newToDo = "";
        },
        remove(index) {
            this.toDo.splice(index, 1);
        }
    }
});