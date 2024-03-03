import { prisma } from "../database.js";

export const Query = {
  user: (parent, args) => {
    return prisma.user.findFirst({
      where: { id: String(args.id) },
    });
  },
  users: (parent, args) => {
    return prisma.user.findMany({});
  },
};
