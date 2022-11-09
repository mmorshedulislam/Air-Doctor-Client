import { useEffect } from "react";

const useSetTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Air Doctor`;
  }, [title]);
};
export default useSetTitle;
