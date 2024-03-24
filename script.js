document.getElementById("concatenate").onclick= function(){
    let a = prompt("Enter the First String:")
    let b = prompt("Enter the First String:")
    document.getElementById("statement").innerText = "The concatenation of the two strings is given below:"
    document.getElementById("output").innerText = a+b;
}
document.getElementById("askName").onclick= function(){
    let c = prompt("Enter your First Name:")
    let d = prompt("Enter your Last Name:")
    let e = c + " " + d
    document.getElementById("statement").innerText = "Your Full Name is:"
    document.getElementById("output").innerText = e;
}
document.getElementById("comparison").onclick = function(){
    let a = prompt("Input the first Number:")
    let b = prompt("Input the Second Number:")
    if (a===b) {
    document.getElementById("statement").innerText = "The result is below:"
    document.getElementById("output").innerText = "both numbers are equal!"
    }
    else {
    document.getElementById("statement").innerText = "The result is below:"
    document.getElementById("output").innerText = "both numbers are unequal!"
    }
}
document.getElementById("ifElse").onclick = function(){
    let a = prompt("Enter your Marks:")
    if (a > 90) {
    document.getElementById("statement").innerText = "Your grade is below:"
    document.getElementById("output").innerText = "A+"
    }
    else if (a>80) {
    document.getElementById("statement").innerText = "Your Grade is below:"
    document.getElementById("output").innerText = "A"
    }
    else if (a<=80) {
        document.getElementById("statement").innerText = "Your Grade is below:"
        document.getElementById("output").innerText = "Your are Fail"
    }
}

document.getElementById("set").onclick = function(){
    let a = prompt("Input your Age")
    let b = prompt("Input your Height in inches")
    let c = prompt("Input your weight in kg")
    if (a>15 && b>80 && c>60) {
    document.getElementById("statement").innerText = "The result is below:"
    document.getElementById("output").innerText = "You are a Healthy Teenager"
    }
    else if (a<15 && b<80 && c<60) {
    document.getElementById("statement").innerText = "The result is below:"
    document.getElementById("output").innerText = "you're still an infant"
    }
}

document.getElementById("nested").onclick = function(){
    let a = prompt("Input your Age");
    let c = prompt("Input your weight in kg");
    a = parseFloat(a);
    c = parseFloat(c);

    if (a <= 50 && c <= 90) {
        if (a > 40 && c > 60) {
            document.getElementById("statement").innerText = "The result is below:";
            document.getElementById("output").innerText = "You are Fat!";
        }
        else if (a <= 45 && c < 60) {
            document.getElementById("statement").innerText = "The result is below:";
            document.getElementById("output").innerText = "You are Weak!";
        }
    }
    else if (a < 30 && c < 40) {
        document.getElementById("statement").innerText = "The result is below:";
        document.getElementById("output").innerText = "You are on your way to Die!";
    }
    else {
        document.getElementById("statement").innerText = "The result is below:";
        document.getElementById("output").innerText = "Maybe You'll Live";
    }
}

document.getElementById("login").onclick = function(){
    let a = prompt("Enter your UserName:")
    let b = prompt("Enter your Password:")
    document.getElementById("statement").innerText = "Your login status is below:"
    document.getElementById("output").innerText = "Your are inputting Wrong Login Credentials!"
}
document.getElementById("subtract").onclick = function(){
    let a, b;
    a = 10;
    b = 20;
    document.getElementById("statement").innerText = "a = 10 and b = 20"
    document.getElementById("output").innerText = `a - b = ${b-a}`
}
document.getElementById("multiply").onclick = function(){
    let a, b;
    a = 10;
    b = 20;
    document.getElementById("statement").innerText = "a = 10 and b = 20"
    document.getElementById("output").innerText = `a * b = ${a*b}`
}
document.getElementById("divide").onclick = function(){
    let a, b;
    a = 10;
    b = 20;
    document.getElementById("statement").innerText = "a = 10 and b = 20"
    document.getElementById("output").innerText = `a / b = ${b/a}`
}
document.getElementById("calculate").onclick = function(){
    let a, b, c;
    a = 10;
    b = 20;
    c = 30;
    document.getElementById("statement").innerText = "a = 10 and b = 20 and c = 30"
    document.getElementById("output").innerText = `a * b + c = ${a*b+c}`
}