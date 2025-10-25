import { notification1 } from "@/assets";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center justify-center p-4 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl`}
    >
      <h6 className="font-bold text-lg text-white tracking-wide">{title}</h6>
    </div>
  );
};

export default Notification;
