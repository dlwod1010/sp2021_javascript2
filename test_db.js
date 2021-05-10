import {Machine} from "./models/machine.js";

Machine.find({}, (error, result) => {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
    }   
    return
});


console.log(111);

Machine.countDocuments((err, result) => {
    console.log(222);
    console.log("result:" + result);
});

console.log(333);