import { NextResponse } from 'next/server';
import * as yup from 'yup';
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
//get student
export async function GET() {
    return NextResponse.json(StudentData);
}
const schema = yup.object().shape({
    name: yup.string().required("Name is required>"),
    fatherName: yup.string().required("FatherName is required>"),
    address: yup.string().required("Address is required>"),
    age: yup.string().required("Age is required>"),
    major: yup.string().required("Major is required>"),


});

//create student API

export async function POST(req) {
    try {
        const body = await req.json();//get requested body data from client
        await schema.validate(body, { abortEarly: false });
        // console.log(body);
        return NextResponse.json({ message: "Student is successfully created.", bodyData: body, });

    } catch (error) {
        if (error.name === "ValidationError") {
            return NextResponse.json(
                {
                    message: "Validation failed",
                    errors: error.inner.map((e) => ({
                        path: e.path,
                        message: e.message,
                    }
                    )),


                },

                { status: 400 });
        }

        return NextResponse.json({ message: "Unexpected Error", error: error.message, },
            {
                status: 500,

            });

    }
}
