import { useState, useEffect } from "react";

// Define Hook
function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);
  return keyPressed;
}

// use the hook
const useKeyPressPage = () => {
  const happyPress = useKeyPress("q");
  const sadPress = useKeyPress("w");
  const robotPress = useKeyPress("e");
  const foxPress = useKeyPress("r");
  return (
    <div>
      <div>h, s, r, f</div>
      <div style={{ height: "30px" }}>
        {happyPress && "😊"}
        {sadPress && "😢"}
        {robotPress && "🤖"}
        {foxPress && "🦊"}
      </div>
    </div>
  );
};

export default useKeyPressPage;
