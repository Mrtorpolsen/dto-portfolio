import type { ContentData } from "./type";

type Props = {
  data: ContentData;
  index: number;
};

export default function SideBySide({ data, index }: Props) {
  const imageClass =
    data.imageSize === "tall"
      ? "max-h-[280px] sm:max-h-[550px]"
      : "max-h-[280px]";

  const gridColumns =
    data.imageSize === "tall"
      ? ["sm:grid-cols-[40%_60%]", "sm:grid-cols-[60%_40%]"]
      : ["sm:grid-cols-[60%_40%]", "sm:grid-cols-[40%_60%]"];
  return (
    <li>
      <div
        className={`sm:grid ${
          index % 2 === 0 ? gridColumns[0] : gridColumns[1]
        }`}
      >
        <div
          className={`bg-[#1E1E1E]/70 rounded-lg p-8 ${
            index % 2 === 0
              ? "col-start-1 row-start-1"
              : "col-start-2 row-start-1"
          }`}
        >
          <img
            className={`${imageClass} self-center justify-self-center`}
            src={data.src}
            alt={data.alt}
          />
        </div>
        <div
          className={`mx-8 bg-white/80 p-3 relative -mt-6 md:self-center sm:mt-0 sm:p-0 sm:bg-white/0${
            index % 2 === 0
              ? "col-start-1 row-start-1"
              : "col-start-2 row-start-1"
          }`}
        >
          <h2 className="text-xl font-bold text-center mb-2">{data.heading}</h2>
          <p className="whitespace-pre-line">{data.text}</p>
        </div>
      </div>
    </li>
  );
}
