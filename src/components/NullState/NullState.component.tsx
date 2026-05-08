import nullState from "@assets/svgs/null-state.svg";
import { Typography } from "@components";
import { useScreenSize } from "@utils/useScreenSize";

const NullState = () => {
  const { isMobile } = useScreenSize();
  return (
    <section aria-label="Null state Section">
      <div className="flex flex-col gap-2 justify-center items-center">
        <img src={nullState} alt="Null state" />
        <Typography
          variant={isMobile ? "subtitle" : "h4"}
          weight="bold"
          text="The Product page is not available yet."
        />
      </div>
    </section>
  );
};

export default NullState;
