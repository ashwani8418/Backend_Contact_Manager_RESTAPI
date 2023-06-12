const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc Get all contacts
// @route GET/api/contacts
// @access public

const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json({
    contacts,
  });
});

// @desc create a contact
// @route POST/api/contacts
// @access public

const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);

  const { name, email, phone, cityName } = req.body;
  if (!name || !email || !phone || !cityName) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    cityName,
  });
  console.log(contact);
  res.status(200).json({ contact });
});

// @desc Get a contacts with id
// @route GET/api/contacts/id
// @access public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found😒");
  }
  res.status(200).json({
    contact,
  });
});

// @desc Update a contacts with id
// @route PUT/api/contacts/id
// @access public

const updateContact = asyncHandler(async (req, res) => {
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json({updatedContact});
});

// @desc Delete a contacts with id
// @route DELETE/api/contacts/id
// @access public

const deleteContact = asyncHandler(async (req, res) => {
  const deletedContact = Contact.find;
  res.status(200).json({
    message: `delete contact for id ${req.params.id}`,
  });
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
