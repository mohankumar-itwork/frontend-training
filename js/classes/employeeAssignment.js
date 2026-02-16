function Employee(name, salary, workingDays, month) {

    this.name = name;
    this.salary = salary;
    this.workingDays = workingDays;
    this.month = month;

    this.getMonthSal = function () {
        var dailySalary = this.salary / 30;
        var monthlySalary = dailySalary * this.workingDays;
        return monthlySalary;
    };
}

var emp1 = new Employee("Krishna", 120000, 20, "Jun");

console.log("Employee Name:", emp1.name);
console.log("Month:", emp1.month);
console.log("Monthly Salary:", emp1.getMonthSal());