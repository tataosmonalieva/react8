import React, {useState} from "react";
import {useSearchParams} from "react-router-dom";

const Pagination = ({onClick}) => {
    const newArr = new Array(10).fill(0)
    const [pageParam] = useSearchParams('page')
    const [active, setActive] = useState(+pageParam.get('page') || 1)
console.log(active)


    const handleChange = (e) => {
        setActive(Number(e))
        onClick(Number(e))
    }

    return (
        <div>
            <button
                disabled={active === 1}
                onClick={() => handleChange(active - 1)}
            >Prev</button>
            {
                 newArr.map((item, index) =>
                    <button
                         style={{background: active ===  index + 1 ? `red`: `white`}}
                    onClick={() => handleChange(index + 1)}
                    key={index}
                    >
                        {index + 1}
                    </button>
                )
            }
            <button
                disabled={active === 10}
                onClick={() => handleChange(active + 1)}
            >Next</button>
        </div>
    )

}
export default Pagination;