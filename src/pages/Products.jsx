import React, { useState } from "react";
import Table from "../components/Table";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EditIcon from "@mui/icons-material/Edit";
import SubcribeCardTime from "../components/SubcribeCardTime";
import CreateCouponModal from "../components/CreateCouponModal";

const Products = () => {
  const [choice, setChoice] = useState("drivers");
  const [modal, setModal] = useState(false);

  const [products, setProducts] = useState([
    {
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/1c/68/34/58/carro-chefe-da-casa-criado.jpg",
      name: "Burger",
      price: "5.00$",
    },
    {
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/1c/68/34/58/carro-chefe-da-casa-criado.jpg",
      name: "Zinger Burger",
      price: "5.00$",
    },
  ]);

  const ProductComponent = ({ product }) => {
    return (
      <div className="flex flex-col w-[30%] min-w-[150px] mr-5 relative   ">
        <img src={product.image} className="w-full  rounded-t-lg " />

        {/* <div className="bg-white w-full py-2  absolute top-[55.8%] rounded-t-3xl "></div> */}
        <div className="top-1  right-1 absolute ">
          <EditIcon sx={{ color: "#C90505", width: 18, height: 18 }} />
        </div>

        <div className="bg-white w-full p-5  rounded-lg ">
          <div className="flex justify-center items-center flex-col">
            <p className="font-Poppins font-medium text-[1.25rem] text-[#2F2F2F]">
              {product.name}
            </p>
            <p className="font-Poppins font-bold text-[2.25rem] text-[#2F2F2F]">
              {product.price}
            </p>
            {/* make add buttun bg green */}
            <div className="flex justify-center items-center bg-[#35B368] text-[#FFF] rounded-[5px] font-Poppins font-medium text-[1.25rem] py-2 px-14 " onClick={()=> setSelected([...selected ,product]) }  >
              Add
            </div>
          </div>
        </div>
      </div>
    );
  };
  const ProductComponentSelected = ({ product }) => {
    return (
      <div className="flex flex-row max-h-[100px] w-[30%] min-w-[150px] mr-5 relative   ">
        <img src={product.image} className="w-full  rounded-t-lg " />

   

        <div className="bg-white w-full p-5  rounded-lg ">
          <div className="flex justify-center items-center flex-col">
            <p className="font-Poppins font-medium text-[1rem] text-[#2F2F2F]">
              {product.name}
            </p>
            <p className="font-Poppins font-bold text-[1.2rem] text-[#2F2F2F]">
              {product.price}
            </p>
    
          </div>
        </div>
      </div>
    );
  };

  ////
  const [show, setshow] = useState(false);
  // selected use state
  const [selected, setSelected] = useState([]);

  const handleClick = () => {
    setshow(true);
    console.log(show);
  };
  const [progressCards, setProgressCards] = useState([]);
  const [Credentials, setCredentials] = useState({});
  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div className="flex flex-1 font-Poppins bg-[white] max-h-screen min-h-screen overflow-hidden ">
      {modal && <CreateCouponModal handleClick={handleCloseModal} />}
      {/* side bar main div */}
      <div
        className={`flex flex-col bg-[#f6f6f6f] min-h-full px-[1rem] pt-[2rem] pl-[2rem]  xs:w-full xs:${
          !show ? "flex" : "hidden"
        } md:flex md:w-[22%]  `}
        style={{ background: "#f6f6f6" }}
      >
        <p className="text-[2rem] text-[#2f2f2f] font-Poppins leading-[3rem] font-semibold">
          Order Details
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
          {selected.map((product) => {
            return (
              <div className="mt-4">
                <ProductComponentSelected product={product} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-col px-12 py-11 xs:w-full lg:w-[70%]">
        <div>
          <p className="font-Poppins font-semibold text-[2rem] mb-9">
            Products
          </p>
        </div>
        <div className="flex">
          {/* //////////  Search Bar///////////// */}
          <div className="flex items-center shadow-[0px_14px_39px_#0000000D] w-full border bg-[#ffffff] rounded-[10px] pl-5">
            <SearchIcon className="text-[#2f2f2f] text-3xl" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search ,Your desired products"
              className=" w-full h-[4rem] rounded-r-[10px] p-2  border-none  outline-none"
            />
          </div>
          {/* ////////////// Search Button /////////// */}
          <div className="flex justify-center items-center bg-[#2F2F2F] text-[#FFF] rounded-[10px] font-Poppins font-medium text-[1.25rem] py-4 px-14 ml-5">
            Search
          </div>
        </div>
        <div
          onClick={() => setModal(true)}
          className="py-4 bg-[#0066FF] max-w-[150px] font-Poppins text-white cursor-pointer flex justify-center items-center rounded-md text-[14px] font-normal mt-4 ml-3 "
        >
          + Create Product
        </div>
        {/* //////////// Slider Div ///////////// */}
        <div className="flex flex-row border-[#2F2F2F17]  px-3 my-14 flex-wrap  ">
          {products.map((product) => (
            <ProductComponent product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
