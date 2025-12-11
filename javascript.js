let Students = ["Anu","Ravi","Mona"];
 
console.log(Students[0]);
console.log(Students[1]);
console.log(Students[2]);

for(let i = 0; i < Students.length; i++)
{
    console.log(Students[i]);
}

console.log(Students.length);

let a = [1,2];
a.push(3);
console.log(a);

let b =[ 1,2,3];
b.pop();
console.log(b);

let c = [2,3];
c.unshift(1);
console.log(c);

let t = [1,2,3];
t.shift();
console.log(t);

let y =[10,20,30];
console.log(y.length);

let x = ["a", "b" , "c"];
console.log(x.includes("b"));