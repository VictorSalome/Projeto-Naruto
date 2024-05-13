import { ClãsInfo } from "./components/content/clãsInfo";
import { HokagesInfo } from "./components/content/hokagesInfo";

export const ExploreWorldPage = () => {
  return (
    <>
      <div>
        <div>
          <HokagesInfo />
        </div>

        <div className="mt-5">
          <ClãsInfo />
        </div>
      </div>
    </>
  );
};
