import Image from "next/image";
import Header from "./components/Header/page";
import Main from "./components/Main/page";
import Service from "./components/Service/page";
import Date from "./components/Date/page";
import Member from "./components/Member/page";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Service />
      <Date />
      <Member />
    </>
  );
}
