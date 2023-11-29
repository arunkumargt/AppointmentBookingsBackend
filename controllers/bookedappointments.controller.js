const bookedAppointmentModel = require('../models/bookedappointments.model');
const constants = require('../utils/constants');

let bookedappointmentController = {
    // Create a new user
    createBooked: async (req, res) => {
        try {
            const newUser = await bookedAppointmentModel.create(req.body);
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
    getAllBooked: async (req, res) => {
        try {
            const users = await bookedAppointmentModel.find();
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
    getBookedById: async (req, res) => {
        try {
            const user = await bookedAppointmentModel.findById(req.params.id);
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
    updateBookedById: async (req, res) => {
        try {
            // const updatedUser = await bookedAppointmentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            const updatedUser = await bookedAppointmentModel.findByIdAndUpdate(req.params.id, { $set: req.body });
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
    deleteBookedById: async (req, res) => {
        try {
            // await bookedAppointmentModel.findByIdAndRemove(req.params.id);
            const deletedUser = await bookedAppointmentModel.findOneAndRemove({ _id: req.params.id });
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
    changeBookedIsActiveById: async (req, res) => {
        try {
            // await bookedAppointmentModel.findByIdAndRemove(req.params.id);
            const isAliveUser = await bookedAppointmentModel.findByIdAndUpdate(req.params.id, { $set: req.body });
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

module.exports = bookedappointmentController;