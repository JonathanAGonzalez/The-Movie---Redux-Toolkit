import { useEffect } from 'react';

export const useChangeTitle = (title) => {
  useEffect(() => {
    window.document.title = title;
  }, [title]);
};
