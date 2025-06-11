import * as yup from "yup";
export const schema = yup.object({
  name: yup.string().required("name is required"),
  address: yup.string().required("address is required"),
  email: yup.string().email("Invalid email").required("email is required"),
  phone: yup.number().positive().integer().required("phone is required"),
  city: yup.string().required("city is required"),
  township: yup.string().required("township is required"),

});