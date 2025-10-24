import Section from "./Section";
import { smallSphere, stars } from "@/assets";
import Heading from "./Heading";
import { LeftLine, RightLine } from "./design/Pricing";
import { urlFor } from "@/lib/sanity";

const TestimonialSection = ({ testimonials = [] }) => {
  const getAvatarColor = (index) => {
    const colors = [
      "from-color-1 to-color-2",
      "from-purple-500 to-pink-500",
      "from-blue-500 to-cyan-500",
      "from-green-500 to-emerald-500",
      "from-orange-500 to-red-500",
      "from-indigo-500 to-purple-500",
    ];
    return colors[index % colors.length];
  };

  // If no testimonials from Sanity, show empty state or fallback
  if (!testimonials || testimonials.length === 0) {
    return (
      <Section className="overflow-hidden" id="testimonials">
        <div className="container relative z-2">
          <Heading tag="Client feedback" title="What our clients say" />
          <div className="text-center py-20">
            <p className="body-1 text-n-4">
              We're working on gathering testimonials from our amazing clients.
              Check back soon!
            </p>
          </div>
        </div>
      </Section>
    );
  }

  // Create exactly 2 sets for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <Section className="overflow-hidden" id="testimonials">
      <div className="container relative z-2 mb-16">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading tag="Client feedback" title="What our clients say" />
      </div>

      <div className="relative w-full">
        <div className="overflow-hidden">
          <div className="flex gap-8 testimonials-infinite-scroll pl-8">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`testimonial-${index}`}
                className="w-[400px] min-h-[300px] p-0.25 bg-conic-gradient rounded-[2rem] flex-shrink-0"
              >
                <div className="p-6 bg-n-8 rounded-[1.875rem] h-full flex flex-col">
                  <div className="flex items-start mb-4">
                    {testimonial.avatar?.asset ? (
                      <img
                        src={urlFor(testimonial.avatar)
                          .width(48)
                          .height(48)
                          .url()}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4 flex-shrink-0"
                      />
                    ) : (
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${getAvatarColor(
                          index % testimonials.length
                        )} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}
                      >
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <h4 className="text-n-1 font-semibold text-sm truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-n-4 text-xs leading-tight">
                        {testimonial.position && testimonial.company
                          ? `${testimonial.position} at ${testimonial.company}`
                          : testimonial.company ||
                            testimonial.position ||
                            "Client"}
                      </p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3 h-3 ${
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-n-6"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-n-4 text-xs">
                      ({testimonial.rating}/5)
                    </span>
                  </div>

                  <div className="flex-1 overflow-hidden">
                    <p className="text-n-3 text-sm leading-relaxed break-words">
                      "
                      {testimonial.testimonial.length > 150
                        ? testimonial.testimonial.substring(0, 150) + "..."
                        : testimonial.testimonial}
                      "
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <LeftLine />
        <RightLine />
      </div>
    </Section>
  );
};

export default TestimonialSection;
