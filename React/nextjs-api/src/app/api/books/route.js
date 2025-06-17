import { NextResponse } from 'next/server';
const Book = [
    {
        id: 1,
        title: "Clean Code",
        author: "Robert C. Martin",
        published_year: 2008,
    },

    {
        id: 2,
        title: "Clean",
        author: "Robert C",
        published_year: 2010,
    },
    {
        id: 3,
        title: "Code",
        author: "C. Martin",
        published_year: 2018,
    },
]
export async function GET() {
    return NextResponse.json(Book);
}

export async function POST(req) {
    const body = await req.json();//get requested body data from client
    console.log(body);
    return NextResponse.json({ message: "Book is successfully created.", bodyData: body,});

}