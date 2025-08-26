import { PrismaClient } from "@prisma/client";
import { prisma } from "../db/dbConnection";
import { IRolesRepository, IRoles } from "../common/interfaces/roles.interface";
import { CustomError } from "../utils/error";
import { HTTP_STATUS } from "../constants/httpConstants";

class RolesRepository implements IRolesRepository {
  constructor(private _prisma: PrismaClient) {}

  async getDefaultRole(): Promise<IRoles> {
    try {
      const role = await this._prisma.roles.findFirst({
        where: { name: 'customer' },
      });

      if (!role) {
        throw new CustomError({
          message: 'No Default Role Found',
          status: HTTP_STATUS.NOT_FOUND
        });
      }
      return role;
    } catch (error: unknown) {
      throw error;
    }
  }
}

export default new RolesRepository(prisma);
