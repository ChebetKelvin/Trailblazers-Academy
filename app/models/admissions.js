import { client } from "../.server/mongo";

let db = client.db("school");
let collections = db.collection("admissions");

export async function getStudent() {
  return await collections.find({}).toArray();
}

export async function addStudent(data) {
  let result = await collections.insertOne(data);
  return result;
}
