/* eslint-disable react/jsx-key */
import SectionsTittle from "../../components/SectionsTitle";

const Contact = () => {
  const user = {
    Name: "Owen Laing",
    Gender: "Male",
    Email: "owen1125@gmail.com",
    Mobile: "647-974-1669",
    Country: "Canada",
  };
  return (
    <div className="pb-10 pt-12">
      <SectionsTittle title="Say Hello" />

      <div className="flex items-center justify-between sm:flex-col">
        <div className="flex flex-col gap-5">
          <h1 className="text-white">{"{"}</h1>
          {Object.keys(user).map((key) => (
            <h1 className="ml-5">
              <span className="text-white">{key} : </span>
              <span className="text-white">
                {user[key] !== null ? user[key] : "N/A"}
              </span>
            </h1>
          ))}
          <h1 className="text-white">{"}"}</h1>
        </div>
        <div className="h-[450px]">
          <lottie-player
            src="https://lottie.host/cab292f5-8a0b-4703-8023-421baa79b7f4/69Hkye5aVK.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default Contact;
