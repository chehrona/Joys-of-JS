let myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];

for (let i = 0; i < myFarm.length; i++) {
    console.log(myFarm[i]);
    if (myFarm[i].charAt(0) === "c" || myFarm[i].charAt(0) === "o") {
        alert("Starts with c or o!")
    }
}