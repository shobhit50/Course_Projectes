const express = require('express');
const port = 5000;
const db = require('./config/mongoose');
const passport = require('passport');
const passportJWT = require('./config/passport_jwt_strategy');
const reportsRoute = require('./routes/reports.js')
const patientRoute = require('./routes/patients.js')
const doctorRoute = require('./routes/doctors.js');
const Patient = require('./models/patient.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//redirecting routes
app.use('/report', reportsRoute);
app.use('/patient', patientRoute);
app.use('/doctor', doctorRoute);



app.listen(port, function (err) {
  if (err) { console.log('error'); return; }

  console.log(`server is running on ${port}`);
});
