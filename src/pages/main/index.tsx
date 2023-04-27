import { useContext } from "react";
import { GlobalContext } from "../../App";
import MainPageBlock from "./block";
import styles from "./style.module.css"

const MainPage = () => {
  const { dataTimesheets, dataUser } = useContext(GlobalContext);

  return (
    <div className={styles.wrapper}>
      {dataUser.map((user) => {
        return (
          <MainPageBlock
            data={dataTimesheets.filter(({ userId }) => userId === user.id)}
            user={user}
          />
        );
      })}
    </div>
  );
};

export default MainPage;
