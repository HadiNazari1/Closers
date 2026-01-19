const boardPassengers=function(n,wait){
    const perGroup=n/3;
    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    },wait*1000);
    console.log(`will start bording in ${wait} seconds`);

}
const perGroup=1000;
boardPassengers(180,3);
