import { useLocation } from "react-router";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { Box } from "../../ui/Box/Box";
import { AddReading } from "../../components/AddReading/AddReading";

export const ReadingPage = () => {
  const location = useLocation();
  const { book } = location.state || {};

  return (
    <section>
      <Dashboard>
        <AddReading book={book} />
      </Dashboard>
      <Box>
        <h2>My Reading</h2>
        <div>
          <div>
            {book.imageUrl ? (
              <img src={book.imageUrl} alt="Book cover" />
            ) : (
              <img src="/icons-color/image.svg" alt="No book cover" />
            )}
          </div>
          <h5>{book.title}</h5>
          <p>{book.author}</p>
        </div>
      </Box>
    </section>
  );
};
