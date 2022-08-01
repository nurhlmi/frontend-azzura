import axios from "axios";
import { atom, selector } from "recoil";
import { apiUrl } from "../variable/Url";

const badgeCarts = atom({
   key: "badgeCarts",
   default: selector({
      key: "default-badge-carts",
      get: async () => {
         let total = 0;
         try {
            const { data } = await axios.get(`${apiUrl}/carts`, {
               headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
               },
            });
            data.data.map((value) => (total = total + value.quantity));
         } catch {
            total = 0;
         }
         return {
            total,
         };
      },
   }),
});

export { badgeCarts };
