import { app } from "./src/app.js";
import { env } from "./src/utils/env.js";

const PORT = env.port;

app.listen(PORT, () => {
  console.log(`Application ready in port ${PORT}`)
})