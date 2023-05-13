import { memo } from "react";
import Pagination from "react-js-pagination";
export interface PagingInterface {
  currentPage: number;
  total: number;
  limit: number;
  updatePage: (page: number) => void;
}

const Paging = memo((props: PagingInterface) => {
  return (
    <div className={`${props.total < props.limit ? "hidden" : ""}`}>
      <Pagination
        activePage={parseInt(props.currentPage as any)}
        itemsCountPerPage={props.limit}
        totalItemsCount={props.total}
        pageRangeDisplayed={4}
        onChange={(page: number) => props.updatePage(page)}
        disabledClass="hidden"
        itemClass={`page-link w-10 h-10 bg-secondary/50 duration-500 rounded-2xl items-center justify-center flex mr-2 hover:bg-violet-600 border border-white`}
        linkClass="text-white w-full h-full flex items-center justify-center"
        activeClass="w-10 h-10 bg-secondary/100 shadow-md shadow-secondary rounded-2xl items-center justify-center flex mr-2 hover:bg-violet-600"
        firstPageText={<span>{"<<"}</span>}
        lastPageText={<span>{">>"}</span>}
      />
    </div>
  );
});

Paging.displayName = "Paging";
export default Paging;
