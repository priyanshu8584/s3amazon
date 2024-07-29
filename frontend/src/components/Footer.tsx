import { Link } from "react-router-dom"

export const Footer=()=>{
  return <div className="w-full  bg-slate-400 p-4 border rounded-md absolute">
   <ul className="flex justify-between">
     <Link to="/">1</Link>
     <Link to="/page2">2</Link>
     <Link to="/page3">3</Link>
     <Link to="/page4">4</Link>
     <Link to="/page5">5</Link>
     <Link to="/page6">6</Link>
   </ul>
  </div>
}