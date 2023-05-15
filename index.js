class studentName{
    constructor(firstName,lastName,userName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName
    }
    regNum(){
        const num = Math.floor(Math.random() * 10000000000);
        return num;
    }
    
    Error(){
        this.y = "too"
    }

}

const myStudent = new studentName(prompt('Enter FirstName:'), prompt('Enter LastName:'),prompt('Enter UserName:'));
const x = new Error(console.log(myStudent.y))

// alert(y)
document.getElementById("firstname").innerHTML += `  <h1>${myStudent.firstName}</h1>`;
document.getElementById("lastname").innerHTML += myStudent.lastName;
document.getElementById("username").innerHTML += myStudent.userName;
document.getElementById("regnum").innerHTML += myStudent.regNum()
let profile = document.getElementById('profile');
        let file = document.getElementById('file');

        file.onchange = function(){
        profile.src =URL.createObjectURL(file.files[0]);
        }
        
    
// document.getElementById("avatar").innerHTML += myStudent.avatar();