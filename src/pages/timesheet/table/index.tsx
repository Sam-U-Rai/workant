import { FC, useMemo } from "react";
import { IDataTimesheets } from "../../../types";
import styles from "./style.module.css";

interface IProps {
  data: Partial<IDataTimesheets>[];
  monthId: number;
}

const TimesheetTable: FC<IProps> = ({ data,monthId }) => {

  const keysColumn = useMemo(
    () => Object.keys(data[0]) as (keyof IDataTimesheets)[],
    [data]
  );

  const dataFiltred = useMemo(()=>data.filter(({startTime,endTime})=>{
    return (
      monthId === -1 ||
      monthId === new Date(startTime || "").getMonth() ||
      monthId === new Date(endTime || "").getMonth()
    );
  }),[monthId])

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {keysColumn.map((key) => (
            <th>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataFiltred.map((item) => {
          return (
            <tr>
              {keysColumn.map((key) => (
                <th>
                  {key === "startTime" || key === "endTime"
                    ? new Date(item[key] || "").toDateString()
                    : item[key]}
                </th>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TimesheetTable;
