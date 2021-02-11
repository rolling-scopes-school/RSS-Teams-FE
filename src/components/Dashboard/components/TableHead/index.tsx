import { FC } from 'react';
import './styles.css';

type TableHeadProps = {
  [key: string]: string[];
};

export const TableHead: FC<TableHeadProps> = ({ tableHeaders }) => (
  <thead className="TableHead">
    <tr className="TableHeadRow">
      {tableHeaders.map((tableHeader: string, index: number) => (
        <th className={`TableHeader TableItem--${index}`} key={index}>
          {tableHeader}
        </th>
      ))}
    </tr>
  </thead>
);
