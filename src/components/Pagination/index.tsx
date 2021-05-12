import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';
import './style.css';
import leftArrow from 'assets/svg/paginateArrowLeft.svg';
import rightArrow from 'assets/svg/paginateArrowRight.svg';

type PaginationProps = {
  pageCount: number;
  changePage: (page: number) => void;
  page: number;
};

export const Pagination: FC<PaginationProps> = ({ pageCount, changePage, page }) => {
  return (
    <ReactPaginate
      previousLabel={<img src={leftArrow} alt="Previous" />}
      nextLabel={<img src={rightArrow} alt="Next" />}
      breakLabel={'...'}
      pageCount={pageCount}
      initialPage={page}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      containerClassName={'pagination'}
      pageClassName={'pageContainer'}
      pageLinkClassName={'pageLink'}
      activeClassName={'activePageContainer'}
      activeLinkClassName={'activePageLink'}
      onPageChange={(page) => changePage(page.selected)}
    />
  );
};
