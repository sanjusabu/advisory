const DetailModel = require("../models/feedback");

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

exports.details = details;
