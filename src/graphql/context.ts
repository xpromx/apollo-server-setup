import { UserService } from "../modules/user/user.service";
import { User } from "./types";
import { IncomingMessage } from "http";

export interface Context {
  user: User | null;
}

interface ContextArgs {
  req: IncomingMessage;
}

export const context = ({ req }: ContextArgs): Context => {
  return {
    user: UserService.getByToken(req.headers.authorization),
  };
};
