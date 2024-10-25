import { getPostData } from "@/service/getPostData";
import Link from "next/link";
export const metadata = {
  title: "Services",
  description: "Generated by create next app",
};
const ServicePage = async () => {
  const servicesData = await getPostData();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {servicesData?.slice(0, 11).map(({ title, body, id }) => (
        <div
          key={id}
          className="border border-blue-400 p-5 rounded-lg relative"
        >
          <h2 className="text-lg font-bold"> Title {title}</h2>
          <p className="mb-8"> {body} </p>

          <button className="btn absolute bottom-2  bg-blue-500 px-4 py-1 rounded-lg text-white">
            <Link href={`/services/${id}`}>Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ServicePage;