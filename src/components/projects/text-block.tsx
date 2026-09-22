import type { ContentData } from "./type";
import TextWrapper from "../text-wrapper";

export default function TextBlock(data : ContentData) {
    return (
        <div
          className={`p-3 relative mt-6 md:self-center sm:mt-0 sm:p-0`}
        >
          <TextWrapper>
            <>
              <h2 className="text-xl font-bold text-center mb-2">{data.heading}</h2>
              <p className="whitespace-pre-line">{data.text}</p>
            </>
          </TextWrapper>
        </div>
    );
}