// Using let we will get block scoped i
for (let i = 0; i < 5; i++) {
    // Using an arrow function we are able to
    // get the scoped i
    setTimeout(() => {
        console.log(i);
    // Using i * 1000 will allow us to wait
    // for i  seconds
    }, i * 1000)
}
