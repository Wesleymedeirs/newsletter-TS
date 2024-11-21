import { useState } from "react"
import ArticlesList from "./components/ArticleList/ArticlesList"
import Header from "./components/Header/Header"
import Form from "./components/Form/Form"

function App() {
  const [user, setUser] = useState<{ nome: string; email: string } | null>(null)
  const temUser = Boolean(user)
  return (
    <div className="h-screen">
      <Header user={user ? { name: user.nome } : undefined}/>
      {temUser && <ArticlesList />}
      {!temUser && <Form onSubmit={setUser}/>}
    </div>
  )
}

export default App
