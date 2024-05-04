import Header from "./Header"
import Footer from "./Footer"

// LayoutコンポーネントをApp.tsx等で使用する際に
// Layoutンポーネントで子コンポーネントを挟むと間に挟まれた要素はchildrenという特殊なporpsで渡される・・・型情報を定義する必要がある

type LayoutProps = {
  children: React.ReactNode; // childrenにはReactの用意している特殊な型を使う。returnの型情報は省略される場合が多いが必要なときはこれを使えば基本OK
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container">
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout