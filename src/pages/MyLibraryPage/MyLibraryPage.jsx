import { AddBook } from "../../components/AddBook/AddBook";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { MyLibraryBooks } from "../../components/MyLibraryBooks/MyLibraryBooks";
import { RecommendedBooks } from "../../components/RecommendedBooks/RecommendedBooks";
import { Box } from "../../ui/Box/Box";

export const MyLibraryPage = ({ openModal }) => {
  console.log(typeof openModal);

  return (
    <section>
      <Dashboard>
        <AddBook onOpenModal={openModal} />
      </Dashboard>
      <Box>
        <MyLibraryBooks />
      </Box>
    </section>
  );
};
