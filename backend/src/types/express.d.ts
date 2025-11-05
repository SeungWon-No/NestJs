type JwtPayload = {
  sub: string;
  email?: string;
  name?: string;
  picture?: null;
  iat?: number;
};

declare global {
  namespace Express {
    interface User extends JwtPayload {}
    interface Request {
      user?: User;
    }
  }
}

export {};

