const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 5001;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const createTable = require('./db/setup');
const pool = require('./db/index');

const usersRouter = require('./routes/users');
const eventsRouter = require('./routes/event');
const registrationsRouter = require('./routes/registration');
const notificationsRouter = require('./routes/notifications');
const rolesRouter = require('./routes/roles');
const types_of_educationRouter = require('./routes/types_of_education');
const types_of_employmentRouter = require('./routes/types_of_employment');
const token_workingRouter = require('./routes/token_working');

app.use('/api', usersRouter);
app.use('/api', eventsRouter);
app.use('/api', registrationsRouter);
app.use('/api', notificationsRouter);
app.use('/api', rolesRouter);
app.use('/api', types_of_educationRouter);
app.use('/api', types_of_employmentRouter);
app.use('/api', token_workingRouter);


async function initializeApp() {
    try {
        await createTable(pool);

        app.listen(PORT, () => {
            console.log(`Server is running out on: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error initializing app: ', error.message);
    }
}

initializeApp();