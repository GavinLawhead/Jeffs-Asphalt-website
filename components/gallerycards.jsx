import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";

export const Gallerycards = () => {
  const { store, actions } = useContext(Context);
  let history = useHistory();
  return (
    <div class="row flex">
      <div class="col-lg-4 col-sm-6">
        <div class="thumbnail">
          <img src="https://picsum.photos/1000/1000?random=7" />
        </div>
      </div>
      <div class="col-lg-4 col-sm-6">
        <div class="thumbnail">
          <img src="https://picsum.photos/1000/1000?random=8" />
        </div>
      </div>
      <div class="col-lg-4 col-sm-6">
        <div class="thumbnail">
          <img src="https://picsum.photos/1000/1000?random=9" />
        </div>
      </div>
      <div class="col-lg-4 col-sm-6">
        <div class="thumbnail">
          <img src="https://picsum.photos/1000/1000?random=10" />
        </div>
      </div>
      <div class="col-lg-4 col-sm-6">
        <div class="thumbnail">
          <img src="https://picsum.photos/1000/1000?random=11" />
        </div>
      </div>
      <div class="col-lg-4 col-sm-6">
        <div class="thumbnail">
          <img src="https://picsum.photos/1000/1000?random=12" />
        </div>
      </div>
      <div class="col-lg-4 col-sm-6">
        <div class="thumbnail">
          <img src="https://picsum.photos/1000/1000?random=13" />
        </div>
      </div>
      <div class="col-lg-4 col-sm-6">
        <div class="thumbnail">
          <img src="https://picsum.photos/1000/1000?random=14" />
        </div>
      </div>
      <div class="col-lg-4 col-sm-6">
        <div class="thumbnail">
          <img src="https://picsum.photos/1000/1000?random=15" />
        </div>
      </div>
    </div>
  );
};
