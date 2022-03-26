import { useRouter } from "next/router";

const SomeThing = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  console.log(newsId);
  return <h1>something!</h1>
};
export default SomeThing;