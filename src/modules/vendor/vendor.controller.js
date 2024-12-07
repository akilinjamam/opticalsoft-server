const tryCatchAsync = require("../../tryCatchAsync/tryCatchAsync")
const { createVendorService, getLastVendorService, getVendorWithIdService, updateVendorService, deleteVendorService } = require("./vendor.service")

const createVendorController = tryCatchAsync(
    async (req, res) => {
        console.log('hello')
        const result = await createVendorService(req.body)
        res.status(201).json({
            status: result.status,
            success: true,
            result: result.result
        })
    }
)


const getLastVendorController = tryCatchAsync(
    async (req, res) => {
        const result = await getLastVendorService(req.params.id)
        res.status(201).json({
            status: result.status,
            success: true,
            result: result.result
        })
    }
)

const getVendorWithIdController = tryCatchAsync(
    async (req, res) => {
        const { supplierName, year, month } = req.query;
        const result = await getVendorWithIdService(supplierName, year, month)
        res.status(201).json({
            status: result.status,
            success: true,
            result: result.result
        })
    }
)

const updateVendorController = tryCatchAsync(
    async (req, res) => {
        const result = await updateVendorService(req.params.id, req.body)
        res.status(201).json({
            status: result.status,
            success: true,
            result: result.result
        })
    }
)

const deleteVendorController = tryCatchAsync(
    async (req, res) => {
        const result = await deleteVendorService(req.body)
        res.status(201).json({
            status: result.status,
            success: true,
            result: result.result
        })
    }
)


module.exports = {
    createVendorController,
    getLastVendorController,
    getVendorWithIdController,
    updateVendorController,
    deleteVendorController
}
