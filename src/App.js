import Header from "./components/Header/Header";
import Lesson from "./pages/Lesson";
import { data } from "./helper/data";



function App() {
  return (
    <div >
<Header/>
<div className="section" >
{data.map(({name,image,age})=>(
<Lesson  name={name} image={image} age={age}/>
))}
</div>
    </div>
  );
}

export default App;
