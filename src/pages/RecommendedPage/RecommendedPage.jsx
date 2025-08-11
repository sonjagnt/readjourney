import { Link } from "react-router";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { RecommendedBooks } from "../../components/RecommendedBooks/RecommendedBooks";
import { Box } from "../../ui/Box/Box";
import s from "./RecommendedPage.module.css";

export const RecommendedPage = ({ openModal }) => {
  return (
    <section>
      <Dashboard>
        <FilterBar />
        <div className={s.workoutBox}>
          <h3>Start your workout</h3>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.circle}>1</span>
              <p>
                <span className={s.boldText}>Create a personal library:</span>{" "}
                add the books you intend to read to it.
              </p>
            </li>
            <li className={s.listItem}>
              <span className={s.circle}>2</span>
              <p>
                <span className={s.boldText}>Create your first workout:</span>{" "}
                define a goal, choose a period, start training.
              </p>
            </li>
          </ul>
          <Link to="/library" className="secondaryBtn">
            My library
          </Link>
        </div>
      </Dashboard>
      <Box>
        <RecommendedBooks onOpenModal={openModal} />
      </Box>
    </section>
  );
};
