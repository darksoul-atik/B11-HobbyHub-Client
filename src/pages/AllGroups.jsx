import Groups from "../components/Groups";
import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { Helmet } from "react-helmet";
import GradientShadowButton from "../utils/GradientShadowButton";

const AllGroups = () => {
  const initialGroups = useLoaderData();
  const [groups, setGroups] = useState(initialGroups);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, _setPostPerPage] = useState(6);

  const lastGroupIndex = currentPage * postPerPage;
  const firstGroupIndex = lastGroupIndex - postPerPage;
  const currentGroups = groups.slice(firstGroupIndex, lastGroupIndex);

  const totalPages = Math.ceil(groups.length / postPerPage);

  return (
    <div>
      <Helmet>
        <title>All Groups</title>
        <meta name="All Groups" content="Helmet application" />
      </Helmet>

      {/* All Group Containers */}
      <div className="mt-5 mb-5 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {currentGroups.map((group) => (
          <Groups key={group._id} group={group} setGroups={setGroups} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8 mb-5">
        
        {/* Prev Button */}
        <GradientShadowButton
          onClick={() => {
            if (currentPage === 1) return;
            setCurrentPage(currentPage - 1);
          }}
          disabled={currentPage === 1}
          className="px-4 py-1 rounded-md border text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
        >
          Prev
        </GradientShadowButton>



        {/* Page Numbers */}
        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num + 1)}
            className={`px-4 py-1 rounded-md border text-xs font-medium
              ${
                currentPage === num + 1
                  ? "bg-cpink text-xs dark:bg-cpurple text-white "
                  : "hover:bg-gray-100"
              }`}
          >
            {num + 1}
          </button>
        ))}

        {/* Next Button */}
        <GradientShadowButton
          onClick={() => {
            if (currentPage === totalPages) return;
            setCurrentPage(currentPage + 1);
          }}
          disabled={currentPage === totalPages}
          className="px-4 py-1 rounded-md border text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
        >
          Next
        </GradientShadowButton>

        
      </div>
    </div>
  );
};

export default AllGroups;
