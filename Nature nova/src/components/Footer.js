import React from "react";
import { LiaStarSolid } from "react-icons/lia";
export default function Footer() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row mt-5 text-center text-success">
            <h3>Our Happy Customer</h3>
            <div className="col-lg-12 mt-3">
              <div className="row">
                <div className="col-sm-4 mb-2 mb-sm-0">
                  <div className="card rounded-5">
                    <div className="card-body">
                      <img
                        src="https://cdn.prod.website-files.com/6462847f605fb77f78b2ad84/65f218e2fbcb6f9631587511_Group%20239999.webp"
                        height={150}
                        width={150}
                        className="rounded-circle border border-success border-4"
                      ></img>
                      <p className="mt-2 text-success "> Gotham Ravikumar</p>
                      <p className="card-text mt-4 mb-5">
                        Absolutely gorgeous! Wow, what a transformation!
                        Couldn't be happier with this purchase! In love with my
                        new plant! Amazing quality, and so well-cared for!
                      </p>
                      <span style={{ color: "yellow" }} className="fs-5">
                        <LiaStarSolid />
                        <LiaStarSolid />
                        <LiaStarSolid />
                        <LiaStarSolid />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 mb-2 mb-sm-0">
                  <div class="card rounded-5">
                    <div class="card-body ">
                      <img
                        src="https://lucid.content-delivery-one.com/cdn-cgi/image/w=600,format=auto,metadata=none/675703157f0da.png"
                        height={150}
                        width={150}
                        className="rounded-circle border border-success border-4"
                      ></img>
                      <p className="text-success mt-2">Jothi Rajkumar</p>
                      <p class="card-text mt-4 mb-5">
                        Absolutely gorgeous! Wow, what a transformation!
                        Couldn't be happier with this purchase! In love with my
                        new plant! Amazing quality, and so well-cared for!
                      </p>
                      <span style={{ color: "yellow" }} className="fs-5">
                        <LiaStarSolid />
                        <LiaStarSolid />
                        <LiaStarSolid />
                        <LiaStarSolid />
                      </span>
                    </div>
                  </div>
                </div>{" "}
                <div class="col-sm-4 mb-3 mb-sm-0  ">
                  <div class="card rounded-5">
                    <div class="card-body">
                      <img
                        src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/655c6883100932e9fcc96f7a_11.jpeg"
                        height={150}
                        width={150}
                        className="rounded-circle border border-success border-4"
                      ></img>
                      <p class="text-success mt-2">Kamalakannan Rajendran</p>
                      <p className="card-text mt-4 mb-5">
                        Absolutely gorgeous! Wow, what a transformation!
                        Couldn't be happier with this purchase! In love with my
                        new plant! Amazing quality, and so well-cared for!
                      </p>
                      <span style={{ color: "yellow" }} className="fs-5">
                        <LiaStarSolid />
                        <LiaStarSolid />
                        <LiaStarSolid />
                        <LiaStarSolid />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
        <div className="container">
          <div className="row mt-5  text-center">
            <h3 className="text-success mt-3">About Online Plants</h3>
            <p className="mt-3">
              Step into Tamil Nadu’s largest and most trusted online nursery,
              where we turn your gardening dreams into reality! At Santhi Online
              Plants, we offer a stunning range of plants, from lush indoor
              beauties that add tranquility to your home, to colorful flowering
              plants and trendy succulents that make your garden pop with life.
            </p>
            <p className="mt-3">
              But that’s not all! We also provide top-quality seeds, organic
              fertilizers, stylish pots, and high-end gardening tools that make
              caring for your plants both easy and fun. Whether you're an
              experienced gardener or just starting out, we're here to help you
              nurture a greener, more vibrant world.
            </p>
            <p className="mt-4">
              Your dream garden is just a click away—let’s grow together and
              make every space bloom with life!
            </p>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-light"
        style={{ backgroundColor: "#00341C" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-5">
              <div>
                <h5>About us</h5>
                <p>Our Story</p>
                <p>Contact us</p>
                <p>All products</p>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <h5>Customer Care</h5>
              <p>Shipping Policy </p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>FAQs</p>
              <p>Refund Policy</p>
            </div>
            <div className="col-lg-4 mt-5">
              <h5>GET IN TOUCH </h5>
              <p>Call: +91 638 4422 333</p> <p>WhatsApp: +91 638 44 11 222</p>
              <p> For Bulk Orders (WhatsApp): +91 638 440 1919 </p>
              <p>Email: santhionlineplants@gmail.com </p>
              <p>
                Address: 365/12, Kullanchavadi Main Road, Vegakkollai, Panruti,
                Cuddalore, Tamilnadu, India-607302
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
