import React, {useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import './App.css';


const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};



function App() {
  const [items, setItems] = useState( Array.from({length: 5}));

  const fetchMoreData = () => {
      setTimeout(()=> {
          setItems(items.concat(Array.from({length: 5})))
      }, 1500);
  };

  return (
   <div>
       <div>
           <InfiniteScroll
               dataLength={items}
               next={fetchMoreData}
               hasMore={true}
               loader={<h4>Loading...</h4>}
           >
               {items.map((i, index) => (
                   <div style={style} key={index}>
                       div - #{index}
                   </div>
               ))}
           </InfiniteScroll>
       </div>
   </div>
  );
}

export default App;
