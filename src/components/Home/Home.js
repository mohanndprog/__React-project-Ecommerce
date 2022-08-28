import React, { Fragment } from "react";
import Header from "./Header";
import "./Home.css";
import prideimg from "./../../assets/img/1.png";
import ingredients from "./../../assets/img/2.png";
import Data from '../../../src/Data';
const Home = () => {
  const blogitem = Data.map((item)=>{
         return (
            <div className="col-md-4">
              <img src={item.img} />
              <h5>{item.title}</h5>
              <span> {item.time}</span>
              <h6> {item.price}</h6>
             

            </div>
         )
  })
  return (
    <Fragment>
      <Header />
      <section className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>1234+</h2>
              <h6>SAVINGS</h6>
            </div>
            <div className="col-md-3">
              <h2>1234+</h2>
              <h6>SAVINGS</h6>
            </div>
            <div className="col-md-3">
              <h2>1234+</h2>
              <h6>SAVINGS</h6>
            </div>
            <div className="col-md-3">
              <h2>1234+</h2>
              <h6>SAVINGS</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="pride">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={prideimg} alt="pride img" />
            </div>
            <div className="col-md-6">
              <h2>
                We pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <button>
                <a href="#">Learn more</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="ingredients">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>
                We make everything by hand with the best possible ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts.
              </p>
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  Etiam sed dolor ac diam volutpat.
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  Etiam sed dolor ac diam volutpat.
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  Etiam sed dolor ac diam volutpat.
                </li>
              </ul>
              <button>
                <a href="#">Learn more</a>
              </button>
            </div>

            <div className="col-md-6">
              <img src={ingredients} alt="ingredients"></img>
            </div>
          </div>
        </div>
      </section>
      <section className="paralex">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 ">
              <h2>
                When a man's stomach is full it makes no
                <br/>
                 difference whether he
                is rich or poor.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio <br/>finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <a href="#"> watch Our Story</a>
            </div>
          </div>
        </div>
      </section>
     <section className="blogs">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 ">
              <h2>Explore Our Foods</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
          </div>
        </div>
        <div className="row">
           {blogitem}
        </div>
      </div>
     </section>
    </Fragment>
  );
};
export default Home;
