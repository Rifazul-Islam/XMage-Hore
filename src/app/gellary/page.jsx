import Image from "next/image";
import img1 from "@/pictures/1.png";
import img2 from "@/pictures/2.png";
import img3 from "@/pictures/3.png";

const page = () => {
  return (
    <div>
      <p> This Image Page </p>
      <Image src={img1} height={600} width={1300} alt="Eicture" />
      <Image src={img2} height={600} width={1300} alt="Eicture" />
      <Image src={img3} height={600} width={1300} alt="Eicture" />
    </div>
  );
};

export default page;
