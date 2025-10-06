import { useRef, useState } from "react";
import { Form, redirect, useNavigation } from "react-router";
import {
  validateEmail,
  validateMessage,
  validatePhone,
  validateText,
} from "../.server/validation";
import { addStudent } from "../models/admissions";

export async function action({ request }) {
  const formData = await request.formData();

  const fullName = formData.get("fullName");
  const dob = formData.get("dob");
  const gender = formData.get("gender");
  const grade = formData.get("grade");
  const parentName = formData.get("parentName");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const message = formData.get("message");

  let feildErrors = {
    fullName: validateText(fullName),
    dob: validateText(dob),
    gender: validateText(gender),
    grade: validateText(grade),
    parentName: validateText(parentName),
    phone: validatePhone(phone),
    email: validateEmail(email),
    message: validateMessage(message),
  };

  if (Object.values(feildErrors).some(Boolean)) {
    return { feildErrors };
  }
  // Save to database (pseudo-code)
  let data = {
    fullName,
    dob,
    gender,
    grade,
    parentName,
    phone,
    email,
    message,
    date: new Date().toISOString(),
  };

  let result = await addStudent(data);
  if (!result.acknowledged) {
    return { error: "Failed to submit application. Please try again." };
  }

  return null;
}

export default function AdmissionPage({ actionData }) {
  let navigation = useNavigation();
  let isSubmitting = navigation.state === "submitting";

  let formRef = useRef();

  // Reset form on successful submission
  if (!isSubmitting && actionData == null && formRef.current) {
    formRef.current.reset();
  }
  // 📌 Fee mapping
  const fees = {
    "Creche 2": "13,000",
    "KG 1": "13,500",
    "KG 2": "13,500",
    "Grade 1": "14,000",
    "Grade 2": "14,000",
    "Grade 3": "14,500",
    "Grade 4": "14,500",
    "Grade 5": "15,000",
    "Grade 6": "15,000",
  };

  const [selectedClass, setSelectedClass] = useState("");

  return (
    <section className="py-20 bg-gradient-to-b from-[#e0f7ff] via-white to-[#f9fafb] text-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0097d7] mb-4">
            Admissions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join Meru Trailblazers Academy and be part of a community that
            values excellence, creativity, and growth.
          </p>
        </div>

        {/* Admission Requirements */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-[#0097d7] mb-6">
            Admission Requirements
          </h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Completed admission form.</li>
            <li>Copy of birth certificate.</li>
            <li>Two recent passport-sized photographs.</li>
            <li>Previous academic report (if applicable).</li>
          </ul>
        </div>

        {/* Admission Fee & Uniform */}
        <div className="bg-gradient-to-r from-[#0097d7]/10 to-[#00c4ff]/10 p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-[#0097d7] mb-6">
            Admission Fee & Uniform
          </h2>
          <p className="text-lg mb-4">
            An admission fee of <span className="font-semibold">KES 1,000</span>{" "}
            is required during registration.
          </p>
          <p className="text-lg mb-4">
            School uniforms are purchased directly by parents at the time of
            admission to ensure proper fitting and quality.
          </p>
          <p className="text-lg font-medium text-gray-700 mt-6">
            📞 For more info contact us on{" "}
            <a
              href="tel:0720206783"
              className="text-[#0097d7] font-semibold hover:underline"
            >
              0720206783
            </a>
            .
          </p>
        </div>

        {/* School Fees Section */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-[#0097d7] mb-6 text-center">
            School Fees Structure
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-[#0097d7] text-white">
                  <th className="py-4 px-6 text-left text-lg font-semibold">
                    📚 Class
                  </th>
                  <th className="py-4 px-6 text-left text-lg font-semibold">
                    💰 Fees (KES)
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-800 text-base">
                {Object.entries(fees).map(([cls, fee], index) => (
                  <tr
                    key={cls}
                    className={`${
                      index % 2 === 0 ? "bg-[#e6f9ff]" : "bg-[#fef6e4]"
                    } hover:bg-[#fb0269] transition`}
                  >
                    <td className="py-4 px-6 font-medium flex items-center gap-2">
                      🎈 {cls}
                    </td>
                    <td className="py-4 px-6 font-semibold text-[#0097d7]">
                      {fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-[#0097d7] mb-6 text-center">
            Online Application Form
          </h2>
          <Form method="post" ref={formRef} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Student Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Student Full Name"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0097d7] outline-none"
                />
                {actionData?.fieldErrors?.fullName && (
                  <span className="text-red-500 text-sm">
                    {actionData.fieldErrors.fullName}
                  </span>
                )}
              </div>

              {/* Date of Birth */}
              <div>
                <input
                  type="date"
                  name="dob"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0097d7] outline-none"
                />
                {actionData?.fieldErrors?.dob && (
                  <span className="text-red-500 text-sm">
                    {actionData.fieldErrors.dob}
                  </span>
                )}
              </div>

              {/* Gender */}
              <div>
                <select
                  name="gender"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0097d7] outline-none"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Boy</option>
                  <option value="Female">Girl</option>
                </select>
                {actionData?.fieldErrors?.gender && (
                  <span className="text-red-500 text-sm">
                    {actionData.fieldErrors.gender}
                  </span>
                )}
              </div>

              {/* Grade */}
              <div>
                <select
                  name="grade"
                  required
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0097d7] outline-none"
                >
                  <option value="">Select Class</option>
                  <optgroup label="Pre-Primary">
                    <option value="Creche 2">Creche 2</option>
                    <option value="KG 1">KG 1</option>
                    <option value="KG 2">KG 2</option>
                  </optgroup>
                  <optgroup label="Primary">
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6">Grade 6</option>
                  </optgroup>
                </select>
                {actionData?.fieldErrors?.grade && (
                  <span className="text-red-500 text-sm">
                    {actionData.fieldErrors.grade}
                  </span>
                )}
              </div>

              {/* Parent/Guardian Name */}
              <div>
                <input
                  type="text"
                  name="parentName"
                  placeholder="Parent/Guardian Name"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0097d7] outline-none"
                />
                {actionData?.fieldErrors?.parentName && (
                  <span className="text-red-500 text-sm">
                    {actionData.fieldErrors.parentName}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0097d7] outline-none"
                />
                {actionData?.fieldErrors?.phone && (
                  <span className="text-red-500 text-sm">
                    {actionData.fieldErrors.phone}
                  </span>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0097d7] outline-none"
                />
                {actionData?.fieldErrors?.email && (
                  <span className="text-red-500 text-sm">
                    {actionData.fieldErrors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Dynamic Fee Display */}
            {selectedClass && (
              <p className="text-lg text-gray-700 bg-[#0097d7]/5 p-3 rounded-lg">
                💰 Fees for{" "}
                <span className="font-semibold">{selectedClass}</span>:{" "}
                <span className="font-bold text-[#0097d7]">
                  KES {fees[selectedClass]}
                </span>
              </p>
            )}

            {/* Message */}
            <textarea
              name="message"
              placeholder="Additional Information (optional)"
              rows="4"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0097d7] outline-none"
            />

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-[#0097d7] text-white font-semibold rounded-lg shadow-md hover:bg-[#007bb5] transition"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}
