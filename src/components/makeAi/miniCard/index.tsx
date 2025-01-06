import * as s from './style.css';
import Keyword from '../../experiences/keyword';

interface MiniCardProps {
  data: {
    date?: {
      start: string;
      end: string;
    };
    title: string;
    contents?: string;
    keywords?: string[];
  };
}

const MiniCard = ({ data }: MiniCardProps) => {
  const maxContentLength = 45;
  const maxTitleLength = 16;

  const trimText = (text: string, maxLength: number) =>
    text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

  const trimmedTitle = trimText(data.title, maxTitleLength);
  const trimmedContents = data.contents
    ? trimText(data.contents, maxContentLength)
    : '';
  return (
    <div className={s.Card}>
      {data.date && (
        <p className={s.DateRange}>
          {data.date.start} ~ {data.date.end}
        </p>
      )}
      <h2 className={s.CardTitle} title={data.title}>
        {trimmedTitle}
      </h2>
      <p className={s.CardContents}>{trimmedContents}</p>
      {data.keywords && <Keyword keywords={data.keywords} />}
    </div>
  );
};

export default MiniCard;