import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        SharePrompt is an innovative open-source platform that empowers users to
        seamlessly share their AI prompts with the ChatGPT community. This
        user-friendly website facilitates the exchange of ideas by enabling
        tagging, fostering collaboration, and contributing to the collective
        growth of AI-generated content.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
