import { UserService } from "../modules/user/user.service";
import { IncomingMessage } from "http";

export interface Context {
  user: { id: number } | null;
}

interface ContextArgs {
  req: IncomingMessage;
}

export const context = ({ req }: ContextArgs): Context => {
  return {
    user: req ? UserService.getByToken(req.headers.authorization) : null,
  };
};
