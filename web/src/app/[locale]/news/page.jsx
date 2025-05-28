import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewsClient from "../../components/NewsClient";

const NewsPage = async () => {
  const res = await fetch("http://localhost:8000/api/news", {
    cache: "no-store",
  });
  const news = await res.json();

  return (
    <div>
      <Header />
      <NewsClient news={news} />
      <Footer />
    </div>
  );
};

export default NewsPage;
