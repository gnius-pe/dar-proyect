const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://igor:rpdMbeGU16tHXAQC@dar-cluster.iqyckrq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Conexión exitosa a MongoDB Atlas!");
    return client;
  } catch (error) {
    console.error("Error al conectar a MongoDB Atlas:", error);
    throw error;
  }
}

module.exports = connectToMongoDB;
