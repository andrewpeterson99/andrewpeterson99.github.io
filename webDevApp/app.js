var app = new Vue({
    el: "#app",

    data: {
        records: [
            {name: "Example Name", address: "Example Address", phoneNum: "Example Phone", email: "Example Email", category: "Example Category"}
        ]
    },

    methods: {

        //Add a record to the table
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

        //Update the record table
        updateRecord(index) {
            this.records[index] = { name: document.getElementById("name" + index).value,
                            address: document.getElementById("address" + index).value,
                            phoneNum: document.getElementById("phoneNum" + index).value,
                            email: document.getElementById("email" + index).value,
                            category: document.getElementById("category" + index).value}

            this.saveRecords();
            },

        //Delete a record from the record table
        deleteRecord(index) {
            this.records.splice(index, 1);
            this.saveRecords();
        },

        //Save the records
        saveRecords() {
            localStorage.setItem("petersonVueDatabase", JSON.stringify(this.records));
        },

        //Erase the previously entered text by the user
        clearBoxes() {
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
    }
})