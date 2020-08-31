var sum=0;

for (let i = 2;i<process.argv.length;i++){
	
console.log("adding:",process.argv[i])
 sum=sum+Number(process.argv[i]);
}

console.log(sum);