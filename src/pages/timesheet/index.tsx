import { ChangeEvent, HtmlHTMLAttributes, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IDataTimesheets, IDataUser } from "../../types";
import styles from "./style.module.css";
import TimesheetTable from "./table";
import closeImg from "../../assets/close.svg";

interface ILocation {
  state?: {
    user: IDataUser;
    data: IDataTimesheets[];
  };
}

const dataMonth = [
  { value: -1, text: "All" },
  { value: 0, text: "January" },
  { value: 1, text: "February" },
  { value: 2, text: "March" },
  { value: 3, text: "April" },
  { value: 4, text: "May" },
  { value: 5, text: "June" },
  { value: 6, text: "July" },
  { value: 7, text: "August" },
  { value: 8, text: "September" },
  { value: 9, text: "October" },
  { value: 10, text: "November" },
  { value: 11, text: "December" },
];

const TimesheetPage = () => {
  const { data = [], user } = (useLocation() as ILocation).state || {};
  const navigate = useNavigate();

  const [monthId, setMonthId] = useState(-1);

  const onChangeMonth = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setMonthId(parseInt(target.value));
  };

  if (!user || !data)
    return <div>cannot view without data or info about user</div>;

  return (
    <div>
      <div className={styles.wrapperHeader}>
        <div>
          <div className={styles.wrapperAvatar}>
            <img src={user.avatar?.link || ""} />
          </div>
          <div
            className={styles.name}
          >{`${user.firstName} ${user.lastName}`}</div>
        </div>
        <div className={styles.wrapperCloseImg} onClick={() => navigate("/")}>
          <img src={closeImg} />
        </div>
      </div>

      <select
        className={styles.picker}
        onChange={onChangeMonth}
        aria-label="Default select example"
      >
        {dataMonth.map(({ value, text }) => (
          <option value={value}>{text}</option>
        ))}
      </select>
      <div className={styles.wrapperTable}>
        {data.length === 0 ? (
          <div>Empty data</div>
        ) : (
          <TimesheetTable
            data={data.map(
              ({ id, userId, companyId, approvalPersonId, ...props }) => props
            )}
            monthId={monthId}
          />
        )}
      </div>
    </div>
  );
};

export default TimesheetPage;
