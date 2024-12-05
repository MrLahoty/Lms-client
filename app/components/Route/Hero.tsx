import { useGetHeroDataQuery } from "../../../redux/features/layout/layoutApi";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Loader from "../Loader/Loader";
import { useRouter } from "next/navigation";

type Props = {};

const Hero: FC<Props> = (props) => {
  const { data, isLoading } = useGetHeroDataQuery("Banner", {});
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (search === "") {
      return;
    } else {
      router.push(`/courses?title=${search}`);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full flex items-center justify-center min-h-screen px-8">
          <div className="flex flex-col 1000px:flex-row items-center w-full max-w-screen-xl">
            {/* Left Side Image */}
            <div className="1000px:w-1/2 w-full flex justify-center items-center relative">
              <Image
                src={data?.layout?.banner?.image?.url}
                alt="Hero Image"
                className="object-contain 1100px:max-w-[80%] w-[80%] 1500px:max-w-[85%] h-[auto] z-[10]"
                width={400}
                height={400}
              />
            </div>

            {/* Right Side Text Area */}
            <div className="1000px:w-1/2 w-full flex flex-col items-center 1000px:items-start text-center 1000px:text-left mt-8 1000px:mt-0 space-y-7 px-8">
              <h2 className="dark:text-white text-[#000000c7] text-[30px] font-Josefin 1000px:text-[70px] 1000px:w-[118%] font-semibold leading-tight">
                {data?.layout?.banner?.title}
              </h2>
              <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[20px] 1500px:!w-[100%] 1100px:!w-[88%]">
                {data?.layout?.banner?.subTitle}
              </p>
              <div className="1500px:w-[90%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
                <input
                  type="search"
                  placeholder="Search Courses..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
                />
                <div
                  className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]"
                  onClick={handleSearch}
                >
                  <BiSearch className="text-white" size={26} />
                </div>
              </div>
              <br />
              <div className="1500px:w-[85%] 1100px:w-[88%] w-[95%] flex items-center">
                <Image
                  src="/assets/client-1.jpg"
                  alt="Client 1"
                  className="rounded-full"
                  width={45}
                  height={45}
                />
                <Image
                  src="/assets/client-2.jpg"
                  alt="Client 2"
                  className="rounded-full ml-[-20px]"
                  width={45}
                  height={45}
                />
                <Image
                  src="/assets/client-3.jpg"
                  alt="Client 3"
                  className="rounded-full ml-[-20px]"
                  width={45}
                  height={45}
                />
                <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[17px] font-[600]">
                  500k+ People already trusted us.{" "}
                  <Link
                    href="/courses"
                    className="dark:text-[#46e256] text-[crimson]"
                  >
                    View Courses
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
