import { prisma } from "../database.js";

export const Mutation = {
  createUser: (parent, args) =>
    prisma.user.create({
      data: {
        email: args.email,
        fullName: args?.fullName,
      },
    }),
};
