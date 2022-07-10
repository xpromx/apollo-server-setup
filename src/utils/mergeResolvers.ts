/* eslint-disable @typescript-eslint/no-explicit-any */
export const mergeResolvers = (resolvers: any[]) => {
  return resolvers.reduce((acc, resolver) => {
    Object.keys(resolver).forEach((key) => {
      if (acc[key]) {
        acc[key] = merge(acc[key], resolver[key]);
      } else {
        acc[key] = resolver[key];
      }
    });
    return acc;
  }, {});
};
function merge(arg0: any, arg1: any): any {
  if (Array.isArray(arg0)) {
    return arg0.concat(arg1);
  } else if (typeof arg0 === "object") {
    return { ...arg0, ...arg1 };
  } else {
    return arg1;
  }
}
