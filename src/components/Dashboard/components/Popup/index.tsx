import { FC } from 'react';
import './styles.css';

type PopupProps = {
  show: boolean;
  elements: string[];
  stylesPopup:
    | {
        top: number;
        left: number;
      }
    | Record<string, unknown>;
};

export const Popup: FC<PopupProps> = (props) => {
  const classes: string[] = ['Popup', 'Popup--hide'];
  if (props.show) classes.pop();
  return (
    <div className={classes.join(' ')} style={props.stylesPopup}>
      {props.elements.map((element: string, index: number) => (
        <p className="PopupItem" key={index}>
          {element}
        </p>
      ))}
    </div>
  );
};
