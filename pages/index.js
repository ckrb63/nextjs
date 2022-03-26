import Link from "next/link";

const HomePage = () => {
  console.log(Link);
  return (
    <div>
      <div>News Page!</div>
      <Link href="/" prefetch={false}>asd</Link>
    </div>
  );
};
export default HomePage;
