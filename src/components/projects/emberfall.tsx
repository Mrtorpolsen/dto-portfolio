import SideBySide from "./side-by-side-item";
import { ContentData } from "./type";

type Props = {
  data: ContentData[];
};

export default function Emberfall({ data: posts }: Props) {
  const listPosts = posts.map((post, index) => (
    <SideBySide data={post} index={index} key={post.src} />
  ));
  return (
    <div>
      <ul className="flex flex-col gap-12">{listPosts}</ul>
    </div>
  );
}
