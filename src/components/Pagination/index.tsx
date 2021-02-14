import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';
import './style.css';
import leftArrow from '../../assets/svg/paginateArrowLeft.svg';
import rightArrow from '../../assets/svg/paginateArrowRight.svg';

type PaginationProps = {
  pageCount: number;
  changePage: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({ pageCount, changePage }) => {
  return (
    <ReactPaginate
      previousLabel={<img src={leftArrow} />}
      nextLabel={<img src={rightArrow} />}
      breakLabel={'...'}
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={5}
      containerClassName={'pagination'}
      pageClassName={'pageContainer'}
      pageLinkClassName={'pageLink'}
      activeClassName={'activePageContainer'}
      activeLinkClassName={'activePageLink'}
      onPageChange={(page) => changePage(page.selected)}
    />
  );
};
