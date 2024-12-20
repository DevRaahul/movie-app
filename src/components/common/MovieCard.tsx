import { FC } from "react";
import { Card, CardTitle, CardDescription, CardContent } from "../ui/card";
import { ICardComponent } from "@/constant/interface";
import { useGlobalContext } from "@/context/GlobalContext";

const MovieCard: FC<ICardComponent> = (props) => {
  const [globalData] = useGlobalContext();
  const { imgUrl } = globalData;

  return (
    <Card className="m-2 p-2" key={props.id} data-testid={`movie-${props.id}`}>
      <img
        src={imgUrl + props.imgSrc}
        alt="Movie 1"
        width="200"
        height="300"
        className="object-cover w-full h-60"
        style={{ aspectRatio: "200/300", objectFit: "cover" }}
      />
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold">{props.title}</CardTitle>
        <div className="text-md text-gray-600 dark:text-gray-400"> Date: {props.release_date}</div>
        <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
          <span>Popularity: {props.vote_count}</span>
        </CardDescription>
        <CardDescription className="text-sm text-gray-500 dark:text-gray-400">Rating:{props.vote_average}</CardDescription>
        <div />
      </CardContent>
    </Card>
  );
};

export default MovieCard;
