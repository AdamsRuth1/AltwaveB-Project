import { BsStarFill } from "react-icons/bs";
import Avatar from "../../assets/images/Avatars.png";
import "./testimonial.css"; // Import the CSS file

function Testimonial() {
  return (
    <>
      <div className=" bg-customLightBlueGray  p-4 hidden md:flex flex-col mt-32">
        <div className="testimonial text-center mb-16">
          <p className="mt-32 font-Modarat leading-6 text-xl font-normal text-customGray ">Don’t just listen to us</p>
          <h1 className="text-5xl font-normal mt-4 font-millik leading-13 text-customBlack">
            Listen to what our users are saying
          </h1>
        </div>

        <div className="testimonial-row top-row grid grid-cols-4 gap-8  mb-10">
          {/* Top Row Testimonials */}
          <div className="testimonial slide-left  shadow-md p-4 ">
            <div className="flex items-center mb-4">
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
            </div>
            <p className="font-Modarat leading-6 text-l font-normal text-customBlack">
            “My daughter recently got accepted to her dream school in US,
                everything was amazing...until the tuition hit. Thankfully,
                Tuition by Flutterwave saved the day! Safe, secure transfer with
                tracking? 5 star, I highly recommend”
            </p>
            <div className="flex items-center mt-4">
              <img
                src={Avatar}
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h6 className="font-bold text-xl text-black">Chinma</h6>
                <p className="text-sm customLightGray">Nigeria</p>
              </div>
            </div>
          </div>

          <div className="testimonial slide-left  shadow-md p-4 ">
            <div className="flex items-center mb-4">
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
            </div>
            <p className="font-Modarat leading-6 text-l font-normal text-customBlack">
            “My daughter recently got accepted to her dream school in US,
                everything was amazing...until the tuition hit. Thankfully,
                Tuition by Flutterwave saved the day! Safe, secure transfer with
                tracking? 5 star, I highly recommend”
            </p>
            <div className="flex items-center mt-4">
              <img
                src={Avatar}
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h6 className="font-bold text-xl text-black">Chinma</h6>
                <p className="text-sm customLightGray">Nigeria</p>
              </div>
            </div>
          </div>



          <div className="testimonial slide-left  shadow-md p-4 ">
            <div className="flex items-center mb-4">
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
            </div>
            <p className="font-Modarat leading-6 text-l font-normal text-customBlack">
            “My daughter recently got accepted to her dream school in US,
                everything was amazing...until the tuition hit. Thankfully,
                Tuition by Flutterwave saved the day! Safe, secure transfer with
                tracking? 5 star, I highly recommend”
            </p>
            <div className="flex items-center mt-4">
              <img
                src={Avatar}
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h6 className="font-bold text-xl text-black">Chinma</h6>
                <p className="text-sm customLightGray">Nigeria</p>
              </div>
            </div>
          </div>


          <div className="testimonial slide-left  shadow-md p-4 ">
            <div className="flex items-center mb-4">
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
            </div>
            <p className="font-Modarat leading-6 text-l font-normal text-customBlack">
            “My daughter recently got accepted to her dream school in US,
                everything was amazing...until the tuition hit. Thankfully,
                Tuition by Flutterwave saved the day! Safe, secure transfer with
                tracking? 5 star, I highly recommend”
            </p>
            <div className="flex items-center mt-4">
              <img
                src={Avatar}
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h6 className="font-bold text-xl text-black">Chinma</h6>
                <p className="text-sm customLightGray">Nigeria</p>
              </div>
            </div>
          </div>

          

          {/* Bottom Row Testimonials */}
          
          </div>
        <div className="bottom-row slide-right testimonial grid grid-cols-4 gap-8 mb-16">
          {/* Top Row Testimonials */}
          <div className="testimonial  shadow-md p-4 slide-left">
            <div className="flex items-center mb-4">
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
            </div>
            <p>
            “My daughter recently got accepted to her dream school in US,
                everything was amazing...until the tuition hit. Thankfully,
                Tuition by Flutterwave saved the day! Safe, secure transfer with
                tracking? 5 star, I highly recommend”
            </p>
            <div className="flex items-center mt-4">
              <img
                src={Avatar}
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h6 className="font-bold">Chidi</h6>
                <p className="text-sm">Nigeria</p>
              </div>
            </div>
          </div>

          <div className="testimonial slide-right shadow-md p-4 ">
            <div className="flex items-center mb-4">
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
            </div>
            <p>
            “My daughter recently got accepted to her dream school in US,
                everything was amazing...until the tuition hit. Thankfully,
                Tuition by Flutterwave saved the day! Safe, secure transfer with
                tracking? 5 star, I highly recommend”
            </p>
            <div className="flex items-center mt-4">
              <img
                src={Avatar}
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h6 className="font-bold">John Doe</h6>
                <p className="text-sm">United States</p>
              </div>
            </div>
          </div>

          <div className="testimonial slide-right shadow-md p-4 ">
            <div className="flex items-center mb-4">
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
            </div>
            <p>
            “My daughter recently got accepted to her dream school in US,
                everything was amazing...until the tuition hit. Thankfully,
                Tuition by Flutterwave saved the day! Safe, secure transfer with
                tracking? 5 star, I highly recommend”
            </p>
            <div className="flex items-center mt-4">
              <img
                src={Avatar}
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h6 className="font-bold">Jane Smith</h6>
                <p className="text-sm">Canada</p>
              </div>
            </div>
          </div>

          <div className="testimonial slide-right shadow-md p-4 ">
            <div className="flex items-center mb-4">
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
            </div>
            <p>
            “My daughter recently got accepted to her dream school in US,
                everything was amazing...until the tuition hit. Thankfully,
                Tuition by Flutterwave saved the day! Safe, secure transfer with
                tracking? 5 star, I highly recommend”
            </p>
            <div className="flex items-center mt-4">
              <img
                src={Avatar}
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h6 className="font-bold">Alex Johnson</h6>
                <p className="text-sm">Australia</p>
              </div>
            </div>
          </div>

          {/* Bottom Row Testimonials */}
          
          </div>
          
        </div>
      
    </>
  );
}

export default Testimonial;
