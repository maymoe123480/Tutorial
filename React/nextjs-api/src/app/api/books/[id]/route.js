import { NextResponse } from 'next/server';
import * as yup from 'yup';


const schema = yup.object().shape({
    title: yup.string().required("title is required>"),
    author: yup.string().required("author is required>"),
    published_year: yup.string().required("published_year is required>"),
    edition: yup.string().required("edition is required>"),


});
export async function PUT(req, { params }) {
   try {
           //const studentId = params.id;
           const body = await req.json();
           await schema.validate(body, { abortEarly: false });
   
           return NextResponse.json({
               message: "Book is successfully updated.",
               bookId:body.id,
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


export async function DELETE(req, { params }) {
    const bookId = params.id;

    return NextResponse.json({
        message: "Book is successfully deleted.",
        bookId,
    });

}

export async function GET(req, { params }) {
    const bookId = params.id; //get URL paramss field
    const book = {

        id: 1,
        title: "Clean Code",
        author: "Robert C. Martin",
        edition: "Second Edition",
        published_year: 2008
    };

    return NextResponse.json(book);

}