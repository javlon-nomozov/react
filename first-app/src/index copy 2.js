import ReactDOM from "react-dom/client";
import React, { useEffect } from 'react';

function MyComponent(props) {
  useEffect(() => {
    // Get the query parameter 'img' from the URL
    console.log(window.location.search);
    const params = new URLSearchParams(window.location.search);
    const imgUrl = params.get('img');

    // Use imgUrl as needed, for example:
    console.log(`Image URL:${imgUrl}:`);
  }, []);

  return (
    <div>
      <h1>My Component</h1>
      {/* Your component's content */}
    </div>
  );
}


// export default MyComponent;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyComponent />);