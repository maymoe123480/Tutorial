import { NextResponse } from 'next/server';
import * as yup from 'yup';

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
const schema = yup.object().shape({
    title: yup.string().required("Title is required>"),
    author: yup.string().required("Author is required>"),
    edition: yup.string().required("edition is required>"),

    published_year: yup.string().required("Published_Year is required>"),
});


export async function POST(req) {
    try {
        const body = await req.json();//get requested body data from client
        await schema.validate(body, { abortEarly: false });
        // console.log(body);
        return NextResponse.json({ message: "Book is successfully created.", bodyData: body, });

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