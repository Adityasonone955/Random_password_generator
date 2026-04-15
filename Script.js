let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue"); let password = document.getElementById("password");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");


// Showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=> {
    sliderValue.textContent = inputSlider.value;
})


genBtn.addEventListener('click', ()=>{
    password.value = generatePassword();
})

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerChars = "abcdefghijklmnopqrstuvwxyz"
let allnumbers = "0123456789";
let allsymbols = "!@#$%^&*()_+~}{][><?|-="

// Function to generate password
function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars += uppercase.checked ? upperChars : "";
    allChars += lowercase.checked ? lowerChars : "";
    allChars += number.checked ? allnumbers : "";
    allChars += symbol.checked ? allsymbols : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword
    }

    let i=1;
    while(i<=inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return genPassword;
}

copyIcon.addEventListener('click', ()=> {
    if(password.value != "" || password.value.length >=1){
        navigator.clipboard.writeText(password.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(()=> {
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000)

    }
});























// const passwordBox = document.getElementById("password");
// const lenght = 12; 

// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// const lowerCase = "abcdefghijklmnopqrstuvwxyz"
// const number = "0123456789";
// const symbol = "!@#$%^&*()_+~}{][><?|-="
// const allChars = upperCase + lowerCase + number + symbol

// function createPassword() {
//     let password = "";
//     password += upperCase[Math.floor(Math.random() * upperCase.length)]
//     password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
//     password += symbol[Math.floor(Math.random() * symbol.length)]
//     password += number[Math.floor(Math.random() * number.length)]
    
//     while(lenght > password.length){
//         password += allChars[Math.floor(Math.random() * allChars.length)]
//     }
//     passwordBox.value = password;
// }

// function copypassword(){
// }

// function copyText(){
//     const input = document.getElementById("password");
//     const textToCopy = input.value 

//     navigator.clipboard.writeText(textToCopy)
//     .then(() => {
//         alert("Text Copied  !!");
//     })
//     .catch(err => {
//         console.log('Failed:' + err);
//     })
// }

