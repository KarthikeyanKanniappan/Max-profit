// const case1={
//     timeUnit:7,
//     earnings:3000
// }

// // const case2={
// //     timeUnit:8,
// //     earnings:4500
// // }

// // const case3={
// //     timeUnit:13,
// //     earnings:16500
// // }

// const buildingTime=[5,4,10]
// const earningForUnit=[1500,1000,3000]

// let businessEarnings=(testCase)=>{
// const business=[{
//     name:"Theater", earning:1500, time:5
// },{
//     name:"pub", earning:1000, time:4
// },{
//     name:"Commercial Park", earning:3000, time:10
// }]

// let result=[]

// for(let i=0;i<business.length;i++){
// let aboutBusiness= business[i]
// if(testCase.timeUnit < aboutBusiness.time){
//     continue
// }else{
//     let totalBusiness= +testCase.timeUnit/ +aboutBusiness.time
//     let totalrunTime=0
//     let totalSpendtimeUnit=0
//     for(let i = 1; i<= totalBusiness; i++){
//         let businessRunTime = (testCase.timeUnit - totalSpendtimeUnit)-aboutBusiness.time
//          totalrunTime += businessRunTime
//         totalSpendtimeUnit += aboutBusiness.time
//     }
//     let earningFromBusiness = totalrunTime*aboutBusiness.earning
//     if(earningFromBusiness ==  aboutBusiness.earning){
//         let final= {"Theater":0,"pub":0,"Commercial Park":0}
//         final[aboutBusiness.name]=totalBusiness
//         result.push(final)
//     }
// }
// }
// console.log(result)
// }

// businessEarnings(case1)

const testcase1={
    time: 7,
    earning:3000
}
const testcase2={
    time: 8,
    earning:4500
}
const testcase3={
    time: 13,
    earning:16500
}
const timeToBuild=[5,4,10]
const earningPerUnit=[1500,1000,3000]

function recommendBussiness(requirement){
    let result = []
    const bussinesses = [{name:'T', earning:1500, developmentTime:5}, {name:'P', earning:1000, developmentTime:4}, {name:'C', earning:3000, developmentTime:10}]
    for(let i = 0; i<bussinesses.length; i++){
        let bussiness = bussinesses[i]
        if(requirement.time < bussiness.developmentTime){
            continue
        }else{
            let noOfBussiness = parseInt(requirement.time / bussiness.developmentTime)
            let totalBussinessRunningTime = 0
            let totalTimeSpentInDevelopment  = 0
            for(let i = 1; i<= noOfBussiness; i++){
                let bussinessRunningTime = (requirement.time - totalTimeSpentInDevelopment ) - bussiness.developmentTime
                totalBussinessRunningTime += bussinessRunningTime
                totalTimeSpentInDevelopment += bussiness.developmentTime
            }
            let totalEarningFromBussiness = totalBussinessRunningTime * bussiness.earning
            if(totalEarningFromBussiness == requirement.earning){
                let solution = {'T':0, 'P':0, 'C':0}
                solution[bussiness.name] = noOfBussiness
                result.push(solution)
            }
        }
    }
    console.log(result)
    return result
}