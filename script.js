/*
    Michael Kellems
    9/4/24
    CIT 215
    Prof. Kane
*/

totalcost = 0

const updateTotals = function(cost) {
    let display = document.querySelector(".totalDisplay")

    if(cost != NaN) {
        totalDisplay.innerHTML = "Total: $" + cost.toFixed(2)
    }
    return true
}

function paint() {
    let cost = parseFloat(prompt("Enter the cost of Paint."))

    if(cost>200) {
        alert("Paint cost limit of 200 exceeded.")
        return 
    } else if(cost>100) {
        return(cost*.1)
    }
}

function floorCovers() {
    let cost = parseFloat(prompt("Enter the cost of floor coverings."))

    if(cost>2000) {
        alert("Floor covering cost limit of 2000 exceeded.")
        return
    } else if(cost<500) {
        return(-cost*.15)
    }
}

function furniture() {
    let cost = parseFloat(prompt("Enter the cost of furniture."))

    if(cost>2000) {
        alert("Furniture cost limit of 2000 exceeded.")
    } else if (cost < 500) {
        return(-cost*.1)   
    }
}

totalcost += paint()
updateTotals(totalcost)
totalcost += floorCovers()
updateTotals(totalcost)
totalcost += furniture()
updateTotals(furniture)