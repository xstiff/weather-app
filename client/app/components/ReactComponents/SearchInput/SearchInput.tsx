import { useState } from "react";
import "./SearchInput.scss";
import { TWeatherQueryElement } from "../../Types/Types";
import { LineWave } from "react-loader-spinner";
import { useWeatherUpdater } from "../../Hooks/WeatherHook";
import { WeatherAPI } from "../../API/OpenWeatherAPI";
import { toast } from "react-toastify";

const SearchResultElement = ({ x }: { x: TWeatherQueryElement }) => {
  const useWeather = useWeatherUpdater();

  const UpdateWeather = () => {
    useWeather(x.location);
  };

  const clickHandler = () => {
    const el = document.querySelector(".SearchBox-Input") as HTMLInputElement;
    UpdateWeather();

    if (el) el.value = "";

    toast.info("Updating city...", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <a onClick={clickHandler}>
        {x.location}{" "}
        <span className="lonlat">
          ({x.lat}, {x.lon})
        </span>
      </a>
    </>
  );
};

export const SearchInput = () => {
  const [active, setActive] = useState(false);
  const [searchResults, setSearchResults] = useState<TWeatherQueryElement[]>(
    []
  );
  const SearchFunction = async (x: { target: HTMLInputElement }) => {
    const value = x.target.value;

    if (value.length < 3) {
      setSearchResults([]);
      return;
    }

    const data = (await WeatherAPI.searchEngine(
      value
    )) as TWeatherQueryElement[];
    data.map((x) => console.log(x));
    setSearchResults(data);
  };

  const handleFocus = () => {
    setActive(true);
  };
  const handleBlur = () => {
    setTimeout(() => setActive(false), 100);
  };

  return (
    <>
      <div className="SearchBox">
        <p>
          OpenWeatherMap API only allows for 60 requests / minute in free tier
        </p>
        <div className="SearchBox-Input-Container">
          <input
            className="SearchBox-Input"
            type="text"
            onChange={SearchFunction}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search for city..."
          />
        </div>

        <div className="SearchBox-Results-Container">
          {active ? (
            <>
              {searchResults.map((x, key) => {
                return <SearchResultElement x={x} key={key} />;
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

<LineWave
  visible={true}
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="line-wave-loading"
  wrapperStyle={{}}
  wrapperClass=""
  firstLineColor=""
  middleLineColor=""
  lastLineColor=""
/>;
