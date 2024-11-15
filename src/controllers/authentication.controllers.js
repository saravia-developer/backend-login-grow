import { AuthenticationServices } from "../services/authentication.services.js"

class AuthenticationControllers {
  authentication

  constructor() {
    this.authentication = new AuthenticationServices()
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const token = await this.authentication.login(username, password);
      res.json({ success: true, token: token}); 

    } catch (error) {
      res.status(400).json({ success: false, message: error.message })
    }
  }
}

export const authenticationControllers = new AuthenticationControllers();