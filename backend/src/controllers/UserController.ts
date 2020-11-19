import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  {
    name: "Fabio",
    email: "naovoudizer",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: {
        name: "Fábio Mendes",
        email: "dfadfa",
      },
      message: {
        subject: "bem-vindo",
        body: "body",
      },
    });

    res.json({ message: "sucess" });
  },
};
