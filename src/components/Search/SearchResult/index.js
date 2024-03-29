import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../../../context/contextProvider";
import Spinner from "../../Spinner";

function SearchResult() {
  let { data, loading, error, totalCount } = useContext(DataContext);

  if (loading) {
    return <Spinner />;
  }
  if (data) {
    return (
      <div className="w-[1140px] m-auto px-2">
        <h1 className="text-3xl mb-5">Total Count Result : {totalCount}</h1>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
          {data &&
            data.map((el) => {
              return (
                <Link to={`/${el.login}`} key={el.id}>
                  <div className="overflow-hidden shadow-lg rounded-lg relative mb-1 mb-6 w-64 h-64 m-auto">
                    <img
                      alt="avatar"
                      src={el.avatar_url}
                      className="rounded-lg"
                    />
                    <div className="absolute bg-gradient-to-b bg-opacity-60 from-transparent to-black w-full p-4 bottom-0">
                      <p className="text-white text-2xl nb-4">{el.login}</p>
                      <div className="flex justify-between">
                        <p className="text-sm text-gray-300 flex items-center">
                          <svg
                            width="10"
                            height="10"
                            fill="currentColor"
                            className="h-4 w-4"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                          </svg>
                          {el.login}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-lg text-center">{error && <div>{error}</div>}</div>
    );
  }
  return null;
}

export default SearchResult;
