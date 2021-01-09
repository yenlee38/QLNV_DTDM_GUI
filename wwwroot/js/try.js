
var buton = document.getElementById("click");
buton.onclick = function () {
    alert("toi day")
    //window.location.href = "/Views/Home/Hello1.html";
}




$(document).ready(function () {

    var att = new Attendances();

})

class Attendances {

    constructor() {
        this.init();
        self = this;
        var validate = true;

    }

    init() {
        this.getAllAttendance(); // lấy giá trị theo năm và tháng 
    }

    loadAttendanceAllUI(attendances) {
        $('#listAttendance').empty();
        $.each(attendances, function (index, item) {
            var html = $(`<tr class="data">
                        <td class="index">`+ index + `</td>                       
                        <td>`+ item.id_employee + `</td>
                        <td>`+ item.name_employee + `</td>
                        <td>`+ item.month + `</td>
                        <td>`+ item.year + `</td>
                        <td>`+ item.dayon + `</td>
                        <td>`+ item.dayoff + `</td>
                    </tr>`);
            $('#listAttendance').append(html);
        });
    }


    getAllAttendance(year, month) {
        self = this;
        var URL = "http://localhost:4431/findAllAttendance/" + year + "/" + month;
        $.ajax({
            url: URL,
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            dataType: "json"
        }).done(function (response) {
            self.loadAttendanceAllUI(response);
        }).fail(function () {

            // alert("fail");
        });
    }

    loadAttendanceOneUI(attendances) {
        $('#listAttendance').empty();
        $.each(attendances, function (index, item) {
            var html = $(`<tr>
                        <th scope="row">Day on</th>
                        <td>`item`</td>
                        <td>`0`</td>
                        <td>`0`</td>
                        <td>`0`</td>
                        <td>`0`</td>
                        <td>`0`</td>
                        <td>`0`</td>
                        <td>`0`</td>
                        <td>`0`</td>
                        <td>`0`</td>
                        <td>`0`</td>
                        <td>`0`</td>
                    </tr>
                    <tr>
                        <th scope="row">Day off</th>
                         <td>`0 `</td>
                        <td>`0`</td>
                        <td>`0`</td>
                        <td>`0`</td>
                        <td>`0`</td>
                        <td>`0`</td>
                        <td>`0`</td>
                        <td>`0`</td>
                        <td>`0`</td>
                        <td>`0`</td>
                        <td>`0`</td>
                        <td>`0`</td>
                    </tr>`);
            $('#listAttendance').append(html);
        });
    }

    getAllAttendanceOne(id, year) {
        self = this;
        var URL = "http://localhost:4431/findAllAttendance/" + id + "/" + year;
        $.ajax({
            url: URL,
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            dataType: "json"
        }).done(function (response) {
            self.loadAttendanceAllUI(response);
        }).fail(function () {

            // alert("fail");
        });
    }


}



$(document).ready(function () {

    var de = new Departments();

})

class Departments {

    constructor() {
        this.init();
        self = this;
        var validate = true;

    }

    init() {
        this.getAllDepartment();
    }

    loadPositionsUI(departments) {
        $('#listDepartment').empty();
        $.each(departments, function (index, item) {
            var html = $(`<tr class="data">
                        <td class="index">`+ index + `</td>                      
                        <td>`+ item.name + `</td>
                      
                    </tr>`);
            $('#listDepartment').append(html);
        });
    }


    getAllDepartment() {
        self = this;
        var URL = "http://localhost:4431/findAllDepartment";
        $.ajax({
            url: URL,
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            dataType: "json"
        }).done(function (response) {
            self.loadPositionsUI(response);
        }).fail(function () {

            // alert("fail");
        });
    }


}

$(document).ready(function () {

    var po = new Positions();

})

class Positions {

    constructor() {
        this.init();
        self = this;
        var validate = true;

    }

    init() {
        this.getAllPositions();
    }

    loadPositionsUI(positions) {
        $('#listPosition').empty();
        $.each(positions, function (index, item) {
            var html = $(`<tr class="data">
                        <td class="index">`+ index + `</td>                       
                        <td>`+ item.name + `</td>
                       
                    </tr>`);
            $('#listPosition').append(html);
        });
    }


    getAllPositions() {
        self = this;
        var URL = "http://localhost:4431/findAllPosition";
        $.ajax({
            url: URL,
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            dataType: "json"
        }).done(function (response) {
            self.loadPositionsUI(response);
        }).fail(function () {

            // alert("fail");
        });
    }


}



$(document).ready(function () {

    var de = new Departments();

})

class Departments {

    constructor() {
        this.init();
        self = this;
        var validate = true;

    }

    init() {
        this.getAllDepartment();
    }

    loadPositionsUI(departments) {
        $('#listDepartment').empty();
        $.each(departments, function (index, item) {
            var html = $(`<tr class="data">
                        <td class="index">`+ index + `</td>                      
                        <td>`+ item.name + `</td>
                      
                    </tr>`);
            $('#listDepartment').append(html);
        });
    }


    getAllDepartment() {
        self = this;
        var URL = "http://localhost:4431/findAllDepartment";
        $.ajax({
            url: URL,
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            dataType: "json"
        }).done(function (response) {
            self.loadPositionsUI(response);
        }).fail(function () {

            // alert("fail");
        });
    }


}

$(document).ready(function () {

    var em = new Employees();

})



class Employees {

    constructor() {
        this.init();
        self = this;
        var validate = true;

    }

    init() {
        this.getAllEmployees();
    }

    loadEmployeesUI(employees) {
        $('#listEmployee').empty();
        $.each(employees, function (index, item) {
            var html = $(`<tr class="data">
                            <input class="idemployee" type="hidden" value=`+ item.id + `></input>
                            <td class="index">`+ index + `</td>
                            <td><img src="" /></td>
                            <td>`+ item.name + `</td>
                            <td>`+ item.phone + `</td>
                            <td>`+ item.birthday + `</td>
                            <td>`+ item.sex + `</td>
                            <td>`+ item.department + `</td>
                            <td>  <i class="fas fa-trash"></i><i class="fas fa-pen"></i></td>
                         
                        </tr>`);
            $('#listEmployee').append(html);

            var html1 = $(`<div id="myModal` + index + `" class="modal">
                            <!-- Modal content -->
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4>Employee information</h4>
                                    <span class="close">&times;</span>

                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <img class="col-md-5" src="../Images/image1.jpg"/>
                                        <div class="col-md-7 content">
                                            <div class="row">
                                                <div class="col-md-3"><label>Full name: </label></div>
                                                <div class="col-md-9"> <p>`+ item.name + `</p></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3"><label>Address : </label></div>
                                                <div class="col-md-9"> <p>`+ item.address + `</p></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3"><label>Phone : </label></div>
                                                <div class="col-md-9"> <p>`+ item.phone + `</p></div>
                                            </div>
                                             <div class="row">
                                                <div class="col-md-3"><label>Salary : </label></div>
                                                <div class="col-md-9"> <p>`+ item.salary + `</p></div>
                                            </div>
                                             <div class="row">
                                                <div class="col-md-3"><label>Email : </label></div>
                                                <div class="col-md-9"> <p>`+ item.email + `</p></div>
                                            </div>
                                           <div class="row">
                                                <div class="col-md-3"><label>Identity Card : </label></div>
                                                <div class="col-md-9"> <p>`+ item.identityCard + `</p></div>
                                            </div>
                                             <div class="row">
                                                <div class="col-md-3"><label>Gender : </label></div>
                                                <div class="col-md-9"> <p>`+ item.sex + `</p></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3"><label>Birthday : </label></div>
                                                <div class="col-md-9"> <p>`+ item.birthday + `</p></div>
                                            </div>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>`);

            $('#container').append(html1);


        });

        self = this;
        var tr = document.getElementsByTagName("tr");
        for (var i = 1; i < tr.length; i++) {

            var modal = document.getElementById("myModal" + (i - 1));
            // Get the button that opens the modal

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[i - 1];

            // When the user clicks on the button, open the modal
            tr[i].onclick = function (event) {
                var row = event.target;
                if (row.className == "delete activated" || row.className == "fas fa-trash") {
                    self.deleteEmployee(row.parentElement.parentElement.getElementsByClassName("idemployee")[0].value);
                }
                else
                    if (row.className == "fas fa-pen") {
                        window.location.href = "AddEmployee.html?id=" + row.parentElement.parentElement.getElementsByClassName("idemployee")[0].value;
                    }

                    else {
                        var modal1 = document.getElementById("myModal" + row.parentElement.getElementsByClassName("index")[0].innerText);
                        modal1.style.display = "block";
                    }

            }

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                var modal2 = document.getElementsByClassName("modal");
                for (var i = 0; i < modal2.length; i++) {

                    if (event.target.parentElement.parentElement.parentElement.id == "myModal" + i) {
                        modal2[i].style.display = "none";
                        break;
                    }

                }

            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {

                var modal2 = document.getElementsByClassName("modal");
                for (var i = 0; i < modal2.length; i++) {

                    if (event.target == modal2[i])
                        modal2[i].style.display = "none";
                }

            }
        }

    }

    deleteEmployee(id_employee) {
        self = this;
        var URL = "http://localhost:4431/employee/" + id_employee;
        $.ajax({
            url: URL,
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            dataType: ""
        }).done(function () {

            self.getAllEmployees();

        }).fail(function () {

            alert("xóa lỗi")
        });
    }

    getAllEmployees() {
        self = this;
        var URL = "http://localhost:4431/findAll";
        $.ajax({
            url: URL,
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            dataType: "json"
        }).done(function (response) {
            self.loadEmployeesUI(response);
        }).fail(function () {

            // alert("fail");
        });


    }





}


var redirUrl = window.location.href;

var myParam = redirUrl.split('id=')[1] ? redirUrl.split('id=')[1] : '0';


$(document).ready(function () {

    if (myParam != '0') {
        FindEmployeeByID(myParam);
        $('#btn-saveEmployee').html = "Save edit";

    }
    else
        $('#btn-saveEmployee').html = "Save";

    $('#btn-saveEmployee').click(function () {
        if (myParam == '0')
            addEmployee();
        else {
            EditPersionalInfo(myParam);
        }
        return;
    });
});
var validate;




function ValidateInput() {
    var name = $('#inputname').val();
    var email = $('#inputEmail').val();
    var address = $('#inputAddress').val();
    var phone = $('#inputPhone').val();
    var identitycard = $('#inputidentify').val();
    var birthday = $('#inputBirthdate').val();
    var salary = $('#inputSalary').val();
    validate = true;

    if (name != null) {
        if (name == "") {
            $('#error-input-name').html("You have to fill your name!");
            validate = false;
        }
        else
            $('#error-input-name').html("");
    }

    if (email != null) {
        if (email == "") {
            $('#error-input-email').html("You have to fill your email!");
            validate = false;
        }
        else
            $('#error-input-email').html("");
    }

    if (phone != null) {
        if (phone == "") {
            $('#error-input-phone').html("You have to fill your phone!");
            validate = false;
        }
        else
            $('#error-input-phone').html("");
    }

    if (address != null) {
        if (address == "") {
            $('#error-input-address').html("You have to fill your address!");
            validate = false;
        }
        else
            $('#error-input-address').html("");
    }

    if (identitycard != null) {
        if (identitycard == "") {
            $('#error-input-identitycard').html("You have to fill your identitycard!");
            validate = false;
        }
    }

    if (birthday != null) {
        if (birthday == "") {
            $('#error-input-birthday').html("You have to fill your birthday!");
            validate = false;
        }
        else
            $('#error-input-birthday').html("");
    }

    if (salary != null) {
        if (salary == "") {
            $('#error-input-salary').html("You have to fill your salary!");
            validate = false;
        }
        else
            $('#error-input-salary').html("");
    }

}


function callApiSaveEmployee() {

    var employee = {
        name: $('#inputname').val(),
        phone: $('#inputPhone').val(),
        email: $('#inputEmail').val(),
        address: $('#inputAddress').val(),
        identityCard: $('#inputidentify').val(),
        birthday: $('#inputBirthdate').val(),
        sex: $("input[type='radio']:checked").val(),
        salary: $('#inputSalary').val(),
        image: $('#img-employee').attr('src')
    };

    $.ajax({
        url: "http://localhost:4431/employee",
        method: "POST",
        data: JSON.stringify(employee), // Truyền xuống thông qua body request.
        contentType: "application/json", //Kiểu dữ liệu trả về.
        dataType: "json", //Kiểu dữ liệu truyền lên.
    }).done(function (response) {
        if (response) {
            alert("Thêm thành công");
            window.location.href = "ListEmployee.html";
        }
        else
            alert(" Thất bại");
    }).fail(function () {
        alert("thêm ko thành công");
    });
}

function addEmployee() {
    ValidateInput();
    if (validate == true)
        callApiSaveEmployee();

}

function SaveEdit(id) {
    var employee = {
        id: id,
        name: $('#inputname').val(),
        phone: $('#inputPhone').val(),
        email: $('#inputEmail').val(),
        address: $('#inputAddress').val(),
        identityCard: $('#inputidentify').val(),
        birthday: $('#inputBirthdate').val(),
        sex: $("input[type='radio']:checked").val(),
        salary: $('#inputSalary').val(),
        image: $('#img-employee').attr('src')
    };
    $.ajax({
        url: "http://localhost:4431/employee/edit",
        method: "POST",
        data: JSON.stringify(employee), // Truyền xuống thông qua body request.
        contentType: "application/json", //Kiểu dữ liệu trả về.
        dataType: "json", //Kiểu dữ liệu truyền lên.
    }).done(function (response) {
        FindEmployeeByID(myParam);
        alert("Update success!")
    }).fail(function (response) {
        alert("Update fail");
    });


}


function EditPersionalInfo(id) {
    ValidateInput();
    if (validate == true)
        SaveEdit(id);
}

function LoadPersionalData(employee) {
    $('#inputname').val(employee.name);
    $('#inputPhone').val(employee.phone);
    $('#inputEmail').val(employee.email);
    $('#inputAddress').val(employee.address);
    // $('#inputBirthdate').val(employee.birthday);
    $('#inputidentify').val(employee.identityCard);
    $("input[type='radio']:checked").val();
    if (employee.sex == "Male") $("#radioMale").prop("checked", true);
    if (employee.sex == "Female") $("#radioFemale").prop("checked", true);
    $('#inputSalary').val(employee.salary);
    var date = new Date(employee.birthday);
    var dt = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    $('#inputBirthdate').val(dt);

    var str = `<div> <img class="img-addproduct js-file-image"  id="img-employee" style=""><div>`;
    $('.js-file-list').append(str);


    $('.js-file-name').last().text(employee.image);
    $('.js-file-image').last().attr('src', employee.image);
}

function FindEmployeeByID(id) {
    var URL = "http://localhost:4431/employee/find/" + id;
    $.ajax({
        url: URL,
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        dataType: "json"
    }).done(function (response) {

        LoadPersionalData(response);
    }).fail(function () {

        alert("fail");
    });
}
