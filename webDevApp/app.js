var app = new Vue({
    el: "#app",

    data: {
        newRecord: {},
        records: [
            {name: "Example Name", address: "Example Address", phoneNum: "Example Phone", email: "Example Email", category: "Example Category"}
        ]
    },

    methods: {

        //Add a record to the table
        addRecord() {

            //Add the record to the records array
            this.records.push(this.newRecord);

            //clear the text boxes
            this.clearBoxes();

			//Save the records array
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
            this.newRecord = {};
        },

    },

    beforeMount() {
        if(localStorage.getItem("petersonVueDatabase") != null){
            this.records = JSON.parse(localStorage.getItem("petersonVueDatabase"));
        }
    }
})
