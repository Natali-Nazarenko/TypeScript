class Restaurant {
    departments: C[];
    employees: D[];
    constructor() {
        this.departments = departments;
        this.employees = employees;
    }

    getSumSalarysDepartments(): {[key: string]: number}[] {
        const sumAllSalarysDepartments: {[key: string]: number}[] = [];

        for (let item of this.departments) {
            let sumAndDepartmens: {[key: string]: number} = {};
            let sumSalarys: number = 0;

            for (let data of this.employees) {

                if (item.name === data.department) {
                    sumSalarys += data.salary;
                }
            }
            sumAndDepartmens = {
                [item.name]: sumSalarys,
            }
            sumAllSalarysDepartments.push(sumAndDepartmens);
        }

        return sumAllSalarysDepartments;
    }

    getMiddleSalaryDepartment(department: string): number {
        let sumSalarys: number = 0;
        let count: number = 0;

        for (let item of this.employees) {

            if (item.department === department) {
                sumSalarys += item.salary;
                count++;
            }
        }

        return Math.floor(sumSalarys / count);
    }

    getMinimalSalaryDepartment(department: string): number {
        const arraySalary: number[] = [];

        for (let item of this.employees) {
            if (item.department === department) {
                arraySalary.push(item.salary);
            }
        }

        return Math.min(...arraySalary);
    }

    getTopSalaryDepartment(department: string): number {
        let topSalary: number = 0;

        for (let item of this.employees) {
            if (item.department === department) {
                if (topSalary < item.salary) {
                    topSalary = item.salary;
                }
            }
        }

        return topSalary;
    }

    getMinimalSalaryPost(post: string): number {
        const arraySalary: number[] = [];

        for (let item of this.employees) {

            if (item.post.includes(post)) {
                arraySalary.push(item.salary);
            }
        }

        return Math.min(...arraySalary);
    }

    getTopSalaryPost(post: string): number {
        let topSalary: number = 0;

        for (let item of this.employees) {
            if (item.post.includes(post)) {
                if (topSalary < item.salary) {
                    topSalary = item.salary;
                }
            }
        }

        return topSalary;
    }

    getAmountFiredEmployees(isFired: boolean): number {
        let count: number = 0;
        for (let item of this.employees) {

            if (item.fired === isFired) {
                count++;
            }
        }

        return count;
    }

    getDepartmentWithoutHead(): string[] {
        // debugger
        const searchParametr: string = ' head';
        let departmentsWithoutHead: string[] = [];

        for (let item of this.employees) {

            if (item.post.includes(searchParametr)) {
                for (let data of this.departments) {

                    if (data.name === item.department) {
                        departmentsWithoutHead.push(data.name);
                    }
                }
            }
        }

        return departmentsWithoutHead;
    }

    findNumberDepartment(department: string): number {
        let numberDepartment: number = 0;

        for (let data of this.departments) {

            if (data.name.toLowerCase() === department.toLowerCase()) {
                numberDepartment = data.number;
                break;
            }
        }

        return numberDepartment;
    }
}

const restaurant = new Restaurant();