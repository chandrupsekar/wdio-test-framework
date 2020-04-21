var xslx=require("xlsx");

class SheetData{
    getExcelSheetName(){
        return xslx.readFile("./src/data/studentsheet.xlsx");
    }
}
module.exports=new SheetData();