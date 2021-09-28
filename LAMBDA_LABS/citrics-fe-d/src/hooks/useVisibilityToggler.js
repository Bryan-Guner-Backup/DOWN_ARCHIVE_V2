import { useState } from 'react';

function useVisibilityToggler(
  component,
  altComponent = null,
  visibility = false
) {
  const [visible, setVisibility] = useState(() => visibility);
  return [visible ? component : altComponent, () => setVisibility(v => !v)];
}

export default useVisibilityToggler;
