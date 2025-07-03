import Header from "../../components/Header";
import Footer from "../../components/Footer";
import dynamic from "next/dynamic";

const NewsClient = dynamic(() => import("../../components/news/NewsClient"), {
  ssr: false,
});

const NewsPage = () => {
  return <NewsClient />;
};

export default NewsPage;
