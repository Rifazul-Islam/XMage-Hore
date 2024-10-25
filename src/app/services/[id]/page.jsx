export const generateMetadata = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const items = await res.json();
  return {
    title: { absolute: items?.title },
    description: items?.body,
    keywords: items?.body?.split(" "),
  };
};

import { getSpecipicData } from "@/service/getPostData";

const PostDetailsPage = async ({ params }) => {
  const specificOnData = await getSpecipicData(params?.id);
  // console.log(specificOnData);
  return (
    <div>
      <p> {specificOnData.title} </p>
    </div>
  );
};

export default PostDetailsPage;
