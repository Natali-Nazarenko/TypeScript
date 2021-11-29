class Restaurant {
    departments: departmensDOM[];
    employees: employeesDOM[];
    constructor() {
        this.departments = departments;
        this.employees = employees;
    }

    getSumSalarysDepartments(): { [key: string]: number }[] {
        const sumAllSalarysDepartments: { [key: string]: number }[] = [];

        for (let item of this.departments) {
            let sumAndDepartmens: { [key: string]: number } = {};
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

    getMiddleSalaryDepartment(data: string): number {
        let sumSalarys: number = 0;
        let count: number = 0;

        for (let item of this.employees) {
            if (item.department === data) {
                sumSalarys += item.salary;
                count++;
            }
        }

        return Math.floor(sumSalarys / count);
    }

    getMinimalSalaryDepartment(data: string): number {
        const arraySalary: number[] = [];

        for (let item of this.employees) {
            if (item.department === data) {
                arraySalary.push(item.salary);
            }
        }

        return Math.min(...arraySalary);
    }

    getTopSalaryDepartment(data: string): number {
        let topSalary: number = 0;

        for (let item of this.employees) {

            if (item.department === data) {

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

};

const restaurant = new Restaurant();

class Menu {
    departments: departmensDOM[];
    employees: employeesDOM[];
    main: HTMLElement;
    menu: HTMLElement;

    constructor() {
        this.main = document.querySelector('.main') as HTMLElement;
        this.menu = document.querySelector('.menuBlock') as HTMLElement;
        this.departments = departments;
        this.employees = employees;
        this.createSelectMenu();
        this.selectAllEmployees();
        this.selectAllDepartment();
        this.createNewDepartment();
        this.createNewEmployee();
        this.setDepartmentToLocalStorage(this.departments);
        this.setEmployeesToLocalStorage(this.employees);
    }

    setDepartmentToLocalStorage(data: departmensDOM[]): void {
        data = data || this.departments;
        localStorage.departments = JSON.stringify(data);
    }

    setEmployeesToLocalStorage(data: employeesDOM[]): void {
        data = data || this.employees;
        localStorage.employees = JSON.stringify(data);
    }

    getDepartmentsFromLocalStorage(): departmensDOM[] | null {
        const dataDepartments: string = localStorage.departments;
        return JSON.parse(dataDepartments || null);
    }

    getEmployeesFromLocalStorage(): employeesDOM[] | null {
        const dataEmployees: string = localStorage.employees;
        return JSON.parse(dataEmployees || null);
    }

    selectAllEmployees(): void {
        const buttonRemoveChoice = document.createElement('DIV') as HTMLElement;

        const allEmployees = document.createElement('DIV') as HTMLElement;
        allEmployees.className = 'allEmployees';
        allEmployees.innerText = 'Show all employees';

        allEmployees.addEventListener('click', (event: MouseEvent): void => {
            event.preventDefault();

            allEmployees.appendChild(buttonRemoveChoice);
            const isActive: boolean = allEmployees.classList.toggle('active');

            //проверка на: выбран отдел или нет(и что делать)
            if (isActive) {
                buttonRemoveChoice.className = 'buttonRemoveChoice active';
                const blockWithAllEmployees = document.createElement('DIV') as HTMLElement;
                blockWithAllEmployees.className = 'blockEmployees';
                const arrayEmployees: employeesDOM[] = this.getEmployeesFromLocalStorage();
                const employees = arrayEmployees.map(item => creating.createCard(item));
                blockWithAllEmployees.append(...employees);
                this.main.appendChild(blockWithAllEmployees);
            } else {
                this.main.querySelector('.blockEmployees').remove();
                buttonRemoveChoice.className = 'buttonRemoveChoice';
            }
        })

        this.menu.appendChild(allEmployees);
    }

    createNewDepartment(): void {
        const newDepartment = document.createElement('DIV') as HTMLElement;
        newDepartment.className = 'newDepartment';
        newDepartment.innerText = 'Create new Department';

        newDepartment.onclick = () => new ModalDepartment().createModal();

        this.menu.appendChild(newDepartment);
    }

    createNewEmployee(): void {
        const newEmployee = document.createElement('DIV') as HTMLElement;
        newEmployee.className = 'newEmployee';
        newEmployee.innerText = 'Create new Employee';

        newEmployee.onclick = () => new ModalEmployee().createModal();

        this.menu.appendChild(newEmployee);
    }

    createSelectMenu(): void {
        //создание пункта в бургер меню
        const titleListDepartmens = document.createElement('DIV') as HTMLElement;
        titleListDepartmens.className = 'departmens';
        titleListDepartmens.innerHTML = '<span>Departmens</span>';

        //создание галочки
        const dropdownMenuButton = document.createElement('DIV') as HTMLElement;
        dropdownMenuButton.className = 'dropdownMenuButton';
        titleListDepartmens.appendChild(dropdownMenuButton);

        //создание блока с департаментами
        const blockChoice = document.createElement('UL');
        blockChoice.className = 'blockChoice';

        //обработка клика - выбора департамента
        blockChoice.onclick = ({ target }): void => {
            const blockSelectedDepartment = document.createElement('DIV') as HTMLElement;
            const targetElement = target as HTMLLIElement;
            const elementDOM = document.querySelector(`.${targetElement.className}`)
            const removeButton = elementDOM.querySelector('.buttonRemoveChoice') as HTMLElement;
            const isActive = elementDOM.classList.toggle('active');

            //проверка на: выбран отдел или нет(и что делать)
            if (!isActive) {
                removeButton.className = 'buttonRemoveChoice';
                document.getElementById(targetElement.innerText).remove();
            } else {
                removeButton.className = 'buttonRemoveChoice active';
                blockSelectedDepartment.className = (`container`);
                const id = document.createAttribute('id');
                id.value = targetElement.innerText;
                blockSelectedDepartment.setAttributeNode(id);
                this.main.appendChild(blockSelectedDepartment);
                creating.selectedCards(targetElement.innerText);
            }
        }

        const blockDepartments = document.createElement('DIV');
        blockDepartments.className = 'blockDepartments';

        //отработка событий при открытии/скрытии списка отделов
        titleListDepartmens.onclick = (): void => {
            const isActive = blockChoice.classList.toggle('active');
            if (isActive) {
                dropdownMenuButton.className = 'dropdownMenuButton active';
                const arrayDepartments = this.getDepartmentsFromLocalStorage();

                //формируем список отделов
                arrayDepartments.forEach(item => {
                    const menuItems = document.createElement('LI') as HTMLLIElement;
                    menuItems.className = item.name;
                    menuItems.innerText = item.name;

                    const buttonRemoveChoice = document.createElement('DIV') as HTMLElement;
                    buttonRemoveChoice.className = 'buttonRemoveChoice';

                    menuItems.appendChild(buttonRemoveChoice);
                    blockChoice.appendChild(menuItems);

                    return blockChoice;
                })
            } else {
                dropdownMenuButton.className = 'dropdownMenuButton';
                blockChoice.innerHTML = '';
            }
        }
        blockDepartments.append(titleListDepartmens, blockChoice);
        this.menu.append(blockDepartments);
    }

    deleteEmployee(id: string): void {
        const employees = this.getEmployeesFromLocalStorage();
        const updatedEmployees = employees.map(item => {

            if (item.id === Number(id)) {
                item.fired = true;
            }
            return item;
        })

        this.setEmployeesToLocalStorage(updatedEmployees);
    }

    selectAllDepartment(): void {
        const allDepartmens = document.createElement('DIV') as HTMLElement;
        const buttonRemoveChoice = document.createElement('DIV') as HTMLElement;

        allDepartmens.className = 'allDepartmens';
        allDepartmens.innerText = 'Show all Departmens';

        allDepartmens.addEventListener('click', (event) => {
            event.preventDefault();

            allDepartmens.appendChild(buttonRemoveChoice);

            const targetElement = event.target as HTMLElement;
            const elementDOM = document.querySelector(`.${targetElement.className}`)

            const isActive = elementDOM.classList.toggle('active');

            if (isActive) {
                buttonRemoveChoice.className = 'buttonRemoveChoice active';
                const blockWithAllDepartmens = document.createElement('DIV') as HTMLElement;
                blockWithAllDepartmens.className = 'blockDepartmens';
                const arrayDepartmens = this.getDepartmentsFromLocalStorage();
                arrayDepartmens.filter(item => {
                    // debugger
                    if (!(item.number === null)) {
                        const card = creating.createCardDepartment(item);
                        blockWithAllDepartmens.appendChild(card);
                        return card;
                    }
                });

                this.main.appendChild(blockWithAllDepartmens);
            } else {
                this.main.querySelector('.blockDepartmens').remove();
                buttonRemoveChoice.className = 'buttonRemoveChoice';
            }
        })
        this.menu.appendChild(allDepartmens);
    }

    removeDepartment(department: string): void {
        const departments: departmensDOM[] = this.getDepartmentsFromLocalStorage();
        const employeesDepartment: employeesDOM[] = this.getEmployeesFromLocalStorage();
        const updateDepartmens = departments.map(item => {
            const updatedEmployees = employeesDepartment.map(data => {
                if (item.name === department && data.department === department) {
                    item.number = null;
                    data.fired = true;
                }
                return data;
            })
            this.setEmployeesToLocalStorage(updatedEmployees);
            return item;

        })
        this.setDepartmentToLocalStorage(updateDepartmens);
    }

    editEmployee(id: string) {
        const employee: employeesDOM = this.getEmployeesFromLocalStorage().find(item => item.id === Number(id));
        new ModalEmployee().createModal(employee);
    }

    editDepartment(name: string) {
        const department: departmensDOM = this.getDepartmentsFromLocalStorage().find(item => item.name === name);
        new ModalDepartment().createModal(department);
    }

}

const menu = new Menu();

class Card {
    departments: departmensDOM[];
    employees: employeesDOM[];
    constructor() {
        this.departments = menu.getDepartmentsFromLocalStorage();
        this.employees = menu.getEmployeesFromLocalStorage();
    }

    createCard(data: employeesDOM): HTMLElement {
        const card = document.createElement('DIV') as HTMLElement;
        card.className = 'card';

        const titleCard = document.createElement('SPAN') as HTMLElement;
        titleCard.innerText = data.department;
        const ul = document.createElement('UL') as HTMLUListElement;
        ul.innerHTML = `
                        <li>${data.name} ${data.surname}</li>
                        <li>Salary: ${data.salary}</li>
                        <li>Fired: ${data.fired}</li>
                        <li>Post: ${data.post}</li>
                        `

        //блок с кнопками удаления и редактирования
        const blockButton = document.createElement('DIV') as HTMLElement;
        blockButton.className = 'blockButton';

        const deleteEmployee = document.createElement('BUTTON') as HTMLButtonElement;
        deleteEmployee.name = String(data.id);
        deleteEmployee.className = 'deleteEmployee';
        deleteEmployee.innerText = 'Delete';

        deleteEmployee.addEventListener('click', (event) => {
            event.preventDefault();
            menu.deleteEmployee(deleteEmployee.name);
        });

        const editEmployee = document.createElement('BUTTON') as HTMLButtonElement;
        editEmployee.name = String(data.id);
        editEmployee.className = 'editEmploee';
        editEmployee.innerText = 'Edit';

        editEmployee.addEventListener('click', (event) => {
            event.preventDefault();
            menu.editEmployee(editEmployee.name);
        });

        blockButton.append(deleteEmployee, editEmployee);
        card.append(titleCard, ul, blockButton);

        return card;
    }

    createCardDepartment(data: departmensDOM): HTMLElement {
        const card = document.createElement('DIV') as HTMLElement;
        card.className = 'card';

        const titleCard = document.createElement('SPAN') as HTMLSpanElement;
        titleCard.innerText = data.name;

        //блок с кнопками удаления и редактирования
        const blockButton = document.createElement('DIV') as HTMLElement;
        blockButton.className = 'blockButton';

        const deleteDepartment = document.createElement('BUTTON') as HTMLButtonElement;
        deleteDepartment.name = data.name;
        deleteDepartment.className = 'deleteDepartment';
        deleteDepartment.innerText = 'Delete';

        deleteDepartment.addEventListener('click', (event) => {
            event.preventDefault();
            menu.removeDepartment(deleteDepartment.name);
        });

        const editDepartment = document.createElement('BUTTON') as HTMLButtonElement;
        editDepartment.name = data.name;
        editDepartment.className = 'editDepartment';
        editDepartment.innerText = 'Edit';

        editDepartment.addEventListener('click', (event) => {
            event.preventDefault();
            menu.editDepartment(editDepartment.name);
        });

        blockButton.append(deleteDepartment, editDepartment);
        card.append(titleCard, blockButton);

        return card;
    }

    selectedCards(data: string, arrayEmployees?: employeesDOM[]): void {
        // debugger
        arrayEmployees = arrayEmployees || this.employees;

        const blockSelectedDepartment = document.getElementById(`${data}`);
        arrayEmployees.filter(item => {
            // debugger
            if (item.department === data && !item.fired) {
                const card = this.createCard(item);
                blockSelectedDepartment.appendChild(card);
                return card;
            }
        })
    }

}

const creating = new Card();

class ModalDepartment {
    modal: HTMLElement;
    modalContainer: HTMLElement;
    constructor() {
        this.modal = document.querySelector('.modalAddDepartment') as HTMLElement;
        this.modalContainer = document.querySelector('.containerAddDepartment') as HTMLElement;
        this.createModal();
    }
    createModal(department?: departmensDOM): void {

        this.modalContainer.innerHTML = '';
        department = department || null;

        this.modal.classList.add('active');

        const form = document.createElement('FORM') as HTMLFormElement;
        form.className = 'addDepartment';

        const spanTitle = document.createElement('SPAN') as HTMLSpanElement;
        spanTitle.innerText = 'Title department:';

        const spanNumber = document.createElement('SAPN') as HTMLSpanElement;
        spanNumber.innerText = 'Number department:';

        const inputNumber = document.createElement('INPUT') as HTMLInputElement;
        inputNumber.type = "number";
        inputNumber.value = String(department.number) || '';

        const inputTitle = document.createElement('INPUT') as HTMLInputElement;
        inputTitle.type = "text";
        inputTitle.value = department.name || '';

        form.append(spanTitle, inputTitle, spanNumber, inputNumber);
        this.modalContainer.appendChild(form);

        const dataInputNumber = this.modalContainer.querySelector('.addDepartment > :nth-child(2)') as HTMLInputElement;
        const dataInputTitle = this.modalContainer.querySelector('.addDepartment > input:nth-child(4)') as HTMLInputElement;

        const saveDepartment = document.createElement('BUTTON') as HTMLButtonElement;
        saveDepartment.innerText = 'Save';

        const cancel = document.createElement('BUTTON') as HTMLButtonElement;
        cancel.innerText = 'Cancel';
        this.modalContainer.append(saveDepartment, cancel);

        saveDepartment.addEventListener('click', (event) => {
            event.preventDefault();
            const arrayDepartments = menu.getDepartmentsFromLocalStorage();

            //валидация формы отделов
            if (dataInputNumber.value !== undefined || dataInputTitle.value !== undefined) {
                const newDepartment = {
                    number: Number(dataInputNumber.value),
                    name: dataInputTitle.value,
                };
                arrayDepartments.push(newDepartment);
                menu.setDepartmentToLocalStorage(arrayDepartments);
                this.modal.classList.remove('active');
            }
            throw new Error('Error! Data is not filled');
        })

        cancel.onclick = () => this.modal.classList.remove('active');

        this.modal.onclick = ({ target }) => {
            if (this.modal !== target) return;
            this.modal.classList.remove('active');
        }
    }
}

class ModalEmployee {
    modal: HTMLElement;
    modalContainer: HTMLElement;
    constructor() {
        this.modal = document.querySelector('.modalAddEmployee') as HTMLElement;
        this.modalContainer = document.querySelector('.containerAddEmployee') as HTMLElement;
    }

    createModal(employee?: employeesDOM): void {
        // debugger
        this.modalContainer.innerHTML = '';//зачищаем модалку, перед каждым входом
        employee = employee || null;

        this.modal.classList.add('active');

        const form = document.createElement('FORM') as HTMLFormElement;
        form.className = 'addEmployee';

        const spanId = document.createElement('SPAN') as HTMLSpanElement;
        spanId.innerText = 'Id employee:';
        const inputId = document.createElement('INPUT') as HTMLInputElement;
        inputId.type = 'number';
        inputId.value = String(employee.id) || '';

        const spanDepartment = document.createElement('SPAN') as HTMLSpanElement;
        spanDepartment.innerText = 'Department:';
        const inputDepartment = document.createElement('INPUT') as HTMLInputElement;
        inputDepartment.type = 'text';
        inputDepartment.value = employee.department || '';

        const spanName = document.createElement('SPAN') as HTMLSpanElement;
        spanName.innerText = 'Name:';
        const inputName = document.createElement('INPUT') as HTMLInputElement;
        inputName.type = 'text';
        inputName.value = employee.name || '';

        const spanSurname = document.createElement('SPAN') as HTMLSpanElement;
        spanSurname.innerText = 'Surname:';
        const inputSurname = document.createElement('INPUT') as HTMLInputElement;
        inputSurname.type = 'text';
        inputSurname.value = employee.surname || '';

        const spanSalary = document.createElement('SPAN') as HTMLSpanElement;
        spanSalary.innerText = 'Salary:';
        const inputSalary = document.createElement('INPUT') as HTMLInputElement;
        inputSalary.type = 'number';
        inputSalary.value = String(employee.salary) || '';

        const spanPost = document.createElement('SPAN') as HTMLSpanElement;
        spanPost.innerText = 'Post:';
        const inputPost = document.createElement('INPUT') as HTMLInputElement;
        inputPost.type = 'text';
        inputPost.value = employee.post || '';

        form.append(
            spanId,
            inputId,
            spanDepartment,
            inputDepartment,
            spanName,
            inputName,
            spanSurname,
            inputSurname,
            spanSalary,
            inputSalary,
            spanPost,
            inputPost
        );

        this.modalContainer.append(form);

        const saveEmployee = document.createElement('BUTTON') as HTMLButtonElement;
        saveEmployee.innerText = 'Save';

        const cancel = document.createElement('BUTTON') as HTMLButtonElement;
        cancel.innerText = 'Cancel';

        this.modalContainer.append(saveEmployee, cancel);

        saveEmployee.addEventListener('click', (event) => {
            event.preventDefault();

            let arrayEmployees = menu.getEmployeesFromLocalStorage();
            if (
                inputId.value !== undefined ||
                inputDepartment.value !== undefined ||
                inputName.value !== undefined ||
                inputSurname.value !== undefined ||
                inputSalary.value !== undefined ||
                inputPost.value !== undefined) {

                const newEmployee = {
                    id: Number(inputId.value),
                    department: inputDepartment.value,
                    name: inputName.value,
                    surname: inputSurname.value,
                    salary: Number(inputSalary.value),
                    fired: false,
                    post: inputPost.value,
                };

                if (employee !== null) {
                    arrayEmployees = arrayEmployees.map(item => {
                        console.log('newEmployee.id', newEmployee.id)
                        if (item.id === Number(newEmployee.id)) {
                            item.department = newEmployee.department;
                            item.name = newEmployee.name;
                            item.surname = newEmployee.surname;
                            item.salary = Number(newEmployee.salary);
                            item.post = newEmployee.post;
                            return item;
                        }
                        return item;
                    })
                    menu.setEmployeesToLocalStorage(arrayEmployees);
                } else {
                    arrayEmployees.push(newEmployee);
                    menu.setEmployeesToLocalStorage(arrayEmployees);
                }
                this.modal.classList.remove('active');
            }
            throw new Error('Error! Data is not filled');
        });

        cancel.onclick = () => this.modal.classList.remove('active');

        this.modal.onclick = ({ target }) => {
            if (this.modal !== target) return;
            this.modal.classList.remove('active');
        }
    }
}