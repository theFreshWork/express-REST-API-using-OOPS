import { Express } from 'express';
import userRoutes from './user.routes'

function RegisterRoutes(appInstance: Express) {

  appInstance.use("/api/v1/users", userRoutes);
}

export default RegisterRoutes;


