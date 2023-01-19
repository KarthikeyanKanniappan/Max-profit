let businessEarnings=(testCase)=>{
const business=[{
    name:"T", earning:1500, time:5
},{
    name:"P", earning:1000, time:4
},{
    name:"C", earning:3000, time:10
}]

let result=[]

for(let i=0;i<business.length;i++){
let aboutBusiness= business[i]
if(testCase.timeUnit < aboutBusiness.time){
}else{
    let totalBusiness= +testCase.timeUnit/ +aboutBusiness.time
    let totalrunTime=0
    let totalSpendtimeUnit=0
    for(let i = 1; i<= totalBusiness; i++){
        let businessRunTime = (testCase.timeUnit - totalSpendtimeUnit)-aboutBusiness.time
         totalrunTime += businessRunTime
        totalSpendtimeUnit += aboutBusiness.time
    }
    let earningFromBusiness = totalrunTime*aboutBusiness.earning
    if(earningFromBusiness ==  testCase.earnings){
        let final= {"T":0,"P":0,"C":0}
        final[aboutBusiness.name]= parseInt(totalBusiness)
        result.push(final)
    }
}
}
return(result)
}
const case1={
    timeUnit:7,
    earnings:3000
}
console.log(businessEarnings(case1))

const case2={
    timeUnit:8,
    earnings:4500
}
console.log(businessEarnings(case2))

const case3={
    timeUnit:13,
    earnings:16500
}
console.log(businessEarnings(case3))