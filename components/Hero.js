import Navbar from "./Navbar";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="bg-hero 2xl:h-[712px] xl:h-[600px] lg:h-[550px] md:h-[500px] pb-20">
      <div className="container mx-auto">
        <Navbar />
        <div className="text-center mt-20">
          <h1 className="text-3xl text-white font-semibold font-mono w-8/12 mx-auto leading-relaxed">
            Saya seorang front-end engineer, back-end engineer, dan juga UI
            designer
          </h1>
          <p className="text-white text-opacity-60 text-lg w-4/12 mx-auto mt-6 leading-relaxed">
            Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
            design.
          </p>
          <Button addClassName="mt-12" variant="yellow">
            Pelajari
          </Button>
        </div>
      </div>
    </div>
  );
}
