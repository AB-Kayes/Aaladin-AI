import { notification1 } from "@/assets";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-2 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-3`}
    >
      <img
        src={notification1}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
      </div>
    </div>
  );
};

export default Notification;
