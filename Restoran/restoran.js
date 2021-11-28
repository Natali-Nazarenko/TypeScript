class Restaurant {
    constructor() {
        this.departments = departments;
        this.employees = employees;
    }
    ;
    getSumSalarysDepartments() {
        const sumAllSalarysDepartments = [];
        for (let item of this.departments) {
            let sumAndDepartmens = {};
            let sumSalarys = 0;
            for (let data of this.employees) {
                if (item.name === data.department) {
                    sumSalarys += data.salary;
                }
            }
            sumAndDepartmens = {
                [item.name]: sumSalarys,
            };
            sumAllSalarysDepartments.push(sumAndDepartmens);
        }
        return sumAllSalarysDepartments;
    }
    ;
    getMiddleSalaryDepartment(department) {
        let sumSalarys = 0;
        let count = 0;
        for (let item of this.employees) {
            if (item.department === department) {
                sumSalarys += item.salary;
                count++;
            }
        }
        return Math.floor(sumSalarys / count);
    }
    ;
    getMinimalSalaryDepartment(department) {
        const arraySalary = [];
        for (let item of this.employees) {
            if (item.department === department) {
                arraySalary.push(item.salary);
            }
        }
        return Math.min(...arraySalary);
    }
    ;
    getTopSalaryDepartment(department) {
        let topSalary = 0;
        for (let item of this.employees) {
            if (item.department === department) {
                if (topSalary < item.salary) {
                    topSalary = item.salary;
                }
            }
        }
        return topSalary;
    }
    ;
    getMinimalSalaryPost(post) {
        const arraySalary = [];
        for (let item of this.employees) {
            if (item.post.includes(post)) {
                arraySalary.push(item.salary);
            }
        }
        return Math.min(...arraySalary);
    }
    ;
    getTopSalaryPost(post) {
        let topSalary = 0;
        for (let item of this.employees) {
            if (item.post.includes(post)) {
                if (topSalary < item.salary) {
                    topSalary = item.salary;
                }
            }
        }
        return topSalary;
    }
    ;
    getAmountFiredEmployees(isFired) {
        let count = 0;
        for (let item of this.employees) {
            if (item.fired === isFired) {
                count++;
            }
        }
        return count;
    }
    ;
    getDepartmentWithoutHead() {
        const searchParametr = ' head';
        let departmentsWithoutHead = [];
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
    ;
    findNumberDepartment(department) {
        let numberDepartment = 0;
        for (let data of this.departments) {
            if (data.name.toLowerCase() === department.toLowerCase()) {
                numberDepartment = data.number;
                break;
            }
        }
        return numberDepartment;
    }
    ;
}
;
const restaurant = new Restaurant();
//# sourceMappingURL=restoran.js.map