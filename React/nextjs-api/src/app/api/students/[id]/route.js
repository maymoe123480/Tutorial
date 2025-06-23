import { NextResponse } from 'next/server';
import * as yup from 'yup';


const schema = yup.object().shape({
    title: yup.string().required("Title is required>"),
    author: yup.string().required("Author is required>"),
    published_year: yup.string().required("Published_Year is required>"),
});

export async function PUT(req, { params }) {
    try {
        //const studentId = params.id;
        const body = await req.json();
        await schema.validate(body, { abortEarly: false });

        return NextResponse.json({
            message: "Student is successfully updated.",
            studentId,
            bodyData: body,
        });
}
    catch (error) {
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
//delete student API
export async function DELETE(req, { params }) {
    const studentId = params.id;

    return NextResponse.json({
        message: "Student is successfully deleted.",
        studentId,
    });

}
//get detail student API
export async function GET(req, { params }) {
    const studentId = params.id; //get URL paramss field
    const student = {
        id: studentId,
        name: "Su Su",
        age: 25,
        fatherName: "U Mg",
        address: "female",
        major: "Computer Science",
    };

    return NextResponse.json(student);

}