import User from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

  const match = await argon2.verify(user.password, req.body.password);
  if (!match) return res.status(400).json({ msg: "Wrong Password" });

  req.session.userId = user.uuid;

  const { uuid, name, email, role } = user;
  res.status(200).json({ uuid, name, email, role });
};

export const Me = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
  }

  const user = await User.findOne({ uuid: req.session.userId });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

  const { uuid, name, email, role } = user;
  res.status(200).json({ uuid, name, email, role });
};

export const logOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "Tidak dapat logout" });
    res.status(200).json({ msg: "Anda telah logout" });
  });
};
