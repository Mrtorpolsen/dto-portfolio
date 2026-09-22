import type { ContentData } from "./type";
import TextWrapper from "../text-wrapper";

type Props = {
  data: ContentData;
  index: number;
};

export default function SideBySide({ data, index }: Props) {
  const imageClass =
    data.imageSize === "tall"
      ? "max-h-[280px] md:max-h-[550px]"
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
          className={`bg-[#1E1E1E]/70 rounded-lg p-8 sm:mx-0 content-center ${
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
          className={`p-3 relative mt-6 md:self-center sm:mt-0 sm:p-0${
            index % 2 === 0
              ? "col-start-1 row-start-1 sm:ml-4 ml-0"
              : "col-start-2 row-start-1 sm:mr-4 mr-0"
          }`}
        >
          <TextWrapper>
            <>
              <h2 className="text-xl font-bold text-center mb-2">{data.heading}</h2>
              <p className="whitespace-pre-line">{data.text}</p>
            </>
          </TextWrapper>
        </div>
      </div>
    </li>
  );
}
