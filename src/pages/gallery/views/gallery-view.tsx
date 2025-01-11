import { useAtomValue } from "jotai";
import Form from "../components/form";
import { loginAtom } from "@/store";
import Photos from "../components/photos";

const GalleryView: React.FC = () => {
  const user = useAtomValue(loginAtom);

  return (
    <div className="p-3">
      {user && <Form />}
      <Photos />
    </div>
  );
};

export default GalleryView;
