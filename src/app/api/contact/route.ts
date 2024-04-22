import dbConn from "@/app/lib/dbConnect";
import Contact from "@/app/models/contact"
import {NextResponse} from "next/server";

export async function POST(req: Request, res: Response) {
    try {

        const body = await req.json();
        await dbConn();

        await Contact.create(body);

        return NextResponse.json({
            message:"Message sent successfully!"
        }, {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}