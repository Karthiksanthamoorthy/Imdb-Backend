order--
 [
     { _id: 0, productName: "Steel beam", status: "new", quantity: 10 }, 
     { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 }, 
     { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 }, 
     { _id: 3, productName: "Iron rod", status: "new", quantity: 15 }, 
     { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 }, 
     { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 } 
     ]
--output
     //Filter - urgent orders

     select * from Orders where status = "urgent";
[
     { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 }, 
     { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 }, 
     { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 }, 
     { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
]

//stage 2: Group - In each Product find totalUrgentquantity

--output
     //Filter - urgent orders


     select productName as _id, sum(quality)as totalUrgentquantity from Orders
      where status = "urgent" group by productName;