import { NextFunction, Request, Response } from "express";

export function isAuthenticated(req: Request, res: Response , next: NextFunction) {
  if (!req.isAuthenticated()) {
		return res.status(401).send({ error: "Not Authorized" });
  }
  
  next()
}