window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) 
        {
            textError.textContent = "";
            return;
        }
        try 
        {
          (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) 
        {
            textError.textContent = e;
        }
    });

  
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
     //in range button the output shown should always be equal to value the user is updating
     output.textContent = salary.value;
     salary.addEventListener('input', function () {
        output.textContent = salary.value;

     });

});
const save = () => {
    try {
        console.log("save function");
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
       // console.log("Welcome to",employeePayrollData);

    } catch (e) {
        return;
   }
}
function createAndUpdateStorage(employeePayrollData)
{
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
        if(employeePayrollList != undefined)
            {
                employeePayrollList.push(employeePayrollData);
            } 
        else 
            {
                employeePayrollList = [employeePayrollData]
            }
            localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
            alert(employeePayrollList.toString());
}
//Use Case 13

const createEmployeePayroll = () => {
    
    let employeePayrollData = new EmployeePayrollData();
    try 
    {
        employeePayrollData.name = getInputValueById('#name');
    } 
    catch (e) 
    {
        setTextValue('.text-error', e);
        throw e;
    }
        employeePayrollData.id = randomNumber();
        employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
        employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
        employeePayrollData.department = getSelectedValues('[name=department]');
        employeePayrollData.salary = getInputValueById('#salary');
        employeePayrollData.note = getInputValueById('#notes');
        let date = getInputValueById('#day') +" "+ getInputValueById('#month') +" "+ getInputValueById('#year');
        employeePayrollData.date = Date.parse(date);
        alert(employeePayrollData.toString());
        return employeePayrollData;

    }

    const randomNumber = () => {
        return Math.floor((Math.random() * 10000) + 1);
    }

    const getSelectedValues = (propertyValue) => {
    console.log(propertyValue);
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if (item.checked) selItems.push(item.value)
    });
        return selItems;
    }

    const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
    }

    const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
        return value;
    }
const resetForm = () => {
    setValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2020');
}
const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}

const setTextValue = (id,value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}
