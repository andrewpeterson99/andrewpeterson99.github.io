var app = new Vue({
    el: "#app",

    data: {
        records: [
            {name: "Example Name", address: "Example Address", phoneNum: "Example Phone", email: "Example Email", category: "Example Category"}
        ]
    },

    methods: {
        addRecord() {

            //Add the record to the records array
            boxValue = {name: document.getElementById("name").value, 
                        address: document.getElementById("address").value,
                        phoneNum: document.getElementById("phoneNum").value,
                        email: document.getElementById("email").value,
                        category: document.getElementById("category").value};
            this.records.push(boxValue);

            //NOT WORKING
            //clear the text boxes
            this.clearBoxes();

			//Save the records array
            this.saveRecords();
        },

       /* printList(){
            console.log(JSON.parse(localStorage.getItem("petersonVueDatabase")));
            //this.records = JSON.parse(localStorage.getItem("petersonVueDatabase"));
            console.log(this.records);
        },*/

        updateRecord(index){
            this.records[index] = { name: document.getElementById("updatedName").value,
                            address: document.getElementById("updatedAddress").value,
                            phoneNum: document.getElementById("updatedPhoneNum").value,
                            email: document.getElementById("updatedEmail").value,
                            category: document.getElementById("updatedCategory").value}

            this.saveRecords();
            },

        deleteRecord(index){
            //console.log("This is the index: " + index)
            this.records.splice(index, 1);
            this.saveRecords();
        },

        saveRecords(){
            localStorage.setItem("petersonVueDatabase", JSON.stringify(this.records));
            //console.log(JSON.stringify(this.records));
            //console.log(JSON.parse(localStorage.getItem("petersonVueDatabase")));
        },

        clearBoxes(){
            //Erase the previously entered text by the user
            document.getElementById("name").value = "";
            document.getElementById("address").value = "";
            document.getElementById("phoneNum").value = "";
            document.getElementById("email").value = "";
            document.getElementById("category").value = "";

        },

    },

    beforeMount() {
        if(localStorage.getItem("petersonVueDatabase") != null){
            this.records = JSON.parse(localStorage.getItem("petersonVueDatabase"));
        }
        //deleteRecords(this.records.splice(0, 1));
    }
})