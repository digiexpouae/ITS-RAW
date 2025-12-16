import { Preview } from "@/function";
import ENDPOINTS from "@/utils/ENDPOINTS";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import {X} from "lucide-react"
function PressReleasePreview({ pressReleaseId,setShowPreview, open }) {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const [edit,setEdit]=useState(false)
  const { getToken } = useAuth();

  useEffect(() => {
    if (!open || !pressReleaseId) return;

    const fetchPreview = async () => {
      try {
        setLoading(true);
        const token = await getToken();
        const response = await Preview(
          ENDPOINTS.OTHER.PRS,
          pressReleaseId,
          token
        );
const res=response
        console.log("PreviewResponse", response);
setPreview(res);
      setEdit(true) // must be HTML string
      } catch (error) {
        console.error("Preview error", error);
        setPreview(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPreview();
  }, [open, pressReleaseId]);

   useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // Lock body scroll
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open])
useEffect(()=>{

console.log("preview Data",preview)

},[preview])


  if (!open) return null;

  return (
      <div className="h-screeen fixed inset-0 backdrop-blur-xs overflow-y-auto flex flex-col justify-center items-center   w-full">

        <div className=" bg-white mb-4 relative w-[70%] rounded flex flex-col items-center justify-center">

     <div className="absolute right-4 top-4 cursor-pointer" onClick={()=>setShowPreview(false)}>   <X size={20} /></div>
          <span className="font-medium text-center mt-6 text-xl">Press Release Preview</span>
        

        <div className="w-full">
          {loading ? (
            <div className="flex justify-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600" />
            </div>
          ) : edit ? (
            <div className=" w-full">
              <div className="p-6">
                <iframe
                  className="w-full h-[70vh]"
                  srcDoc={preview}
                />
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-red-500">
              Failed to load preview
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PressReleasePreview;
