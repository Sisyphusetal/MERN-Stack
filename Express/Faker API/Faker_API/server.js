const express = require('express');
const {faker} = require('@faker-js/faker')
const app = express();
const port = 8000;


app.use( express.json() );
app.use( express.urlencoded({ extended:true }) );


const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.string.uuid()
    }
    return newUser;
};


const createCompany = () => {
    const newCompany = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: [
            faker.location.streetAddress(), 
            faker.location.city(),
            faker.location.state(), 
            faker.location.zipCode(), 
            faker.location.country()
        ]
    }
    return newCompany;
};


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/users/new', (req, res) => {
    const user = createUser();
    res.json(user);
})

app.get('/api/companies/new', (req, res) => {
    const company = createCompany();
    res.json(company);
});

app.get('/api/user/company', (req, res) => {
    const user = createUser();
    const company = createCompany();
    res.json({user, company});
});






app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
