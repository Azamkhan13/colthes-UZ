import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import {Login, Register, Worker, Category, Product, SinglePage} from '../pages';
import App from '../App';
import { Admin, User } from "../layout";
export default function Router(){
    const root = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
                <Route index element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/admin/*" element={<Admin/>}>
                <Route path="user" element={<User/>}/>
                <Route path="worker" element={<Worker/>}/>
                <Route path="product" element={<Product/>}/>
                <Route path="category" element={<Category/>}/>
                <Route path="singlePage" element={<SinglePage/>}/>
                </Route>
            </Route>
            
        )
    )

    return <RouterProvider router={root} />
}