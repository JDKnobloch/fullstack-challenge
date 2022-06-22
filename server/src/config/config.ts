//load configs
export default {
  MongoURI: process.env.MONGODB_URI || 'mongodb://localhost/epsilon',
  Port: process.env.PORT ? Number.parseInt(process.env.PORT) : 5000,
};
