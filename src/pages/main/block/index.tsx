import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IDataTimesheets, IDataUser } from "../../../types";
import styles from "./style.module.css";

interface IProps {
  data: IDataTimesheets[];
  user: IDataUser;
}

const MainPageBlock: FC<IProps> = ({ data, user }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        navigate("/timesheet", { state: { data, user } });
      }}
    >
      <div className={styles.wrapperHeader}>
        <div className={styles.wrapperAvatar}>
          <img src={user.avatar?.link || ""} />
        </div>
        <div
          className={styles.name}
        >{`${user.firstName} ${user.lastName}`}</div>
      </div>
      <div className={styles.wrapperInfo}>
        <div>
          <div>position:</div>
          <div>{user.position}</div>
        </div>
        <div>
          <div>email:</div>
          <div>{user.email}</div>
        </div>
        <div>
          <div>phone:</div>
          <div>{user.phone}</div>
        </div>
      </div>
    </div>
  );
};

export default MainPageBlock;
