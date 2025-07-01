import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const runMigration = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");

    const db = mongoose.connection.db;

    // Cek collection yang sudah ada
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map((col) => col.name);

    // Buat 'users' jika belum ada
    if (!collectionNames.includes("users")) {
      await db.createCollection("users");
      console.log("✅ Collection 'users' dibuat (kosong)");
    } else {
      console.log("ℹ️ Collection 'users' sudah ada");
    }

    // Buat 'pariwisatas' jika belum ada
    if (!collectionNames.includes("pariwisatas")) {
      await db.createCollection("pariwisatas");
      console.log("✅ Collection 'pariwisatas' dibuat (kosong)");
    } else {
      console.log("ℹ️ Collection 'pariwisatas' sudah ada");
    }

    // ✅ Tambahkan untuk koleksi berita
    if (!collectionNames.includes("beritas")) {
      await db.createCollection("beritas");
      console.log("✅ Collection 'beritas' dibuat (kosong)");
    } else {
      console.log("ℹ️ Collection 'beritas' sudah ada");
    }

    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  } catch (error) {
    console.error("❌ Gagal menjalankan migrasi:", error.message);
    process.exit(1);
  }
};

runMigration();
