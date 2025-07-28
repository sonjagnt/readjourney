import { AddBook } from "../../components/AddBook/AddBook";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { FilterBar } from "../../components/FilterBar/FilterBar";

export const MyLibraryPage = () => {
  return (
    <div>
      MyLibraryPage
      <Dashboard>
        <AddBook />
      </Dashboard>
    </div>
  );
};
