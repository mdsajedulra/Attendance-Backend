import mongoose from 'mongoose';
import app from './app';
import config from './app/config';


async function server() {
  console.log(config.database_url as string);
  try {
    await mongoose.connect(config.database_url as string);
    const port = Number(config.port);
    app.listen(port, "0.0.0.0", () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

server();