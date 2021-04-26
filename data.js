const coffeeMachines = [
    { 
        name: "the Barista Express", 
        manufacturer :"Breville", 
        price : 700, 
        feature : ["semi-automatic", "built-in-grinder", "milk foam"]      
    }, 
    { 
        name: "the Barista Touch", 
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

module.exports = {
    getAll: function () {
        return coffeeMachines;
    },
    getItem: (name) => {
        return coffeeMachines.find(machine => machine.name.toLowerCase() === name?.toLowerCase());
    }
};

//module style export!
// export function getAll() {
//     return coffeeMachines;
// }

// export function getItem(name) {
//     return coffeeMachines.find(machine => machine.name.toLowerCase() === name?.toLowerCase());
// };

//when the name(item) is empty(undefined), get an error in the method. So add '?' to name.toLowerCase().


