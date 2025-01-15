import { useGetTourById } from "@/react-query/query/tours";
import { useParams } from "react-router";
import Loading from "@/components/loading";
import InfoImg from "#/single-tour/components/info-img";
import Info from "#/single-tour/components/info";
import Map from "#/single-tour/components/map";
import Currency from "#/single-tour/components/currency";

const DetailTourView: React.FC = () => {
  const { id } = useParams();
  const { data: detailTour } = useGetTourById(Number(id));

  if (!detailTour) {
    return (
      <div className="flex h-screen items-center justify-center text-gray-500">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b p-4">
      <div className="mt-10 w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-2xl">
        <InfoImg detailTour={detailTour} />
        <div className="p-6">
          <Info detailTour={detailTour} />
          <Currency detailTour={detailTour} />
          <Map detailTour={detailTour} />
        </div>
      </div>
    </div>
  );
};

export default DetailTourView;
