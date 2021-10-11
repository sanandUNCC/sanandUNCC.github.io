let person = [];
let salaries = [];

function displayResults() 
{
    let total = 0;
    let avg = 0;

    for (let i = 0; i < salaries.length; i++) 
    {
        total += salaries[i];
    }

    avg = total / salaries.length;
    let max = 0;

    for (let j = 0; j < salaries.length; j++) 
    {
        let tempVar = 0;
        if (salaries[j] > tempVar) 
        {
            max = salaries[j];
        }
    }

    document.getElementById("results").innerHTML = "<h2>Employee Salary Results</h2>" 
                                                    + "<p>Highest Salary = $" + max 
                                                    + "</p>"+"<p>Salary Average = $" + avg + "</p>";

}

function displaySalary() 
{
    let selEmp= "";

    selEmp += "<tr><th>Employees</th> <th>Salary</th></tr>";
    for(let i = 0; i < person.length; i++)
    {
        selEmp +="<tr><td>" + person[i] + "</td><td>"+ "$" + salaries[i] +"</td></tr>";
    }

    document.getElementById("results_table").innerHTML = "<h2>Employee Salaries</h2>" + selEmp;
}

function addSalary() 
{
    let salIn = document.getElementById("salary").value;
    let nameIn = document.getElementById("empList").value;
 
    if (salIn == "" || salIn == NaN) 
    {
        alert("Please enter a number");
    }
    else 
    {
        person.push(nameIn);
        salaries.push(salIn);
    }
}