// Step 1: Print number 1 - 100

const numList = document.getElementById("numlist");

// Append divs to not bog down index.html document with div soup
for (let i = 1; i <= 100; i++) {
    let eachNum = document.createElement("div");
    eachNum.classList = "num";
    eachNum.innerText = i;
    numList.appendChild(eachNum);
    
    //  Step 2: Change every 3rd number to "Fizz"
    if (eachNum.innerText % 3 === 0) {
        eachNum.innerText = "Fizz";
    }
}
