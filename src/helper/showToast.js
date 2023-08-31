import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const showToast = (type, message) => {
    if (type === "success") {
        toast.success(message, {
            position: "top-center",
            autoClose: 2500,
            closeOnClick: false,
            pauseOnHover: false,
            theme: "dark",
        });
    } else {
        toast.error(message, {
            position: "top-center",
            autoClose: 2500,
            closeOnClick: false,
            pauseOnHover: false,
            theme: "dark",
        });
    }
};