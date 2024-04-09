import TableElement from "./TableElement";
import "./DataDisplay.scss";
import { useWeatherStore } from "@/app/store/store";
import { SortHandler } from "./SortHandler";

export const DataDisplay: React.FC = () => {
  const { prevDataFiltered, setPrevDataFiltered, sort, setSort } = useWeatherStore(
    (state) => state
  );

  return (
    <div className="DataDisplay-Container">
      <table>
        <thead>
          <tr>
            <th
              onClick={() => {
                SortHandler(0, prevDataFiltered, setPrevDataFiltered);
                setSort(0)
              }}

              className={sort == 0 ? "active" : ""}
            >
              City
            </th>
            <th
              onClick={() => {
                SortHandler(1, prevDataFiltered, setPrevDataFiltered);
                setSort(1)
              }}

              className={sort == 1 ? "active" : ""}

            >
              Status Weather
            </th>
            <th
              onClick={() => {
                SortHandler(2, prevDataFiltered, setPrevDataFiltered);
                setSort(2)
              }}
              className={sort == 2 ? "active" : ""}
            >
              Min Temperature
            </th>
            <th
              onClick={() => {
                SortHandler(3, prevDataFiltered, setPrevDataFiltered);
                setSort(3)
              }}
              className={sort == 3 ? "active" : ""}
            >
              Max Temperature
            </th>
            <th
              onClick={() => {
                SortHandler(4, prevDataFiltered, setPrevDataFiltered);
                setSort(4)
              }}
              className={sort == 4 ? "active" : ""}
            >
              Pressure
            </th>
            <th
              onClick={() => {
                SortHandler(5, prevDataFiltered, setPrevDataFiltered);
                setSort(5)
              }}
              className={sort == 5 ? "active" : ""}
            >
              Humidity
            </th>
            <th
              onClick={() => {
                SortHandler(6, prevDataFiltered, setPrevDataFiltered);
                setSort(6)
              }}
              className={sort == 6 ? "active" : ""}
            >
              Wind Speed
            </th>
            <th
              onClick={() => {
                SortHandler(7, prevDataFiltered, setPrevDataFiltered);
                setSort(7)
              }}
              className={sort == 7 ? "active" : ""}
            >
              Wind Direction
            </th>
            <th
              onClick={() => {
                SortHandler(8, prevDataFiltered, setPrevDataFiltered);
                setSort(8)
              }}
              className={sort == 8 ? "active" : ""}
            >
              Cloud Coverage
            </th>
            <th
              onClick={() => {
                SortHandler(9, prevDataFiltered, setPrevDataFiltered);
                setSort(9)
              }}
              className={sort == 9 ? "active" : ""}
            >
              Sunrise Time
            </th>
            <th
              onClick={() => {
                SortHandler(10, prevDataFiltered, setPrevDataFiltered);
                setSort(10)
              }}
              className={sort == 10 ? "active" : ""}
            >
              Sunset Time
            </th>
            <th data-type="Rainfall">Rainfall</th>
            <th data-type="Snowfall">Snowfall</th>
          </tr>
        </thead>
        <tbody>
          {prevDataFiltered.map((el, idx) => (
            <TableElement key={idx} data={el} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
