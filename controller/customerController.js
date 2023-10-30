import {customer_db} from "../db/db";
import {CustomerModel} from "../model/CustomerModel";

var row_index = null;


const cleanInputs =() =>{
    $('#cus_id').val('');
    $('#name').val('');
    $('#salary').val('');
    $('#address').val('');
}

//-----Submit-------
$("#customer_btn>button[type='button']").eq(0).on("click", () => {
    let cus_id = $("#cus_id").val();
    let name = $("#name").val();
    let salary = $("#salary").val();
    let address = $("#address").val();

    console.log(cus_id)
    console.log(name)
    console.log(salary)
    console.log(address)

    let record = `<tr><td class="cus_id">${cus_id}</td><td class="name">${name}</td><td class="salary">${salary}</td><td class="address">${address}</td></tr>`;
    $("#customer-tbl-body").append(record);

    $("#customer_btn>button[type='reset']").click();

});

//---------Click Row----------
$("#customer-tbl-body").on("click", "tr", function() {
    row_index = $(this).index();

    console.log(row_index);

    let cus_id = $(this).find(".cus_id").text();
    let name = $(this).find(".name").text();
    let salary = $(this).find(".salary").text();
    let address = $(this).find(".address").text();

    $("#cus_id").val(cus_id);
    $("#name").val(name);
    $("#salary").val(salary);
    $("#address").val(address);
})

//----------Update---------
$("#customer_btn>button[type='button']").eq(1).on("click", () => {
    let cus_id = $("#cus_id").val();
    let name = $("#name").val();
    let salary = $("#salary").val();
    let address = $("#address").val();

    console.log(cus_id)
    console.log(name)
    console.log(salary)
    console.log(address)

    let record = `<td class="cus_id">${cus_id}</td><td class="name">${name}</td><td class="salary">${salary}</td><td class="address">${address}</td>`;
    $("tbody>tr").eq(row_index).html(record);

    $("#customer_btn>button[type='reset']").click();

});

//----------Delete---------
$("#customer_btn>button[type='button']").eq(2).on("click", () => {
    $("tbody>tr").eq(row_index).remove();
    $("customer_btn>button[type='reset']").click();
})



