import React from 'react';
import './App.css';

const App: React.FC = () => {
  const array = [
    'When summer ended',
    'the leaves of snapdragons withered',
    'taking their shrill-colored mouths with them.',
    'They were still, so quiet. They were',
    'violet where umber now is. She hated',
    'and she hated to see',
    'them go. Flowers',
    '',
    'born when the weather was good - this',
    'she thinks of, watching the branch of peaches',
    'daring their ways above the fence, and further,',
    'two hummingbirds, hovering, stuck to each other,',
    'arcing their bodies in grim determination',
    'to find what is good, what is',
    'given them to find. These are warriors',
    '',
    'distancing themselves from history.',
    'They find peace',
    'in the way they contain the wind',
    'and are gone.',
  ];
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>Here is a poem:</h2>
      <List data={array}/>
    </div>
  );
};

export default App;


interface IList {
  data: string[];
}

const List: React.FC<IList> = (props: IList) => {
  const {data} = props;

  /*  The lambda function in the onClick here is less performant but I am doing so to save time. */
  return (
    <ul>
      {data.map((item) => <li onClick={() => alert(item)}>{item}</li>)}
    </ul>
  );
};
