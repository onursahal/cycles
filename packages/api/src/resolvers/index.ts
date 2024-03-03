import { prisma } from "../database.js";
import { dateTimeScalar } from "../utils/DateTime.scalar.js";
import { Mutation } from "./mutation.js";
import { Query } from "./query.js";

const User = {
  id: (parent) => parent.id,
  email: (parent) => parent.email || "",
  fullName: (parent) => parent?.fullName || "",
};

export const resolvers = {
  User,
  Query,
  Mutation,
};
