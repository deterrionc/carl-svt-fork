import Header from "../../container/Header"

const topArticles = [
  { image: "/assets/img/card-list-1.jpg", tag: "svt news", title: "So the battles can be affected by the dust collapse", description: "This is War of the Week - delving into the lastest in the war in Ukraine" },
  { image: "/assets/img/card-list-2.jpg", tag: "new episode", title: "Wild chefs", description: "Six profiessional chefs compete to cook the best food over an open fire" },
  { image: "/assets/img/card-list-3.jpg", tag: "lotta edholm", title: "30 minutes", description: "Anders Holmberg's guest is education minister Lotta Edholm" },
  { image: "/assets/img/card-list-4.jpg", tag: "new drama comedy", title: "From the area", description: "Two words collide when Zeina is forced to move from the suburbs of Stockholm to a farm in Varmland" },
  { image: "/assets/img/card-list-5.jpg", tag: "News Directly", title: "Unique prosecution of terroist financing", description: "A man in his 40s is charged today with, among other things, aggravated extortion and attempted financing of terrorism" },
  { image: "/assets/img/card-list-6.jpg", tag: "lastest news", title: "The morning studio", description: "Today's most important news and analysis with frequent updates" },
]

const Home = () => {
  return (
    <div className="h-screen bg-svt">
      <div className="container mx-auto text-white">
        <Header />
        <div className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 py-3">
          {topArticles.map((item, index) =>
            <div key={index} className="m-1 width-calc bg-article-card">
              <img alt="show1" src={item.image} />
              <div className="p-2">
                <div className="text-base">{item.tag}</div>
                <h4 className="text-xl font-bold leading-6">{item.title}</h4>
                <div className="text-xs pt-2">{item.description}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home