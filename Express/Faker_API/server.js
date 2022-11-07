import { faker } from '@faker-js/faker';

const express = require("express");
const app = express();
const port = 8000;

const user = [
    { password: faker.internet.password(), email: faker.internet.email(), phoneNumber: faker.phone.phoneNumber(), lastName: faker.name.firstName(), firstName: faker.name.lastName, _id: faker._id._id()}
]

const company = [
    { _id: faker.company._id(), name: faker.company.name(), address: {street: faker.company.street(), city: faker.company.city(), state: faker.company.state(), zipCode: faker.company.state(), country: faker.company.country()}}
]

app.get('/api/users/new', (req,res) => {
    res.json (user);
});

app.get('/api/companies/new', (req,res) => {
    res.json (company);
});

app.get('/api/user/company', (req,res) => {
    res.json (user, company);
});

app.listen(port, () => {
    console.log(`Listening on port ${port} for request`)
})