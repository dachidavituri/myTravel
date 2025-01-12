import { useAtomValue } from "jotai";
import Form from "#/gallery/components/form";
import { loginAtom } from "@/store";
import Photos from "#/gallery/components/photos";

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
