
export class PlaceOrderModel{
    constructor(Order_Id,Customer_Name,Item_Name,Item_Price,Quantity,Total,Actions) {
        this.Order_Id = Order_Id;
        this.Customer_Name = Customer_Name;
        this.Item_Name =Item_Name;
        this.Item_Price = Item_Price;
        this.Quantity = Quantity;
        this.Total = Total;
        this.Actions = Actions;
    }
}