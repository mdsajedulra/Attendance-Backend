import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function server() {
  try {
    await mongoose.connect(config.database_url as string);
    
    const port = process.env.PORT || config.port || 5000;

    app.listen(Number(port), () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

server();