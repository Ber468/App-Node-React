import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginController = async (req: Request, res: Response) => {
  const loginData = req.body;

  //Validação dos dados de login
  required(loginData.email, "Email");
  required(loginData.password, "Password");

  //Verificação se o usuário existe
  const user = await prismaClient.user.findUnique({
    where: {
      email: loginData.email,
    },
  });

  if (!user) {
    throw new Error("Email ou senha incorretos");
  }

  //Verificação se a senha está correta
  const passwordMatch = await bcrypt.compare(loginData.password, user.password);

  if (!passwordMatch) {
    throw new Error("Email ou senha incorretos");
  }

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET não definido");
  }

  //Gerando o token de autenticação
  const token = jwt.sign(
    {
      id: user.id,
      nome: user.nome,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  //Guardando o token no banco
  await prismaClient.token.create({
    data: {
      token,
      idUser: user.id,
    },
  });

  //Retornando o token
  return res.json({
    token,
  });
};

export { loginController };
