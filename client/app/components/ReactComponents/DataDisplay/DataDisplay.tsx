import TableElement from "./TableElement";
import "./DataDisplay.scss";
import { useWeatherStore } from "@/app/store/store";
import { SortHandler } from "./SortHandler";

export const DataDisplay: React.FC = () => {
  const { prevDataFiltered, setPrevDataFiltered } = useWeatherStore(
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
              }}
            >
              City
            </th>
            <th
              onClick={() => {
                SortHandler(1, prevDataFiltered, setPrevDataFiltered);
              }}
            >
              Status Weather
            </th>
            <th
              onClick={() => {
                SortHandler(2, prevDataFiltered, setPrevDataFiltered);
              }}
            >
              Min Temperature
            </th>
            <th
              onClick={() => {
                SortHandler(3, prevDataFiltered, setPrevDataFiltered);
              }}
            >
              Max Temperature
            </th>
            <th
              onClick={() => {
                SortHandler(4, prevDataFiltered, setPrevDataFiltered);
              }}
            >
              Pressure
            </th>
            <th
              onClick={() => {
                SortHandler(5, prevDataFiltered, setPrevDataFiltered);
              }}
            >
              Humidity
            </th>
            <th
              onClick={() => {
                SortHandler(6, prevDataFiltered, setPrevDataFiltered);
              }}
            >
              Wind Speed
            </th>
            <th
              onClick={() => {
                SortHandler(7, prevDataFiltered, setPrevDataFiltered);
              }}
            >
              Wind Direction
            </th>
            <th
              onClick={() => {
                SortHandler(8, prevDataFiltered, setPrevDataFiltered);
              }}
            >
              Cloud Coverage
            </th>
            <th
              onClick={() => {
                SortHandler(9, prevDataFiltered, setPrevDataFiltered);
              }}
            >
              Sunrise Time
            </th>
            <th
              onClick={() => {
                SortHandler(10, prevDataFiltered, setPrevDataFiltered);
              }}
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
