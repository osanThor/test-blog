import Image from "next/image";
import profileImage from "../../public/images/profile.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="mx-auto rounded-full"
        src={profileImage}
        alt="Picture of the author"
        width={250}
        height={250}
        priority
      />
      <h2 className="mt-2 text-3xl font-bold">{"Hi, I'm JunYoung"}</h2>
      <h3 className="text-xl font-semibold">FE Engineer</h3>
      <p>꿈을 코딩하는 사람, 드림코더 준영</p>
      <Link href={"/contact"}>
        <button className="px-4 py-1 mt-2 font-bold bg-yellow-500 rounded-xl">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
