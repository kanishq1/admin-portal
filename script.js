var selectedRow = null

function onFormSubmit1() {
    if (validate()) {
        var formData1= readFormData1();
        if (selectedRow == null)
            insertNewRecord1(formData1);
        else
            updateRecord1(formData1);
        resetForm1();
    }
}

function readFormData1() {
    var formData1 = {};
    formData1["Name"] = document.getElementById("Name").value;
    formData1["fromdate"] = document.getElementById("fromdate").value;
    formData1["tilldate"] = document.getElementById("tilldate").value;
    formData1["Organisation"] = document.getElementById("Organisation").value;
    formData1["exp"] = document.getElementById("exp").value;
    formData1["isexp"] = document.getElementById("isexp").value;
    return formData1;
}

function insertNewRecord1(data) {
    var table1 = document.getElementById("eventList").getElementsByTagName('tbody')[0];
    var newRow1 = table1.insertRow(table1.length);
    cell1 = newRow1.insertCell(0);
    cell1.innerHTML = data.Name;
    cell2 = newRow1.insertCell(1);
    cell2.innerHTML = data.fromdate;
    cell3 = newRow1.insertCell(2);
    cell3.innerHTML = data.tilldate;
    cell4 = newRow1.insertCell(3);
    cell4.innerHTML = data.Organisation;
    cell5 = newRow1.insertCell(4);
    cell5.innerHTML = data.exp;
    cell6 = newRow1.insertCell(5);
    cell6.innerHTML = data.isexp;
    cell6 = newRow1.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit1(this)">Edit</a>
                       <a onClick="onDelete1(this)">Delete</a>`;
}

function resetForm1() {
    document.getElementById("Name").value = "";
    document.getElementById("fromdate").value = "";
    document.getElementById("tilldate").value = "";
    document.getElementById("Organistaion").value = "";
    document.getElementById("exp").value = "";
    document.getElementById("isexp").value = "";
    selectedRow = null;
}

function onEdit1(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("fromdate").value = selectedRow.cells[1].innerHTML;
    document.getElementById("tilldate").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Organisation").value = selectedRow.cells[3].innerHTML;
    document.getElementById("exp").value = selectedRow.cells[4].innerHTML;
    document.getElementById("isexp").value = selectedRow.cells[5].innerHTML;
}
function updateRecord1(formData) {
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.fromdate;
    selectedRow.cells[2].innerHTML = formData.tilldate;
    selectedRow.cells[3].innerHTML = formData.Organisation;
    selectedRow.cells[4].innerHTML = formData.exp;
    selectedRow.cells[5].innerHTML = formData.isexp;

}

function onDelete1(th) {
    if (confirm('Are you sure to delete this record ?')) {
        row = th.parentElement.parentElement;
        document.getElementById("fromdate").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Name").value == "") {
        isValid = false;
        document.getElementById("NameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("NameValidationError").classList.contains("hide"))
            document.getElementById("NameValidationError").classList.add("hide");
    }
    return isValid;
}
function addevent() {
    document.getElementById("subevent1").style.visibility="visible";
}






function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["subName"] = document.getElementById("subName").value;
    formData["desc"] = document.getElementById("desc").value;
    formData["price"] = document.getElementById("price").value;
    formData["size"] = document.getElementById("size").value;
    formData["tshirt"] = document.getElementById("tshirt").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("subeventList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.subName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.desc;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.price;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.size;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.tshirt;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("subname").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("price").value = "";
    document.getElementById("size").value = "";
    document.getElementById("tshirt").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("subname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("desc").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;
    document.getElementById("size").value = selectedRow.cells[4].innerHTML;
    document.getElementById("tshirt").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.subname;
    selectedRow.cells[2].innerHTML = formData.desc;
    selectedRow.cells[3].innerHTML = formData.price;
    selectedRow.cells[4].innerHTML = formData.size;
    selectedRow.cells[5].innerHTML = formData.tshirt;

}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("desc").deleteRow(row.rowIndex);
        resetForm();
    }
}
