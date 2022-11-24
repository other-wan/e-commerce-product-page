import { FunctionComponent, ReactNode } from "react";

interface IListManager<P> {
  data: P[];
  renderItem: (item: P) => ReactNode;
  className?: { list: string; item: string };
}

const ListManager = <P,>({ data, renderItem, className }: IListManager<P>) => {
  return (
    <ul className={className?.list}>
      {data.map((item, index) => (
        <li key={index} className={className?.item}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

export default ListManager;
