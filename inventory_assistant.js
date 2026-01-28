const itemName = "Water Bottle"
let unitCost = 15;
let currentStock = 100;
let reorderLevel = 40
let targetStock = 200;
let weeklyDemand = 25;
let supplierLeadTimeWeeks = 2;

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity
let stockDeficit = Math.max(0, targetStock - currentStock)
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0
let estimatedReorderCost = reorderQuantity * unitCost
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks

console.log("Item name: " + itemName)
console.log("Weeks of cover: " + weeksOfCover.toFixed(2))
console.log("Reorder now?: " + reorderNow)
console.log("Recommended reorder quantity: " +  reorderQuantity)
console.log("Estimated reorder cost: "+ estimatedReorderCost.toFixed(2))