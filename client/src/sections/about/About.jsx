import SectionsTitle from "../../components/SectionsTitle";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "BOOTSTRAP",
    "JAVASCRIPT",
    "REACT",
    "NODEJS",
    "EXPRESS",
    "MONGODB",
    "MYSQL",
    "PHP",
    "LARAVEL",
  ];

  return (
    <div className="pt-12">
      <SectionsTitle title="About Me" />

      <div className="flex w-full items-center sm:flex-col-reverse md:flex-col-reverse">
        <div className="h-[70vh] w-1/2 sm:w-full md:w-full">
          <lottie-player
            src="https://lottie.host/542c2684-7209-48c1-b21a-e343de79dba6/NUt7nWpQ2l.json"
            background="transparent"
            autoplay
            speed="1"
            loop
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-6 w-1/2 sm:w-full md:w-full">
          <p className="text-white">
            Hello! My name is Owen, and I am currently a Web Development student at Humber College. I bring a unique blend of hands-on experience and technical expertise to every project I undertake.
            Before diving into the world of web development, I spent nine years working as a carpenter, honing my problem-solving skills and developing a strong work ethic. This experience taught me the importance of precision, attention to detail, and the ability to adapt to challenges on the job.
          </p>

          <p className="text-white">
          As a web development student, I have become proficient in a variety of programming languages and frameworks, including HTML, CSS, JavaScript, Node, Express, PHP, Laravel, Bootstrap, React, MongoDB, and MySQL. I am passionate about using these tools to create intuitive, user-friendly web applications that meet the unique needs of my clients.
          </p>
        </div>
      </div>

      <div className="py-8">
        <h1 className="text-teal text-xl">
          Here are some of the few technologies I've been working with recently;
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, idx) => (
            <div className="border border-teal px-5 py-3" key={idx}>
              <h1 className="text-teal">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
