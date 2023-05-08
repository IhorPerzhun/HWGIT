import MainBlog from "../MainBlog";
import MainNews from "../MainNews";
import './main.css'



function Main() {

  return (
    <main>
      <div className="container">
        <div className="main__wrapper">
          <MainBlog />
          <MainNews />
        </div>
      </div>
    </main>
    
  )
}

export default Main;