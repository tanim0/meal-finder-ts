type RecipeProps = { // props(ここではmealDataのデータ形式(mealDataというオブジェクトの中に各データが入っている)に合わせる)
  mealData: {
    id: string;
    name: string;
    instructions: string;
    img: string;
    source: string;
    area: string;
    category: string;
  }
}

// ↓ 多重構造になっている型定義を分割代入で記述
// const Recipe = ({mealData: {id, name, instructions, img, source, area, category}}) => {

//   return (
//     <>レシピ</>
//   )
// }

// ↓ 分割代入のデータ数が多いと改行を入れて書くことがある

const Recipe = (
  { mealData: {
    id,
    name,
    instructions,
    img,
    source,
    area,
    category,
  } }: RecipeProps) => {

  return (
    <>
    {id && // id(=レシピが存在する場合のみ表示)
      <div>
        <h2>{name}</h2>
        <p>エリア<span>{area}</span></p>
        <p>カテゴリー<span>{category}</span></p>
        <img src={img} alt="meal-image" />
        <p>{instructions}</p>
        <p>
          ソース
          <span>
            <a href={source}>{source}</a>
          </span>
        </p>
      </div>
    }
    </>
  )
}

export default Recipe