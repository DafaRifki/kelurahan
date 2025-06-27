import User from "../models/UserModel.js";
import argon2 from "argon2";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({}, "uuid name email role"); // select fields
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findOne(
      { uuid: req.params.id },
      "uuid name email role"
    );
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const createUser = async (req, res) => {
  const { name, email, password, confPassword, role } = req.body;
  if (password !== confPassword)
    return res
      .status(400)
      .json({ msg: "Password dan Confirm Password tidak cocok" });

  try {
    const hashPassword = await argon2.hash(password);
    const user = new User({ name, email, password: hashPassword, role });
    await user.save();
    res.status(201).json({ msg: "Register Berhasil" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ uuid: req.params.id });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

    const { name, email, password, confPassword, role } = req.body;
    let hashPassword = user.password;

    if (password && password !== "") {
      if (password !== confPassword)
        return res
          .status(400)
          .json({ msg: "Password dan Confirm Password tidak cocok" });
      hashPassword = await argon2.hash(password);
    }

    user.name = name;
    user.email = email;
    user.password = hashPassword;
    user.role = role;

    await user.save();
    res.status(200).json({ msg: "User Updated" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ uuid: req.params.id });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
    res.status(200).json({ msg: "User Deleted" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
