import { db } from "@/app/database/server";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Use a promise-based approach to handle the async query
        const data = await new Promise((resolve, reject) => {
            db.query("SELECT * FROM sailors", (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });

        // Return the data in JSON format
        return NextResponse.json({ data });
    } catch (err) {
        // Handle any errors that occur during the query
        console.error(err);
        return NextResponse.json({ error: "Error fetching data" });
    }
}
