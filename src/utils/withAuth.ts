export const withAuth = (cb: any) => {
  return async (root: any, args: any, context: any) => {
    if (!context.user) {
      throw new Error("You must be logged in to do that!");
    }
    return cb(root, args, context);
  };
};
