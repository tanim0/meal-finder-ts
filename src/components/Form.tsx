type FormProps = {
  setMealName: React.Dispatch<React.SetStateAction<string>>; // useStateを使用しているのでreactが型推測できる
  getMealData: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;  // ユーザーが独自に定義したjsの関数 //React.FormEvent<HTMLFormElement>の部分はgetMealDataで引数にe入ってくるため指定
}

const Form = ({ setMealName, getMealData }: FormProps) => {
  return (
    <form onSubmit={getMealData}>
      <input onChange={(e) => setMealName(e.target.value)} type="text" name="mealName" placeholder="料理名を英語で入力" required />
      <button>検索</button>
    </form>
  )
}

export default Form