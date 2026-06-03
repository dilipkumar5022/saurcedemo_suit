import * as xlsx from "xlsx"

export function excelReader (filePath:string,sheetName:string){
    const workBook = xlsx.readFile(filePath)
    const sheet = workBook.Sheets[sheetName]
    const data = xlsx.utils.sheet_to_json(sheet)
    return data
}