import { Dashboard } from "../../components/Dashboard/Dashboard";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { RecommendedBooks } from "../../components/RecommendedBooks/RecommendedBooks";
import { Box } from "../../ui/Box/Box";

export const RecommendedPage = ({ openModal }) => {
  return (
    <section>
      <Dashboard>
        <FilterBar />
      </Dashboard>
      <Box>
        <RecommendedBooks onOpenModal={openModal} />
      </Box>
    </section>
  );
};
