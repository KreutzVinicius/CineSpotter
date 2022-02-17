import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({
            message: "token missing",
        });
    }


    const [, token] = authHeader.split(" ")
    try {
        const { sub } = verify(token, "8f84ff3b2d2442da8a4e4fd0f770dcb2") as IPayload;

        request.idClient = sub;

        return next();
    } catch (err) {
        return response.status(401).json({
            message: "Invalid token!",
        });
    }
}