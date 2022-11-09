import { Label, Pagination, Select } from "flowbite-react";
import React, { useEffect, useState } from "react";
import useSetTitle from "../../CustomHooks/useSetTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  useSetTitle("Services");
  const [services, setServices] = useState([]);
  const [count, setCount] = useState(0);
  const [perPage, setPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(count / perPage);

  useEffect(() => {
    fetch(
      `http://localhost:5000/services?perPage=${perPage}&currentPage=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setServices(data.services);
      });
  }, [perPage, currentPage]);

  return (
    <div>
      <div className="section-heading my-10">
        <p className="text-2xl text-center text-[#9EC23C]">Our Services</p>
        <h2 className="text-2xl lg:text-6xl text-center font-bold">
          {" "}
          Psychological Services
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 lg:px-0">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>

      <div className="text-center my-10">
        <p>
          Current Page: {currentPage + 1}. Per Page: {perPage}
        </p>
        {[...Array(pages).keys()].map((num) => (
          <button
            onClick={() => setCurrentPage(num)}
            className="py-1 px-2 text-xl bg-red-200 border border-r-slate-500"
          >
            {num + 1}
          </button>
        ))}
      </div>

      <div id="select">
        <div className="mb-2 block">
          <Label htmlFor="countries" value="Per Page Show" />
        </div>
        <Select
          onChange={(event) => setPerPage(event.target.value)}
          className="w-32"
          id="countries"
          required={true}
        >
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
          <option value={20}>20</option>
        </Select>
      </div>

      {/*       <div className="flex items-center justify-center text-center">
        <Pagination
          currentPage={1}
          layout="pagination"
          onPageChange={onPageChange}
          showIcons={true}
          totalPages={1000}
          previousLabel="Go back"
          nextLabel="Go forward"
        />
      </div> */}
    </div>
  );
};

export default Services;
