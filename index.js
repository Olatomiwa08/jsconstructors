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
document.getElementById("lastname").innerHTML += `  <h1>${myStudent.lastName}</h1>`;
document.getElementById("username").innerHTML +=  `  <h1>${myStudent.userName}</h1>`;
document.getElementById("regnum").innerHTML +=  `  <h1>${myStudent.regNum()}</h1>`
let profile = document.getElementById('profile');
        let file = document.getElementById('file');

        file.onchange = function(){
        profile.src =URL.createObjectURL(file.files[0]);
        }
        
    
// document.getElementById("avatar").innerHTML += myStudent.avatar();