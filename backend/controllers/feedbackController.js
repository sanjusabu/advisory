const DetailModel = require("../models/feedback");
const AdminModel = require("../models/admin");
const HttpError = require("../models/http-error");

const details = (req, res) => {
  console.log(req.body);
  const { name, email, password, mobile, subject, message } = req.body;
  const saveobj = new DetailModel({
    name,
    email,
    password,
    mobile,
    subject,
    message,
  });
  saveobj.save(saveobj);
  console.log(saveobj);
  res.json({ user: saveobj.toObject() });
};

const getusers = async (req, res, next) => {
  const user = await DetailModel.find({});
  res.json(user);
};

const adminlogin = async (req, res, next) => {
  // console.log(req.body);
  const { email, password } = req.body;
  const user = await AdminModel.find({ email, password });
  if (!user) {
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      401
    );

    return next(error);
  }
  res.json(user);
};

const deleteusers = async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  const us = await DetailModel.find({ email });
  // console.log(us);
  const delmod = await DetailModel.deleteOne({
    email: email,
  });
  console.log(delmod);
  res.json(delmod);
};

exports.deleteusers = deleteusers;
exports.adminlogin = adminlogin;
exports.getusers = getusers;
exports.details = details;
