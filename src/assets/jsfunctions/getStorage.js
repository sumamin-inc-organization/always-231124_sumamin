//get items from a storage and parse it
// ストレージからアイテムを取得し、解析します

export default function GetStorageItems(key){
    return JSON.parse(localStorage.getItem(key))
 }
