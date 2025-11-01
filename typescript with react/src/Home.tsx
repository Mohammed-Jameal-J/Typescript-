import React from 'react'


interface HomeProps {
    input: number;
    setInput: React.Dispatch<React.SetStateAction<number>>;

}

const Home: React.FC<HomeProps> = ({ input, setInput }) => {
  return (
    <div>
      <h2>Home</h2>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
    </div>
  )
}

export default Home