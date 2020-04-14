var xslx=require("xlsx");

class SheetData{

    getExcelSheetName(){
        return xslx.readFile("studentsheet.xlsx");
    }

}
module.exports=new SheetData();