var app = new Vue({
    el: "#app",

    data: {
        text: "hi",
        records: [
            {name: "", address: "", phoneNum: "", email: "", category: ""}
        ]
    },

    methods: {
        addToList() {
            boxValue = {name: document.getElementById("name").value, 
                        address: document.getElementById("address").value,
                        phoneNum: document.getElementById("phoneNum").value,
                        email: document.getElementById("email").value,
                        category: document.getElementById("category").value};
            this.records.push(boxValue);
			
            this.saveRecords();
        },

        printList(){
            console.log(this.records);
        },

        updateRecord(index){
            this.records[index] = { name: document.getElementById("updatedName").value,
                            address: document.getElementById("updatedAddress").value,
                            phoneNum: document.getElementById("updatedPhoneNum").value,
                            email: document.getElementById("updatedEmail").value,
                            category: document.getElementById("updatedCategory").value}

            this.saveRecords();
            },

        deleteRecord(index){
            this.records.splice(index, 1);
        },

        saveRecords(){
            localStorage.setItem("petersonVueDatabase", JSON.stringify(this.records));
        }

    },

    beforeMount() {
        records = localStorage.getItem("petersonVueDatabase");
        deleteRecords(this.records.splice(0, 1));
    }
})