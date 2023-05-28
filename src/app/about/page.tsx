import Hero from "@/components/Hero";

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="p-8 m-8 text-center bg-gray-100 shadow-lg">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          개발을 사랑하는 풀스택 개발자 <br />
          사람과 디자인을 담는 웹앱을 만들고 있음
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          구글 (-Now)
          <br />
          페이스북 (-2019)
          <br />
          삼전 (-2015)
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>React, Vue, Node</p>
      </section>
    </>
  );
}
