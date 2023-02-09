import { useApiDispatch, useApiSelector } from "../hooks/useReduxTs";
import { useEffect, useState } from "react";
import { climateSearch } from "../store/actions/climateAction";
import { Link } from "react-router-dom";

export const Table = () => {
    const { climas, error, loading } = useApiSelector((state) => state.climate);
    const dispatch = useApiDispatch();
    const [pageSize, setPageSize] = useState(10);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(climateSearch(pageSize, page))
    }, [])

    return (
        <div>
            {loading && <h1>Loading...</h1> ?
                error && <h1>Error...</h1> :
                <table className="table">
                    <caption className="table_caption">Climas</caption>
                    <thead className="table_head">
                        <tr className="table_row">
                            <th className="table_head_cell">_ID</th>
                            <th className="table_head_cell">Cityid</th>
                            <th className="table_head_cell">name</th>
                            <th className="table_head_cell">state</th>
                            <th className="table_head_cell">probability of precip</th>
                            <th className="table_head_cell">relative humidity</th>
                            <th className="table_head_cell">Last report time</th>
                            <th className="table_head_cell">LLUEVE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {climas.map((item: any) => (
                            <tr key={item._id} className="table_row">
                                <td className="table_cell" ><Link to={`details/${item._id}`}>{item._id}</Link></td>
                                <td className="table_cell">{item.cityid}</td>
                                <td className="table_cell">{item.name}</td>
                                <td className="table_cell">{item.state}</td>
                                <td className="table_cell">{item.probabilityofprecip}</td>
                                <td className="table_cell">{item.relativehumidity}</td>
                                <td className="table_cell">{item.lastreporttime}</td>
                                <td className="table_cell">{item.probabilityofprecip > 60 || item.relativehumidity > 50
                                    ?
                                    "Si llueve"
                                    :
                                    "No llueve"
                                }</td>
                            </tr>
                        ))}
                        <div>
                            {`Total de registros: ${climas.length}`}
                            <ul className="pagination">
                                <li><a>1</a></li>
                                <li><a>2</a></li>
                            </ul>
                        </div>
                        <input type="number" onChange={(e) => { setPageSize(parseInt(e.target.value)) }} placeholder="10" />
                    </tbody>
                </table>

            }

        </div>
    )
}
