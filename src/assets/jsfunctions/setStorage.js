//save objects in the storage as strings
// オブジェクトを文字列としてストレージに保存します


export default function setStorageItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Failed to store item in localStorage:", error);
    }
  }