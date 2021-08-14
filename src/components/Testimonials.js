import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const Testimonials = ({ testimonials }) => (
  <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <svg
        className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
        width={404}
        height={404}
        fill="none"
        viewBox="0 0 404 404"
        role="img"
        aria-labelledby="svg-workcation"
      >
        <title id="svg-workcation">Workcation</title>
        <defs>
          <pattern
            id="ad119f34-7694-4c31-947f-5c9d249b21f3"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width={404}
          height={404}
          fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
        />
      </svg>

      <div className="relative">
        <div>
          <img
            className="mx-auto h-16 p-2 rounded bg-offBlack"
            src="https://timeandtonic.com/assets/img/LogoTimeandtonicblanco.png"
            alt="Workcation"
          />
        </div>
        <blockquote className="mt-10">
          <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
            <p>
              Find The Right Agency has completely transformed how we think
              about our product and interact with developers. We couldn't be
              happier with the marketplace that was built because of them.
            </p>
          </div>
          <footer className="mt-8">
            <div className="md:flex md:items-center md:justify-center">
              <div className="md:flex-shrink-0">
                {/* <img
                  className="mx-auto h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                /> */}
              </div>
              <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                <div className="text-base font-medium text-gray-900">Jesus Londoño</div>

                <svg
                  className="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 0h3L9 20H6l5-20z" />
                </svg>

                <div className="text-base font-medium text-gray-500">
                  CEO, Time and Tonic
                </div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>

  // <div className="bg-white py-16 lg:py-24">
  //   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //     <div className="relative py-24 px-8 bg-indigo-500 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
  //       <div className="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
  //         <img
  //           src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
  //           alt=""
  //           className="w-full h-full object-cover"
  //         />
  //       </div>
  //       <div className="relative lg:col-span-1">
  //         <img
  //           className="h-12 w-auto"
  //           src="https://timeandtonic.com/assets/img/LogoTimeandtonicblanco.png"
  //           alt=""
  //         />
  //         <blockquote className="mt-6 text-white">
  //           <p className="text-xl font-medium sm:text-2xl">
  //             Find The Right Agency has completely transformed how we think about
  //             our product and interact with developers. We couldn't be happier
  //             with the marketplace that was built because of them.
  //           </p>
  //           <footer className="mt-6">
  //             <p className="flex flex-col font-medium">
  //               <span>Jesus</span>
  //               <span>CEO, Time and Tonic</span>
  //             </p>
  //           </footer>
  //         </blockquote>
  //       </div>
  //     </div>
  //   </div>
  // </div>
);

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
};

export default Testimonials;
