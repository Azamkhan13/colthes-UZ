import { create } from "zustand";
import http from "../service/config";
import { toast } from "react-toastify";

interface useWorkerstoreInterfase {
  isLoader:boolean,
  data:any[],
  getWorkers:(payload:any)=> any,
  deleteWorks:(paylod:string)=>any,
  updateWorks:(paylod:any)=>any,
  postData:(paylod:any)=>any

}

const useWorkerstore = create<useWorkerstoreInterfase>((set) => ({
  isLoader: false,
  // count: 0,
  data: [],
  getWorkers: async (payload) => {
    try {
      set({ isLoader: true });
      const response = await http.get(
        `/workers?page=${payload.page}&limit=${payload.limit}`
      );
      if (response.status === 200) {
        set({ data: response?.data?.user });
        // set({count: response?.data?.total_count})
      }
      set({ isLoader: false });
    } catch (err) {
      console.log(err);
    }
  },
  deleteWorks: async (payload) => {
    try {
      set({ isLoader: true });
      const response = await http.delete(`/worker/${payload}`);
      if (response.status === 200) {
        set((state: any) => ({
          data: state.data.filter((x: any) => x.id !== payload),
        }));
        toast.success("user deleted");
      }

      set({ isLoader: false });
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong", { autoClose: 1000 });
      set({ isLoader: false });
    }
  },
  updateWorks: async (payload) => {
    try {
      set({ isLoader: true });
      const response = await http.put(`/worker`, payload);
      if (response.status === 200) {
        set({ data: response?.data?.user });
      }
      toast.success("Users have been updated");
      set({ isLoader: false });
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong", { autoClose: 1000 });
      set({ isLoader: false });
    }
  },
  postData: async (payload) => {
    try {
      set({ isLoader: true });
      const response = await http.post(`/worker`, payload);
      if (response.status === 201) {
        set((state: any) => ({
          data: [...state.data, response.data],
        }));
        toast.success("Users added");
        set({ isLoader: false });
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong", { autoClose: 1000 });
      set({ isLoader: false });
    }
  },
}));

export default useWorkerstore;
