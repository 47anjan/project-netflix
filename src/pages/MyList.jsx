import { useContext } from "react";
import { Link } from "react-router-dom";
import ListItem from "../components/ListItem";
import ListContext from "../context/listContext";

const MyList = () => {
  const { list } = useContext(ListContext);

  return (
    <div className="max-w-screen-lg mx-auto p-4 pt-16 ">
      {list.length === 0 ? (
        <h1 className="font-bold text-2xl text-center mt-5">
          The list is empty
        </h1>
      ) : (
        <div>
          <h1 className="font-bold text-xl mb-2">Total Items: {list.length}</h1>
          <section className=" min-h-[75vh] border rounded-md p-4 mt-4 flex flex-col ">
            {list?.map((item) => (
              <Link key={item?.id} state={item?.state} to="/details">
                <ListItem movie={item} />
              </Link>
            ))}
          </section>
        </div>
      )}
    </div>
  );
};

export default MyList;
