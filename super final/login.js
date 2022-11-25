const studentId = document.querySelector('#stdID');
const passWord = document.querySelector('#password');
const form = document.querySelector('#signup');

form.addEventListener('submit', function(e){
e.preventDefault(); //prevent the form from submiting

// Checking Validation
let isStdIDValid = checkStdID(),
    isPasswordValid = checkPassword();
    
let isFormValid = isStdIDValid && isPasswordValid;

if (isFormValid){
    
}
 else{
 }   

});

// Student ID
const checkStdID = () => {
    let valid = false;
    const character = 8;
        const stdID = studentId.value.trim();
        if (!isRequried(stdID)){
            showError(studentId,'Student Id should not be blank' );
        }else if(stdID.length!== character){
            showError(studentId,'Invalid')
        }
        else if((!isStdIDValid)){
            showError(studentId,`Invalid ID`)
        }
        else{
            showSuccess(studentId);
            valid = true;
        }

return valid;
 };
//    Password should be
 const isStdIDValid = (stdID)=> {
    const re ="^[0-9]*$";
    return re.test(stdID);
    
 }
// Validation for Password
const checkPassword = () => {
    let valid = false;
    const pword = 10;
        const password = passWord.value.trim();
        if (!isRequried(password)){
            showError(passWord,'Student name cannot be blank' );
        }else if(password.length !== pword){
            showError(password, `Incorrect password`)
        }else{
            showSuccess(passWord,"" );
            valid = true;
        }

return valid;
 };

const isRequried = value => value === ''? false : true;

// For invalide 
const showError = (input, message) => {
    const formField = input.parentElement;

    formField.classList.remove('Success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;

};

// for valid form
 const showSuccess = (input) => {

    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

     const error = formField.querySelector('small');
     error.textContent = "";
 }

 