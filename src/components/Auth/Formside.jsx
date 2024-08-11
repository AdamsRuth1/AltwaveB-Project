import FormImage from "../../assets/images/SignIn-image.svg";

const Formside = () => {
  return (
    <section className="flex flex-col items-center px-4 py-6 lg:px-12 lg:py-8">
      <div className="flex justify-center pt-16 lg:pt-28">
        <img src={FormImage} alt="Image of a book" className="w-80 h-auto" />
      </div>
      <div className="text-center pt-12 lg:pt-16">
        <h2 className="text-xl lg:text-3xl font-normal leading-tight text-gray-800">
          Pay Local. <br /> Study Global with
          <span className="text-red-500"> Tuition</span>
        </h2>
      </div>
      <div className="text-center mt-6 lg:mt-10 px-4 lg:px-0">
        <p className="text-sm lg:text-base text-gray-600">
          Tuition is powered by Swap, a product of Flutterwave Technology
          Solutions Limited - Licensed by the Central Bank of Nigeria in
          partnership with Kadavra BDC and Wema Bank
        </p>
      </div>
    </section>
  );
};

export default Formside;
