Exemple:

```js
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Met à jour le titre de la fenêtre
    document.title = `nombre de clic : ${count}`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```
