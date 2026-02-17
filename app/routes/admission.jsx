import { useRef, useState } from "react";
import { useNavigation } from "react-router";
import {
  FaUserGraduate,
  FaCalendarAlt,
  FaVenusMars,
  FaBookOpen,
  FaUserFriends,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
  FaFileAlt,
  FaReceipt,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

export function meta() {
  return [
    // === PRIMARY META TAGS ===
    {
      title:
        "Admissions 2026 | Meru Trailblazers Academy - Fees & Requirements", // 59 chars (optimal)
    },
    {
      name: "description",
      content:
        "Apply to Meru Trailblazers Academy. Nursery: KES 13,000-13,500/term. Primary: KES 14,000-15,000/term. Admission KES 1,000. Call 0720 206 783.", // 157 chars
    },
    {
      name: "keywords",
      content:
        "Meru school admissions, school fees Meru, nursery fees Meru, primary fees Meru, CBC school fees Meru",
    },

    // === CRITICAL SEO TAGS ===
    {
      name: "robots",
      content: "index, follow",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://merutrailblazers.com/admissions",
    },

    // === OPEN GRAPH TAGS ===
    {
      property: "og:title",
      content:
        "Admissions 2026 - Meru Trailblazers Academy | Fees & Requirements",
    },
    {
      property: "og:description",
      content:
        "Nursery & Primary admissions open. Fees from KES 13,000/term. Call 0720 206 783.",
    },
    {
      property: "og:image",
      content: "https://merutrailblazers.com/update1.png",
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
    {
      property: "og:url",
      content: "https://merutrailblazers.com/admissions",
    },
    {
      property: "og:type",
      content: "website",
    },

    // === TWITTER CARDS ===
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Admissions 2026 - Meru Trailblazers Academy",
    },
    {
      name: "twitter:description",
      content: "Nursery & Primary admissions open. Fees from KES 13,000/term.",
    },
    {
      name: "twitter:image",
      content: "https://merutrailblazers.com/admissions-twitter.jpg",
    },

    // === SIMPLE STRUCTURED DATA ===
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "EducationEvent",
        name: "2026 Admissions - Meru Trailblazers Academy",
        description: "Nursery and Primary school admissions for 2026",
        startDate: "2026-01-15",
        endDate: "2026-12-15",
        location: {
          "@type": "Place",
          name: "Meru Trailblazers Academy",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Meru",
            addressCountry: "KE",
          },
        },
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "13000",
          highPrice: "15000",
          priceCurrency: "KES",
          availability: "https://schema.org/InStock",
        },
      },
    },
  ];
}

export default function AdmissionPage() {
  const navigation = useNavigation();
  const formRef = useRef(null);

  const initialFormState = {
    fullName: "",
    dob: "",
    gender: "",
    grade: "",
    parentName: "",
    phone: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [selectedClass, setSelectedClass] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const isSubmitting = navigation.state === "submitting" || loading;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let errs = {};

    if (!formData.fullName) errs.fullName = "Student name is required";
    if (!formData.grade) errs.grade = "Please select a class";
    if (!formData.parentName) errs.parentName = "Parent name is required";

    if (!/^07\d{8}$/.test(formData.phone)) {
      errs.phone = "Enter a valid Kenyan phone number";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Valid email required";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);

    if (!validate()) return;

    setLoading(true);

    const existing = JSON.parse(localStorage.getItem("admissions") || "[]");

    existing.push({
      ...formData,
      date: new Date().toISOString(),
    });

    localStorage.setItem("admissions", JSON.stringify(existing));

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData(initialFormState);
      setSelectedClass("");
      formRef.current?.reset();
    }, 1200);
  };

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

  // Admission process steps
  const admissionSteps = [
    {
      step: 1,
      icon: <FaFileAlt className="text-2xl" />,
      title: "Submit Application",
      description: "Fill out our online application form with student details",
    },
    {
      step: 2,
      icon: <FaCalendarAlt className="text-2xl" />,
      title: "Schedule Interview",
      description: "We'll contact you to schedule a parent-student interview",
    },
    {
      step: 3,
      icon: <FaCheckCircle className="text-2xl" />,
      title: "Receive Offer",
      description: "Successful applicants receive admission offer letters",
    },
    {
      step: 4,
      icon: <FaReceipt className="text-2xl" />,
      title: "Complete Enrollment",
      description: "Submit required documents and complete fee payment",
    },
  ];

  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#0097d7] via-blue-600 to-blue-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTVjLTguMjg0IDAtMTUgNi43MTYtMTUgMTVzNi43MTYgMTUgMTUgMTUgMTUtNi43MTYgMTUtMTUtNi43MTYtMTUtMTUtMTV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#ffdd00]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
              <FaUserGraduate className="text-[#ffdd00]" />
              <span className="font-semibold">Limited Seats Available</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Begin Your Child's
              <span className="block text-[#ffdd00] mt-2">
                Educational Journey
              </span>
            </h1>

            <p className="text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto font-light leading-relaxed">
              Join Meru Trailblazers Academy and be part of a community that
              values excellence, creativity, and holistic growth. Enroll today
              for the 2026 academic year.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              {[
                { value: "15:1", label: "Student-Teacher Ratio", icon: "👨‍🏫" },
                { value: "98%", label: "Parent Satisfaction", icon: "❤️" },
                { value: "24/7", label: "Security", icon: "🛡️" },
                { value: "100%", label: "CBC Curriculum", icon: "📚" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0097d7]/10 rounded-full mb-6">
              <FaArrowRight className="text-[#0097d7]" />
              <span className="text-sm font-semibold text-[#0097d7]">
                Simple 4-Step Process
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Admission <span className="text-[#0097d7]">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined admission process makes joining our academy simple
              and stress-free
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#0097d7] to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0097d7]/10 to-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                    <div className="text-[#0097d7]">{step.icon}</div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>

                  {/* Connector Line (for desktop) */}
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#0097d7] to-blue-400"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees Structure */}
      <section className="py-10 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0097d7]/10 rounded-full mb-6">
              <FaReceipt className="text-[#0097d7]" />
              <span className="text-sm font-semibold text-[#0097d7]">
                Transparent Pricing
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              School <span className="text-[#0097d7]">Fees Structure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive and transparent pricing with no hidden costs
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-[#0097d7] to-blue-600 p-8">
              <h3 className="text-3xl font-bold text-white text-center">
                2026 Academic Year Fees
              </h3>
              <p className="text-white/80 text-center mt-2">
                All fees are per term and payable in advance
              </p>
            </div>

            {/* Fees Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-6 px-8 text-left text-lg font-semibold text-gray-700">
                      <div className="flex items-center gap-3">
                        <FaBookOpen className="text-[#0097d7]" />
                        Class Level
                      </div>
                    </th>
                    <th className="py-6 px-8 text-left text-lg font-semibold text-gray-700">
                      <div className="flex items-center gap-3">
                        <FaReceipt className="text-[#0097d7]" />
                        Term Fees (KES)
                      </div>
                    </th>
                    <th className="py-6 px-8 text-left text-lg font-semibold text-gray-700">
                      <div className="flex items-center gap-3">
                        <FaShieldAlt className="text-[#0097d7]" />
                        Admission Fee
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {Object.entries(fees).map(([cls, fee], index) => (
                    <motion.tr
                      key={cls}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className={`hover:bg-blue-50/50 transition-colors duration-200 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="py-5 px-8">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                            <span className="text-[#0097d7] font-bold">🎓</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              {cls}
                            </div>
                            <div className="text-sm text-gray-500">
                              {cls.includes("Creche") || cls.includes("KG")
                                ? "Pre-Primary"
                                : "Primary"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-8">
                        <div className="text-2xl font-bold text-[#0097d7]">
                          KES {fee}
                        </div>
                        <div className="text-sm text-gray-500">Per term</div>
                      </td>
                      <td className="py-5 px-8">
                        <div className="text-lg font-semibold text-gray-700">
                          KES 1,000
                        </div>
                        <div className="text-sm text-gray-500">
                          One-time payment
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Additional Information */}
            <div className="bg-gradient-to-r from-blue-50 to-white p-8 border-t border-gray-100">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="font-semibold text-gray-900">
                    Uniform & Stationery
                  </div>
                  <div className="text-sm text-gray-600">
                    Purchased separately
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🏊‍♂️</div>
                  <div className="font-semibold text-gray-900">
                    Co-curricular Activities
                  </div>
                  <div className="text-sm text-gray-600">Included in fees</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📞</div>
                  <div className="font-semibold text-gray-900">Need Help?</div>
                  <a
                    href="tel:0720206783"
                    className="text-[#0097d7] hover:underline"
                  >
                    0720 206 783
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & Application Form */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 h-full border border-gray-100">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0097d7]/10 rounded-full mb-8">
                  <FaFileAlt className="text-[#0097d7]" />
                  <span className="text-sm font-semibold text-[#0097d7]">
                    Requirements
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  Admission Requirements
                </h3>

                <div className="space-y-6">
                  {[
                    "Completed admission form (online or physical)",
                    "Copy of birth certificate",
                    "Two recent passport-sized photographs",
                    "Previous academic report (if applicable)",
                    "Parent/Guardian national ID copy",
                  ].map((requirement, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#0097d7] to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <FaCheckCircle className="text-white text-sm" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {requirement}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {index === 0 &&
                            "Submit via our online portal or visit school"}
                          {index === 1 && "Original copy for verification"}
                          {index === 2 &&
                            "White background, recent (within 3 months)"}
                          {index === 3 &&
                            "For students transferring from other schools"}
                          {index === 4 && "Complete immunization schedule"}
                          {index === 5 && "For identification purposes"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Uniform Info */}
                <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0097d7] to-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-white">👔</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        School Uniform
                      </div>
                      <div className="text-sm text-gray-600">
                        Purchased separately
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    School uniforms are purchased directly by parents at the
                    time of admission to ensure proper fitting, quality, and
                    comfort for your child.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fb0269]/10 rounded-full mb-8">
                  <FaUserGraduate className="text-[#fb0269]" />
                  <span className="text-sm font-semibold text-[#fb0269]">
                    Apply Now
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  Online Application Form
                </h3>

                <p className="text-gray-600 mb-8">
                  Fill out this form to begin the admission process. Our team
                  will contact you within 24 hours to schedule an interview.
                </p>

                <form
                  onSubmit={handleSubmit}
                  ref={formRef}
                  className="space-y-8"
                  noValidate
                >
                  {/* Success Message */}
                  {success && (
                    <div className="p-5 bg-green-100 text-green-800 rounded-xl font-medium">
                      ✅ Application submitted successfully. Our admissions team
                      will contact you within 24 hours.
                    </div>
                  )}

                  {/* Dynamic Fee Preview */}
                  {selectedClass && fees[selectedClass] && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-r from-[#0097d7]/10 to-blue-500/10 p-6 rounded-2xl border border-[#0097d7]/20"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-gray-900">
                            Selected Class: {selectedClass}
                          </div>
                          <div className="text-sm text-gray-600">
                            Term fees for this class
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-[#0097d7]">
                          KES {fees[selectedClass]}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: <FaUserGraduate />,
                        name: "fullName",
                        type: "text",
                        placeholder: "Student Full Name",
                      },
                      {
                        icon: <FaCalendarAlt />,
                        name: "dob",
                        type: "date",
                      },
                      {
                        icon: <FaVenusMars />,
                        name: "gender",
                        type: "select",
                        placeholder: "Select Gender",
                        options: ["Boy", "Girl"],
                      },
                      {
                        icon: <FaBookOpen />,
                        name: "grade",
                        type: "select",
                        placeholder: "Select Class",
                        options: [
                          {
                            group: "Pre-Primary",
                            items: ["Creche 2", "KG 1", "KG 2"],
                          },
                          {
                            group: "Primary",
                            items: [
                              "Grade 1",
                              "Grade 2",
                              "Grade 3",
                              "Grade 4",
                              "Grade 5",
                              "Grade 6",
                            ],
                          },
                        ],
                      },
                      {
                        icon: <FaUserFriends />,
                        name: "parentName",
                        type: "text",
                        placeholder: "Parent/Guardian Name",
                      },
                      {
                        icon: <FaPhoneAlt />,
                        name: "phone",
                        type: "tel",
                        placeholder: "Phone Number",
                      },
                      {
                        icon: <FaEnvelope />,
                        name: "email",
                        type: "email",
                        placeholder: "Email Address",
                      },
                    ].map((field, index) => (
                      <div key={index} className="relative space-y-1">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                          {field.icon}
                        </div>

                        {field.type === "select" ? (
                          <select
                            name={field.name}
                            value={formData[field.name]}
                            required
                            onChange={(e) => {
                              handleChange(e);
                              if (field.name === "grade") {
                                setSelectedClass(e.target.value);
                              }
                            }}
                            className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-[#0097d7] focus:outline-none ${
                              errors[field.name]
                                ? "border-red-400"
                                : "border-gray-200"
                            }`}
                          >
                            <option value="">{field.placeholder}</option>
                            {field.options.map((option, i) =>
                              typeof option === "string" ? (
                                <option key={i} value={option}>
                                  {option}
                                </option>
                              ) : (
                                <optgroup key={i} label={option.group}>
                                  {option.items.map((item, j) => (
                                    <option key={j} value={item}>
                                      {item}
                                    </option>
                                  ))}
                                </optgroup>
                              ),
                            )}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            placeholder={field.placeholder}
                            required
                            onChange={handleChange}
                            className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-[#0097d7] focus:outline-none ${
                              errors[field.name]
                                ? "border-red-400"
                                : "border-gray-200"
                            }`}
                          />
                        )}

                        {/* Inline error */}
                        {errors[field.name] && (
                          <p className="text-sm text-red-500">
                            {errors[field.name]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Additional Information */}
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Any special requirements, medical conditions, or additional information..."
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0097d7] focus:outline-none"
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-gradient-to-r from-[#0097d7] to-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing Application...
                      </>
                    ) : (
                      <>
                        Submit Application <FaArrowRight />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-24 bg-gradient-to-br from-[#0097d7] via-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTVjLTguMjg0IDAtMTUgNi43MTYtMTUgMTVzNi43MTYgMTUgMTUgMTUgMTUtNi43MTYgMTUtMTUtNi43MTYtMTUtMTUtMTV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-5"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
              <FaPhoneAlt className="text-[#ffdd00]" />
              <span className="font-semibold">Need Assistance?</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Questions About Admissions?
            </h2>

            <p className="text-xl opacity-95 max-w-2xl mx-auto">
              Our admissions team is here to help you every step of the way
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <a
                href="tel:0720206783"
                className="group px-10 py-4 bg-white text-[#0097d7] font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <FaPhoneAlt />
                Call Now: 0720 206 783
              </a>

              <a
                href="mailto:info@merutrailblazers.ac.ke"
                className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Email Admissions
              </a>
            </div>

            <p className="text-white/70 text-sm pt-8">
              Office Hours: Monday - Friday, 8:00 AM - 5:00 PM
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
