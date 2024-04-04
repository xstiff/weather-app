import { toast } from "react-toastify";
import "./FilteringAndSorting.scss";
import { useWeatherStore } from "@/app/store/store";
import { useState } from "react";

export const FilteringAndSorting = () => {
  const { prevData, setPrevDataFiltered } = useWeatherStore((state) => state);
  const [maxLenght, setMaxLenght] = useState(100);

  const HandleSearch = (e: { target: HTMLInputElement }) => {
    const val = e.target.value;
    setMaxLenght(100);

    const filteredData = prevData.filter((e, idx) => {
      return e.city.toLocaleLowerCase().startsWith(val.toLocaleLowerCase());
    });

    if (filteredData.length < 1) {
      setMaxLenght(val.length);
      toast.warn("No data matching that search!!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    }

    setPrevDataFiltered(filteredData);
  };

  return (
    <div className="FilteringAndSorting-container">
      <h1>Previous searches</h1>
      <input
        type="text"
        placeholder="Search for city"
        onChange={HandleSearch}
        maxLength={maxLenght}
        className={`${maxLenght !== 100 ? "active" : ""}`}
      />
    </div>
  );
};
