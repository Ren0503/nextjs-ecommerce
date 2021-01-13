import inventory from '../api/inventory'

async function fetchInventory() {
    // const inventory = API.get(apiUrl)
    return Promise.resolve(inventory)
}
  
export {
    fetchInventory, inventory as staticInventory
}