import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; 
const client = new MongoClient(uri);

export async function POST(request) {
  try {
    const body = await request.json();
    await client.connect();
    const db = client.db("portfolio-db");
    const collection = db.collection("portfolio-collection");
    await collection.insertOne(body);
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await client.close();
  }
}
