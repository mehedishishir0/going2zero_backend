const { adminMail } = require("../config/index.js");
const ContactUs = require("../models/ContactUsModel.js");
const NewsLetter = require("../models/NewsLetter.js");
const createContactEmailTemplate = require("../utils/contactMessageTemple.js");
const sendEmail = require("../utils/sendEmail.js");


// @desc:  send message using contact us form
// @route: POST /api/v1/contact

  const sendContactMessage = async (req, res) => {
    try {

      const { name, email, phone:phone_number, message, subject } = req.body;

      const newContact = await ContactUs.create({
        name,
        email,
        phone_number,
        message,
        subject,
      });


if (newContact) {


 const htmlMessage = createContactEmailTemplate({name, email, phone_number, subject, message});
 
          await sendEmail({
            to: adminMail,
            subject: subject,
            html: htmlMessage,
          });

}


      return res.status(200).json({
        statusCode: 200,
        message: "message sent successfully",
        data: newContact,
      });
    } catch (error) {
      return res.status(500).json({
        statusCode: 500,
        message: "internal server error",
        data: error.message,
      });
    }
  };
      

// @desc:  get all contact
// @route: GET /api/v1/contact
const getAllContacts = async (req, res) => {
  try {
    const contacts = await ContactUs.find({});
    return res.status(200).json({
      statusCode: 200,
      message: "all contacts fetched successfully",
      data: contacts,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      message: "internal server error",
      data: error.message,
    });
  }
};

// @desc:  get a single contact
// @route: GET /api/v1/contact/:id
const getContactById = async (req, res) => {
  try {
    const contact = await ContactUs.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({
        statusCode: 404,
        message: "contact not found",
        data: null,
      });
    }

    return res.status(200).json({
      statusCode: 200,
      message: "contact fetched successfully",
      data: contact,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      message: "internal server error",
      data: error.message,
    });
  }
};

// @desc:  delete contact form the db
// @route: DELETE /api/v1/contact/:id
const deleteContact = async (req, res) => {
  try {
    const deletedContact = await ContactUs.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({
        statusCode: 404,
        message: "contact not found",
        data: null,
      });
    }

    return res.status(200).json({
      statusCode: 200,
      message: "contact deleted successfully",
      data: deletedContact,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      message: "internal server error",
      data: error.message,
    });
  }
};

module.exports = {
  sendContactMessage,
  getAllContacts,
  getContactById,
  deleteContact,
};

