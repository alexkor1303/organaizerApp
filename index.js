let userInfo = {
  name: "alex",
  age: 30,
  married: true,
};

const RandomNum = new Promise(function (resolve, reject) {
  let newUser = { ...userInfo };
  newUser.married = false;
  if (newUser.married === true) {
    return resolve("you are so happy!");
  } else {
    return reject(new Error("this user not married"));
  }
});
RandomNum.then((result) => console.log(result)).catch((error) =>
  console.error(error)
);
console.log(userInfo);
