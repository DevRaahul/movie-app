import { Search } from "lucide-react";
import { Input } from "../ui/input";

const HomeContainer = () => {
  return (
    <div className="border-black border-2">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <div className="relative">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
            <Search className="h-4 w-4" />
          </div>
          <Input id="search" type="search" placeholder="Search..." className="w-full rounded-lg bg-background pl-8" />
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
