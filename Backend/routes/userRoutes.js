const newUser = await UsersModel.create({
  username,
  firstname,
  lastname,
  email,
  password: await bcrypt.hash(password, salt),
});

res.send("User created");
