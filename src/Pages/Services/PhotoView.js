import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const PhotoViews = () => {
  return (
    <div>
      <PhotoProvider>
        <PhotoView src="">
          <img
            src="https://blog.boot.dev/img/800/Nodejs-vs-Javascript-min.webp"
            alt=""
          />
        </PhotoView>
      </PhotoProvider>
    </div>
  );
};

export default PhotoViews;
