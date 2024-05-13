import { Worker, Category, Product } from "../pages";
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

interface dataNavInterface {
    title: string;
    path: string;
    icon: JSX.Element;
    component: JSX.Element 
}

const  dataNav: dataNavInterface[] = [
    {
        title: "Worker",
        path: "worker",
        icon: <BrandingWatermarkIcon/>,
        component: <Worker />
    },
    {
        title: "Product",
        path: "product",
        icon: <ModelTrainingIcon />,
        component: <Category />
    },
    {
        title: "Category",
        path: "category",
        icon: <ProductionQuantityLimitsIcon/>,
        component: <Product />
    }
]


export default dataNav;