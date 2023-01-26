import About from "../Pages/About";
import Add from "../Pages/Add/Add";
import Contact from "../Pages/Contact";
import Courses from "../Pages/Courses";
import Elements from "../Pages/Elements";
import Home from "../Pages/Home";
import Mainroot from "../Pages/Mainroot";
import News from "../Pages/News";

export const ROUTES = [
  {
    path: "/",
    element: <Mainroot />,
    children: [
{
path:"",
element:<Home/>

},
{
    path:"contact",
    element:<Contact/>  
},
{
    path:"about",
    element:<About/>  
},
{
    path:"courses",
    element:<Courses/>
},{
    path:"news",
    element:<News/>
},
{
    path:"elements",
    element:<Elements/>
},
{
    path:"add",
    element:<Add/>
}
    ],
  },
];
