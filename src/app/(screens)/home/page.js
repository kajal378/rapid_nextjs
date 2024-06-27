import Image from "next/image";
import "../../../../public/sass/pages/demo.scss";
import Header from "@/app/components/header";
import Banner from "@/app/components/banner";
import Aboutus from "@/app/components/aboutus";
import Blogs from "@/app/components/blogs";
import Testm from "@/app/components/testm";
import News from "@/app/components/news";

const HomePage=()=> {
  return (
    <>
    <Banner />
    <Aboutus />
    <Blogs />
    <Testm />
    <News />
    </>
  );
}
export default HomePage;