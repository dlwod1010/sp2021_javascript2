let coffeeMachines = [
    { 
        name: "Barista Express", 
        manufacturer :"Breville", 
        price : 700, 
        feature : ["semi-automatic", "built-in-grinder", "milk foam"]      
    }, 
    { 
        name: "Barista Touch", 
        manufacturer :"Breville", 
        price : 995.95, 
        feature : ["semi-automatic", "touch screen", "built-in-grinder", "milk foam"]      
    }, 
    { 
        name: "Jura A1", 
        manufacturer :"Jura", 
        price : 795, 
        feature : ["automatic", "built-in-grinder"]      
    },
    { 
        name: "PicoBaristo", 
        manufacturer :"Saeco", 
        price : 1200, 
        feature : ["automatic", "built-in-grinder", "customize preference", "removable brewing", "milk foam"]      
    }, 
    { 
        name: "Gaggia", 
        manufacturer :"Gaggia", 
        price : 499, 
        feature : ["semi-automatic", "milk foam"]      
    }
];

export function getAll() {
    return coffeeMachines;
}

export function getItem(name) {
    return coffeeMachines.find(machine => machine.name.toLowerCase() === name?.toLowerCase());
}

function isNewItem(item) {
    return item?.name && !getItem(item?.name);
}

export function addItem(newItem) {
    if (isNewItem(newItem)) { 
        coffeeMachines.push(newItem);
        return true;
    } else {
        return false;
    }
}

export function deleteItem(unwantedItemName) {
    if (getItem(unwantedItemName)) {
        coffeeMachines = coffeeMachines.filter(machine => machine.name.toLocaleLowerCase() !== unwantedItemName?.toLowerCase());
        return true;
    } else {
        return false;
    }
}






