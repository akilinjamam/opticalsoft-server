const passport = require('passport');
const { runValidator } = require('../../joi_validation');
const { payrollValidationSchema } = require('../../joi_validation/payrollSchema');
const { createPayrollController, getPayrollController, getSinglePayrollController, deletePayrollController, updatePayrollController } = require('./payroll.controller');


const payrollRouter = require('express').Router();


payrollRouter.post('/create-payroll', runValidator(payrollValidationSchema), createPayrollController);

payrollRouter.get('/', passport.authenticate('jwt', { session: false }), getPayrollController)
payrollRouter.post('/bulk-delete', deletePayrollController)
payrollRouter.get('/:id', passport.authenticate('jwt', { session: false }), getSinglePayrollController)
payrollRouter.patch('/:id', updatePayrollController)

module.exports = payrollRouter