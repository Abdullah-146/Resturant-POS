import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ProgressCard from "../components/ProgressCard";
import SubcribeCardTime from "../components/SubcribeCardTime";
import Tabs from "../components/Tabs";
import MenuIcon from "@mui/icons-material/Menu";
import "../components/Scrollbar.css";
import VerificationCard from "../components/VerificationCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const Verifications = () => {
  const [progressCards, setProgressCards] = useState([]);
  const [Credentials, setCredentials] = useState({});

  useEffect(() => {
    let mount = true;

    if (mount) {
      setProgressCards([
        {
          name: "Shaheer Ahmad",
          email: "shaheer@gmail.com",
          source:
            "data:image/jpeg;base64,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",
          time: "3.00 PM",
          username: "Raheel21",
          ph: "03485521564",
          location: "Newyork",
          Cnic: "4305-4542342-0",
          Cnic2: "4208-1561561-0",
          Date: "Aug 21,2022",
        },
        {
          name: "Nouman",
          email: "Noumi@gmail.com",
          source:
            "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg",
          time: "2.00 PM",
          username: "Raheel21",
          ph: "03485521564",
          location: "Newyork",
          Cnic: "4305-4542342-0",
          Cnic2: "4208-1561561-0",
          Date: "Aug 21,2022",
        },
        {
          name: "Huzayfah",
          email: "huzi@gmail.com",
          source:
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
          time: "4.00 PM",
          username: "Raheel21",
          ph: "03485521564",
          location: "Newyork",
          Cnic: "4305-4542342-0",
          Cnic2: "4208-1561561-0",
          Date: "Aug 21,2022",
        },
        {
          name: "Shaheer Ahmad",
          email: "shaheer@gmail.com",
          source:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVEhIREhUSERERERESEhIREhERERERGBQZGRgUGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjQhISQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ2MTQ0NDUxMTQxNDQ0NDQ0NDE0NDQ0MTQ0PTQxNDQ0NP/AABEIARMAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAIEBQYBBwj/xAA9EAACAQIDBgMFBQcDBQAAAAABAgADEQQSIQUGMUFRYSJxkRMygaGxI0JScsEHFTNi0eHwFCSyQ3OCkqL/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAJxEAAgICAQMFAAIDAAAAAAAAAAECEQMhEgQxQRMiMlFxYaEzgZH/2gAMAwEAAhEDEQA/AMsmHPWGp4U9YkkhI7J4haeGPWPGFM6hh1MOQuJHbBm0h4jAmW+sXsrw5BxKOls1ryXR2c0uqGGkxMNDkPgUVPZrXlhhsCykESyWjDosdicDlN2AjMQ7kSSEnPZmFhwM5jMOxlW2Ea82FahIb4XWFgolRRw7W4Rj4Vuk0CULRPRhYcWZ4YZukHWwpPKaE0oCokLFxZmWwJ6SO+DNuE0biR6ghY+LMu+HI5QeQ2Ok0FSneB/00TY1EzNVD0il9VwXacisfEfTcSbSEzNLGyfSx8CjRU1khFmfTaPeHXafeIZfKkKqSjTag6wibUHWAGjorJaLM1S2sOslptYdYAXoSEVJRrtYdYJt4Qh8RGWAUaVUjskztLeQNqB4ep0kqntxDAKLJ6cAySHV2yg4so8zaBG10PAg+Vz84BRZ5YxlkP8AeI6xjbRHWAyUywNRJHbaIgm2iIAdqpItRJ2pjxIz40QA6UjkSRjjBEMaICJLpFIzY0RQAwC3hkZpo9m7AD20Jl5S3LvyktgjBl36xhruOc3eI3Py8jM3tXY5pntBMZUDFP1jxi36w1HCZpOTY1xx1hyQcWVy41+sMmPfrJa7Ee/DSHqbKFMZm7f2gpJhxZ2jUawLMdR1kF6hZtOJPE8hJL8yCCpUjT8plYqNc26W+hlgFbFFdBc8rxqbTYH748m/ScFBrEAa6L6gf0MjVsMVHP8Azme0AJi4sN1ueJOpPxknA7Qc1MgPh+nxlKnf5A/W8ssGBcWBv3NoAWNfaLrI/wC9nknGU8yhiVDHQgWv2lZ7AyXoO5K/ejTh2k3eCTCEwq7Oc6AXhYUMbaLd4M7QaWtHdms40X1irbqYhRcqPnFYFQdoGN/eJjsTs90NmW0iGlHYqDnaJikY04oWFHuG7OzQtNTbUgTUU8KLcJB2Cn2aflH0l4qxRVoJMqcZhARwnne9mGADacjPUsSJhd8KFqTN5/QzNumVFWjBbLog2lwtIXAlBhahWxEmf685hKcSlI1dKioXhfoOZPSUO8TBGVCQCBmPUE6C0mYPH6ZmNsuszGPxQrV3fUjvyUaARQjTsqUk1RJw2FNZlVAx68zNLh9yybG+XzEu9y9kqlJahAzNr8OU072jcmCijFndFFuQb8Jn9qbruLhfFPSnEjVFk8maKETxzE7t1l1ynyErRh2VrEsjfzAj5z3A0QeIEz28O7yuhdAAwF/OCm/IpYl4MNgK5By1LZrWDEA38jJHsRfiP6yFTdc5pvprYHkDLPC0bsF1NuXUdppJ6MorZZ7L2YXtYadbTSbP2DZwSJP3foJ7NCO1/wCs09LDic/qNs2eNJbIeFwAA4CFxGADC1pYoloQidCdo5pKjzzbu7mcG0xdXdhwT/Se2YiiDK2ps8dJnK70XFryeN1N3XEU9Xq7NHSKTcivaWOwh9mn5R9JdoJUbEX7NPIS6QTePYwl3I2IExO+5tQPx+hm9qJMbvzQvQfsGP8A8mZyWyovR5ClSOSp4pGdSJ2kDmmrEi6wzXBHUWlThaR9qV+6DnqHteyLLDDkjzPyHWSNh4cVK9KmP+pUNSoeZVZN0jRK6PVN30Iw9MEa5RJTjWDxDolPKX9mgGtjlYi3AHl8Jjcc9EsWoV6tN76MKzuL91YkGZNpdzZRb7Gxe0CwlDsTFYhmyVStQcqi6XHcdZZ7RquiEqLnkJHIviHZYslwfKZD22JdvtMQtFSfdpqpa35mmh2Ujqv8Zq6/eVwmcd1Kgehgmn5G014PKN66IWvUZdLMeHnG7OxNS2ZSGy8VPG3UdZbftAoBMTmHu1FDcNL6g39JRbIqZWt6Dt+G/wBJvHcTmlqR6Bu9t4KFFS6dDxXjfiNPWegYLHoygqwYHhYzyakdAV4H/LHkZOwe03pN4fd5r93zA5TCWN3cTZZFVSPWUrgx3tRMJQ3oXg1185NXeFDwYesIuS7omSi+zNa1QQLuJV4bF5gD1kl2Fpak2ZNUEdxFK2u/SKK2Oiz2IfAnkJdrMpu3jA1NNeQmlp1ZtGSoykth3mT3yF6FT8jf8TNLVrACYffDaIyMgPEEeukmTt0OKPL6lG5jqOG1lgqXj8mstgiu2kClMsPvDL5S3/Z1TvjLn7lE/AkgSr24brTT8Ty2/Z4D/qqj/dIanfv7w+kiTpGsNs9C23sdMSmSoGZQb2V2T1ynWY3Gbm0wb0xWQj8Lk/M6z0dOGsiYl1AudJn+OjVb01ZS7rbMen/EZn5DOFBA+EsdsUyyMF0Y3seksdluHp5wLLchSfvWNr+t4ytTJViBmIvYDn2hXtC3f4eZPu/UdiXq1EYniiAAjpob/OWuxN3KlKorjEVCn3kKKA3xH11mlwtRHAZeB5EWIPMEdZLVAIttd9FaT7bPO/2m0f4TdmHzE8+w1SzeX0no/wC0VwRTQ8Tn/T+k8xDansSPhNMb0YZVUrNxsmsHQjmRfyYcf0hqtYactJQ7DxNnXo2nx5Szx6+G44ay0iZPQWpilMhvUFxY21lYKxnGrG8dEWezbJt7NPyr9JcBARPPd3NvA01UmxUATRvtsKpNxwmaXgp/ZLxKRTL4jeEtzEU04EciDsHbRojKdV+k1Cb2oBxmBjleHpphyZtMZvWWFlFpmcXXZzdjeAVoRUlRgkS5MSJCGnCIkkJTlcSeRmd4fD7Pzf6CT9w9qolVaLghqtRTTYcM2UgqZF3tSyoeYc+lv7zNYauyFXT36brUXzU3HzEynG9HRjlWz6CqVrC8zuLxhq1CgYKi/wARmIVQOlzJ+Fxa1qNOqmq1EDD4jh8OEyG1dmsrtisntaaVMr02YhbA8e2l9eoE5HbdHdjSNomJp5UCV1GT3QlRMrdiDxnUxTXH2mVhfw3p63685VYF9m1kXPTWgRZStWmqFbqTq406a36dYDFYPZVJQ5dH9z3GeoTme1gFvyv6ynFjTx/z/wACMzUapvfLUN78sxP6y5p17iYDB0/bVr4Y1kwiOt85OV25WU+7r8dO82lLwjsJm7i6BpGM/aJXVCpuM+SyjncsdbTzejxt5zQb5bQFfGVCDdVX2Sm+l11J/wDYkfCUCDXvoZ1441E4csuUi0woIAI6+h5TRl89MEdNexmcwzD4Noex5GXuyXuSjaHX15yl3E1ohPhf85QL4aad8D2kepge01owbM6gZTdSQe0JWxtUixY2lo+DkWphIcRcirOIcHjOSTWw8UKCy0Dw1NZyjRk6jh4ijlNJKp04WlQkynRjsVAadKHWnJKUoX2ULCjJ7Xo+0zlvdVQB66/p6TFUjY34jg02+8j5Kbgc9Wty14TEE5KiAj3h4h+Y8Jm9my0bv9ne18pbB1DddalE9j7yfr6z0ajhEKVEYXSoTf4/rPHty6Z/1tNRrZapF+gW1u09V2ZtIXNKp4W5ZtD/AH8xMJJKR0QbrRSYvCYmiSiIlalclVK03Xje+VtVPYG0hJhMTWbIaKYdCfEypTpkeTG7Dh92bmqqmAFIAyN/Z1rqLW4q/uiLQ2clOmlOmLIhuTzZuZMy++u3Rh6ZRD9rUBCW+6Obn9O80m0doW8FPVuZ5D+88s37Q+0psSSzBrk/KEEpSownJqLfkyYQnvzPWJH1EK6+FW/FpIoFjY9Z1nCWNCoL2PPSW+CYuyqpy1NQp4eNdR6i4+Mz7D5/USXs2qRUF+R+fCKikzebH2kH+zqDJUU5SOF26W5GW74cdJkqiE2rA5iq+K/vMg78yBqD28psNm1c9MMdWGh8xLjIiUfJAq4YSFVw0vqtOQq1OOzOjPV8NFLKskULCgVBJYUUkWgJY0RCh2Gp05KRIymslIsAHIkI1O4Iva4tccRHKsezBRdiFA5nSIatukY/ebZdVgiqhampLH2YuS3InrM+2Fpmm6uCKgIYXXxXH3T0m02tvKiArTsW/E3D4DnMJi8azOWvfMdW+HKRJ0d8OkyNKUlS/stNzCtPG02ci1QMgJ5FuHqRPRsZhAx1APmAZ5Cj3u3DUZbcrcLTZ7E30Flp4q4K2C1QLgj+cde8wnFvZ2S6VwipR2XmI9onuMQByOokZMTVbi1x2FpajFpUXMrK6n7ykESOzKOE55aM122iPksCecwe/AvkbmDabvGYpEQs7KthzInmO8e0PbVDl9xdF795phi7sjJG1RQAX0vp9DOZdQOkclr2Iv8AKFqIOFuPe87Dz2qJ+2MAaZTo6LUX0sw9R85FWyCm1751u3Y5iLfKW2J2ulfDU0YZa9AgBuTpaxF/Q27SoanfL0BvpyMANFgK59mSdQUqf8SP1mo3fu1EOp15jkwmW2TUTI1OocuZGQMeC34S62XjfYWp1AUDaK//AE3v0bhftEimaS4IBHORaywtJ/etwuGHxH9oOtKMSurCcjq07GAygJY0BIFASxoiOxEymJ3GY1KKZ6l7XAsBcknoIGviVpoXblwHU9Ji9s7Sape505DkB2ibO7pOjlmuT0l/ZeYjfMAH2dM35FyLegme2ht2tVPiaw/CuglSzGNBibPVxYIYuy2Gzk8TfzitoRyJv5RiwqiQdSipKmJDYWgnMMYxxBouS1RyjiXQ3R3Q/wArESQ22cQRY1Xt5iQyk4UkOKfg5pQvujlau7++zN5kmR3EOVg2WOjKUNESpT5iDdWPO9vWS2WDNOUmcGXp+W0RLm4/zSSqdT1+sG9KCsRHZyShKLplthqov4hp16TR4AB0yKTkbRqZ8SHkbA8PhMbTrEcZf7v44U3F9VJB15d4wUW9Gm3ersPaUahuabGmGPEquo+NjLWtKXYThzWfma9Ru41sPkJcu2neNGUlsg1p2NrmdjIFQljQlXRaTRWCqzHgqk+ggUlboot5NoZqnswfDT0825zO1HvOYjEFmZjxZifUwBeZtn0mNrHjUF4HXnQI1YRRAqOxywimDEeDA6I6HmMM7eNMBtnMsaVjooiGkDKxZY+KBPFAmSMKQ5EaRAiUEANODajJREaRAxlhjJbRCNGGQnQdI9jEpjsw9CFmo3dwaVVcZnSqviDIxUkd+st8O7o5o1Dma2anUtbOvA3HUaeszW7mKyV6Z5Mch8j/AHtNVtoWCVBxp1A3/gfCw9D8pSOHq8ShNV2aBVxOzlZpyUcRHotObXrZcPU7gL6mcomRt4m/2/m6wZrhV5F+mTYzgnCYgZmz2eWw4MMBIgbUdxJijSI6sL5WcE6DGxXga2PvOGcigOzsUV4oAciiM5eBNiM5EZy8CWzto1o5YyrwJ6CIUvjYFuMaDETxjbxnG3sk0HIII4ggjzE9Arn2lL86D5iedK03mzql6FL/ALYlROXrdwT+mcqcBfjFG1mnZZ5ZHpNIW8bfYr+cfSHpNIG8T/ZoOrfpB9jbB/kRnrzhMUYxmZ6blSHUm8Q68BLPgJT0j4185alomdHRy9r/AERnLxGNvGjqchwM7eMvO3gCkOvO3jLxXiHyHExpMRM4TATkdvOXnLxpMZm5BAZx+HwMaDFiDZCe0kHL2t/SISvHAwCGFBlHmxnaCKZtdlv/ALen+WYhTNjsp/8Ab0/KNGfVO4L9D1WigqrRSzzgFMyv3hPhp+Z+kmo0g7e9xD0b9IPsa4XU0UV41zOkwbGZndKWh+F99ZY5pWYY+MfGTy0GdPSSqD/RxM5eMzRZoHRzCXivBhp28BqQS8V4zNFmiHyH3nLxt4i0YOQmM5eNvOXiM3IIs5iz4D5j6xAweMbwW6kQFOVY3+MhLCgwKwgMZ5kXQRTNZs42oU/K8ySa6ddJsVTKiL0UD5Soi6iXtSB1XnYOrFKOIYjSJtt/swP5oZWkPbB8C9jBmmL5IpyYxjOmDYzM6pM6rWIPQyaWkCWeJp2Wmw0zoCR3EC8M6tAs05mg805eBt6gXNOh4G8V4hrIHzTueAzRZoFeqHzxpaCzRZoCeULmizQWaLNAXqBlaBxj8B01j1kSq12J7xonPkqFfYljxBKYVYHLFk7ZVHPVQcgcx8hNU5lPu/RsGqHn4R5Syd5SMs0rdfQ14oNmilGJHWRNrHwDzh0aRdqaoOxiZeP5IqCYwmdaMkGsmOprcgcbkCaDbNgKSAWypr8ZB2NhCaisdADeWG8L+NAOS6x+C8LqaKZlgyIUGIjt6RHTKKe0CivH2EUCKGXivHRQFX8jYo6dtAfFjQI5EiAjgYFxivIVbDjwle8mVD4TIJMEZdS9pDlhFghJWDp5nUdT8oGMWaTZ6ZKSg8SLn4wrNGlvlBs0s55O3YmaKCZooCBKZKoUle6sAwtwMhK0l4VrXky7FQ+SB19n0hwWVeJVV90AS0xLykxb6zONs6JPRZ7HrAFi3BVvIWLr56jP1OnlA0KtkYfi0+EaTNGVhVLkKK8beK8Rq5HSZycvFeBNjtIrxt4oD5HbzsbFeAWOvFOCdvAaZzNcEc9ZFhz70KtMNxhdGE7l/oirLXY9PxF+QFvjArs4n3SD5y3oUgihRy4+ca2ZyfFBi0GzRM0GzSjEa7RQbGKADacl4fnFFJl2Kh8kBxMpsTxiikRNpdjlPhOiKKWzaPxRwzkUURLFOCKKAHZyKKAxRRRQEdnRFFAaGc/SSMLFFB9iC3wsM0UUcexhk7gmg2iilEA2iiigB//Z",
          time: "3.00 PM",
          username: "Raheel21",
          ph: "03485521564",
          location: "Newyork",
          Cnic: "4305-4542342-0",
          Cnic2: "4208-1561561-0",
          Date: "Aug 21,2022",
        },
        {
          name: "Nouman",
          email: "Noumi@gmail.com",
          source:
            "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg",
          time: "2.00 PM",
          username: "Raheel21",
          ph: "03485521564",
          location: "Newyork",
          Cnic: "4305-4542342-0",
          Cnic2: "4208-1561561-0",
          Date: "Aug 21,2022",
        },
        {
          name: "Huzayfah",
          email: "huzi@gmail.com",
          source:
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
          time: "4.00 PM",
          username: "Raheel21",
          ph: "03485521564",
          location: "Newyork",
          Cnic: "4305-4542342-0",
          Cnic2: "4208-1561561-0",
          Date: "Aug 21,2022",
        },
      ]);

      return () => (mount = false);
    }
  }, []);

  useEffect(() => {
    if (progressCards.length > 0) {
      setCredentials(progressCards[0]);
    }
  }, [progressCards]);
  const [show, setshow] = useState(false);

  const handleClick = () => {
    setshow(true);
    console.log(show);
  };
  return (
    // side bar code
    <div className="flex flex-1 font-Poppins bg-[white] max-h-screen min-h-screen overflow-hidden ">
      {/* side bar main div */}
      <div
        className={`flex flex-col bg-[#f6f6f6f] min-h-full px-[1rem] pt-[2rem] pl-[2rem]  xs:w-full xs:${
          !show ? "flex" : "hidden"
        } md:flex md:w-[30%]  `}
        style={{ background: "#f6f6f6" }}
      >
        <p className="text-[2rem] text-[#2f2f2f] font-Poppins leading-[3rem] font-semibold">
          Customer Details
        </p>
        {/* text input */}
        <div className="relative mb-4 w-full ">
          <span>
            <SearchIcon className="text-[#2f2f2f] text-3xl  absolute left-[0.9rem] bottom-[1.29rem] " />
          </span>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Order Details"
            className="bg-[#ffffff] w-full h-[4rem] rounded-[0.625rem] p-2 mt-[1rem] border-none pl-[2.8rem] flex-[7] outline-none"
          />
        </div>
        {/* text input end */}

        <div className="overflow-y-auto">
          {/* mapping cards */}
          {progressCards.map(
            ({
              name,
              email,
              source,
              time,
              username,
              ph,
              location,
              Cnic,
              Cnic2,
              Date,
            }) => {
              return (
                <div
                  className="mt-4"
                  onClick={() =>
                    setCredentials({
                      name: name,
                      email: email,
                      source: source,
                      time: time,
                      username: username,
                      ph: ph,
                      location: location,
                      Cnic: Cnic,
                      Cnic2: Cnic2,
                      Date: Date,
                    })
                  }
                >
                  <SubcribeCardTime
                    name={name}
                    email={email}
                    source={source}
                    time={time}
                    numbool={Credentials.email}
                    handleClick={handleClick}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
      {/* verification card div (right div) below */}
      <div
        className={`xs:${show ? "flex" : "hidden"} md:flex flex-col w-full   `}
      >
        <div className="font-Poppins leading-10 text-[2rem] font-semibold mt-[2.2rem] pl-6 ">
          <div onClick={() => setshow(false)} className="md:hidden mr-3">
            <ArrowBackIosIcon />
          </div>
          Details
        </div>
        <VerificationCard
          source={Credentials.source}
          name={Credentials.name}
          email={Credentials.email}
          username={Credentials.username}
          ph={Credentials.ph}
          Cnic={Credentials.Cnic}
          Cnic2={Credentials.Cnic2}
          date={Credentials.Date}
          location={Credentials.location}
        />
      </div>
    </div>
  );
};

export default Verifications;
