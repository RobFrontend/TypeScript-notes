"use strict";
// CLASSES
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        // private employees: string[] = []; // *2 prywatna
        this.employees = []; // *4 zabezpieczona
        // this.id = id;
        // this.name = n;
    }
    static createEmployee(name) {
        return { name: name };
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`); // THIS
    }
    addEmployee(employee) {
        // this.id = 'd2'; // *3 nie da sie zmienic dzieki READONLY
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020; // *8 STATIC PROPERTY
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
}
const It = new ITDepartment('d1', ['Maximilian', 'Anna']);
console.log(It);
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value)
            throw new Error('Please pass a valid value!');
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('Robert'); // *7 STATIC METHOD
console.log(employee1, Department.fiscalYear);
const AC = new AccountingDepartment('d1', []);
AC.mostRecentReport = 'Year End Report'; // *6 SET ustalilismy Most Recent Report
AC.addReport('Something went wrong...');
AC.printReports();
AC.addEmployee('Max');
AC.addEmployee('Michael');
AC.mostRecentReport; // *5 GET odpalamy key obiektu
console.log(AC);
const accounting = new Department('d1', 'Accounting');
accounting.addEmployee('Rob');
accounting.addEmployee('Max');
// accounting.employees[2] = 'Anna'; // *2 arrayka jest prywatna, wiec nie mozna dodac pracownika bez uzycia odpowiedniej funkcji z klasy
console.log(accounting);
accounting.describe(); // THIS
accounting.printEmployeeInformation();
// const accountingCopy = {describe: accounting.describe}; // Tworzymy kopie obiektu z klasy, więc THIS nie bedzie tu dzialac i wyswietli UNDEFINED
// accountingCopy.describe() // UNDEFINED i nielegalne w TS
// // *1 
// const accountingCopy = {name: 'Rob', describe: accounting.describe}; // Możemy dodać name, aby describe było uzupełnione
// accountingCopy.describe() 
//# sourceMappingURL=classes.js.map