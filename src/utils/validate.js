export const checkValidData=(email, password)=>{

    const isEmailValid= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isname =name
    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid)return "Password is not valid";
    // if(!isname) return "Name is invalid"

    return null;
}


