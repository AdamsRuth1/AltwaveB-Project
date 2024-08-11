import { Link } from "react-router-dom";

const SignInFooter = ({ text, navigate, to, footerText, className }) => {
  return (
    <div className="flex flex-col items-center px-4 py-6 lg:px-8 lg:py-8">
      <div className="w-full max-w-md text-center mb-4">
        <p className="text-sm md:text-base text-gray-600">
          {text}
          <Link
            to={to}
            className="text-blue-800 font-semibold"
          >
            {navigate}
          </Link>
        </p>
      </div>
      <div className="w-full max-w-md text-center">
        <p className={`text-xs md:text-sm text-gray-500 ${className}`}>
          By clicking “{footerText}”, I acknowledge that I have read and do
          hereby accept the terms and conditions in the Flutterwave's
          <span className="underline"> Term’s of Use</span> and
          <span className="underline"> Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default SignInFooter;
