const userModel = require('../models/user.model');
const constants = require('../utils/constants');

let userController = {
    // Create a new user
    createUser: async (req, res) => {
        try {
            const newUser = await userModel.create(req.body);
            res.status(200).send({
                message: constants.dataAddedSuccessMsg,
                data: newUser
            });
            console.log(constants.newUserAddedMsg);
        } catch (error) {
            if (error.name === "ValidationError") {
                res.status(500).send({
                    error: constants.invalidParametersErrorMsg,
                    message: error.message
                });
            } else {
                res.status(500).send({
                    error: constants.somethingWentWrongMsg,
                    message: error
                });
            }
            console.log({ error });
        }
    },
    // Retrieve all users
    getAllUsers: async (req, res) => {
        try {
            const users = await userModel.find();
            res.status(200).send({
                message: constants.dataFetchedSuccessMsg,
                data: users
            })
            console.log(constants.userDataFetchedMsg);
        } catch (error) {
            res.status(500).send({
                message: constants.somethingWentWrongMsg,
                error: error
            });
            console.log({ error });
        }
    },
    // Retrieve specific user
    getUserById: async (req, res) => {
        try {
            const user = await userModel.findById(req.params.id);
            if (user) {
                res.status(200).send({
                    isFound: true,
                    message: constants.dataFetchedSuccessMsg,
                    data: user
                });
            } else {
                res.status(200).send({
                    isFound: false,
                    message: constants.userDetailsNotFoundMsg
                });
            }
            console.log(constants.userDataFetchedMsg);
        } catch (error) {
            res.status(500).send({
                message: constants.somethingWentWrongMsg,
                error: error
            });
            console.log({ error });
        }
    },
    // Update a user
    updateUserById: async (req, res) => {
        try {
            // const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            const updatedUser = await userModel.findByIdAndUpdate(req.params.id, { $set: req.body });
            res.status(200).send({
                message: constants.dataUpdatedSuccessMsg,
                data: updatedUser
            });
            console.log(constants.userUpdatedMsg);
        } catch (error) {
            if (error.name === "CastError") {
                res.status(500).send({
                    error: constants.invalidParametersErrorMsg,
                    message: error.message
                });
            } else {
                res.status(500).send({ message: constants.somethingWentWrongMsg, error: error });
            }
            console.log({ error });
        }
    },
    // Delete a user
    deleteUserById: async (req, res) => {
        try {
            // await userModel.findByIdAndRemove(req.params.id);
            const deletedUser = await userModel.findOneAndRemove({ _id: req.params.id });
            if (deletedUser) {
                res.status(200).send({
                    message: constants.dataDeletedSuccessMsg,
                    data: deletedUser
                });
                console.log(constants.userDeletedMsg);
            } else {
                res.status(200).send({
                    message: constants.noDataFound,
                    data: deletedUser
                });
                console.log(constants.noDataFound);
            }
        } catch (error) {
            res.status(500).send({ message: constants.somethingWentWrongMsg, error: error });
            console.log({ error });
        }
    },
    changeUserIsAliveById: async (req, res) => {
        try {
            // await userModel.findByIdAndRemove(req.params.id);
            const isAliveUser = await userModel.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (isAliveUser) {
                res.status(200).send({
                    message: constants.dataUpdatedSuccessMsg,
                    data: isAliveUser
                });
                console.log(constants.userUpdatedMsg);
            } else {
                res.status(200).send({
                    message: constants.noDataFound,
                    data: isAliveUser
                });
                console.log(constants.noDataFound);
            }
        } catch (error) {
            res.status(500).send({ message: constants.somethingWentWrongMsg, error: error });
            console.log({ error });
        }
    }
};

module.exports = userController;