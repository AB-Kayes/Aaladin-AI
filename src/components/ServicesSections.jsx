import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "@/components/svg/ClipPath";
import { Code2, Palette, Settings, Brain, Cloud, Puzzle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ServicesSection = () => {
  return (
    <Section id="services">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Our Services"
          text="Comprehensive digital solutions from concept to deployment"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item, index) => (
            <AnimatedSection key={item.id} direction="up" delay={index * 0.1}>
              <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h5 className="h5 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                  <div className="flex items-center mt-auto">
                    {item.icon === "Code2" && (
                      <Code2 size={48} className="text-n-1" />
                    )}
                    {item.icon === "Palette" && (
                      <Palette size={48} className="text-n-1" />
                    )}
                    {item.icon === "Settings" && (
                      <Settings size={48} className="text-n-1" />
                    )}
                    {item.icon === "Brain" && (
                      <Brain size={48} className="text-n-1" />
                    )}
                    {item.icon === "Cloud" && (
                      <Cloud size={48} className="text-n-1" />
                    )}
                    {item.icon === "Puzzle" && (
                      <Puzzle size={48} className="text-n-1" />
                    )}
                  </div>
                </div>

                {item.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <ClipPath />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ServicesSection;
