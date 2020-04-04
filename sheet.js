var xslx=require("xlsx");

var wb=xslx.readFile("studentsheet.xlsx");


var ws=wb.Sheets["marks"];

var data=xslx.utils.sheet_to_json(ws);     //this line convert sheet data into array of json objects.

console.log(data[1]);

console.log(wb.SheetNames);
console.log(data); //wil get sheet data in array on objects
/*
var newData=data.map(function(record){    //this code will create a new sheet by modifing data
    record.result=record.m1-record.m2;
    delete record.m1;
    delete record.m2;
    return record;
});

console.log(newData); //this will get the updated sheet data by deleting m1 and m2 from marks sheet

var newWb=xslx.utils.book_new();
var newWs=xslx.utils.json_to_sheet(newData);
xslx.utils.book_append_sheet(newWb,newWs,"New Data")

xslx.writeFile(newWb,"New Data File.xlsx");
*/






