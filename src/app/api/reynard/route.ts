import { NextResponse } from "next/server";
import sqlite3 from "sqlite3";
// Create a new SQLite database if it doesn't exist
const db = new sqlite3.Database("database.db");

export async function POST(req: Request) {
    const json = await req.json();
    const name = json.name;

    console.log(name);


    // // Perform operations on the database
    // db.serialize(() => {
    //     // Your database operations here
    //     db.run("CREATE TABLE IF NOT EXISTS users (name TEXT)");
    //     db.run("INSERT INTO users (json.name) VALUES (?)", name);


    // });

    return NextResponse.json(json);
}