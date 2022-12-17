import bcrypt from 'bcrypt';

const salt = bcrypt.genSaltSync(10);

export const encryptPassword = (password: string) => {
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

export const comparePassword = (password: string, hash: string) => {
  const isValidPassword = bcrypt.compareSync(password, hash);
  return isValidPassword;
};
