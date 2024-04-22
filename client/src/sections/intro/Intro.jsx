import Profile from "/profile.png";

const Intro = () => {
  return (
    <div className="flex w-full items-center justify-center sm:flex-col-reverse sm:items-center sm:justify-center">
      <div className="h-[100vh] w-4/6 bg-primary-content flex flex-col items-start justify-center gap-9 py-10 sm:w-auto sm:h-auto">
        <h1 className="text-white mt-12 pt-12 font-semibold">Hi There, I am</h1>
        <h1 className="text-primary text-6xl sm:text-3xl md:text-4xl font-semibold">
          Owen Laing
        </h1>
        <h1 className="text-white text-5xl sm:text-2xl md:text-3xl font-semibold">
          I Build Things For The Web.
        </h1>
        <p className="text-white w-2/3">
          I have a passion for web development, and my diverse background in carpentry and programming languages such as HTML, CSS, and JavaScript allows me to approach projects with a unique perspective. My goal is to create web applications that not only function well but also enhance the user experience.
        </p>
      </div>
      <div className="w-2/6 sm:mt-12 sm:h-auto sm:w-auto">
        <img src={Profile} alt="" />
      </div>
    </div>
  );
};

export default Intro;
