import type { ProjectData } from "./type";

type Props = {
    data: ProjectData;
    index: number;
}

export default function SideBySideProject({data, index} : Props) {
    return (
    <li>
      <div
        className={`sm:grid ${
          index % 2 === 0 ? "sm:grid-cols-[60%_40%]" : "sm:grid-cols-[40%_60%]"
        }`}
      >
        <img
          className={`max-h-[280px] self-center justify-self-center ${
            index % 2 === 0
              ? "col-start-1 row-start-1"
              : "col-start-2 row-start-1"
          }`}
          src={data.src}
          alt={data.alt}
        />
        <div
          className={`mx-8 bg-white/80 p-3 relative -mt-6 md:self-center sm:mt-0 sm:p-0 sm:bg-white/0${
            index % 2 === 0
              ? "col-start-1 row-start-1"
              : "col-start-2 row-start-1"
          }`}
        >
          <h2 className="text-xl font-bold text-center mb-2">
            {data.heading}
          </h2>
          <p>{data.text}</p>
        </div>
      </div>
    </li>
    );
}