// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function listEmployeeTab() {
    document.getElementById("listEmployeeTab").style.display = 'block';
    document.getElementById("listPostionTab").style.display = 'none'; 
    document.getElementById("addEmployeeTab").style.display = 'none'; 
}



function listPostionTab() {
    document.getElementById("listPostionTab").style.display = 'block';
    document.getElementById("listEmployeeTab").style.display = 'none';
    document.getElementById("addEmployeeTab").style.display = 'none';
}



function addEmployeeTab() {
    document.getElementById("addEmployeeTab").style.display = 'block';
    document.getElementById("listPostionTab").style.display = 'none';
    document.getElementById("listEmployeeTab").style.display = 'none';
}

