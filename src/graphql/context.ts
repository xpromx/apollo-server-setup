import { UserService } from "../modules/user/user.service";
import { IncomingMessage } from "http";

export interface Context {
  user: { id: number } | null;
}

export interface ContextArgs {
  req: IncomingMessage;
}

export const context = async ({ req }: ContextArgs): Promise<Context> => {
  return {
    user: req ? await UserService.getByToken(req.headers.authorization) : null,
  };
};
