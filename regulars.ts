//#1 Написать регулярное выражение проверки номера телефона по формату +сс(mmm)xxx-xx-xx.
//Где cc - код страны, mmm - код мобильного оператора, x - номер телефона


const validatePhone = (data: string): number => {

    let regularPattern: RegExp = new RegExp(/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/);

    return data.search(regularPattern);
}


//#2 Написать регулярное выражение проверки на email

const validateEmail = (data: string): number => {

    let regularPattern: RegExp = new RegExp(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+\.*[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-.]+\.([a-zA-Z0-9]){1,3}$/);

    return data.search(regularPattern);
}


//#3 Написать регулярное выражение проверку на сайт: http://test.dev

const validateSite = (data: string): number => {

    let regularPattern: RegExp = new RegExp(/^((http\:\/\/)?|(https\:\/\/))?([a-zA-Z0-9-_.])+([a-zA-Z0-9-_])+\.[a-zA-Z]{2,6}$/);

    return data.search(regularPattern);
}


//#4 Написать регулярное выражение проверки пароля, который должен быть минимум 6 символов, максимум 25, 
//состоять из латинских символов и цифр, может содержать в себе знак подчеркивания

function validatePassword(data: string): number {

    let regularPattern: RegExp = new RegExp(/^([a-zA-Z0-9_]){6,25}$/);

        return data.search(regularPattern);
}


//#5 Проверить строку на валидность ipv4 адреса 

function validateIPV4(data: string): number {

    let regularPattern: RegExp = new RegExp(/^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])$/);

    return data.search(regularPattern);
}