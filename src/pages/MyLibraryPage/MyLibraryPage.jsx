import { AddBook } from "../../components/AddBook/AddBook";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { RecommendedBooks } from "../../components/RecommendedBooks/RecommendedBooks";
import { Box } from "../../ui/Box/Box";

export const MyLibraryPage = () => {
  return (
    <section>
      MyLibraryPage
      <Dashboard>
        <AddBook />

        <RecommendedBooks />
      </Dashboard>
    </section>
  );
};
