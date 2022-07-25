import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";

export const Servicecards = () => {
  const { store, actions } = useContext(Context);
  let history = useHistory();
  return (
    <>
      <div class="allservicecards">
        <div class="servicecardsleft">
          <div class="row">
            <div class="col-sm-6">
              <div class="card border-0">
                <div class="row card-body">
                  <div class="col-sm-6">
                    <h5 class="card-title">Service Name</h5>
                    <p class="card-text">
                      Service description for awesome service traffic
                    </p>
                    <a href="#" class="btn btn-primary">
                      Read More
                    </a>
                  </div>
                  <img
                    class="col-sm-6"
                    src="https://picsum.photos/1000/1000?random=12"
                    alt="sans"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* < />!-- CARD TWO left align image --> */}
        <div class="servicecardsright">
          <div class="row">
            <div class="col-sm-6">
              <div class="card border-0">
                <div class="row card-body">
                  <img
                    class="col-sm-6"
                    src="https://picsum.photos/1000/1000?random=13"
                    alt="sans"
                  />
                  <div class="col-sm-6">
                    <h5 class="card-title">Service Name</h5>
                    <p class="card-text">
                      Service description for awesome service traffic
                    </p>
                    <a href="#" class="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* < />!-- CARD THREE right align image--> */}
        <div class="servicecardsleft">
          <div class="row">
            <div class="col-sm-6">
              <div class="card border-0">
                <div class="row card-body">
                  <div class="col-sm-6">
                    <h5 class="card-title">Service Name</h5>
                    <p class="card-text">
                      Service description for awesome service traffic
                    </p>
                    <a href="#" class="btn btn-primary">
                      Read More
                    </a>
                  </div>
                  <img
                    class="col-sm-6"
                    src="https://picsum.photos/1000/1000?random=14"
                    alt="sans"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* < />!-- CARD FOUR left align image --> */}
        <div class="servicecardsright">
          <div class="row">
            <div class="col-sm-6">
              <div class="card border-0">
                <div class="row card-body">
                  <img
                    class="col-sm-6"
                    src="https://picsum.photos/1000/1000?random=15"
                    alt="sans"
                  />
                  <div class="col-sm-6">
                    <h5 class="card-title">Service Name</h5>
                    <p class="card-text">
                      Service description for awesome service traffic
                    </p>
                    <a href="#" class="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* < />!-- CARD FIVE right align image--> */}
        <div class="servicecardsleft">
          <div class="row">
            <div class="col-sm-6">
              <div class="card border-0">
                <div class="row card-body">
                  <div class="col-sm-6">
                    <h5 class="card-title">Service Name</h5>
                    <p class="card-text">
                      Service description for awesome service traffic
                    </p>
                    <a href="#" class="btn btn-primary">
                      Read More
                    </a>
                  </div>
                  <img
                    class="col-sm-6"
                    src="https://picsum.photos/1000/1000?random=16"
                    alt="sans"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-deck">
        <div class="card border-0">
          <img
            class="card-img-top"
            src="https://picsum.photos/1000/1000?random=4"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card border-0">
          <img
            class="card-img-top"
            src="https://picsum.photos/1000/1000?random=5"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card border-0">
          <img
            class="card-img-top"
            src="https://picsum.photos/1000/1000?random=6"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
