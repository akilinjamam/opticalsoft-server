const Products = require("./products.model")


const createProductService = async (data) => {
    const result = await Products.insertMany(data);
    return {
        status: 201,
        result
    }
}
const getProductService = async (queryValue, from, to) => {
    // query
    const fields = ['productName', 'salesPrice', 'purchasePrice', 'category', 'quantity', 'date', 'barcode', 'material', 'frameType', 'size', 'shape', 'recorderEmail', 'recorderName', 'createdAt']

    if (queryValue) {
        const search = await Products.aggregate([
            {
                $match: {
                    $or: fields?.map((item) => {
                        return { [item]: { $regex: queryValue, $options: 'i' } }
                    }),
                },
            },
        ])
        return {
            status: 200,
            total: search?.length,
            result: search
        }
    }

    if (from && to) {
        const range = await Products.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: new Date(from),
                        $lte: new Date(to)
                    }
                }
            }
        ])

        return {
            status: 200,
            total: range?.length,
            result: range
        }
    }


    const result = await Products.find({})
    return {
        status: 200,
        total: result?.length,
        result
    }
}


const getSingleProductService = async (id) => {
    const result = await Products.find({ _id: id })
    return {
        status: 200,
        result
    }
}
const updateProductService = async (id, body) => {
    const result = await Products.updateOne({ _id: id }, { $set: body }, { runValidator: true })
    return {
        status: 200,
        result
    }
}

const deleteProductService = async (ids) => {
    const result = await Products.deleteMany({ _id: { $in: ids } });
    return {
        status: 200,
        result
    }
}

module.exports = {
    createProductService,
    getProductService,
    getSingleProductService,
    updateProductService,
    deleteProductService
}