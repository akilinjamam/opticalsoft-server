const tryCatchAsync = require("../../tryCatchAsync/tryCatchAsync")
const { createAccountService, getAccountService, getSalesForAccountService, updateAccountService, deleteAccountService, getAccountProfitExpensesService } = require("./accounts.service")

const createAccountsController = tryCatchAsync(
    async (req, res) => {
        const result = await createAccountService(req.body)
        res.status(201).json({
            status: result.status,
            success: true,
            result: result.result
        })
    }
)
const getAccountsController = tryCatchAsync(
    async (req, res) => {

        const { year, month } = req.query

        const result = await getAccountService(year, month)
        res.status(201).json({
            status: result.status,
            success: true,
            result: result.result
        })
    }
)
const getAccountProfitExpensesController = tryCatchAsync(
    async (req, res) => {

        const { year, month } = req.query

        const result = await getAccountProfitExpensesService(year, month)
        res.status(201).json({
            status: result.status,
            success: true,
            result: result.result
        })
    }
)


const getSalesForAccountController = tryCatchAsync(
    async (req, res) => {

        const { date } = req.query

        const result = await getSalesForAccountService(date)
        res.status(201).json({
            status: result.status,
            success: true,
            result: result.result
        })
    }
)


const updateAccountController = tryCatchAsync(
    async (req, res) => {

        const { id } = req.params;

        const result = await updateAccountService(id, req.body)
        res.status(201).json({
            status: result.status,
            success: true,
            result: result.result
        })
    }
)

const deleteAccountController = tryCatchAsync(
    async (req, res) => {
        const result = await deleteAccountService(req.body)
        res.status(201).json({
            status: result.status,
            success: true,
            result: result.result
        })
    }
)

module.exports = {
    createAccountsController,
    getAccountsController,
    getAccountProfitExpensesController,
    getSalesForAccountController,
    updateAccountController,
    deleteAccountController
}