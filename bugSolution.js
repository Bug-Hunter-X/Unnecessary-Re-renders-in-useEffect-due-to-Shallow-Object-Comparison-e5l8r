```javascript
import { useEffect, useState } from 'react';
import isEqual from 'lodash.isequal'; // Use a deep comparison library

function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Use deep comparison
    if (!isEqual(props.data, prevProps.data)) {
      setCount(prevCount => prevCount + 1);
    }
  }, [props.data]);

  return <div>Render count: {count}</div>;
}
```