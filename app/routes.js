import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("news/:id", "routes/newsDetail.jsx"),
  route("about", "routes/aboutUs.jsx"),
  route("admissions", "routes/admission.jsx"),
  route("gallery", "routes/gallerySchool.jsx"),
  route("contact", "routes/contactSchool.jsx"),
];
