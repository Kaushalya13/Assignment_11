import {item_db} from "../db/db";
import {ItemModel} from "../model/itemModel";

var row_index = null;

//---------Submit---------
$("#item_btn>button[type='button']").eq(0).on("click", () => {
    let code = $("#code").val();
    let item_name = $("#item_name").val();
    let price = $("#price").val();
    let qty = $("#qty").val();

    console.log(code)
    console.log(item_name)
    console.log(price)
    console.log(qty)

    let record = `<tr><td class="code">${code}</td><td class="item_name">${item_name}</td><td class="price">${price}</td><td class="qty">${qty}</td></tr>`;
    $("#item-tbl-body").append(record);

    $("#item_btn>button[type='reset']").click();

});

//----------Click Row---------
$("#item-tbl-body").on("click", "tr", function() {
    row_index = $(this).index();

    console.log(row_index);

    let code = $(this).find(".code").text();
    let item_name = $(this).find(".item_name").text();
    let price = $(this).find(".price").text();
    let qty = $(this).find(".qty").text();

    $("#code").val(code);
    $("#item_name").val(item_name);
    $("#price").val(price);
    $("#qty").val(qty);
})

//---------Update--------
$("#item_btn>button[type='button']").eq(1).on("click", () => {
    let code = $("#code").val();
    let item_name = $("#item_name").val();
    let price = $("#price").val();
    let qty = $("#qty").val();

    console.log(code)
    console.log(item_name)
    console.log(price)
    console.log(qty)

    let record = `<td class="code">${code}</td><td class="item_name">${item_name}</td><td class="price">${price}</td><td class="qty">${qty}</td>`;
    $("tbody>tr").eq(row_index).html(record);

    $("#item_btn>button[type='reset']").click();

});

//----------Delete--------
$("#item_btn>button[type='button']").eq(2).on("click", () => {
    $("tbody>tr").eq(row_index).remove();
    $("#item_btn>button[type='reset']").click();
})



