let user = {
    name: "John",
    age: 25,
};
 
console.log(Object.keys(user));
console.log(Object.values(user));

user.city ="Delhi";
console.log(user);

user.age = 30;
console.log(user);

delete user.age;
console.log(user);4 