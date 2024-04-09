import { useWeatherStore } from "@/app/store/store"
import "./SortRemover.scss"


export const SortRemover = () => {
    const {sort, setSort, prevData, setPrevDataFiltered} = useWeatherStore( state => state)

    const copied = [...prevData]

    const ButtonHandler = () => {
        setSort(-1)
        setPrevDataFiltered(copied)
    }

    if (sort !== -1) {
        return(
            <div className="ButtonContainer">
                <a onClick={ButtonHandler} className="SortRemoverButton">
                    Remove Sorting
                </a>
            </div>
        )
    }
    else return <></>
}