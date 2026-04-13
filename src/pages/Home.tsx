import { Typography } from "@components";

const HomePage = () => {
  return (
    <div className="w-full h-screen pt-16 md:pt-28 bg-black">
      <Typography
        variant="h1"
        text="Welcome to the Home Page"
        weight="bold"
        color="white"
        textShadow
      />
    </div>
  );
};

export default HomePage;
