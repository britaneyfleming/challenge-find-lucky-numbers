// Write your code below this line.

function luckyNumber(n){
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let luckyNumArr = []
    for(let i = 0; i < n; i++){
        let randomIndex = Math.floor(Math.randon() * nums.length)
        luckyNumArr.push(nums[randomIndex])
        nums.splice(randomIndex, 1)
    }
    return luckyNumArr
}
console.log(luckyNumber(7))