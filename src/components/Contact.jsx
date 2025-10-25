"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
// import VerificationModal from "./VerificationModal";
import { check } from "@/assets";

const Contact = () => {
  // const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [isVerifying, setIsVerifying] = useState(false);
  // const [currentFormData, setCurrentFormData] = useState(null);

  // EmailJS API function
  const sendEmail = async (templateParams, emailType) => {
    // Debug: Check environment variables
    console.log("EmailJS Environment Variables:");
    console.log("  SERVICE_ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log("  TEMPLATE_ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    console.log("  PUBLIC_KEY:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

    const data = {
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      template_params: templateParams,
    };

    console.log(`Sending ${emailType} email with data:`, data);

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      console.log(`EmailJS ${emailType} response status:`, response.status);
      console.log(
        `EmailJS ${emailType} response headers:`,
        Object.fromEntries(response.headers.entries())
      );

      let result;
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        // Handle plain text response (like "OK")
        const textResult = await response.text();
        result = { message: textResult };
      }

      console.log(`EmailJS ${emailType} result:`, result);

      return { success: response.ok, data: result };
    } catch (error) {
      console.error(`EmailJS ${emailType} error:`, error);
      return { success: false, error: error.message };
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      details: "",
      services: [],
      budget: "",
      timeline: "",
    },
  });

  const watchedServices = watch("services");

  const handleServiceChange = (service) => {
    const currentServices = watchedServices || [];
    const newServices = currentServices.includes(service)
      ? currentServices.filter((s) => s !== service)
      : [...currentServices, service];
    setValue("services", newServices);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      // Send emails directly using EmailJS from client-side
      const servicesList =
        data.services.length > 0 ? data.services.join(", ") : "None specified";

      // Business email parameters
      const businessEmailParams = {
        to_email: "name0198080@gmail.com",
        from_name: data.name,
        from_email: data.email,
        subject: `New Quote Request from ${data.name}`,
        client_name: `${data.name}`,
        client_email: data.email,
        budget: data.budget,
        timeline: data.timeline,
        services: servicesList,
        additional_details: data.details || "No additional details provided.",
        submission_date: new Date().toLocaleString(),
      };

      console.log(
        "Sending business email with EmailJS...",
        businessEmailParams
      );

      // Debug: Log each variable individually
      console.log("Business email variables:");
      Object.keys(businessEmailParams).forEach((key) => {
        console.log(`  ${key}:`, businessEmailParams[key]);
      });

      // Send business email using direct API
      const businessResult = await sendEmail(businessEmailParams, "business");

      if (businessResult.success) {
        toast.success("Quote request sent successfully!", {
          description:
            "We'll get back to you within 24 hours with a detailed proposal.",
        });
        reset();
      } else {
        toast.error("Failed to send quote request", {
          description: "Please try again later.",
        });
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("An error occurred", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // COMMENTED OUT VERIFICATION HANDLERS - NO LONGER NEEDED
  // const handleVerification = async (verificationCode) => {
  //   setIsVerifying(true);

  //   try {
  //     const response = await fetch("/api/verify-and-send-quote", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: currentFormData.email,
  //         verificationCode,
  //         formData: currentFormData,
  //       }),
  //     });

  //     const result = await response.json();

  //     if (response.ok) {
  //       toast.success("Quote request sent successfully!", {
  //         description:
  //           "We'll get back to you within 24 hours with a detailed proposal.",
  //       });
  //       setIsVerificationModalOpen(false);
  //       reset();
  //       setCurrentFormData(null);
  //     } else {
  //       toast.error("Verification failed", {
  //         description: result.error || "Please check your code and try again.",
  //       });
  //     }
  //   } catch (error) {
  //     toast.error("Verification error", {
  //       description: "An error occurred during verification. Please try again.",
  //     });
  //   } finally {
  //     setIsVerifying(false);
  //   }
  // };

  // const closeModal = () => {
  //   setIsVerificationModalOpen(false);
  //   setCurrentFormData(null);
  // };

  return (
    <Section className="overflow-hidden" id="contact">
      <div className="container">
        <div className="relative">
          <Heading
            tag="Ready to Start Your Project?"
            title="Get a Quote"
            text="Tell us about your project requirements and we'll provide you with a detailed quote within 24 hours."
          />

          <div className="relative z-1 max-w-[62rem] mx-auto">
            <div className="relative bg-n-8 border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-n-8/50 to-n-8/90"></div>

              <div className="relative z-1 p-8 lg:p-16">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Name Field */}
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-n-3 mb-2"
                      >
                        Full Name
                      </label>
                      <div className="relative p-0.25 rounded-lg bg-n-6 focus-within:bg-conic-gradient transition-all duration-300">
                        <input
                          type="text"
                          id="name"
                          {...register("name", {
                            required: "Full name is required",
                            minLength: {
                              value: 2,
                              message: "Name must be at least 2 characters",
                            },
                          })}
                          className="w-full px-4 py-3 bg-n-7 border-0 rounded-[calc(0.5rem-1px)] text-n-1 placeholder-n-4 focus:outline-none transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-n-3 mb-2"
                      >
                        Email Address
                      </label>
                      <div className="relative p-0.25 rounded-lg bg-n-6 focus-within:bg-conic-gradient transition-all duration-300">
                        <input
                          type="email"
                          id="email"
                          {...register("email", {
                            required: "Email address is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Please enter a valid email address",
                            },
                          })}
                          className="w-full px-4 py-3 bg-n-7 border-0 rounded-[calc(0.5rem-1px)] text-n-1 placeholder-n-4 focus:outline-none transition-colors"
                          placeholder="Enter your email address"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Services Required */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-n-3 mb-4">
                      Services Required
                    </label>
                    <div className="grid gap-3 md:grid-cols-2">
                      {[
                        "UI/UX Design",
                        "Web & Mobile Development",
                        "Cloud & DevOps Solutions",
                        "AI & Automation",
                        "API Development & Integration",
                        "Consultancy",
                      ].map((service) => (
                        <label
                          key={service}
                          className="flex items-center cursor-pointer group"
                        >
                          <div className="relative">
                            <input
                              type="checkbox"
                              checked={(watchedServices || []).includes(
                                service
                              )}
                              onChange={() => handleServiceChange(service)}
                              className="sr-only"
                            />
                            <div
                              className={`w-5 h-5 rounded p-0.5 transition-all duration-300 ${
                                (watchedServices || []).includes(service)
                                  ? "bg-conic-gradient"
                                  : "bg-n-6 group-hover:bg-conic-gradient"
                              }`}
                            >
                              <div
                                className={`w-full h-full rounded-sm flex items-center justify-center transition-all duration-300 ${
                                  (watchedServices || []).includes(service)
                                    ? "bg-n-1"
                                    : "bg-n-7"
                                }`}
                              >
                                {(watchedServices || []).includes(service) && (
                                  <svg
                                    className="w-3 h-3 text-n-8"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                )}
                              </div>
                            </div>
                          </div>
                          <span className="ml-3 text-sm text-n-3 group-hover:text-n-1 transition-colors">
                            {service}
                          </span>
                        </label>
                      ))}
                    </div>
                    {errors.services && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.services.message}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Budget Range */}
                    <div className="relative">
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-n-3 mb-2"
                      >
                        Budget Range
                      </label>
                      <div className="relative p-0.25 rounded-lg bg-n-6 focus-within:bg-conic-gradient transition-all duration-300">
                        <select
                          id="budget"
                          {...register("budget", {
                            required: "Please select a budget range",
                          })}
                          className="w-full px-4 py-3 bg-n-7 border-0 rounded-[calc(0.5rem-1px)] text-n-1 focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-n-7 text-n-4">
                            Select budget range
                          </option>
                          <option value="5k-15k" className="bg-n-7 text-n-1">
                            $5,000 - $15,000
                          </option>
                          <option value="15k-30k" className="bg-n-7 text-n-1">
                            $15,000 - $30,000
                          </option>
                          <option value="30k-50k" className="bg-n-7 text-n-1">
                            $30,000 - $50,000
                          </option>
                          <option value="50k+" className="bg-n-7 text-n-1">
                            $50,000+
                          </option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-n-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                      {errors.budget && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.budget.message}
                        </p>
                      )}
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                      <label
                        htmlFor="timeline"
                        className="block text-sm font-medium text-n-3 mb-2"
                      >
                        Project Timeline
                      </label>
                      <div className="relative p-0.25 rounded-lg bg-n-6 focus-within:bg-conic-gradient transition-all duration-300">
                        <select
                          id="timeline"
                          {...register("timeline", {
                            required: "Please select a timeline",
                          })}
                          className="w-full px-4 py-3 bg-n-7 border-0 rounded-[calc(0.5rem-1px)] text-n-1 focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-n-7 text-n-4">
                            Select timeline
                          </option>
                          <option value="asap" className="bg-n-7 text-n-1">
                            ASAP (Rush job)
                          </option>
                          <option value="1-2months" className="bg-n-7 text-n-1">
                            1-2 months
                          </option>
                          <option value="3-6months" className="bg-n-7 text-n-1">
                            3-6 months
                          </option>
                          <option value="6months+" className="bg-n-7 text-n-1">
                            6+ months
                          </option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-n-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                      {errors.timeline && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.timeline.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Details Field */}
                  <div className="relative">
                    <label
                      htmlFor="details"
                      className="block text-sm font-medium text-n-3 mb-2"
                    >
                      Additional Details
                    </label>
                    <div className="relative p-0.25 rounded-lg bg-n-6 focus-within:bg-conic-gradient transition-all duration-300">
                      <textarea
                        id="details"
                        {...register("details", {
                          required: "Additional details are required",
                          validate: (value) => {
                            const wordCount = value.trim().split(/\s+/).length;
                            if (wordCount < 20) {
                              return "Please provide at least 20 words in additional details";
                            }
                            return true;
                          },
                        })}
                        rows={4}
                        className="w-full px-4 py-3 bg-n-7 border-0 rounded-[calc(0.5rem-1px)] text-n-1 placeholder-n-4 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us more about your project goals, specific requirements, or any questions you have... (minimum 20 words)"
                      />
                    </div>
                    {errors.details && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.details.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
                    <Button
                      type="submit"
                      className="min-w-[200px]"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Get Quote"}
                    </Button>
                  </div>
                </form>

                {/* Contact Info */}
                <div className="mt-12 pt-8 border-t border-n-6">
                  <div className="grid gap-8 md:grid-cols-3 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-conic-gradient rounded-full flex items-center justify-center mb-4">
                        <img src={check} width={20} height={20} alt="Email" />
                      </div>
                      <h6 className="h6 mb-2">Email Us</h6>
                      <p className="body-2 text-n-4">contact@aaladinai.com</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-conic-gradient rounded-full flex items-center justify-center mb-4">
                        <img
                          src={check}
                          width={20}
                          height={20}
                          alt="Response"
                        />
                      </div>
                      <h6 className="h6 mb-2">Quick Response</h6>
                      <p className="body-2 text-n-4">Within 24 hours</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-conic-gradient rounded-full flex items-center justify-center mb-4">
                        <img
                          src={check}
                          width={20}
                          height={20}
                          alt="Consultation"
                        />
                      </div>
                      <h6 className="h6 mb-2">Free Consultation</h6>
                      <p className="body-2 text-n-4">
                        30-minute discovery call
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COMMENTED OUT VERIFICATION MODAL - NO LONGER NEEDED */}
      {/* <VerificationModal
        isOpen={isVerificationModalOpen}
        onClose={closeModal}
        email={currentFormData?.email}
        onVerify={handleVerification}
        isLoading={isVerifying}
      /> */}
    </Section>
  );
};

export default Contact;
