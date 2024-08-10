import Nigeria from "../../assets/Icons/Nigeria.svg";
import Arrow from "../../assets/Icons/Arrrow-down.svg";
import eyeOpen from "../../assets/Icons/eyeOpen.svg";
import eyeClose from "../../assets/Icons/eyeClose.svg";
import Button from "../Auth/Button";
import { Error } from "../../constants/ErrorMessage";
import { useState, useEffect } from "react";
import { useSignupContext } from "../../context/SignupContext";
import axios from "axios";
import { base_URL } from "../../config/api_url";
import Loading from "../Auth/Loading";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { signupData, setSignupData } = useSignupContext();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showpassword, setShowPassword] = useState(false);
  const [countries, setCountries] = useState([]);
  const [state, setState] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "+",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const validateEmail = (value) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value);
  const validateName = (value) => /^[a-zA-Z\-']{3,}$/.test(value.trim());
  const validatePassword = (value) =>
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-Z._\=\:\*\&\^\%\$\@\#\/-\w]{8,}$/.test(
      value
    );

  const handleChange = (event) => {
    const { name, value } = event.target;
    const isValid =
      name === "email"
        ? validateEmail(value)
        : name === "first_name" || name === "last_name"
        ? validateName(value)
        : name === "password"
        ? validatePassword(value)
        : true;

    if (name === "phone_number") {
      let formattedPhoneNumber = value;

      if (selectedCountry && !value.startsWith(`+${selectedCountry.code}`)) {
        formattedPhoneNumber = `+${selectedCountry.code}`;
      }

      setState((prevState) => ({ ...prevState, [name]: formattedPhoneNumber }));
      setSignupData((prevState) => ({
        ...prevState,
        [name]: formattedPhoneNumber,
      }));
    } else {
      setState((prevState) => ({ ...prevState, [name]: value }));
      setSignupData((prevState) => ({ ...prevState, [name]: value }));
    }

    if (!isValid) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }

    setErrorMessage((prev) => ({
      ...prev,
      [name]: isValid ? "" : Error[name],
    }));
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showpassword);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const formattedCountries = response.data.map((country) => ({
          code: country.ccn3,
          flagUrl: country.flags.svg,
        }));
        setCountries(formattedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  //  useEffect(() => {
  //    setCountries([
  //      { name: "United States", code: "1", flagUrl: "path/to/us_flag.png" },
  //      { name: "Nigeria", code: "234", flagUrl: "path/to/ng_flag.png" },

  //    ]);
  //  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userData = await axios.post(`${base_URL}users/signup`, signupData);
     
      navigate("/signin");
      localStorage.setItem("email", JSON.stringify(userData.data.email));
      localStorage.setItem(
        "first_name",
        JSON.stringify(userData.data.first_name)
      );
      localStorage.setItem(
        "last_name",
        JSON.stringify(userData.data.last_name)
      );
      alert("Signup Success");
    } catch (error) {
      alert(error.response.data.detail);
      setLoading(false);
    }
 
  };

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (country) => {
    setSelectedCountry(country);
    const phoneNumber = `+${country.code}`;
    setState((prevState) => ({ ...prevState, phone_number: phoneNumber }));
    setSignupData((prevState) => ({
      ...prevState,
      phone_number: phoneNumber,
    }));
    setIsOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="pt-[3rem]">
        <label className="moderat-font">Email</label> <br />
        <input
          type="email"
          name="email"
          value={state.email}
          placeholder="Enter email here"
          onChange={handleChange}
          className={`input-style w-[81%] h-[48px] ${
            errorMessage.email ? "error-border" : ""
          }`}
          required
        />
        <div className="flex  py-[1.5rem]">
          <div>
            <label className="moderat-font">First Name</label>
            <br />
            <input
              type="text"
              name="first_name"
              value={state.first_name}
              placeholder="Enter First Name here"
              onChange={handleChange}
              className={`input-style h-[48px] w-[92%] ${
                errorMessage.first_name ? "error-border" : ""
              }`}
              required
            />
          </div>
          <div>
            <label className="moderat-font"> Last name</label>
            <br />
            <input
              type="text"
              name="last_name"
              value={state.last_name}
              placeholder="Enter your last name"
              onChange={handleChange}
              className={`input-style w-[84%]  h-[48px] ${
                errorMessage.last_name ? "error-border" : ""
              }`}
              required
            />
          </div>
        </div>
        <div>
          <label className="moderat-font">Password</label> <br />
          <input
            type={showpassword ? "text" : "password"}
            name="password"
            value={state.password}
            placeholder="Choose your password"
            onChange={handleChange}
            className={`input-style w-[81%]   h-[48px] ${
              errorMessage.password ? "error-border" : ""
            }`}
            required
          />
          <span className="eyeIcon" onClick={handlePasswordVisibility}>
            {showpassword ? (
              <img src={eyeOpen} alt="eye icon" />
            ) : (
              <img src={eyeClose} alt="eye icon" />
            )}
          </span>
        </div>
        <p className="text-red-600" style={{ fontSize: "14px" }}>
          {errorMessage.password}
        </p>
        <div className="pb-[0.7rem] pt-5">
          <label className="moderat-font"> Phone Number</label> <br />
          <div className="flex gap-0">
            <div className="dropdown-container absolute">
              <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedCountry ? (
                  <div className="dropdown-selected">
                    <img
                      src={selectedCountry.flagUrl}
                      alt={`${selectedCountry.name} flag`}
                      width={20}
                    />
                    <span>
                      {selectedCountry.name} ({selectedCountry.code})
                    </span>
                  </div>
                ) : (
                  <div className="dropdown-selected">
                    <img src={Nigeria} alt="Nigeria Flag" width={20} />
                  </div>
                )}
                <img src={Arrow} alt="Arrow down icon" className="arrow-icon" />
              </div>
              {isOpen && (
                <div className="dropdown-list">
                  {countries.map((country, index) => (
                    <div
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleSelect(country)}
                    >
                      <img
                        src={country.flagUrl}
                        alt={`${country.name} flag`}
                        width={20}
                      />
                      <span>
                        {country.name} ({country.code})
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <input
              type="tel"
              className="input-style w-[54.9%] h-[48px] pl-[4rem]  "
              name="phone_number"
              value={state.phone_number}
              onChange={handleChange}
              placeholder="+ Country Code Phone Number"
              required
            />
          </div>
        </div>
      </div>
      {/* </div> */}

      <div>
        {loading && <Loading text="Loading..." />}
        {!loading && (
          <Button
            text="Sign Up"
            handleSubmit={handleSubmit}
            disable={disabled}
          />
        )}
      </div>
    </form>
  );
};
export default SignupForm;
