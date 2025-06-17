import { NextResponse } from 'next/server';
const StudentData = [
    {
        id: 1,
        name: "Su Su",
        age: 16,
        address: "Hlaing",
        major: "Computer Science"
    },

    {
        id: 2,
        name: "May Moe",
        age: 18,
        address: "Hlaing",
        major: "Computer Science"
    },

    {
        id: 3,
        name: "Kaung Nyein",
        age: 36,
        address: "Hlaing",
        major: "Computer Science"
    },
]
export async function GET() {
    return NextResponse.json(StudentData);
}

export async function POST(req) {
    const body = await req.json();//get requested body data from client
    console.log(body);
    return NextResponse.json({ message: "Student is successfully created.", bodyData:body,});

}