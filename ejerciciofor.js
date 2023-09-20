let num = 100;

function multiple(num){
    for(let i = 0; i <= num; i++){
        if (i % 3 == 0 && i % 5 == 0){
            console.info("FizzBuzz")
        }else if
        (i % 3 == 0) {
            console.info("Fizz");
        }else if (i % 5 == 0){
            console.info("Buzz");
        }else {
            console.info(i)
        }
    }
}

multiple(num);