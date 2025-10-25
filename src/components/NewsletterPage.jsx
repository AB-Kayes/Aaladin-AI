import Heading from "./Heading";
import Section from "./Section";
import Button from "./Button";
import { grid } from "@/assets";
import { Gradient } from "./design/Roadmap";

const NewsletterPage = () => {
  return (
    <Section className="overflow-hidden" id="newsletter">
      <div className="container md:pb-10">
        <Heading
          tag="Stay Connected"
          title="Our Newsletter"
          text="Get the latest AI insights, project updates, and industry trends delivered to your inbox"
        />

        <div className="text-center py-20">
          <div className="relative max-w-[30rem] mx-auto">
            <div className="relative bg-n-8 border border-n-1/10 rounded-3xl p-12">
              <div className="absolute top-0 left-0 max-w-full opacity-50">
                <img
                  className="w-full"
                  src={grid}
                  width={550}
                  height={550}
                  alt="Grid"
                />
              </div>
              <div className="relative z-1">
                <h3 className="h4 mb-4">Coming Soon</h3>
                <p className="body-2 text-n-4 mb-6">
                  We're preparing something special for our newsletter
                  subscribers. Stay tuned for exclusive content, early access to
                  new features, and insider updates from our team.
                </p>
                <Button href="/contact">Get notified when we launch</Button>
              </div>
            </div>
          </div>
        </div>

        <Gradient />

        <div className="text-center mt-12">
          <p className="body-2 text-n-4 mb-6">
            Want to be the first to know when our newsletter launches?
          </p>
          <Button href="/contact">Contact us for early access</Button>
        </div>
      </div>
    </Section>
  );
};

export default NewsletterPage;
