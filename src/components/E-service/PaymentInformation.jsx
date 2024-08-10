import TuitionHeader from "../Dashboard/PayTuition/TuitionHeader";
import TuitionButton from "../Dashboard/PayTuition/TuitionButton";
const PaymentInformation = ({ Next }) => {
  return (
    <div className="ml-[2.5rem]">
      <TuitionHeader
        count="2"
        Total="3"
        Header="E-Service Informmation"
        Paragraph="Provide the required information to finalize your course payment"
      />
      <form>
        <div className="flex flex-col">
          <label htmlFor="Course information" className="tuitionLabel ">
            Course Information
          </label>
          <input
            type="text"
            placeholder="Name of course"
            name=""
            className="tuitionSelect mb-[2rem]"
          />
          <label htmlFor="Course information" className="tuitionLabel">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your Udemy's username"
            name=""
            className="tuitionSelect mb-[2rem]"
          />
          <label htmlFor="Course information" className="tuitionLabel">
            Email address
          </label>
          <input
            type="email"
            placeholder="Enter your Udemy's email address"
            name=""
            className="tuitionSelect mb-[2rem]"
          />
          <label htmlFor="Course information" className="tuitionLabel">
            Course link
          </label>
          <textarea
            name=""
            className="w-[436px] mb-10 h-[146px] outline-none border border-[#CCCCCC] rounded-[4px] text-[#A1A4A8] p-[1.25rem]"
          ></textarea>

          <TuitionButton back="Back" forward="Continue" Next={Next} />
        </div>
      </form>
    </div>
  );
};

export default PaymentInformation;
