// CLASSES

class Department {

    static fiscalYear = 2020; // *8 STATIC PROPERTY
    // private id: string;
    // private name: string;
    // private employees: string[] = []; // *2 prywatna
    protected employees: string[] = []; // *4 zabezpieczona

    constructor(private readonly id: string, public name: string) { // *3 readonly id
        // this.id = id;
        // this.name = n;
    }

    static createEmployee(name: string){ // *7 STATIC METHOD
        return {name: name}
    }

    describe(this: Department) { // *1
        console.log(`Department (${this.id}): ${this.name}`) // THIS
    }
    addEmployee(employee: string){
        // this.id = 'd2'; // *3 nie da sie zmienic dzieki READONLY
        this.employees.push(employee)
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
        this.admins = admins
    }
}

const It = new ITDepartment('d1',['Maximilian', 'Anna'])
console.log(It)


class AccountingDepartment extends Department{

    private lastReport: string;

    get mostRecentReport(){ // *5 GET
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string){ // *6 SET
        if(!value) throw new Error('Please pass a valid value!');
        this.addReport(value);

    }

    constructor(id: string, private reports: string[]){
    super(id, 'Accounting')
    this.lastReport = reports[0]
    }

    addEmployee(name: string) { // *4 mozemy dodac pracownika w klasie na podstawie klasy Department
        if(name ==='Max'){
            return
        }
        this.employees.push(name)
        
    }

    addReport(text: string){
        this.reports.push(text)
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports)
    }
}

const employee1 = Department.createEmployee('Robert'); // *7 STATIC METHOD
console.log(employee1, Department.fiscalYear);

const AC = new AccountingDepartment('d1', [])

AC.mostRecentReport = 'Year End Report'; // *6 SET ustalilismy Most Recent Report
AC.addReport('Something went wrong...');
AC.printReports()
AC.addEmployee('Max');
AC.addEmployee('Michael');
AC.mostRecentReport; // *5 GET odpalamy key obiektu
console.log(AC)


const accounting = new Department('d1','Accounting');

accounting.addEmployee('Rob');
accounting.addEmployee('Max');

// accounting.employees[2] = 'Anna'; // *2 arrayka jest prywatna, wiec nie mozna dodac pracownika bez uzycia odpowiedniej funkcji z klasy

console.log(accounting)
accounting.describe(); // THIS
accounting.printEmployeeInformation();

// const accountingCopy = {describe: accounting.describe}; // Tworzymy kopie obiektu z klasy, więc THIS nie bedzie tu dzialac i wyswietli UNDEFINED
// accountingCopy.describe() // UNDEFINED i nielegalne w TS

// // *1 
// const accountingCopy = {name: 'Rob', describe: accounting.describe}; // Możemy dodać name, aby describe było uzupełnione
// accountingCopy.describe() 