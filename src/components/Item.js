import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import Empty from "./Empty";
import Searching from "./Searching";
import SingleItem from "./SingleItem";

const Item = ({ keyword, gotresult, setGotResult }) => {
  const [result, setResult] = useState(null);
  const { addToast } = useToasts();

  const getResult = async () => {
    if (keyword.length === 0) {
      //do nothing
    } else {
      setResult([]);
      addToast("Searching for your item..!!", { appearance: "info" });
      const details = await fetch(`${process.env.REACT_APP_PATH}${keyword}`, {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      });
      const data = await details.json();
      setResult(data);
      await setGotResult(true);
    }
  };

  useEffect(() => {
    getResult();
  }, [keyword]);

  if (gotresult === false) {
    return <Empty />;
  } else if (keyword.length > 0 && result === null) {
    return <Searching />;
  } else {
    return (
      <>
        {result.map((single) => {
          let key = Math.random();
          return (
            <SingleItem
              image={single.movie_thumb}
              key={key}
              title={single.title}
              year={single.release_year}
              type={single.type}
              imdb={single.score}
              providers={single.providers}
            />
          );
        })}
      </>
    );
  }
};

export default Item;
