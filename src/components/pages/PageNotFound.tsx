import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { TextContent } from "@/constant/PageContent";

const PageNotFound = () => {
  return (
    <>
      <div className="h-[90vh]">
        <div id="grid-test" className="h-3/4 flex justify-center items-center flex-col flex-1">
          <div className="text-center m-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">{TextContent.PAGE_ERROR_TITLE}</h1>
            <p className="text-gray-500">{TextContent.PAGE_ERROR}</p>
          </div>
          <Button>
            <Link to={"/"}>{TextContent.LOGIN_PAGE}</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
