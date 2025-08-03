import { AddBook } from "../../components/AddBook/AddBook";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { RecommendedBooks } from "../../components/RecommendedBooks/RecommendedBooks";
import { Box } from "../../ui/Box/Box";

export const MyLibraryPage = ({ openModal }) => {
  return (
    <section>
      <Dashboard>
        <AddBook onOpenModal={openModal} />
      </Dashboard>
    </section>
  );
};
