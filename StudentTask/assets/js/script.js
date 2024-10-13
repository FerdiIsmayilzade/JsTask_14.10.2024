"use strict";

let inputs = document.querySelectorAll(".input");
let spans = document.querySelectorAll(".modal-body span");
let p=document.querySelector(".modal-body p")
let btn = document.querySelector(".add");
let studentsTable = document.querySelector(".students-table")
let students=JSON.parse(localStorage.getItem("students")) || [];
let student = {
    fullname: "",
    age: 0,
    email: ""
}
let inputFulName=document.querySelector(".fullname");
let inputAge=document.querySelector(".age");
let inputEmail=document.querySelector(".email")


inputs.forEach((input, i) => {
    input.addEventListener("keyup", function () {
        if (this.value.trim() === "") {
            spans[i].classList.remove("d-none");
        } else {
            spans[i].classList.add("d-none");
            if (inputs[i]== inputFulName) {
                student.fullname = this.value
            }
            if (inputs[i]==inputAge) {
                student.age = this.value
            }
            if (inputs[i]==inputEmail) {
                if(!this.value.includes("@")){
                    p.classList.remove("d-none");
                }
                else{
                    p.classList.add("d-none");
                    student.email = this.value

                }

            }    
        }
        
    
        let allFull=true;
        for (let index = 0; index < inputs.length; index++) {
            if(inputs[index].value.trim() === ""){
               
                allFull=false;
                break;
            }
            
        }
        if(allFull){
            btn.removeAttribute("disabled");
        }

    });
    
});




btn.addEventListener("click", function () {
    students.push(student)
    console.log(students);

    localStorage.setItem("students", JSON.stringify(students))
    

    location.reload()
})



if (JSON.parse(localStorage.getItem("students")).length !== 0) {
    document.querySelector(".table-header").classList.remove("d-none");
    const students = JSON.parse(localStorage.getItem("students"));
    let std = "";
    
    
    students.forEach((student, i) => {
        std += `
        <tr>
            <td>${student.fullname}</td>
            <td>${student.age}</td>
            <td>${student.email}</td>
            <td><button type="button" class="btn btn-danger delete" data-index="${i}">Delete</button></td>
        </tr>
        `;
    });

    studentsTable.innerHTML = std;

    let deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            let index = parseInt(this.getAttribute("data-index"));
            let stds = JSON.parse(localStorage.getItem("students"));
            let newStudents = [];
            
           
            for (let i = 0; i < stds.length; i++) {
                if (i !== index) {
                    newStudents.push(stds[i]);
                }
            }
            
            localStorage.setItem("students", JSON.stringify(newStudents));
            location.reload();
        });
    });
}
